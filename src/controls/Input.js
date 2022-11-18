import { useState } from "react";

export default function Input({ type, placeholder, value, onChange }) {
    let [showPassword, togglePassword] = useState(false);
    const toggle = () => togglePassword(() => !showPassword);

    return (
        <div className="relative outline-none m-3">
            <input
                onChange={onChange}
                value={value}
                type={showPassword ? "text" : type}
                className="font-semibold text-sm  outline-none  w-full  py-3 px-3 tracking-wider text-dark border-2 rounded-xl"
                placeholder={placeholder}
                autoComplete={placeholder} />
            {type === 'password' &&
                <span
                    onClick={toggle}
                    className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none">
                    {!showPassword ? 'visibility' : 'visibility_off'}
                </span>
            }
        </div>
    );
}

