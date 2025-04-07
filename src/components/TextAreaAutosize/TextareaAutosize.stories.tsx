import type { Meta, StoryObj } from "@storybook/react";
import TextareaAutosize from "./TextareaAutosize";

const meta: Meta<typeof TextareaAutosize> = {
  title: "Mui-Base/TextareaAutosize",
  component: TextareaAutosize,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `TextareaAutosize` component is a lightweight, customizable textarea that automatically adjusts its height based on the content. It is built using the MUI Base library and supports accessibility features.        This iteration adds **label**, **placeholder**, and **fullWidth** options to the textarea, making it more user-friendly. The component is designed to be flexible and can be easily integrated into various applications. It is particularly useful for forms where users need to input variable amounts of text, such as comments or descriptions.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label for the textarea - similar to a text field label",
      defaultValue: "Label",
    },
    placeholder: {
      control: "text",
      description: "Optional Placeholder text for the textarea",
      defaultValue: "add your text here",
    },
    name: {
      control: "text",
      description: "Name (db) attribute for the textarea",
      defaultValue: "textarea-name",
    },
    arealabel: {
      control: "text",
      description: "Aria label for accessibility",
      defaultValue: "Textarea label",
    },
    tooltip: {
      control: "text",
      description: "Tooltip text for the textarea",
      defaultValue: "Textarea tooltip",
    },
    value: {
      control: "text",
      description: "Current (db) value of the textarea",
      defaultValue: "",
    },
    onChange: {
      action: "changed",
      description: "Function to call when the value changes",
    },
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    name: "textarea-name",
    arialabel: "Aria accessibility label",
    value: "",
    fullWidth: false,
    minRows: 2,
    maxRows: 4,
    onChange: () => {},
  },
};
export default meta;
type Story = StoryObj<typeof TextareaAutosize>;

export const Default: Story = {
  args: {
    name: "textarea-name",
    value: "",
    onChange: () => {},
  },
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
    placeholder: "Placeholder",
    name: "textarea-name",
    arealabel: "Textarea label",
    value: "",
    onChange: () => {},
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width",
    placeholder: "Placeholder",
    name: "textarea-name",
    arealabel: "Textarea label",
    value: "",
    fullWidth: true,
    onChange: () => {},
  },
};

export const Error: Story = {
  args: {
    label: "Error message",
    placeholder: "Placeholder",
    name: "textarea-name",
    arealabel: "Textarea label",
    value: "",
    error: "Error message listed below",
    onChange: () => {},
  },
};

export const WithLongTooltip: Story = {
  args: {
    label: "Tooltip",
    placeholder: "Placeholder",
    name: "textarea-name",
    arealabel: "Textarea label",
    value: "",
    tooltip:
      "A very long type of Tooltip text. In case you need to add a long text, you can use the tooltip to show it. -- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    onChange: () => {},
  },
};

export const WithCustomStyles: Story = {
  args: {
    label: "Custom Styles",
    placeholder: "Placeholder",
    name: "textarea-name",
    arealabel: "Textarea label",
    value: "",
    style: { backgroundColor: "#f0f0f0", color: "#333" },
    onChange: () => {},
  },
};

export const WithMoreDataThanRows: Story = {
  args: {
    label: "More Data Than Rows",
    placeholder: "Placeholder",
    name: "textarea-name",
    arealabel: "Textarea label",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    onChange: () => {},
  },
};
