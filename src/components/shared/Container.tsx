import { Card as MuiCard } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

export const Card = styled(MuiCard)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 2,
    width: "100%",
    height: "100%",
    background: theme.palette.background.default,
    boxShadow: "none",
    display: "flex",
    gap: 60,
}));

const AppContainer = ({ children }: { children: ReactNode }) => {
    return <Card sx={{ padding: { xs: "30px", md: "60px" } }}>{children}</Card>;
};

export default AppContainer;
