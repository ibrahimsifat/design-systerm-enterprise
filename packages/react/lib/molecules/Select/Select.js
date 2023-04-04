import '@ds.e/scss/lib/Select.css';
import React__default, { useState, useRef, useLayoutEffect } from 'react';

const Select = ({ label = "Please Select Item", options = [], onOptionSelected, renderOption, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const labelRef = useRef(null);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option, optionIndex) => {
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
    return (React__default.createElement("div", { className: "dse-select" },
        React__default.createElement("button", { className: "dse-select__label", onClick: handleIsOpen, ref: labelRef },
            selectedOption === null ? label : selectedOption.label,
            React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: `dse-select__caret ${isOpen ? "dse-select__caret--open" : "dse-select__caret--close"}`, width: "1rem", height: "1rem" },
                React__default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen && (React__default.createElement("ul", { style: { top: overlayTop }, className: "dse-select__overlay" }, options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => ({
                    // here we will define default props
                    className: `dse-select__option ${isSelected ? "dse-select__option--selected" : ""}`,
                    key: option.value,
                    onClick: () => handleOptionClick(option, index),
                    // here we will spread override props (user given props)
                    ...overrideProps,
                }),
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React__default.createElement("li", { className: `dse-select__option ${isSelected ? "dse-select__option--selected" : ""}`, key: option.value, onClick: () => handleOptionClick(option, index) },
                option.label,
                isSelected && (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", width: "1rem", height: "1rem" },
                    React__default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" })))));
        })))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
