import { useState } from "react";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import styled from "@mui/material/styles/styled";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Joi from "joi-browser";
import { Link as RouterLink } from 'react-router-dom'
import { Inputs } from "../../interface/input";
import useValidator from "../../hooks/useValidator";

const inputs: Inputs = {
    email: {
        name: "email",
        label: "Email",
        type: "email",
        schema: Joi.string()
            .email({ tlds: { allow: false } })
            .required()
            .label("Email"),
    },
    password: {
        name: "password",
        label: "Password",
        type: "password",
        schema: Joi.string().min(8).required().label("Password"),
    },
    confirmPassword: {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        schema: Joi.string().required().label("Confirm Password"),
        ref: "password",
    },
    agreeToTerms: {
        name: "agreeToTerms",
        label: "I agree to the terms and conditions",
        type: "checkbox",
        schema: Joi.boolean()
            .valid(true)
            .required()
            .label("_")
            .options({
                language: {
                    any: { allowOnly: "You must agree to the terms and conditions" },
                },
            }),
    },
};

const StyledForm = styled("form")`
  width: 100%;
`;

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (data: Record<string, unknown>) => {
        console.log(data);
    };

    const { isValid, errors, validateOnChange, validateOnSubmit } = useValidator(
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
                    error={errors?.email && errors?.email.length > 0}
                    helperText={errors?.email ? errors.email[0] : null}
                />

                <TextField
                    type={showPassword ? "text" : "password"}
                    name="password"
                    label="password"
                    onChange={validateOnChange}
                    error={errors?.password && errors?.password.length > 0}
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

                <TextField
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    label="Confirm password"
                    onChange={validateOnChange}
                    error={!!errors.confirmPassword}
                    helperText={
                        errors?.confirmPassword ? errors.confirmPassword[0] : null
                    }
                />

                <Stack sx={{ my: 2 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={true}
                                onChange={validateOnChange}
                                name="agreeToTerms"
                            />
                        }
                        label={
                            <Typography>
                                I agree on&nbsp;
                                <Link component={RouterLink} to="/#" underline="always">
                                    terms
                                </Link>
                                &nbsp;&amp;&nbsp;
                                <Link component={RouterLink} to="/#" underline="always">
                                    conditions
                                </Link>
                            </Typography>
                        }
                    />
                    {errors?.agreeToTerms?.length > 0 && (
                        <FormHelperText error>{errors?.agreeToTerms[0]}</FormHelperText>
                    )}
                </Stack>

                <Button type="submit" variant="contained" disabled={!isValid}>
                    Sign up
                </Button>

                <Typography variant="body2" sx={{ textAlign: "center" }}>
                    I have already an account?&nbsp;
                    <Link component={RouterLink} to="/login" underline="always" color="primary">
                        Login
                    </Link>
                </Typography>
            </Stack>
        </StyledForm>
    );
};

export default SignUpForm;
