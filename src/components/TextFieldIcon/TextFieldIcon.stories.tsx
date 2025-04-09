/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextFieldIcon from "./TextFieldIcon";
import { Stack } from "@mui/material";
import ShortTextIcon from "@mui/icons-material/ShortText";

export default {
  title: "Custom Components/TextFieldIcon",
  component: TextFieldIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A custom text field component built with Material-UI. It is setup to provide a controlled texfield that allows users to input text and supports error handling, customization of the label, and variant. It also has default tooltip functionality for better user experience.`,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label for the text field",
      defaultValue: "Text Field Label",
    },
    name: {
      control: "text",
      description: "Name (db) attribute for the text field",
      defaultValue: "text-field-name",
    },
    value: {
      control: "text",
      description: "Current (db) value of the text field",
      defaultValue: "",
    },

    iconPlacement: {
      control: "radio",
      options: ["start", "end"],
      description: "Placement of the icon inside the text field",
      defaultValue: "start",
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
    },
    variant: {
      control: "select",
      options: ["outlined", "filled", "standard"],
      description: "Variant of the text field",
      defaultValue: "outlined",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the text field should take up the full width",
      defaultValue: false,
    },
    errorMessage: {
      control: "text",
      description: "Error message to display",
    },
    onChange: { action: "changed" },
  },
  args: {
    name: "text-field-name",
    label: "Text Field Label",
    value: "",
    iconPlacement: "start",
    icon: <ShortTextIcon />,
    variant: "outlined",
    fullWidth: false,
    tooltip: "",
    tooltipPlacement: "top-start",
    errorMessage: null,
  },
} as Meta<typeof TextFieldIcon>;

const Template: StoryFn<typeof TextFieldIcon> = (args) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange(event); // Trigger the Storybook action
  };

  return <TextFieldIcon {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  name: "default-text-field",
  label: "Default Text Field",
  value: "",
  errorMessage: null,
};

export const WithError = Template.bind({});
WithError.args = {
  name: "error-text-field",
  label: "Text Field with Error",
  value: "",
  placeholder: "Enter text here...",
  errorMessage: "This is an error message",
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  name: "password-field",
  label: "Password Field",
  value: "",
  placeholder: "Enter your password",
  errorMessage: null,
  type: "password", // Example of passing a type prop for password fields
};

export const AllVariantsStart = (args: any) => (
  <Stack direction="row" spacing={2}>
    <TextFieldIcon {...args} label="Outlined Variant" variant="outlined" />
    <TextFieldIcon {...args} label="Filled Variant" variant="filled" />
    <TextFieldIcon {...args} label="Standard Variant" variant="standard" />
  </Stack>
);
AllVariantsStart.args = {
  name: "all-variants-text-field",
  label: "Text Field with All Variants",
  value: "",
  errorMessage: null,
};

export const AllVariantsEnd = (args: any) => (
  <Stack direction="row" spacing={2}>
    <TextFieldIcon {...args} label="Outlined Variant" variant="outlined" />
    <TextFieldIcon {...args} label="Filled Variant" variant="filled" />
    <TextFieldIcon {...args} label="Standard Variant" variant="standard" />
  </Stack>
);
AllVariantsEnd.args = {
  name: "all-variants-text-field",
  label: "Text Field with All Variants",
  value: "",
  iconPlacement: "end",
  errorMessage: null,
};
