import { Container, styled } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AuthCard from "../components/auth/AuthCard";
import SignUpForm from "../components/auth/SignUpForm";

const StyledRoot = styled("div")(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    background: `${theme.palette.background.default}`,
}));

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

            <StyledRoot>
                <StyledContainer maxWidth="md">
                    <AuthCard form={<SignUpForm />} title="Hi, friend!" />
                </StyledContainer>
            </StyledRoot>
        </>
    );
};

export default SignUp;
