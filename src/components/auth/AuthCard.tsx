import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { ReactNode } from "react";
import logo from "../../assets/images/logo.png";
import { Box, Stack, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useResponsive from "../../hooks/useResponsive";
import mainStreaming from "../../assets/images/man-streaming.png";
import useCache from "../../hooks/useCache";

interface AuthCardProps {
    form: ReactNode;
    title?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 2,
    // padding: theme.spacing(10, 2),
    display: "flex",
    flexGrow: 1,
    width: "100%",
    position: "relative",
    alignItems: "center",
    minHeight: "600px",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
}));

const Logo = styled(LazyLoadImage)`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ImageCard = styled(LazyLoadImage)`
  width: 300px;
`;

const AuthCard = ({ form, title }: AuthCardProps) => {
    const upMd = useResponsive("up", "md");

    const urlLogo = useCache(logo);
    const urlCard = useCache(mainStreaming);

    return (
        <StyledCard>
            {upMd ? (
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    marginLeft="4rem"
                    maxWidth="300px"
                >
                    <Typography textAlign="center" variant="h2" color="primary">
                        {title}
                    </Typography>
                    <ImageCard sx={{ paddingX: 2 }} src={urlCard} />
                </Stack>
            ) : null}

            <Stack alignItems="center" sx={{ flexGrow: { xs: 1 } }}>
                <Logo src={urlLogo} />
                <Box
                    sx={{
                        paddingY: 10,
                        width: "100%",
                        maxWidth: "500px",
                        paddingX: { xs: "1rem", sm: "2rem", md: "4rem" },
                    }}
                >
                    {form}
                </Box>
            </Stack>
        </StyledCard>
    );
};

export default AuthCard;
