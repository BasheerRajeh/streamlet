import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { ReactNode } from "react";
import { CardContent, Stack, Typography } from "@mui/material";
import { bgBlur, bgGradient } from "../../utils/cssStyles";
import useResponsive from "../../hooks/useResponsive";

interface Info {
    title: string;
    description: string;
}

interface AuthCardProps {
    form: ReactNode;
    info: Info;
}

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing(10, 2),
    display: "flex",
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    minHeight: 10,
}));

const StyledContent = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 10),
    paddingBottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '100%'
}));

const AuthCard = ({ form, info }: AuthCardProps) => {
    const upMd = useResponsive("up", "md");
    return (
        <StyledCard>
            {form}
            {upMd ? (
                <StyledContent >
                    <Stack direction="column" sx={{ textAlign: 'center', }}>
                        <Typography color='primary' variant="h2"  >{info.title}</Typography>
                        <Typography variant="body1">{info.description}</Typography>
                    </Stack>
                </StyledContent>
            ) : null}
        </StyledCard>
    );
};

export default AuthCard;
