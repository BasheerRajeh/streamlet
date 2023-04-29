import { styled } from "@mui/material/styles";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const StyledApp = styled("div")(({ theme }) => ({
  background: theme.palette.background.default,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  padding: 2,
}));


export default function App() {
  // const { themeMode, toggleThemeMode } = useThemeContext();
  return (
    <StyledApp style={{ height: "100vh" }}>
      <SignUp />
    </StyledApp>
  );
}
