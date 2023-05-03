import { HTMLAttributes, ReactNode } from "react";
import { Theme, styled } from "@mui/material";
import { SxProps } from "@mui/system";
import { Card } from "./Container";

interface Props {
    src: string;
    width?: number | string | object;
    height?: number | string | object;
    sx?: SxProps<Theme> | undefined;
    other?: HTMLAttributes<HTMLDivElement> | undefined;
    children?: ReactNode;
}

const Img = styled('img')`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center center;
`

const MediaCard = ({ src, width, height, sx, children, ...other }: Props) => {
    return (
        <Card
            sx={{
                width: width || "100%",
                height: height || "100%",
                position: 'relative',
                ...sx,
            }}
            {...other}
        >
            <Img src={src} />
            {children}
        </Card>
    );
};


export default MediaCard;
