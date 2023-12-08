import { Button } from "@mantine/core";

type Props = {
  onClickButton: () => void;
};

export default function TodoListFooter({ onClickButton }: Props) {
  return (
    <Button onClick={onClickButton} fullWidth mt={"md"}>
      New Task
    </Button>
  );
}
