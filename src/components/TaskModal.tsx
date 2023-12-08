import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useRef } from "react";

type Props = {
  opened: boolean;
  onClose: () => void;
  onSave: (title: string, summary: string) => void;
};

export default function TaskModal({ opened, onSave, onClose }: Props) {
  const taskTitle = useRef<HTMLInputElement>();
  const taskSummary = useRef<HTMLInputElement>();

  return (
    <Modal
      opened={opened}
      size={"md"}
      title={"New Task"}
      withCloseButton={false}
      onClose={onClose}
      centered
    >
      <TextInput
        mt={"md"}
        ref={taskTitle}
        placeholder={"Task Title"}
        required
        label={"Title"}
      />
      <TextInput
        ref={taskSummary}
        mt={"md"}
        placeholder={"Task Summary"}
        label={"Summary"}
      />
      <Group mt={"md"} position={"apart"}>
        <Button onClick={onClose} variant={"subtle"}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            onSave(taskTitle.current.value, taskSummary.current.value);
            onClose();
          }}
        >
          Create Task
        </Button>
      </Group>
    </Modal>
  );
}
