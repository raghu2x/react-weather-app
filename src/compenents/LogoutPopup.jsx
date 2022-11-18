import Button from '../controls/Button';
import { useNavigate } from "react-router-dom";
import React from 'react';
function LogoutPopup(props, ref) {
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.clear();
        navigate("/login");
    };
    const hideDropdown = async (e) => {
        e.stopPropagation();
        if (ref.current !== e.target) return;
        ref.current.style.display = 'none';
    };
    return (
        <div onClick={hideDropdown} ref={ref} className="h-screen w-screen top-0 left-0 z-50 bg-black bg-opacity-30 hidden fixed">
            <div className=" p-6 bg-white w-fit rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <i className="material-icons-outlined bg-red-100 text-5xl text-red-400 w-1/2 aspect-square  select-none  rounded-full items-center justify-center flex p-1">power_settings_new</i>
                <span className="font-bold text-3xl text-gray-900 mt-3">Log out</span>
                <span className=" text-base text-gray-400 my-3 text-center">Are you sure you want to logout from app</span>
                <div className="flex w-full ">
                    <Button lable="Logout" className="!bg-none bg-red-400" onClick={onLogout} />
                    <Button lable="Cancel" className="!bg-none bg-gray-200 !text-black" onClick={() => ref.current.style.display = "none"} />
                </div>
            </div>
        </div>
    );
}

export default React.forwardRef(LogoutPopup);