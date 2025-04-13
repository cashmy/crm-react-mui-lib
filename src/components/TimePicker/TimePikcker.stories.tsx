/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TimePicker from "./TimePicker";

const meta: Meta<typeof TimePicker> = {
  title: "Custom Components/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`TimePicker\` component is a wrapper around the MUI \`TimePicker\` component. It provides auto-inclusion of localization and allows for easy integration into forms. The component supports validation, error handling, and customization of labels and formats.\n\n Technical Note: The component uses the \`AdapterDateFns\` from MUI's date library for date handling. It is important to ensure that the \`date-fns\` library is installed in your project to avoid any runtime errors. Also the format is limited to local date-fns format options.`,
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
      description: "The name of the field.",
      defaultValue: "sampleTime",
    },
    label: {
      control: "text",
      description: "The label for the time picker.",
      defaultValue: "Time",
    },
    value: {
      control: false,
      description: "The selected time value.",
    },
    ampm: {
      control: "boolean",
      description: "If `true`, uses 12-hour format.",
      defaultValue: true,
    },
    format: {
      control: "text",
      description:
        "The format of the time displayed. Refer to date-fns for format options.",
      defaultValue: "hh:mm a",
    },
    error: {
      control: "text",
      description: "Error message to display if validation fails.",
      defaultValue: null,
    },
    onChange: {
      action: "onChange",
      description: "Callback function triggered when the time changes.",
    },
  },
  args: {
    name: "sampleTime",
    label: "Time",
    value: null,
    ampm: true,
    error: null,
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null);

    return (
      <TimePicker
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          args.onChange(newValue);
        }}
      />
    );
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(null);

    return (
      <TimePicker
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          args.onChange(newValue);
        }}
        error="This is an error message."
      />
    );
  },
};

export const PreselectedTime: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | null>(
      new Date("2025-03-17T14:30:00Z")
    );

    return (
      <TimePicker
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          args.onChange(newValue);
        }}
        label="Preselected Time"
      />
    );
  },
};
