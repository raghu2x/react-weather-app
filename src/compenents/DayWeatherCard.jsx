const cloudIcons = {
    sunny: '🌤️',
    'party claudy': '⛅',
    cloudy: '☁️',
    rainy: '🌧️',
    thunder: '⛈️',
    stormy: '🌥️',
    snow: '🌦️ ',
};
export default function DayWeatherCard({ temperature = "0", condition = "sunny", time = '17.00' }) {
    return (
        <div className="flex flex-col items-center  p-6 bg-gray-50 bg-opacity-30 rounded-3xl border border-white shadow-md">
            <span className=" font-medium text-lg">{temperature}°C</span>
            <span className=" font-medium text-5xl  my-4">{cloudIcons?.[condition]}</span>
            <span className=" font-medium text-lg ">{time}</span>
        </div>

    );
}
