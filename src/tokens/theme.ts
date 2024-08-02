import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    neonBlue: [
      "#eaeeff",
      "#d0d8ff",
      "#9dadfc",
      "#6780fb",
      "#3d5bfa",
      "#2442fb",
      "#1736fc",
      "#0b2ae1",
      "#0024c9",
      "#001eb1"
    ],
    neonPink: [
      "#ffe8ff",
      "#ffcffe",
      "#ff9bf9",
      "#ff64f5",
      "#fe38f0",
      "#fe1cee",
      "#ff09ee",
      "#e400d5",
      "#cb00be",
      "#b100a6"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Inter Variable', sans-serif"
  },
  primaryColor: "neonPink"
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {}
});
