
import React, { useEffect, useState } from 'react';
import DayWeatherCard from '../compenents/DayWeatherCard';
import api from '../axios';
export default function WeatherCard() {
    let [forecast, setForecast] = useState([]);
    const cityId = localStorage.getItem('cityId');
    useEffect(() => {
        async function fetchWeather() {
            let res = await api.get('/view-other-forecast/' + cityId);
            setForecast(() => res.data || []);
        }
        fetchWeather();
    }, []);
    return (
        <div className="flex p-5 items-start justify-center h-screen flex-col">
            <div className=" overflow-scroll w-full mt-2 flex flex-row gap-4">
                {forecast.map((val, indx) => (<DayWeatherCard key={indx} data={val} />))}
            </div>
            <div className="w-full">
                <div className="text-3xl font-extrabold">Next Forcast</div>
                <div className="flex flex-wrap w-full">
                    <div className="flex items-center p-4 justify-around gap-3 flex-grow w-1/2 min-w-[200px]">
                        <span className=" font-bold text-lg">SEP,29</span>
                        <span className=" font-medium text-4xl">⛅</span>
                        <span className=" font-medium text-lg ">21°</span>
                    </div>
                    <div className="flex items-center p-4 justify-around gap-3 flex-grow w-1/2 min-w-[200px]">
                        <span className=" font-bold text-lg">SEP,29</span>
                        <span className=" font-medium text-4xl">⛅</span>
                        <span className=" font-medium text-lg ">21°</span>
                    </div>

                </div>
            </div>
        </div>
    );
}
