import { useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./layouts/MainLayout";
import AppPage from "./pages/AppPage";
import BrowsePage from "./pages/Browse";
import DetailsPage from "./pages/DetailsPage";
import StreamsPage from "./pages/StreamsPage";



export default function Router() {
    const routes = useRoutes([
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '/home', element: <AppPage />, index: true },
                { path: '/browse', element: <BrowsePage /> },
                { path: '/details', element: <DetailsPage /> },
                { path: '/streams', element: <StreamsPage /> },
            ]
        }
    ]);

    return routes;
}