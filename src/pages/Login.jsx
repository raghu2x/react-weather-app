import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from '../controls/Input';
import Button from '../controls/Button';
import Checkbox from '../controls/Checkbox';
import { api } from "../axios";
import Alert from '@mui/material/Alert';
function Login() {
    //email: demo@gmail.com
    //password: Demo@123
    const [email, setEmail] = useState('raghav@gmail.com');
    const [password, setPassword] = useState('Demo@123');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onLogin = async (e) => {
        e.preventDefault();
        let res = await api.post("/login", { email, password });
        if (!res.error) {
            localStorage.setItem('auth_token', res.token);
            localStorage.setItem('cityId', res?.liveWeather?.cityId);
            navigate("/");
        } else {
            setErrorMessage(() => res.error);
        }

    };

    return (
        <div className="p-3 bg-white shadow-md max-w-[400px] w-full rounded-2xl text-center relative flex flex-col">
            <span className="text-black font-extrabold text-2xl tracking-tight">Forcasting</span>
            <span className="text-gray-400 text-base font-medium">Enter your email address and password</span>
            <form onSubmit={onLogin} method="post">
                <Input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(x => e.target.value)} />
                <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(x => e.target.value)} />
                <Checkbox lable="Remember me" />
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                <Button lable="login" type="submit" />
            </form>
            <div className="text-black font-medium m-3">
                <span>Don't have an account ? </span>
                <Link to="/signup" className="text-blue-500 cursor-pointer border-b-2">Signup</Link>
            </div>
        </div>
    );
}

export default Login;
