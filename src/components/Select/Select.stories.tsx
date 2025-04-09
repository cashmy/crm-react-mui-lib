import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Select from "./Select";
import { SelectChangeEvent } from "@mui/material";

export default {
  title: "Custom Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A custom select component built with Material-UI. It allows users to select an option from a dropdown list. The component supports error handling and customization of the label and variant. \n\n The values are passed in as a key-value pair, where the key is the id of the option and the value is the title. The component also supports a default "None" option.
        From a database or business logic perspective, the id is the primary key and the title is a human-readable string and the data would be prepopulated into the object prior to initialization of the component. \n\n
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label for the select field",
      defaultValue: "Label",
    },
    name: {
      control: "text",
      description: "Name (db) attribute for the textarea",
      defaultValue: "select-name",
    },
    value: {
      control: "text",
      description:
        "Current (db) value of the field taken from the select list ",
      defaultValue: "",
    },
    allowNone: {
      control: "boolean",
      description: "Whether to allow a 'None' option",
      defaultValue: true, // Explicitly set the default value here
    },
    errorMessage: {
      control: "text",
      description: "Error message to display",
    },
    onChange: { action: "changed" },
  },
  args: {
    name: "select-name",
    label: "Select Label",
    value: "",
    allowNone: true,
    errorMessage: null,
    options: [
      { id: "option1", title: "Option 1" },
      { id: "option2", title: "Option 2" },
      { id: "option3", title: "Option 3" },
    ],
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = (
    event:
      | React.ChangeEvent<{ name?: string; value: unknown }>
      | SelectChangeEvent<unknown>
  ) => {
    const targetValue = (event.target as { value: unknown }).value;
    setValue(targetValue as string | number);
    args.onChange(event); // Trigger the Storybook action
  };

  return <Select {...args} value={value} onChange={handleChange} />;
};

export const Colors = Template.bind({});
Colors.args = {
  name: "colors",
  label: "Choose a Color",
  value: "",
  options: [
    { id: "primary", title: "Primary" },
    { id: "secondary", title: "Secondary" },
    { id: "tertiary", title: "Tertiary" },
  ],
  errorMessage: null,
};

export const Rooms = Template.bind({});
Rooms.args = {
  name: "rooms",
  label: "Choose a Room",
  value: "",
  allowNone: false,
  options: [
    { id: "living_room", title: "Living Room" },
    { id: "kitchen", title: "Kitchen" },
    { id: "bedroom", title: "Bedroom" },
    { id: "bathroom", title: "Bathroom" },
  ],
  errorMessage: null,
};

export const NumberOfEggs = Template.bind({});
NumberOfEggs.args = {
  name: "eggs",
  label: "Select Number of Eggs",
  value: "",
  allowNone: true,
  options: [
    { id: "1", title: "1 Egg" },
    { id: "2", title: "2 Eggs" },
    { id: "3", title: "3 Eggs" },
    { id: "4", title: "4 Eggs" },
    { id: "5", title: "5 Eggs" },
  ],
  errorMessage: null,
};
