import {
    Drawer,
    Box,
    ListItem,
    ListItemText,
    List,
    Divider,
    ListItemIcon,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./Logo";
import Link from "../../interface/links";

interface Props {
    links: Link[];
    openNav?: boolean;
    onCloseNav: () => void;
}

const Sidebar = ({ links, openNav = false, onCloseNav }: Props) => {
    const toggleDrawer = () => (event: any) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        onCloseNav();
    };

    const renderIcon = (icon: JSX.Element | undefined) => {
        if (!icon) {
            return null;
        }

        return <ListItemIcon>{icon}</ListItemIcon>;
    };

    return (
        <Drawer anchor="right" open={openNav} onClose={toggleDrawer()}>
            <Box sx={{ p: 2 }}>
                <Logo />
            </Box>
            <Divider />
            <List>
                {links.map(({ path, title, icon }: Link) => (
                    <ListItem
                        button
                        key={path}
                        component={RouterLink}
                        to={path}
                        onClick={toggleDrawer()}
                    >
                        {renderIcon(icon)}
                        <ListItemText primary={title} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
