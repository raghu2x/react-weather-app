import api from "../axios";
import React, { useRef } from 'react';
import LogoutPopup from '../compenents/LogoutPopup';
import CitiesList from '../compenents/CitiesList';
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "css-pro-layout/dist/css/css-pro-layout.min.css";
function Home() {
    let citiesDropdown = useRef(null);
    let logoutPopup = useRef(null);
    const [cityList, setCityList] = useState([]);
    const [toggled, setToggled] = useState(false);
    const getWeatherInfo = async (e) => {
        citiesDropdown.current.style.display = 'block';
        let res = await api.get('/city-list');
        if (res) {
            setCityList(() => res);
        }
    };
    return (
        <div className="layout has-sidebar to-blue-500 from-cyan-400 bg-gradient-to-b  text-white  overflow-hidden">
            <aside className={`sidebar break-point-md ${toggled ? "toggled" : ""} bg-white shadow-xl border-r text-black text-center`}>
                <div className="font-bold text-5xl">LOGO</div>
                <div className="font-bold text-left p-4">Main</div>
                <div>
                    <NavLink to="/home" className={({ isActive }) => !isActive ? "link" : 'link active'}>
                        <i className="material-icons-outlined">grid_view</i>
                        Dashboard
                    </NavLink>
                    <NavLink className={({ isActive }) => !isActive ? "link" : 'link active'} to="/forcast">
                        <i className="material-icons-outlined">description</i>
                        Forcast Report
                    </NavLink>
                </div>
            </aside>
            <div className="overlay" onClick={() => setToggled(false)}></div>
            <div className="layout">
                <header className="header  bg-white shadow-lg text-black  p-2 flex items-center">
                    <i onClick={() => setToggled(true)} className="material-icons-outlined text-gray-400 cursor-pointer select-none">menu</i>
                    <div className="flex items-center font-bold text-xl mx-4 ml-auto cursor-pointer" onClick={getWeatherInfo}>
                        <i className="material-icons-outlined text-gray-600 cursor-pointer  mt-1">room</i>
                        Indore
                        <i className="material-icons-outlined text-gray-600 cursor-pointer mt-1 ml-2 ">expand_more</i>
                    </div>
                    <i onClick={() => logoutPopup.current.style.display = 'block'} className="material-icons-outlined  text-red-400 text-base shadow-md  rounded-full w-7 transition-all hover:bg-blue-50 cursor-pointer items-center justify-center h-7 flex p-1">power_settings_new</i>
                    <LogoutPopup ref={logoutPopup} />
                    <CitiesList cityList={cityList.list} ref={citiesDropdown} />
                </header>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Home;