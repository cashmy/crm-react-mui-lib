import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Custom Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A custom checkbox component built with Material-UI. It allows users to select or deselect an option. The component supports error handling and customization of the label, fullwidth, color, tooltip and tooltip placement.`,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label for the checkbox field",
      defaultValue: "Label",
    },
    labelPlacement: {
      control: "select",
      options: ["top", "end", "start", "bottom"],
      description: "Placement of the label",
      defaultValue: "end",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the checkbox should take up the full width",
      defaultValue: false,
    },
    name: {
      control: "text",
      description: "Name (db) attribute for the checkbox",
      defaultValue: "checkbox-name",
    },
    value: {
      control: "boolean",
      description: "Current (db) value of the checkbox",
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
    color: {
      control: { type: "select" }, // Dropdown for predefined colors
      options: [
        "primary",
        "secondary",
        "default",
        "error",
        "info",
        "success",
        "warning",
        "#1976d2", // Example custom color
      ],
      description: "Color variant or custom color for the checkbox",
      defaultValue: "primary",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display",
    },
    onChange: { action: "changed" },
  },
  args: {
    name: "checkbox-name",
    label: "Checkbox Label",
    labelPlacement: "end",
    fullWidth: false,
    value: false,
    color: "primary",
    tooltip: "",
    tooltipPlacement: "top-start",
    errorMessage: null,
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(args.value || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    args.onChange(event); // Call the onChange action from Storybook
  };

  return <Checkbox {...args} value={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  name: "checkbox-name",
  label: "Checkbox Label",
  value: true,
  tooltip: "This is a tooltip",
  tooltipPlacement: "top-start",
  color: "primary",
  errorMessage: null,
};

export const Error = Template.bind({});
Error.args = {
  name: "checkbox-name",
  label: "Checkbox Label",
  color: "error",
  value: false,
  tooltip: "This is a tooltip",
  tooltipPlacement: "top-start",
  errorMessage: "This is an error message",
};
