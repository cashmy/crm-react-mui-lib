// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import ActionButton from "./ActionButton";
import SearchIcon from "@mui/icons-material/Search";

const meta: Meta<typeof ActionButton> = {
  title: "Custom Components/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `ActionButton` component is an** *icon only* **based button that can be used to perform various actions. Which means you can use it in table rows for minimum allotment of space. It is built using the MUI library and supports accessibility features. It has the standard MUI button props, as well as allowing for your custom ones. The component is designed to be flexible and can be easily integrated into various applications. It is particularly useful for forms or **tables** where users need to perform actions such as adding, editing, deleting, archiving, or unarchiving items.",
      },
    },
  },
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
