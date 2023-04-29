import { Container, styled } from "@mui/material";
import { Helmet } from "react-helmet-async";
import AuthCard from "../components/auth/AuthCard";
import LoginForm from "../components/auth/LoginForm";


const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const StyledRoot = styled("div")(({ theme }) => ({
    flexGrow: 0.5,
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login | StreamLet</title>
            </Helmet>
            <StyledContainer maxWidth="md" >
                <StyledRoot>
                    <AuthCard
                        form={<LoginForm />}
                        info={{
                            title: "Welcome Back",
                            description:
                                "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
                        }}
                    />
                </StyledRoot>
            </StyledContainer>
        </>
    );
};

export default Login;
