import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  50: "#fff",
  100: "#e4e4e4",
  200: "#F5F5F5",
  300: "#bebebe",
  400: "#989898",
  500: "#727272",
  600: "#4F4F4F",
  700: "#262626",
  800: "#1f2122",
  900: "#1f2122",
};

const PRIMARY = {
  lighter: "#ff6da3",
  light: "#e75e8d",
  main: "#e75e8d",
  dark: "#df6090",
  darker: "#df6090",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#51458a",
  light: "#3d2b8d",
  main: "#331e8d",
  dark: "#331e8d",
  darker: "#331e8d",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const lightPalette = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default lightPalette;
