import {
    createContext,
    ReactNode,
    useState,
    useEffect,
    useMemo,
    useCallback,
} from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

type ThemeMode = "light" | "dark";

export interface ThemeContextValue {
    themeMode: ThemeMode;
    toggleThemeMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
    themeMode: "light",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleThemeMode: () => { },
});

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [themeMode, setThemeMode] = useState<ThemeMode>("light");

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: themeMode === "light" ? "dark" : "light",
                },
            }),
        [themeMode]
    );

    const toggleThemeMode = useCallback(() => {
        if (themeMode === "light") {
            setThemeMode("dark");
        } else {
            setThemeMode("light");
        }
    }, [themeMode, setThemeMode]);

    const value = useMemo(
        () => ({
            themeMode,
            toggleThemeMode,
        }),
        [themeMode, toggleThemeMode]
    );

    return (
        <ThemeContext.Provider value={value}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
}
