'use strict';

var React = require('react');

function MySelect(_ref) {
  let {
    options,
    onChange,
    label
  } = _ref;
  const [selectedValue, setSelectValue] = React.useState("");
  React.useEffect(() => {
    const selectedOption = options.filter(option => option.value === selectedValue);
    onChange(selectedOption[0]);
  }, [selectedValue]);
  function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: label
  }, capitalize(label)), /*#__PURE__*/React.createElement("select", {
    "aria-label": `select option`,
    className: "form-select",
    value: selectedValue,
    onChange: e => setSelectValue(e.target.value)
  }, options.map((option, index) => /*#__PURE__*/React.createElement("option", {
    key: index,
    value: option.value
  }, option.label))));
}

module.exports = MySelect;
