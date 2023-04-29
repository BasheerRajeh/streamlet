import { Container, styled } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AuthCard from "../components/auth/AuthCard";
import LoginForm from "../components/auth/LoginForm";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login | StreamLet</title>
            </Helmet>

            <StyledContainer maxWidth="md">
                <AuthCard form={<LoginForm />} title="Welcome Back" />
            </StyledContainer>
        </>
    );
};

export default Login;
