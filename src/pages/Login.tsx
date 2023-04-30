import { Container, styled } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AuthCard from "../components/auth/AuthCard";
import LoginForm from "../components/auth/LoginForm";


const StyledRoot = styled('div')(({ theme }) => ({
    width: '100vw',
    height: '100vh',
    background: `${theme.palette.background.default}`
}))

const StyledContainer = styled(Container)(() => ({
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    height: '100%',
}));


const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login | StreamLet</title>
            </Helmet>

            <StyledRoot>
                <StyledContainer maxWidth="md">
                    <AuthCard form={<LoginForm />} title="Welcome Back" />
                </StyledContainer>
            </StyledRoot>
        </>
    );
};

export default Login;
