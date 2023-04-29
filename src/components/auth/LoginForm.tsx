import { useState } from "react";
import {
    Stack,
    Checkbox,
    Link,
    Button,
    FormControlLabel,
    IconButton,
    Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useThemeContext } from "../../hooks/useThemeContext";
import Input from "../UI/Input";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { themeMode, toggleThemeMode } = useThemeContext();
    return (
        <>
            <Stack
                spacing={3}
                direction={"column"}
                sx={{ paddingY: 4, paddingX: { sx: 2, sm: 2, md: 4 }, width: "100%" }}
            >
                <Input
                    name="email"
                    label="Email adress"
                // startAdornment={<Email />}
                // error
                // helperText="Incorrect entry."
                />

                <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    label="Enter password"
                    // error
                    // helperText="Incorrect entry."
                    endAdornment={
                        <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                        >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    }
                />

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ my: 2 }}
                >
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Remember me"
                    />
                    <Link variant="subtitle2" underline="hover">
                        Forgot password?
                    </Link>
                </Stack>

                <Button variant="contained" onClick={toggleThemeMode}>
                    Login
                </Button>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Don't have an account?&nbsp;
                    <Link href="#" underline="always">
                        Sign up
                    </Link>{" "}
                </Typography>
            </Stack>

        </>
    );
};

export default LoginForm;
