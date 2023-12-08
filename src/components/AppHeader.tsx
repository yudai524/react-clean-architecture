import { ActionIcon, Group, Title } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";
import { useThemeSwitcher } from "@/utils/viewHelpers";

export default function AppHeader() {
  const { colorScheme, toggleColorScheme } = useThemeSwitcher();
  return (
    <Group position={"apart"}>
      <Title
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        My Tasks
      </Title>
      <ActionIcon color={"blue"} onClick={() => toggleColorScheme()} size="lg">
        {colorScheme === "dark" ? <Sun size={16} /> : <MoonStars size={16} />}
      </ActionIcon>
    </Group>
  );
}
