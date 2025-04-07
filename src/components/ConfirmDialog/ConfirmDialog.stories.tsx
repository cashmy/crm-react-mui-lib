/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ConfirmDialog from "./ConfirmDialog";
import ActionButton from "../ActionButton";
import Button from "../Button";
import DangerousIcon from "@mui/icons-material/Dangerous";

const meta: Meta<typeof ConfirmDialog> = {
  title: "Custom Components/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`ConfirmDialog\` component is a modal dialog box used to confirm user actions. It displays a title, subtitle, and action buttons for confirmation. Built using the MUI library, it is customizable and supports accessibility features. -- It is designed to be used in scenarios where user confirmation is required before proceeding with an action, such as deleting an item or submitting a form. The process allows for the passing of some type of identifier to the action function, which can be used to specify the record or item being acted upon. \n\n  Technical Details: The component does ** NOT ** auto import all of the dialog props from MUI's Dialog, DialogTitle, DialogContent, and DialogActions components to create this component. It does accepts props for the dialog's state(isOpen), title, subtitle, and a callback function(onConfirm) to be executed upon confirmation. This is handle within two objects (confirmDialog and setConfirmDialog). The component also includes buttons for user interaction, allowing them to either confirm or cancel the action.`,
      },
    },
  },
  argTypes: {
    confirmDialog: {
      description: "Object containing the dialog's state and content.",
      control: false,
    },
    setConfirmDialog: {
      action: "setConfirmDialog",
      description: "Function to update the dialog's state.",
    },
    customIcon: {
      description: "Optional custom icon to display in the dialog.",
      control: false,
    },
  },
  args: {
    confirmDialog: {
      isOpen: true,
      title: "Are you sure?",
      subTitle: "You can't undo this action.",
      onConfirm: () => alert("Confirmed!"),
    },
    setConfirmDialog: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

export const Default: Story = {
  render: (args) => {
    const [confirmDialog, setConfirmDialog] = useState({
      isOpen: false,
      title: "",
      subTitle: "",
      onConfirm: () => alert("Confirmed!"),
    });

    const handleDelete = (recordId: number) => {
      setConfirmDialog({
        isOpen: true,
        title:
          "Are you sure you want to delete this Curriculum Theme and all of its Detail?",
        subTitle: "You can't undo this action.",
        onConfirm: () => {
          onDelete(recordId);
        },
      });
    };

    const onDelete = (recordId: number) => {
      setConfirmDialog({
        ...confirmDialog,
        isOpen: false,
      });
      // Remove data ...
      // CurriculumDetailService.deleteCurriculumDetail(themeId, id)
      // Then send confirmation of activity using toast or snackbar
      alert(`Record ${recordId} deleted!`);
    };

    return (
      <>
        <Button variant="contained" onClick={() => handleDelete(1)}>
          Delete Record
        </Button>
        <ConfirmDialog
          {...args}
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </>
    );
  },
};

export const SubmitForm: Story = {
  render: (args) => {
    const [confirmDialog, setConfirmDialog] = useState({
      isOpen: false,
      title: "",
      subTitle: "",
      onConfirm: () => alert("Confirmed!"),
    });

    const handleSubmit = (recordId: number) => {
      setConfirmDialog({
        isOpen: true,
        title: "Are you ready to submit this form?",
        subTitle: "",
        onConfirm: () => {
          onSubmit(recordId);
        },
      });
    };

    const onSubmit = (recordId: number) => {
      setConfirmDialog({
        ...confirmDialog,
        isOpen: false,
      });
      // Process the form submission here
      // Then send confirmation of activity using toast or snackbar
      alert(`Thank you! Your form has been submitted! Record ID: ${recordId}`);
    };

    return (
      <>
        <Button variant="contained" onClick={() => handleSubmit(1077)}>
          Submit Form
        </Button>
        <ConfirmDialog
          {...args}
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </>
    );
  },
};

export const Delete: Story = {
  render: (args) => {
    const [confirmDialog, setConfirmDialog] = useState({
      isOpen: false,
      title: "",
      subTitle: "",
      onConfirm: () => alert("Confirmed!"),
    });

    const handleDelete = (recordId: number) => {
      setConfirmDialog({
        isOpen: true,
        title:
          "Are you sure you want to delete this Curriculum Theme and all of its Detail?",
        subTitle: "You can't undo this action.",
        onConfirm: () => {
          onDelete(recordId);
        },
      });
    };

    const onDelete = (recordId: number) => {
      setConfirmDialog({
        ...confirmDialog,
        isOpen: false,
      });
      // Remove data ...
      // CurriculumDetailService.deleteCurriculumDetail(themeId, id)
      // Then send confirmation of activity using toast or snackbar
      alert(`Record ${recordId} deleted!`);
    };

    return (
      <>
        <ActionButton
          actionType="Delete"
          tooltipText="Delete Record"
          variant="contained"
          color="error"
          onClick={() => handleDelete(1)}
        />
        <ConfirmDialog
          {...args}
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
          customIcon={<DangerousIcon />}
        />
      </>
    );
  },
};
