import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import ColorPicker, { ColorPickerProps } from "./ColorPicker";
import Button from "../Button/Button"; // Assuming Button is a custom component in your project
import Dialog from "../Dialog/Dialog"; // Assuming Dialog is a custom component in your project

export default {
  title: "Custom Components/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A custom color picker component with a text field and popup color picker. \n\n This component uses the \` reaact-coloful \` library for the color picker functionality. It allows users to select a color from a color palette and displays the selected color in a text field. The component also supports error handling and customization of the label and variant. \n\n The component is designed to be used in scenarios where users need to select a color, such as in design applications or form inputs. The component uses the \` getContrastText \` helper function to determine the contrast color of the selected color for better visibility. It also uses the \` useClickOutside \` hook to handle clicks outside the modal/dialog, allowing users to close the color picker when they click outside of it. \n\n The component accepts props for the field name, label, value, error message, variant, and an onChange callback function to handle color changes.`,
      },
    },
  },
  argTypes: {
    value: { control: "color" },
    label: { control: "text" },
    error: { control: "text" },
    onChange: {
      action: "changed",
      description: "Callback when the color changes.",
    },
  },
} as Meta<typeof ColorPicker>;

const Template: StoryFn<ColorPickerProps> = (args) => {
  const [color, setColor] = useState(args.value || "#000000");

  const handleChange = (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setColor(event.target.value);
  };

  return <ColorPicker {...args} value={color} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Pick a Color",
  value: "#ff0000",
  error: null,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Pick a Color",
  value: "#00ff00",
  error: "Invalid color",
};

export const InDialog = () => {
  const [color, setColor] = useState("#000000");
  const [openPopup, setOpenPopup] = useState(false);

  const handleClose = () => setOpenPopup(false);

  const handleChange = (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setColor(event.target.value);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpenPopup(true)}>
        Open Color Picker Dialog
      </Button>
      <Dialog
        title="Select a Color"
        open
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <ColorPicker
          label="Pick a Color"
          value={color}
          onChange={handleChange}
        />
        <Button onClick={handleClose} color="primary" style={{ marginTop: 16 }}>
          Close
        </Button>
      </Dialog>
    </>
  );
};
