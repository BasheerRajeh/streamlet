import styled from "@mui/material/styles/styled";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import InfoIcon from "@mui/icons-material/Info";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import Header from "../components/header/Header";
import Link from "../interface/Iinks";
import AppContainer from "../components/shared/Container";

const StyledRoot = styled("div")(({ theme }) => ({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
    background: `${theme.palette.background.paper}`,
    color: `${theme.palette.grey[900]}`,
}));

const Main = styled("div")(({ theme }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop: 50,
    paddingBottom: theme.spacing(10),
}));

const links: Link[] = [
    { path: "/app/home", title: "Home", icon: <HomeIcon /> },
    { path: "/app/browse", title: "Browse", icon: <ExploreIcon /> },
    { path: "/app/details", title: "Details", icon: <InfoIcon /> },
    { path: "/app/streams", title: "Streams", icon: <SportsEsportsIcon /> },
];

const MainLayout = () => {
    return (
        <StyledRoot>
            <Container>
                <Header links={links} />
                <Main>
                    <AppContainer>
                        <Outlet />
                    </AppContainer>
                </Main>
            </Container>
        </StyledRoot>
    );
};

export default MainLayout;
