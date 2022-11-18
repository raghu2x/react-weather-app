
import React from 'react';
function CitiesList({ cityList = [] }, ref) {
    const hideDropdown = async (e) => {
        if (ref.current !== e.target) return;
        ref.current.style.display = 'none';
    };
    const selectCity = (id, event) => {
        // event.stopPropagation();
        console.log(id);
        localStorage.setItem('cityId', id);
        // ref.current.style.display = 'none';
    };
    return (
        <div ref={ref} onClick={hideDropdown} className="h-screen w-screen bg-black bg-opacity-30 fixed top-0 left-0 hidden">
            <div className=" p-6 bg-white w-fit rounded-lg top-12 absolute right-5  flex flex-col items-center text-black ">
                <div className=" relative">
                    <input type="text" className="!px-8" />
                    <i className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer select-none text-gray-500">mic</i>
                    <i className="material-icons-outlined absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer select-none text-gray-500">west</i>
                </div>
                <div className="max-h-96 overflow-scroll w-full mt-2">
                    {cityList.map((city) => {
                        return (<div key={city._id} onClick={selectCity(city._id)} className="flex items-center text-black font-semibold cursor-pointer  w-full mt-2 hover:bg-gray-100 rounded-lg p-1 px-2">
                            <i className="material-icons-outlined text-gray-600 cursor-pointer mr-2 text-xl mt-1">room</i>
                            <span className="text-black font-bold text-lg">{city.name}</span>
                            <span className="ml-auto">{city?.maxTemperature || 0}° / {city?.minTemperature || 0}°</span>
                        </div>);
                    })}
                </div>
            </div>
        </div>
    );
}

export default React.forwardRef(CitiesList);