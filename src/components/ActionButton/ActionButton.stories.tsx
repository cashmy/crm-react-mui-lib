// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import ActionButton from "./ActionButton";
import SearchIcon from "@mui/icons-material/Search";

const meta: Meta<typeof ActionButton> = {
  title: "ReactMUIComponents/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked",
    },
    actionType: {
      control: { type: "select" }, // Use a dropdown in Storybook Controls
      description: "Type of action to perform",
      options: ["Add", "Edit", "Delete", "Archive", "Unarchive", "Custom"], // List of available options
    },
    tooltipText: {
      control: "text",
      description: "Optional tooltip text for the button",
    },
    customIcon: {
      control: false, // Disable control for customIcon since it's a React node
      description:
        "Specific icon to display when actionType is 'Custom'. React node: Pass as a child component.",
    },
  },
  args: {
    actionType: "Edit",
    onClick: undefined, // Let the component's default behavior handle this
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: {
    actionType: "Edit",
    // children: <AddIcon />, // Pass the icon as a child
  },
};

export const AddContained: Story = {
  args: {
    variant: "contained",
    color: "primary",
    actionType: "Add",
  },
};

export const EditOutlined: Story = {
  args: {
    variant: "outlined",
    color: "secondary",
    actionType: "Edit",
  },
};

export const DeleteText: Story = {
  args: {
    variant: "text",
    style: { backgroundColor: "#ff5722", color: "#fff" },
    actionType: "Delete",
  },
};

export const Archive: Story = {
  args: {
    actionType: "Archive",
  },
};

export const Unarchive: Story = {
  args: {
    actionType: "Unarchive",
  },
};

export const CustomSearch: Story = {
  args: {
    actionType: "Custom",
    customIcon: <SearchIcon />, // Pass the icon as a child
  },
};

export const CustomUnspecified: Story = {
  args: {
    actionType: "Custom",
  },
};
