/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PageDialog from "./PageDialog";
import { Button as MuiButton, Typography } from "@mui/material";
import ColorPicker from "../ColorPicker";
import DatePicker from "../DatePicker";
import TextField from "../TextField";

const meta: Meta<typeof PageDialog> = {
  title: "Custom Components/PageDialog",
  component: PageDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `PageDialog` component is a customizable modal dialog box built using the MUI library. It supports accessibility features and is designed to be flexible for various use cases. The component allows you to display a title, content, and actions, and it can be easily integrated into forms or other workflows.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the dialog.",
      defaultValue: "Page Dialog Title",
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
    fullWidth: {
      control: "boolean",
      description:
        "Whether the dialog should take up the full width of the screen.",
      defaultValue: true,
    },
    titleColor: {
      control: "color",
      description: "Custom background color for the dialog title.",
      defaultValue: "#f5f5f5",
    },
    displayWidth: {
      control: "boolean",
      description: "Whether to display the maxWidth selector.",
      defaultValue: true,
    },
    maxWidthSet: {
      control: "select",
      options: [false, "xs", "sm", "md", "lg", "xl"],
      description: "Sets the maximum width of the dialog.",
      defaultValue: "md",
    },
    children: {
      control: false,
      description: "Content to display inside the dialog.",
    },
  },
  args: {
    title: "Page Dialog Title",
    openPopup: true,
    setOpenPopup: () => {},
    fullWidth: true,
    displayWidth: true,
    maxWidthSet: "md",
  },
};

export default meta;
type Story = StoryObj<typeof PageDialog>;

export const Default: Story = {
  render: (args) => {
    const [openPopup, setOpenPopup] = useState(false);

    return (
      <>
        <MuiButton variant="contained" onClick={() => setOpenPopup(true)}>
          Open Page Dialog
        </MuiButton>
        <PageDialog {...args} openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <div>This is the default PageDialog content.</div>
        </PageDialog>
      </>
    );
  },
};

export const WithCustomContent: Story = {
  render: (args) => {
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>("#000000");
    const [textValue, setTextValue] = useState<string>("");

    return (
      <>
        <MuiButton variant="contained" onClick={() => setOpenPopup(true)}>
          Open Page Dialog
        </MuiButton>
        <PageDialog {...args} openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <div>
            <p>This PageDialog contains custom content.</p>

            {/* DatePicker */}
            <div style={{ marginBottom: "16px" }}>
              <Typography variant="subtitle1">Select a Date:</Typography>
              <DatePicker
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                label="Select Date"
              />
            </div>

            {/* ColorPicker */}
            <div style={{ marginBottom: "16px" }}>
              <Typography variant="subtitle1">Pick a Color:</Typography>
              <ColorPicker
                value={selectedColor}
                onChange={(event) => setSelectedColor(event.target.value)}
                label="Pick a Color"
              />
            </div>

            {/* TextField */}
            <div style={{ marginBottom: "16px" }}>
              <Typography variant="subtitle1">Enter Text:</Typography>
              <TextField
                name="textField"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                label="Enter Text"
                placeholder="Type something..."
                fullWidth
              />
            </div>
            <MuiButton variant="contained" color="primary">
              Action Button
            </MuiButton>
          </div>
        </PageDialog>
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
          Open Page Dialog
        </MuiButton>
        <PageDialog
          {...args}
          title=""
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <div>
            <p>This PageDialog contains custom content without a title.</p>
            <MuiButton variant="contained" color="primary">
              Action Button
            </MuiButton>
          </div>
        </PageDialog>
      </>
    );
  },
};
