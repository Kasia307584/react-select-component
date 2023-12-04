// import React from "react";
// import MySelect from "./bundle.js";
// import renderer from "react-test-renderer";

const React = require("react");
const MySelect = require("./bundle.js");
const renderer = require("react-test-renderer");

const options = [
  {
    label: "Sales",
    value: "Sales",
  },
  {
    label: "Marketing",
    value: "Marketing",
  },
  {
    label: "Engineering",
    value: "Engineering",
  },
  {
    label: "Human Resources",
    value: "Human Resources",
  },
  {
    label: "Legal",
    value: "Legal",
  },
];

const handleChange = (e) => {
  console.log(e);
};

test("First snapshot test", () => {
  const component = renderer.create(
    <MySelect options={options} onChange={handleChange} label="department" />
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Second snapshot test", () => {
  const component = renderer.create(
    <MySelect options={options} onChange={handleChange} />
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
