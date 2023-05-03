import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ThemeProvider from "./theme/index.tsx";
import { ThemeProvider as ThemeColorMode } from "./context/ThemeContext.tsx";
import Router from "./routes";

const queryClient = new QueryClient();

export default function App() {
  // const { themeMode, toggleThemeMode } = useThemeContext();
  return (
    <HelmetProvider>
      <ThemeColorMode>
        <ThemeProvider>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <Router />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeColorMode>
    </HelmetProvider>
  );
}
