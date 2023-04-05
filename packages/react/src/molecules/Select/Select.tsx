import "@ds.e/scss/lib/Select.css";
import React, {
  KeyboardEventHandler,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const KEY_CODE = {
  ENTER: 13,
  SPACE: 32,
  DOWN_ARROW: 40,
  UP_ARROW: 38,
  ESC: 27,
};
interface SelectOptions {
  label: string;
  value: string;
}
interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOptions;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}
interface SelectProps {
  label?: string;
  options?: Array<SelectOptions>;
  onOptionSelected?: (option: SelectOptions, optionIndex: number) => void;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}
const getNextOptionIndex = (
  currentIndex: number | null,
  options: Array<SelectOptions>
) => {
  if (currentIndex === null) {
    return 0;
  }
  if (currentIndex === options.length - 1) {
    return 0;
  }
  return currentIndex + 1;
};
const getPreviousOptionIndex = (
  currentIndex: number | null,
  options: Array<SelectOptions>
) => {
  if (currentIndex === null) {
    return 0;
  }
  if (currentIndex === 0) {
    return options.length - 1;
  }
  return currentIndex - 1;
};
const Select: React.FC<SelectProps> = ({
  label = "Please Select Item",
  options = [],
  onOptionSelected,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(0);
  const [optionsRef, setOptionsRef] = useState<
    React.RefObject<HTMLLIElement>[]
  >([]);
  const labelRef = useRef<HTMLButtonElement>(null);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option: SelectOptions, optionIndex: number) => {
    if (onOptionSelected) {
      onOptionSelected(option, optionIndex);
    }
    setSelectedIndex(optionIndex);
    setIsOpen(!isOpen);

    // set focus to first option
    highlightItem(0);
  };
  const onOptionKeyDown: KeyboardEventHandler = (event) => {
    // handle escape key press
    if (event.keyCode === KEY_CODE.ESC) {
      setIsOpen(false);
      return;
    }

    // handle key down arrow press
    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      highlightItem(getNextOptionIndex(highlightedIndex, options));
    }
    // handle key up arrow press
    if (event.keyCode === KEY_CODE.UP_ARROW) {
      highlightItem(getPreviousOptionIndex(highlightedIndex, options));
    }

    // handle enter key press
    if (event.keyCode === KEY_CODE.ENTER) {
      handleOptionClick(options[highlightedIndex!], highlightedIndex!);
    }
  };

  useLayoutEffect(() => {
    setOverlayTop((labelRef?.current?.offsetHeight || 0) * 1);
  }, [labelRef?.current?.offsetHeight]);

  useLayoutEffect(() => {
    if (highlightedIndex !== null && isOpen) {
      const ref = optionsRef[highlightedIndex];
      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }, [isOpen, highlightedIndex]);
  useEffect(() => {
    setOptionsRef(options.map((_) => React.createRef<HTMLLIElement>()));
  }, [options.length]);

  const onButtonKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault();
    if ((KEY_CODE.ENTER, KEY_CODE.DOWN_ARROW, KEY_CODE.SPACE)) {
      setIsOpen(!isOpen);
    }
  };

  const highlightItem = (optionIndex: number | null) => {
    setHighlightedIndex(optionIndex);
  };
  let selectedOption = null;
  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex];
  }

  return (
    <div className="dse-select">
      <button
        className="dse-select__label"
        onClick={handleIsOpen}
        ref={labelRef}
        aria-haspopup={true}
        aria-expanded={isOpen ? true : undefined}
        aria-controls="dse-select-list"
        onKeyDown={onButtonKeyDown}
      >
        {/* <span>{label}</span> */}
        {/* <Text></Text> */}
        {selectedOption === null ? label : selectedOption.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`dse-select__caret ${
            isOpen ? "dse-select__caret--open" : "dse-select__caret--close"
          }`}
          width={"1rem"}
          height={"1rem"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isOpen && (
        <ul
          role="menu"
          id="dse-select-list"
          style={{ top: overlayTop }}
          className="dse-select__overlay"
        >
          {options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isHighlighted = highlightedIndex === index;
            const ref = optionsRef[index];

            const renderOptionProps: RenderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => ({
                // here we will define default props
                className: `dse-select__option ${
                  isSelected ? "dse-select__option--selected" : ""
                } ${isHighlighted ? "dse-select__option--highlighted" : ""}`,

                key: option.value,
                ref,
                role: "menuItemradio",
                "aria-checked": isSelected ? true : undefined,
                "aria-label": option.label,
                tabIndex: isHighlighted ? -1 : 0,
                onClick: () => handleOptionClick(option, index),
                onMouseEnter: () => highlightItem(index),
                onMouseLeave: () => highlightItem(null),
                onKeyDown: onOptionKeyDown,

                // here we will spread override props (user given props)
                ...overrideProps,
              }),
            };

            if (renderOption) {
              return renderOption(renderOptionProps);
            }
            return (
              <li {...renderOptionProps.getOptionRecommendedProps()}>
                {/* <Text>{option.label}</Text> */}
                {option.label}
                {isSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    width="1rem"
                    height="1rem"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Select;
