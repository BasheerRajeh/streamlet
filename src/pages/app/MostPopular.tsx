import { CardGame } from "../../components/game/CardGame";
import { InnerContainer } from "../../components/shared/Container";
import { Typography, Box, Grid } from "@mui/material";
import useGames from "../../hooks/useGames";

export const MostPopular = () => {
    const { data, isLoading, error } = useGames();

    console.log(data);
    console.log(error);
    // console.log(data);

    if (isLoading) return null;

    return (
        <InnerContainer>
            <Typography
                variant="h3"
                sx={{
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
                    marginBottom: "2rem",
                }}
            >
                <Box component="span" sx={{ textDecoration: "underline" }}>
                    Most Popular
                </Box>
                &nbsp;
                <Box component="span" color="primary.main">
                    Rign Now
                </Box>
            </Typography>

            <Grid container justifyItems="center" spacing={2}>
                {data?.results.map((game) => (
                    <Grid item xs={12} sm={6} md={4} sx={{ width: "100%" }}>
                        <CardGame game={game} />
                    </Grid>
                ))}
                <Grid item xs={12} sm={6} md={4} sx={{ width: "100%" }}>
                    <CardGame game={data?.results[0]} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ width: "100%" }}>
                    <CardGame game={data?.results[0]} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ width: "100%" }}>
                    <CardGame game={data?.results[0]} />
                </Grid>
            </Grid>
        </InnerContainer>
    );
};
