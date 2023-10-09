import { useState } from 'react';

const CaLoginForm = props => {
    //   L O G I N   S E C T I O N
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

    const LoginHandler = event => {
        event.preventDefault();
        if (LoginEmail === '' || LoginPassword === '') {
            setWarning('Enter All Fields');
            return;
        }
        // You can use LoginEmail and LoginPassword to check user from DataBase
        console.log(LoginEmail, LoginPassword);
    };

    return (
        <div className="flex justify-center">
            <div className="lg:w-1/8 mt-10 m-4">
                {/* L O G I N   S E C T I O N */}
                <div className="mt-4 p-4 rounded-xl bg-white">
                    <h1 className="text-2xl font-semibold text-black mb-4">
                        Log IN
                    </h1>
                    <input
                        className="w-full px-4 py-2 bg-white text-black border border-black rounded-lg mb-2"
                        type="email"
                        placeholder="Email Id*"
                        name="LoginEmail"
                        onChange={loginValuesChangeHandler}
                        value={LoginEmail}
                    ></input>
                    <input
                        className="w-full px-4 py-2 bg-white text-black border border-black rounded-lg mb-2"
                        type="password"
                        placeholder="Password*"
                        name="LoginPass"
                        onChange={loginValuesChangeHandler}
                        value={LoginPassword}
                    ></input>

                    <p className="text-sky-700 text-center">{Warning}</p>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        onClick={LoginHandler}
                    >
                        Log In
                    </button>
                    <p className="mt-2 text-gray-600">
                        Dont have an account ?&nbsp;
                        {/* eslint-disable-next-line react/prop-types */}
                        <button className="text-cyan-600" onClick={props.Click}>
                            Register Now
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CaLoginForm;
