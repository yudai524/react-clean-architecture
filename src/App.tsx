import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useThemeSwitcher } from "@/utils/viewHelpers";
import AppContent from "@/components/AppContent";

export default function App() {
  const { colorScheme, toggleColorScheme } = useThemeSwitcher();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, defaultRadius: "md" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppContent />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
