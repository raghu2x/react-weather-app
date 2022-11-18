import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="grid place-items-center h-screen ">
            <Outlet />
        </div>
    );
}

