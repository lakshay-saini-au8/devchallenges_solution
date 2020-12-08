import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./pages";
import { lightTheme, darkTheme } from "./theme";
import { useDarkMode } from "./useDarkMode";

function App() {
  const [theme, toogleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  console.log(theme);
  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <Home theme={theme} toogleTheme={toogleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
