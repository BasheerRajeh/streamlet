import { alpha } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";

import { CustomTheme } from "../CustomTheme";

// ----------------------------------------------------------------------

interface Props {
  color: string;
}

const StyledInputAdornment = styled(InputAdornment)(({ color }: Props) => ({
  "& svg": {
    color: color,
  },
}));

export default function Input(theme: CustomTheme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": {
              color: theme.palette.text.disabled,
            },
          },
        },

        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            '-webkit-box-shadow': `0 0 0 100px ${theme.palette.background.paper} inset`,
            borderRadius: 'unset',
            paddingLeft: '1rem'
          },
        },
        root: {
          overflow: 'hidden',
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(theme.palette.grey[500], 0.32),
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.action.disabledBackground,
            },
            '&:-webkit-autofill': {
              overflow: 'hiddent',
              '-webkit-box-shadow': `0 0 0 100px ${theme.palette.primary.main} inset`,
            },
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionStart: {
          color: "inherit",
        },
        positionEnd: {
          color: "inherit",
        },
      },
      defaultProps: {
        disableTypography: true,
      },
      variants: [
        {
          props: { color: "primary" },
          style: {
            "& svg": {
              color: theme.palette.primary.main,
            },
          },
        },
        {
          props: { color: "secondary" },
          style: {
            "& svg": {
              color: theme.palette.secondary.main,
            },
          },
        },
      ],
      components: {
        StartAdornment: StyledInputAdornment,
        EndAdornment: StyledInputAdornment,
      },
    },
  };
}
