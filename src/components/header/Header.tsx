import { useState } from "react";
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Toolbar,
} from "@mui/material";
import styled from '@mui/material/styles/styled'
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Logo from "./Logo";
import { useThemeContext } from "../../hooks/useThemeContext";
import Link from "../../interface/Iinks";
import Sidebar from "./Sidebar";
import useResponsive from "../../hooks/useResponsive";
import Navbar from "./Navbar";

type Props = {
    links: Link[];
};


const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.paper,
    boxShadow: "none",
    minHeight: "70px",
    position: "relative",
    justifyContent: "center",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
}));


const Header = ({ links }: Props) => {
    const { themeMode, toggleThemeMode } = useThemeContext();
    const isMdUp = useResponsive('up', 'md');

    const [open, setOpen] = useState(false);



    const toggleIcon = themeMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />;

    return (
        <StyledAppBar >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Logo hideLabelLogo={!isMdUp} />
                        <IconButton
                            sx={{ color: 'primary.main', marginLeft: 5 }}
                            onClick={toggleThemeMode}
                        >
                            {toggleIcon}
                        </IconButton>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {!isMdUp ? (
                            <IconButton
                                sx={{ color: 'primary.main', padding: 0 }}
                                aria-label="menu"
                                onClick={() => setOpen(true)}
                            >
                                <MenuIcon sx={{ width: "32px", height: "32px" }} />
                            </IconButton>
                        ) :
                            <Navbar links={links} />
                        }
                    </Box>
                </Toolbar>
            </Container>
            <Sidebar links={links} openNav={open} onCloseNav={() => setOpen(false)} />
        </StyledAppBar>
    );
};

export default Header;
