import { Box, Button, Theme, styled } from "@mui/material";
import { useThemeContext } from "./hooks/useThemeContext";



const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  boxShadow: theme.customShadows.z12
}));

export default function App() {
  const { themeMode, toggleThemeMode } = useThemeContext();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: "24px",
        p: 3,
      }}
    >
      <StyledButton variant="contained" onClick={toggleThemeMode}>
        {themeMode} mode
      </StyledButton>
    </Box>
  );
}
