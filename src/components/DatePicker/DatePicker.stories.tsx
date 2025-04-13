/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import dayjs, { Dayjs } from "dayjs";
import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Custom Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`DatePicker\` component is a wrapper around the MUI \`DatePicker\` component. It provides auto-inclusion of localization and allows for easy integration into forms. The component supports validation, error handling, and customization of labels and formats. \n\n*Technical Note*: The component uses the \`AdapterDateFns\` from MUI's date library for date handling. It is important to ensure that the \`date-fns\` library is installed in your project to avoid any runtime errors. Also the format is limited to local date-fns format options.`,
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
      description: "The name of the field.",
      defaultValue: "sampleDate",
    },
    label: {
      control: "text",
      description: "The label for the date picker.",
      defaultValue: "Date",
    },
    value: {
      control: false,
      description: "The selected date value.",
    },
    error: {
      control: "text",
      description: "Error message to display if validation fails.",
      defaultValue: null,
    },
    onChange: {
      action: "onChange",
      description: "Callback function triggered when the date changes.",
    },
    minDate: {
      control: "date",
      description: "The minimum selectable date.",
    },
    maxDate: {
      control: "date",
      description: "The maximum selectable date.",
    },
    disableFuture: {
      control: "boolean",
      description: "If `true`, disables selecting future dates.",
      defaultValue: false,
    },
    disablePast: {
      control: "boolean",
      description: "If `true`, disables selecting past dates.",
      defaultValue: false,
    },
  },
  args: {
    name: "sampleDate",
    label: "Date",
    value: null,
    error: null,
    disableFuture: false,
    disablePast: false,
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
      <DatePicker
        {...args}
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
    );
  },
};

export const WithError: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      new Date("2025-02-28T00:00:00Z")
    );

    const [error, setError] = useState<string | null>(null);

    const minDate = new Date("2025-03-01T00:00:00Z");
    const maxDate = new Date("2025-03-30T00:00:00Z");

    const handleDateChange = (newValue: Date | null) => {
      if (newValue && (newValue < minDate || newValue > maxDate)) {
        setError("Selected date is out of range.");
      } else {
        setError(null);
      }
      setSelectedDate(newValue);
    };

    return (
      <DatePicker
        {...args}
        name="ErrorDate"
        minDate={minDate}
        maxDate={maxDate}
        label="Invalid Date"
        value={selectedDate}
        error={error}
        onChange={handleDateChange}
      />
    );
  },
};

export const PreselectedDate: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      new Date("2025-03-17T00:00:00Z")
    );

    return (
      <DatePicker
        {...args}
        label="Preselected Date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
    );
  },
};
