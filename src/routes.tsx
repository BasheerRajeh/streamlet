import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./layouts/MainLayout";
import AppPage from "./pages/app/AppPage";
import BrowsePage from "./pages/Browse";
import DetailsPage from "./pages/DetailsPage";
import StreamsPage from "./pages/StreamsPage";

export default function Router() {
    const routes = useRoutes([
        {
            path: "/app",
            element: <MainLayout />,
            children: [
                { element: <Navigate to="/app/home" />, index: true },
                { path: "home", element: <AppPage /> },
                { path: "browse", element: <BrowsePage /> },
                { path: "details", element: <DetailsPage /> },
                { path: "streams", element: <StreamsPage /> },
            ],
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "signup",
            element: <SignUp />,
        },
        {
            path: '*',
            element: <Navigate to="/app/home" replace />,
        },
    ]);

    return routes;
}
