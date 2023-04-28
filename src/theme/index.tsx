import { ReactNode, useMemo } from "react";
import { StyledEngineProvider, ThemeOptions } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import GlobalStyles from "./globalStyles";
import typography from "./typography";
import shadows from "./shadows";
import customShadows from "./customShadows";
import ComponentsOverrides from "./overrides";
import { createCustomTheme } from "./CustomTheme";
import { useThemeContext } from "../hooks/useThemeContext";
import lightPalette from "./lightPalette";
import darkPalette from "./darkPalette";

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const { themeMode } = useThemeContext();

    const themeOptions: ThemeOptions = useMemo(
        () => ({
            palette: {
                mode: themeMode,
                ...(themeMode === "light" ? lightPalette : darkPalette),
            },
            shape: { borderRadius: 12 },
            typography,
            shadows: shadows(),
            customShadows: customShadows(),
        }),
        [themeMode]
    );

    const theme = createCustomTheme(themeOptions);
    theme.components = ComponentsOverrides(theme);

    return (
        <StyledEngineProvider injectFirst>
            <GlobalStyles />
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </StyledEngineProvider>
    );
}
