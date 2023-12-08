import { Container, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import AppHeader from "@/components/AppHeader";
import TaskModal from "@/components/TaskModal";
import TaskCard from "@/components/TaskCard";
import AppFooter from "@/components/AppFooter";

export default function AppContent() {
  const [tasks, setTasks] = useState([]);
  const [opened, setOpened] = useState(false);

  function createTask(title: string, summary: string) {
    setTasks([
      ...tasks,
      {
        title,
        summary,
      },
    ]);

    saveTasks([
      ...tasks,
      {
        title,
        summary,
      },
    ]);
  }

  function deleteTask(index) {
    var clonedTasks = [...tasks];

    clonedTasks.splice(index, 1);

    setTasks(clonedTasks);

    saveTasks([...clonedTasks]);
  }

  function loadTasks() {
    let loadedTasks = localStorage.getItem("tasks");

    let tasks = JSON.parse(loadedTasks);

    if (tasks) {
      setTasks(tasks);
    }
  }

  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="App">
      <TaskModal
        opened={opened}
        onClose={() => setOpened(false)}
        onSave={createTask}
      />
      <Container size={550} my={40}>
        <AppHeader />
        {tasks.length > 0 ? (
          tasks.map((task, index) => {
            if (task.title) {
              return (
                <TaskCard
                  task={{
                    id: index.toString(),
                    title: task.title,
                    summary: task.summary,
                  }}
                  onDelete={deleteTask}
                />
              );
            }
          })
        ) : (
          <Text size={"lg"} mt={"md"} color={"dimmed"}>
            You have no tasks
          </Text>
        )}
        <AppFooter onClickButton={() => setOpened(true)} />
      </Container>
    </div>
  );
}
