import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Switch from "./Switch";

export default {
  title: "Custom Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A custom switch component built with Material-UI. It allows users to toggle between two states. The component supports error handling and customization of the label and variant.`,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label for the switch field",
      defaultValue: "Label",
    },
    name: {
      control: "text",
      description: "Name (db) attribute for the switch",
      defaultValue: "switch-name",
    },
    value: {
      control: "boolean",
      description: "Current (db) value of the switch",
      defaultValue: false,
    },
    tooltip: {
      control: "text",
      description: "Tooltip text to display on hover",
    },
    tooltipPlacement: {
      control: "select",
      options: [
        "top-start",
        "top",
        "top-end",
        "left-start",
        "left",
        "left-end",
        "bottom-start",
        "bottom",
        "bottom-end",
        "right-start",
        "right",
        "right-end",
      ],
      description: "Placement of the tooltip",
      defaultValue: "top-start",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display",
    },
    onChange: { action: "changed" },
  },
  args: {
    name: "switch-name",
    label: "Switch Label",
    value: false,
    tooltip: "This is a tooltip",
    tooltipPlacement: "top-start",
    errorMessage: null,
  },
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => {
  const [switchValue, setSwitchValue] = useState(args.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchValue(event.target.checked);
    args.onChange(event); // Call the onChange action in Storybook
  };

  return <Switch {...args} value={switchValue} onChange={handleChange} />;
};
export const Default = Template.bind({});
Default.args = {
  label: "Off/On",
  tooltip: "This is a tooltip",
  errorMessage: null,
};

export const Error = Template.bind({});
Error.args = {
  label: "Switch Label",
  tooltip: "This is a tooltip with an error message",
  errorMessage: "This is an error message",
};
