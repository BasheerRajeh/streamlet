import { Card as MuiCard, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

export const Card = styled(MuiCard)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 2,
    width: "100%",
    height: "100%",
    background: theme.palette.background.default,
    boxShadow: "none",
    display: "flex",
}));

export const InnerContainer = ({ children }: { children: ReactNode }) => {
    const theme = useTheme();
    return (
        <Card
            sx={{
                paddingX: { xs: "1rem", sm: "1.2rem", md: "3rem" },
                paddingY: '2rem',
                position: "relative",
                flexDirection: 'column',
                background: `${theme.palette.background.paper}`,
            }}
        >
            {children}
        </Card>
    );
};

const AppContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Card
            sx={{
                padding: { xs: "30px", md: "60px" },
                flexDirection: "column",
                gap: "6rem",
            }}
        >
            {children}
        </Card>
    );
};

export default AppContainer;
