import { ActionIcon, Card, Group, Text } from "@mantine/core";
import { Trash } from "tabler-icons-react";

type Props = {
  task: {
    id: string;
    title: string;
    summary: string;
  };
  onDelete: (id: string) => void;
};

export default function TaskCard({ task, onDelete }: Props) {
  return (
    <Card withBorder key={task.id} mt={"sm"}>
      <Group position={"apart"}>
        <Text weight={"bold"}>{task.title}</Text>
        <ActionIcon
          onClick={() => {
            onDelete(task.id);
          }}
          color={"red"}
          variant={"transparent"}
        >
          <Trash />
        </ActionIcon>
      </Group>
      <Text color={"dimmed"} size={"md"} mt={"sm"}>
        {task.summary ? task.summary : "No summary was provided for this task"}
      </Text>
    </Card>
  );
}
