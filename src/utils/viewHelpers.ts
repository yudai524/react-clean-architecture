import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

export const useThemeSwitcher = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return {
    colorScheme,
    toggleColorScheme,
  };
};
