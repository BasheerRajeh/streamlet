import createTheme, { Theme, ThemeOptions } from "@mui/material/styles/createTheme";

export interface CustomTheme extends Theme {
    customShadows: { [key: string]: string };
}

export const createCustomTheme = (themeOptions: ThemeOptions): CustomTheme => {
    return createTheme(themeOptions) as CustomTheme;
};