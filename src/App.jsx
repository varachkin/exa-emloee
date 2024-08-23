
import { useState, useMemo, createContext, useContext } from "react";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import CssBaseline from '@mui/material/CssBaseline';
import AppRouter from "./AppRouter";
import Button from "@mui/material/Button";

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

const ColorModeContext = createContext({ toggleColorMode: () => { } });

export default function App(props) {
  const colorMode = useContext(ColorModeContext);
  const store = setupStore();

  // State to manage the current theme mode ('light' or 'dark')
  const [mode, setMode] = useState('dark');

  // Memoize the theme to avoid unnecessary recalculations
  const theme = useMemo(() => createTheme({

    palette: {
      mode: mode,
      primary1Color: "#1976d2",
      primary2Color: "#303f9f",
      accent1Color: "#ffa726",
      primary3Color: "#616161",
      disabledColor: "#757575"
    },
    borderRadius: 7

  }), [mode]);

  // Toggle between light and dark mode
  const toggleThemeMode = () => {
    setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          {/* Button to toggle the theme */}
          <Button onClick={toggleThemeMode}>
            Toggle to {mode === 'dark' ? 'light' : 'dark'} mode
          </Button>
          <AppRouter {...props} />
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
