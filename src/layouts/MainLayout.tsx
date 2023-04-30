import { useState } from "react";
import styled from "@mui/material/styles/styled";
import { Outlet } from "react-router-dom";

const StyledRoot = styled("div")({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: 70,
    paddingBottom: theme.spacing(10),
}));

const MainLayout = () => {
    const [open, setOpen] = useState(false);

    return (
        <StyledRoot>
            Header
            <Main>
                <Outlet />
            </Main>
            Footer
        </StyledRoot>
    );
};

export default MainLayout;