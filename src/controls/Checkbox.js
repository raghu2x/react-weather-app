
export default function Checkbox({ lable, disable = false }) {
    return (
        <div className="flex items-center gap-2 m-3">
            <input id="checkbox" className="checkbox accent-blue-500 w-5" type='checkbox' disabled={disable} />
            <label htmlFor="checkbox" className="select-none font-semibold text-sm text-gray-400 tracking-wider text-dark">{lable}</label>
        </div>
    );
}

