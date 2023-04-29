import Login from "./pages/Login";
import { styled } from "@mui/material/styles";

const StyledApp = styled("div")(({ theme }) => ({
  background: theme.palette.background.default,
  height: '100%'
}));

export default function App() {
  // const { themeMode, toggleThemeMode } = useThemeContext();
  return (
    <StyledApp style={{ height: "100vh" }}>
      <Login />
    </StyledApp>
  );
}
