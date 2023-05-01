import { useState, useEffect } from "react";
import styled from "@mui/material/styles/styled";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink, useLocation } from "react-router-dom";
import LinkType from "../../interface/links";
import { Theme } from "@mui/material/styles";

interface NavItemButtonProps {
    active?: boolean | number;
    theme?: Theme;
}

const StyledNavItem = styled(ListItemButton) <NavItemButtonProps>`
  height: 100%;
  position: relative;
  text-transform: capitalize;
  transition: all 0.2s ease-in;
  border-radius: ${({ theme }) => `${theme.shape.borderRadius * 2}px`};
  ${({ theme }) => theme.typography.body2};
  color: ${({ theme }) => theme.palette.text.secondary};

  ${({ active, theme }) =>
        active &&
        `
    color: ${theme.palette.primary.main};
  `}
`;

interface NavItemProps {
    link: LinkType;
}

const NavItem = ({ link }: NavItemProps) => {
    const location = useLocation();
    const [active, setActive] = useState(0);

    useEffect(() => {
        setActive(location.pathname === link.path ? 1 : 0);
    }, [location, link]);

    const handleClick = () => {
        setActive(1);
    };

    return (
        <Link component={RouterLink} to={link.path} underline="none">
            <StyledNavItem active={active} onClick={handleClick}>
                <ListItemText primary={link.title} />
            </StyledNavItem>
        </Link>
    );
};

interface NavLinksProps {
    links: LinkType[];
}

const NavLinks = ({ links }: NavLinksProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "end",
                height: "100%",
                flexGrow: 1,
            }}
        >
            {links.map((link) => (
                <NavItem key={link.path} link={link} />
            ))}
        </Box>
    );
};

interface NavbarProps {
    links: LinkType[];
}

const Navbar = ({ links }: NavbarProps) => {
    return <NavLinks links={links} />;
};

export default Navbar;
