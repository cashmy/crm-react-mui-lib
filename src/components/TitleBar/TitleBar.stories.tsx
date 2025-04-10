import { Meta, StoryFn } from "@storybook/react";
import TitleBar from "./TitleBar";
import { ColorType } from "../../common/types";
import { ColorTypeEnum } from "../../common/enums";
import { BrowserRouter as Router } from "react-router-dom";
import TextOrSelectControl from "../../storybook/controls/TextOrSelectControl";

export default {
  title: "Custom Components/TitleBar",
  component: TitleBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `TitleBar` component provides a customizable header with optional action buttons (Add and Return). It is designed to be used in layouts where a title and quick actions are needed.",
      },
    },
  },
  argTypes: {
    componentTitle: {
      description: "The title text displayed in the TitleBar.",
      control: "text",
    },
    addFab: {
      description: "Whether to show the 'Add' floating action button.",
      control: "boolean",
    },
    addToolTipText: {
      description: "Tooltip Text for the 'Add' button.",
      control: "text",
    },
    returnFab: {
      description: "Whether to show the 'Return' floating action button.",
      control: "boolean",
    },
    primaryColor: {
      description:
        "Color of the 'Add' button. Can be a predefined color or a custom string.",
      control: {
        // type: "text-or-select",
        render: TextOrSelectControl,
        labels: [...Object.values(ColorTypeEnum), "string"],
      },
      options: [...Object.values(ColorTypeEnum), "string"],
      defaultValue: { custom: "", preset: "primary" },
    },
    secondaryColor: {
      description:
        "Color of the 'Return' button. Can be a predefined color or a custom string.",
      control: "select",
      options: [...Object.values(ColorTypeEnum), "custom-string"],
    },
    backgroundColor: {
      description: "Background color of the TitleBar.",
      control: "color",
    },
    handleAdd: {
      description:
        "Callback function triggered when the 'Add' button is clicked.",
      action: "handleAdd",
    },
  },
} as Meta<typeof TitleBar>;

const Template: StoryFn<typeof TitleBar> = (args) => (
  <Router>
    <TitleBar {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  componentTitle: "Default Title",
  addFab: true,
  returnFab: true,
  addToolTipText: "",
  primaryColor: "primary" as ColorType,
  secondaryColor: "secondary" as ColorType,
  backgroundColor: "#f5f5f5",
  handleAdd: () => alert("Add button clicked!"),
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  componentTitle: "Custom Colors Example",
  addFab: true,
  addToolTipText: "Custom tooltip for Add",
  returnFab: true,
  primaryColor: "#4caf50", // Custom green color
  secondaryColor: "#f44336", // Custom red color
  backgroundColor: "#e0f7fa",
  handleAdd: () => alert("Custom Add button clicked!"),
};
