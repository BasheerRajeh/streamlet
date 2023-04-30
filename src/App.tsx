import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./theme/index.tsx";
import { ThemeProvider as ThemeColorMode } from "./context/ThemeContext.tsx";
import Router from "./routes";

export default function App() {
  // const { themeMode, toggleThemeMode } = useThemeContext();
  return (
    <HelmetProvider>
      <ThemeColorMode>
        <ThemeProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </ThemeColorMode>
    </HelmetProvider>
  );
}
