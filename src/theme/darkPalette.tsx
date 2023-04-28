import { alpha } from "@mui/material";

const GREY = {
    0  : "#1f2122",
    100: "#1f2122",
    200: "#262626",
    300: "#4F4F4F",
    400: "#727272",
    500: "#989898",
    600: "#bebebe",
    700: "#F5F5F5",
    800: "#e4e4e4",
    900: "#e4e4e4",
};

const PRIMARY = {
    lighter     : "#ff6da3",
    light       : "#e75e8d",
    main        : "#e75e8d",
    dark        : "#df6090",
    darker      : "#df6090",
    contrastText: "#fff",
};

const SECONDARY = {
    lighter     : "#E5F3FF",
    light       : "#B3D4FF",
    main        : "#4D8AFF",
    dark        : "#0041C4",
    darker      : "#002D8F",
    contrastText: "#fff",
};

const SUCCESS = {
    lighter     : "#D9F9C9",
    light       : "#9EE09E",
    main        : "#2ECC71",
    dark        : "#239B56",
    darker      : "#145A32",
    contrastText: GREY[800],
};

const WARNING = {
    lighter     : "#FFF3CD",
    light       : "#FFE16A",
    main        : "#FFC107",
    dark        : "#B78103",
    darker      : "#7A4F01",
    contrastText: GREY[800],
};

const ERROR = {
    lighter     : "#FFD8CC",
    light       : "#FFA48D",
    main        : "#FF4842",
    dark        : "#B72136",
    darker      : "#7A0C2E",
    contrastText: "#fff",
};

const INFO = {
    lighter     : "#D0F2FF",
    light       : "#74CAFF",
    main        : "#1890FF",
    dark        : "#0C53B7",
    darker      : "#04297A",
    contrastText: "#fff",
};

const darkPalette = {
    common   : { black: "#000", white: "#fff" },
    primary  : PRIMARY,
    secondary: SECONDARY,
    info     : INFO,
    success  : SUCCESS,
    warning  : WARNING,
    error    : ERROR,
    grey     : GREY,
    divider  : alpha(GREY[500], 0.24),
    text     : {
        primary  : GREY[700],
        secondary: GREY[600],
        disabled : GREY[400],
    },
    background: {
        paper  : GREY[100],
        default: GREY[200],
        neutral: GREY[300],
    },
    action: {
        active            : GREY[300],
        hover             : alpha(GREY[500], 0.08),
        selected          : alpha(GREY[500], 0.16),
        disabled          : alpha(GREY[500], 0.48),
        disabledBackground: alpha(GREY[500], 0.24),
        focus             : alpha(GREY[500], 0.24),
        hoverOpacity      : 0.08,
        disabledOpacity   : 0.48,
    },
};

export default darkPalette;
