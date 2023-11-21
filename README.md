# @kazu2233/react-select-component

## React Select Component

A customizable React select component with a list of options and values, event handler, and an optional label.

## Installation

```bash
npm install @kazu2233/react-select-component
```

## Usage

```jsx
import React from "react";
import MySelect from "@kazu2233/react-select-component";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  // ... add more options
];

const MyComponent = () => {
  const handleChange = (selectedOption) => {
    console.log(selectedOption);
    // Handle the selected option as needed
  };

  return (
    <MySelect
      options={options}
      onChange={handleChange}
      label="Select an option"
    />
  );
};

export default MyComponent;
```

## Props

- **options** (array, required): An array of objects representing the options available in the select dropdown. Each object should have a value and a label.
- **onChange** (function, required): A callback function that is called whenever the selected value changes. It receives the selected option as an argument.
- **label** (string, optional): A label for the select input. If provided, it will be displayed above the select input.

## Development

```bash
npm run build
```

## Node.js Version

This project requires Node.js version 12 or later.

## Author

@kazu2233

## Repository

https://github.com/Kasia307584/react-select-component
