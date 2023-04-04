import "@ds.e/scss/lib/Select.css";
import React, { useLayoutEffect, useRef, useState } from "react";
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

const Select: React.FC<SelectProps> = ({
  label = "Please Select Item",
  options = [],
  onOptionSelected,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
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
  };

  useLayoutEffect(() => {
    setOverlayTop((labelRef?.current?.offsetHeight || 0) * 1);
  }, [labelRef?.current?.offsetHeight]);

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
        <ul style={{ top: overlayTop }} className="dse-select__overlay">
          {options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const renderOptionProps: RenderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => ({
                // here we will define default props
                className: `dse-select__option ${
                  isSelected ? "dse-select__option--selected" : ""
                }`,
                key: option.value,
                onClick: () => handleOptionClick(option, index),
                // here we will spread override props (user given props)
                ...overrideProps,
              }),
            };

            if (renderOption) {
              return renderOption(renderOptionProps);
            }
            return (
              <li
                className={`dse-select__option ${
                  isSelected ? "dse-select__option--selected" : ""
                }`}
                key={option.value}
                onClick={() => handleOptionClick(option, index)}
              >
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
