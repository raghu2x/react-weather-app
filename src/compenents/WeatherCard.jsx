
import React, { useEffect, useState } from 'react';
import api from '../axios';
export default function WeatherCard() {
    let [city, setCity] = useState({});
    let [forecast, setForecast] = useState({});
    const cityId = localStorage.getItem('cityId');
    useEffect(() => {
        async function fetchWeather() {
            let res = await api.get('/live-weather/' + cityId);
            let response = await api.get('/view-small-forecast/' + cityId);
            setCity(() => res.data);
            setForecast(() => response.data);
        }
        fetchWeather();
    }, []);
    return (
        <div className="flex p-5 items-center justify-center h-screen">
            <div className=" p-6 bg-gray-50 bg-opacity-30 w-full max-w-[400px] rounded-lg flex flex-col items-center border border-white shadow-md">
                <div className="flex flex-col items-center">
                    <span className=" font-medium text-lg">Today,{forecast?.time || '7.30 pm'}</span>
                    <span className=" font-medium text-8xl drop-shadow-xl my-2 ml-10">{forecast?.emperature || 0}°</span>
                    <span className=" font-medium text-2xl ">{forecast?.condition || 'sunny'}</span>
                </div>
                <div className=" overflow-scroll w-full mt-2">
                    {Object.keys(city).map((key) => {
                        return (<div key={key} className="flex items-center font-semibold  w-full mt-2 rounded-lg p-1 px-2">
                            <i className="material-icons-outlined  mr-2 text-xl mt-1">air</i>
                            <span className=" font-medium text-lg">{key}</span>
                            <span className="ml-auto font-medium text-lg ">{city[key]}{key.match(/temperature/i) ? "°C" : key.match(/WindSpeed/i) ? ' km/h' : key.match(/humidity/i) ? ' %' : ""}</span>
                        </div>);
                    })}
                </div>
            </div>
        </div>
    );
}
