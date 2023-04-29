import { Container, styled } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AuthCard from "../components/auth/AuthCard";
import SignUpForm from "../components/auth/SignUpForm";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SignUp = () => {
    return (
        <>
            <Helmet>
                <title>SignUp | StreamLet</title>
            </Helmet>

            <StyledContainer maxWidth="md">
                <AuthCard form={<SignUpForm />} title="Hi, friend!" />
            </StyledContainer>
        </>
    );
};

export default SignUp;
