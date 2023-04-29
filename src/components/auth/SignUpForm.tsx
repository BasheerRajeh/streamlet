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
    FormGroup
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useThemeContext } from "../../hooks/useThemeContext";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { toggleThemeMode } = useThemeContext();
    return (
        <FormGroup>

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

                <TextField
                    type={showPassword ? "text" : "password"}
                    name="confirmpassword"
                    label="Confirm password"
                />

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ my: 2 }}
                >
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={
                            <Typography>
                                I agree on&nbsp;
                                <Link href="#" underline="always">
                                    terms
                                </Link>
                                &nbsp;&amp;&nbsp;
                                <Link href="#" underline="always">
                                    conditions
                                </Link>
                            </Typography>
                        }
                    />

                </Stack>

                <Button type="submit" variant="contained" onClick={toggleThemeMode}>
                    Sign up
                </Button>

                <Typography variant="body2" sx={{ textAlign: "center" }}>
                    I have already an account?&nbsp;
                    <Link href="/login" underline="always" color="primary">
                        Login
                    </Link>
                </Typography>
            </Stack>
        </FormGroup>
    );
};

export default SignUpForm;
