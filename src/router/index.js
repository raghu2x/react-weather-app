import { createBrowserRouter } from "react-router-dom";
import AuthLayout from '../layouts/AuthLayout';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ForcastReport from '../pages/ForcastReport';
import WeatherCard from '../compenents/WeatherCard';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "",
                element: <WeatherCard />,
            },
            {
                path: "forcast",
                element: <ForcastReport />,
            },
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
        ]
    },
]);

export default router;