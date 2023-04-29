import { Card as MuiCard } from "@mui/material";
import { styled } from "@mui/material/styles";

const Card = styled(MuiCard)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 2,
    display: "flex",
}));

export default Card;
