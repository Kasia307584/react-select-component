import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * MySelect component for creating a customizable dropdown select input.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.options - An array of objects representing the options available in the select dropdown.
 * @param {Function} props.onChange - A callback function called when the selected value changes.
 * @param {string} [props.label] - A label for the select input (optional).
 * @returns {JSX.Element} MySelect component.
 */
function MySelect({ options, onChange, label }) {
  // State to track the selected value
  const [selectedValue, setSelectValue] = useState("");

  /**
   * Set the selected value and pass the selected option to the onChange prop.
   * @param {Object} e - Event recevied.
   */
  const handleChange = (e) => {
    // Set selected value to the value that was selected
    setSelectValue(e.target.value);

    // Find the selected option based on the value
    const selectedOption = options.find(
      (option) => option.value === e.target.value
    );

    // Call the onChange callback with the selected option
    onChange(selectedOption);
  };

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
        onChange={handleChange}
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

// Define props types so if a prop is of incorret type an error is thrown in development mode
MySelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

// Define the default prop value for the optionnal label
MySelect.defaultProps = {
  label: undefined,
};

// Export the component as default
export default MySelect;
