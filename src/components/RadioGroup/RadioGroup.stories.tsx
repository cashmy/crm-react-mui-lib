import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import RadioGroup from "./RadioGroup";

export default {
  title: "Custom Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A custom radio group component built with Material-UI. It allows users to select one option from a list of radio buttons. The component supports error handling and customization of the label and options.`,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label for the radio group",
      defaultValue: "Radio Group Label",
    },
    name: {
      control: "text",
      description: "Name (db) attribute for the radio group",
      defaultValue: "radio-group-name",
    },
    value: {
      control: "text",
      description: "Current (db) value of the selected radio button",
      defaultValue: "",
    },
    items: {
      control: "object",
      description: "Array of options for the radio group",
      defaultValue: [
        { id: "option1", title: "Option 1" },
        { id: "option2", title: "Option 2" },
        { id: "option3", title: "Option 3" },
      ],
    },
    errorMessage: {
      control: "text",
      description: "Error message to display",
    },
    onChange: { action: "changed" },
  },
  args: {
    name: "radio-group-name",
    label: "Radio Group Label",
    value: "",
    items: [
      { id: "option1", title: "Option 1" },
      { id: "option2", title: "Option 2" },
      { id: "option3", title: "Option 3" },
    ],
    errorMessage: null,
  },
} as Meta<typeof RadioGroup>;

const Template: StoryFn<typeof RadioGroup> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    args.onChange(event); // Call the onChange action in Storybook
  };

  return <RadioGroup {...args} value={selectedValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Choose an Option",
  errorMessage: null,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Choose an Option",
  errorMessage: "This is an error message",
};
