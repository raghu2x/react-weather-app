import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from '../controls/Input';
import Button from '../controls/Button';
import ErrorMessage from '../controls/ErrorMessage';
import api from "../axios";

export default function Signup() {
    const [name, setName] = useState('raghvendra');
    const [phone, setPhone] = useState('9111329406');
    const [country, setCountry] = useState('india');
    const [email, setEmail] = useState('demo@gmail.com');
    const [password, setPassword] = useState('Demo@123');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onSignup = async (e) => {
        e.preventDefault();
        let res = await api.post("/create-user", { name, phone, country, email, password });
        if (!res.error) {
            navigate("/login",
                // { replace: true }
            );
        } else {
            setErrorMessage(() => res.error);
        }
    };

    return (
        <div className="p-3 bg-white shadow-md max-w-[400px] rounded-2xl text-center relative flex flex-col">
            <span className="text-black font-extrabold text-2xl tracking-tight m-3">Forcasting</span>
            <span className="text-gray-400 text-base font-medium">Enter your email address and password</span>
            <form onSubmit={onSignup}>
                <Input placeholder="Full Name" type="text" value={name} onChange={(e) => setName(x => e.target.value)} />
                <Input placeholder="Phone Number" type="tel" value={phone} onChange={(e) => setPhone(x => e.target.value)} />
                <Input placeholder="Country" type="text" value={country} onChange={(e) => setCountry(x => e.target.value)} />
                <Input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(x => e.target.value)} />
                <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(x => e.target.value)} />
                <ErrorMessage errorMessage={errorMessage} />
                <Button lable="Signup" type="submit" />
            </form>
            <div className="text-sm text-slate-400 font-normal m-3">
                By registering you agree to the Forcasting.
                <span className="font-medium text-blue-900 border-b-2 cursor-pointer"> Terms of Use</span> and
                <span className="font-medium text-blue-900 border-b-2 cursor-pointer"> Privacy Policy.</span>
            </div>
            <div className="text-black font-medium m-3">
                <span>Already have an Account ? </span>
                <Link to="/login" className="text-blue-500 cursor-pointer border-b-2">Login</Link>
            </div>
        </div>
    );
};

// country
// :
// "india"
// createdAt
// :
// "2022-11-17T03:31:45.790Z"
// email
// :
// "raghav@gmail.com"
// name
// :
// "raghavendra"
// password
// :
// "$2b$10$4HSjiaHBIQTERoJMlKEANeaE/qCy9g41pLqZbx11q.edKpup551XW"
// phone
// :
// "9111329406"
// updatedAt
// :
// "2022-11-17T03:31:45.790Z"
// __v
// :
// 0
// _id
// :
// "6375ab21948deba156748338"
// msg
// :
// "profile created"