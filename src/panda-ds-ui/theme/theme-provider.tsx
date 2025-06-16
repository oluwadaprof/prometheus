"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export { useTheme } from "next-themes";

export const THEME_NAMES = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

export const THEME_KEYS_TO_DS_MAP = {
  light: "base",
  dark: "_dark",
};
