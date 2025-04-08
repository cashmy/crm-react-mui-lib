/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";
import { Button as MuiButton } from "@mui/material";

const meta: Meta<typeof Dialog> = {
  title: "Custom Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Dialog` component is a customizable modal dialog box built using the MUI library. It supports accessibility features and is designed to be flexible for various use cases. The component allows you to display a title, content, and actions, and it can be easily integrated into forms or other workflows.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the dialog.",
      defaultValue: "Dialog Title",
    },
    openPopup: {
      control: "boolean",
      description: "Controls whether the dialog is open or closed.",
      defaultValue: true,
    },
    setOpenPopup: {
      action: "setOpenPopup",
      description: "Function to control the open state of the dialog.",
    },
    children: {
      control: false,
      description: "Content to display inside the dialog.",
    },
  },
  args: {
    title: "Dialog Title",
    openPopup: true,
    setOpenPopup: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => {
    const [openPopup, setOpenPopup] = useState(false);

    return (
      <>
        <MuiButton variant="contained" onClick={() => setOpenPopup(true)}>
          Open Dialog
        </MuiButton>
        <Dialog {...args} openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <div>This is the default dialog content.</div>
        </Dialog>
      </>
    );
  },
};

export const WithCustomContent: Story = {
  render: (args) => {
    const [openPopup, setOpenPopup] = useState(false);

    return (
      <>
        <MuiButton variant="contained" onClick={() => setOpenPopup(true)}>
          Open Dialog
        </MuiButton>
        <Dialog {...args} openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <div>
            <p>This dialog contains custom content.</p>
            <MuiButton variant="contained" color="primary">
              Action Button
            </MuiButton>
          </div>
        </Dialog>
      </>
    );
  },
};

export const NoTitle: Story = {
  render: (args) => {
    const [openPopup, setOpenPopup] = useState(false);

    return (
      <>
        <MuiButton variant="contained" onClick={() => setOpenPopup(true)}>
          Open Dialog
        </MuiButton>
        <Dialog
          {...args}
          title=""
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <div>
            <p>This dialog contains custom content.</p>
            <MuiButton variant="contained" color="primary">
              Action Button
            </MuiButton>
          </div>
        </Dialog>
      </>
    );
  },
};
