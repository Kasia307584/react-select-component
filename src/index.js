import React, { useState, useEffect } from "react";

/**
 * MySelect component for creating a customizable dropdown select input.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.options - An array of objects representing the options available in the select dropdown.
 * @param {Function} props.onChange - A callback function called when the selected value changes.
 * @param {string} [props.label] - A label for the select input (optional).
 * @returns {JSX.Element} MySelect component.
 */
export default function MySelect({ options, onChange, label }) {
  // State to track the selected value
  const [selectedValue, setSelectValue] = useState("");

  /**
   * Effect hook to notify the parent component when the selected value changes.
   */
  useEffect(() => {
    // Find the selected option based on the value
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );

    // Call the onChange callback with the selected option
    onChange(selectedOption);
  }, [selectedValue]);

  /**
   * Capitalize the first letter of a word.
   *
   * @param {string} word - The word to capitalize.
   * @returns {string} Capitalized word.
   */
  function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }

  return (
    <>
      {/* Display the label if provided */}
      {label && <label htmlFor={label}>{capitalize(label)}</label>}
      {/* Select input for choosing options */}
      <select
        {...(label && { id: label })}
        aria-label={`Select option`}
        className="form-select"
        value={selectedValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        {/* Generate options based on the provided array */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
