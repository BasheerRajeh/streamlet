import { useState } from "react";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import styled from "@mui/material/styles/styled";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Joi from "joi-browser";
import { Inputs } from "../../interface/input";
import useValidator from "../../hooks/useValidator";

const inputs: Inputs = {
    email: {
        name: "email",
        label: "Email",
        type: "email",
        schema: Joi.string().email().required().label("Email"),
    },
    password: {
        name: "password",
        label: "Password",
        type: "password",
        schema: Joi.string().min(8).required().label("Password"),
    },
};

const StyledForm = styled("form")`
  width: 100%;
`;

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (data: Record<string, unknown>) => {
        console.log(data);
    };

    const { errors, isValid, validateOnChange, validateOnSubmit } = useValidator(
        inputs,
        handleSubmit
    );

    return (
        <StyledForm onSubmit={validateOnSubmit}>
            <Stack spacing={3} direction={"column"} sx={{ width: "100%" }}>
                <TextField
                    name="email"
                    label="Email"
                    onChange={validateOnChange}
                    error={errors?.email ? true : false}
                    helperText={errors?.email ? errors.email[0] : null}
                />

                <TextField
                    type={showPassword ? "text" : "password"}
                    name="password"
                    label="password"
                    onChange={validateOnChange}
                    error={errors?.password ? true : false}
                    helperText={errors?.password ? errors.password[0] : null}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
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

                <Button type="submit" variant="contained" disabled={!isValid}>
                    Login
                </Button>

                <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Don't have an account?&nbsp;
                    <Link href="#" underline="always">
                        Sign up
                    </Link>{" "}
                </Typography>
            </Stack>
        </StyledForm>
    );
};

export default LoginForm;
