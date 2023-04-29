import { useState } from "react";
import {
    Stack,
    Checkbox,
    Link,
    Button,
    FormControlLabel,
    IconButton,
    Typography,
    TextField,
    InputAdornment,
    FormGroup,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useThemeContext } from "../../hooks/useThemeContext";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { toggleThemeMode } = useThemeContext();

    return (
        <FormGroup sx={{ width: '100%' }}>
            <Stack spacing={3} direction={"column"} sx={{ width: "100%" }}>
                <TextField name="email" label="Email adress" />

                <TextField
                    type={showPassword ? "text" : "password"}
                    name="password"
                    label="Enter password"
                    inputProps={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
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

                <Button type="submit" variant="contained" onClick={toggleThemeMode}>
                    Sign up
                </Button>

                <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Don't have an account?&nbsp;
                    <Link href="#" underline="always">
                        Sign up
                    </Link>{" "}
                </Typography>
            </Stack>
        </FormGroup>
    );
};

export default LoginForm;
