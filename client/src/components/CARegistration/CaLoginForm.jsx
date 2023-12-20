import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import CaRegistrationPage from './CARegistrationPage';
// import CaRegistrationPage from './CARegistrationPage';

const CaLoginForm = () => {
    //   L O G I N   S E C T I O N
    const navigate = useNavigate();
    const [LoginEmail, setLoginEmail] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');
    const [Warning, setWarning] = useState('');
    const loginValuesChangeHandler = event => {
        event.preventDefault();
        const { name, value } = event.target;

        if (name === 'LoginEmail') {
            setLoginEmail(value);
        } else if (name === 'LoginPass') {
            setLoginPassword(value);
        }
    };

    const LoginHandler = async event => {
        event.preventDefault();
        if (LoginEmail === '' || LoginPassword === '') {
            setWarning('Enter All Fields');
            return;
        }
        try {
            const response = await axios.post(
                `http://localhost:3000/auth/login`,
                {
                    email: LoginEmail,
                    password: LoginPassword,
                },
            );
            console.log(response);
            localStorage.setItem('UserEmail', LoginEmail);
            localStorage.setItem('token', response.data.token);
            navigate('/userprofile');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center font-mabry ">
            <div className="lg:w-1/8 mt-10 m-4">
                {/* L O G I N   S E C T I O N */}
                <div className="mt-4 p-4 rounded-xl">
                    <h1 className="text-2xl font-semibold  text-gray-100 mb-4">
                        Log IN
                    </h1>
                    <div className="text-left font-mabry">
                        <label className="text-white ">
                            Email ID
                            <span className="text-red-500 m-2">*</span>
                        </label>

                        <input
                            className="w-full px-4 py-2 my-2 bg-gray-800 text-gray-100 border border-black rounded-lg mb-2"
                            type="email"
                            placeholder="Email Id *"
                            name="LoginEmail"
                            onChange={loginValuesChangeHandler}
                            value={LoginEmail}
                        ></input>
                    </div>
                    <div className="text-left">
                        <label className="text-white ">
                            Password
                            <span className="text-red-500 m-2">*</span>
                        </label>
                        <input
                            className="w-full px-4 py-2 my-2 bg-gray-800 text-gray-100 border border-black rounded-lg mb-2"
                            type="password"
                            placeholder="Password *"
                            name="LoginPass"
                            onChange={loginValuesChangeHandler}
                            value={LoginPassword}
                        ></input>
                    </div>

                    <p className="text-sky-700 text-center">{Warning}</p>

                    <div className="flex justify-center">
                        <button
                            onClick={LoginHandler}
                            className="flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-6  [background:var(--bg)] [border-radius:var(--radius)] transition-all shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] hover:scale-105 duration-300  w-max  items-center justify-center  hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]"
                        >
                            <div className="absolute inset-0 overflow-visible [container-type:size]">
                                <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
                                    <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                                </div>
                            </div>
                            <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                            <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10 font-mabry">
                                Log In
                            </span>
                        </button>
                    </div>

                    <p className="mt-2 text-gray-600">
                        Dont have an account ?&nbsp;
                        {/* eslint-disable-next-line react/prop-types */}
                        <button className="text-cyan-600">
                            <Link to="/caregistration">Register Now</Link>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CaLoginForm;
