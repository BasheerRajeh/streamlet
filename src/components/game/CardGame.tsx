import { Box, Stack, Typography } from "@mui/material";
import { Star } from '@mui/icons-material'
import MediaCard from "../shared/MediaCard";
import Game from "../../interface/Game.";
import { useTheme } from "@mui/material";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
    game?: Game;
}

const InnerCardGame = ({ game }: Props) => {
    return (
        <Stack height="100%" width="100%">
            <MediaCard src={getCroppedImageUrl(game?.background_image)} sx={{ mb: 2 }} />
            {/* <img src={game?.background_image} alt="" /> */}
            <Stack spacing={1} textOverflow="ellipsis" >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        fontWeight={800}
                        fontSize="0.8rem"
                        sx={{ width: '100%' }}
                    >
                        {game?.name}
                    </Typography>
                    <Stack direction="row" alignItems="center">
                        <Star sx={{ width: 18, color: 'gold' }} />
                        <Typography fontSize="0.8rem">{game?.rating}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export const CardGame = ({ game }: Props) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                height: '100%',
                paddingX: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                paddingY: "2rem",
                background: `${theme.palette.background.default}`,
                borderRadius: `${theme.shape.borderRadius * 2}px`
            }}
        >
            <InnerCardGame game={game} />
        </Box>
    );
};