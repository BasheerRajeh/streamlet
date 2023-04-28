import { useContext } from "react";
import { ThemeContext, ThemeContextValue } from "../context/ThemeContext";

export function useThemeContext() {
    return useContext<ThemeContextValue>(ThemeContext);
}
