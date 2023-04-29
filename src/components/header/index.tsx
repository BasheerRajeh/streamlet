import {
    Box,
    Button,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from "@mui/material";
import { useThemeContext } from "../../hooks/useThemeContext";

const Header = () => {
    const { themeMode, toggleThemeMode } = useThemeContext();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Box sx={{ height: "200px" }}>
                            <Button onClick={toggleThemeMode} variant="contained">
                                Click to Switch {themeMode}
                            </Button>
                        </Box>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
