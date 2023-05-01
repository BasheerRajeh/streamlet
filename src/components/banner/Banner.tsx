import { memo, useMemo } from "react";
import { Card } from "../shared/Container";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import { useNavigate } from "react-router-dom";
import bannerBg from "../../assets/images/banner-bg.jpg";
import { bgBlur } from "../../utils/cssStyles";
import useResponsive from "../../hooks/useResponsive";

const StyledRoot = styled(Card)`
  background: url(${bannerBg});
  object-fit: cover;
  height: 380px;
  position: relative;
  border-radius: ${(props) => props.theme.shape.borderRadius * 2};
  /* background-position: center center; */
`;

const StyledButton = styled(Button)`
  border-radius: ${(props) => props.theme.shape.borderRadius * 2}px;
  text-transform: capitalize;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
`;

const Banner = memo(() => {
    const isMdUp = useResponsive("up", "md");
    const bgBlurStyles = useMemo(
        () => bgBlur({ imgUrl: bannerBg, blur: 10, opacity: 0.1, index: -1 }),
        []
    );

    const navigate = useNavigate();

    return (
        <StyledRoot
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            sx={{
                ...(isMdUp ? {} : bgBlurStyles),
            }}
        >
            <Stack
                sx={{
                    paddingX: { xs: 2, md: 6 },
                    paddingY: { md: 6 },
                    width: "100%",
                    height: "100%",
                    alignItems: { xs: "center", md: "start" },
                    justifyContent: "center",
                    textAlign: { xs: "center", md: "start" },
                    // alignItems: {sx: 'center', md: 'start' },
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 500,
                        fontSize: "1.25rem",
                        color: "common.white",
                        mb: 3,
                    }}
                >
                    Welcome To Cyborg
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 4,
                        color: "common.white",
                        maxWidth: { md: "400px" },
                    }}
                >
                    <Box component='span' sx={{ color: "primary.main" }}>BROWSE</Box> OUR POPULAR GAMES
                    HERE
                </Typography>
                <StyledButton
                    onClick={() => navigate("/app/browse")}
                    variant="contained"
                    sx={{ width: { xs: '100%', md: 'auto' } }}
                >
                    Browse Now
                </StyledButton>
            </Stack>
        </StyledRoot>
    );
});

export default Banner;
