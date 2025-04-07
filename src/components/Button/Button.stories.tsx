// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "MUI-Base/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
  args: {
    onClick: undefined, // Let the component's default behavior handle this
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "contained",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "outlined",
    color: "secondary",
  },
};

export const CustomBackground: Story = {
  args: {
    label: "Custom BG Button",
    variant: "contained",
    style: { backgroundColor: "#ff5722", color: "#fff" },
  },
};
