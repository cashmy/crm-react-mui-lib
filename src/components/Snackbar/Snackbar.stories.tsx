import { Meta, StoryObj } from "@storybook/react";
import Notification from "./Snackbar";

const meta: Meta<typeof Notification> = {
  title: "ReactMUIComponents/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    notify: {
      control: false, // Disable control for complex objects
    },
    setNotify: {
      control: false, // Disable control for functions
    },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Success: Story = {
  args: {
    notify: {
      isOpen: true,
      message: "This is a success notification!",
      type: "success",
    },
  },
};

export const Error: Story = {
  args: {
    notify: {
      isOpen: true,
      message: "This is an error notification!",
      type: "error",
    },
  },
};
export const Warning: Story = {
  args: {
    notify: {
      isOpen: true,
      message: "This is a warning notification!",
      type: "warning",
    },
  },
};

export const Info: Story = {
  args: {
    notify: {
      isOpen: true,
      message: "This is an info notification!",
      type: "info",
    },
  },
};
