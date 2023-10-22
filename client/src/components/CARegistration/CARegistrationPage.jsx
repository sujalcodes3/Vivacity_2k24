import { useState } from 'react';
import CaForm from './CAForm';
import CaLoginForm from './CaLoginForm';
import VivaLogo from '../../assets/VivaLogo.jpeg';
import { useNavigate } from 'react-router-dom';

const CaRegistrationPage = () => {
    const [DisplayLoginForm, setDisplayLoginForm] = useState(false);

    const showLoginForm = () => {
        setDisplayLoginForm(!DisplayLoginForm);
    };
    const naviage = useNavigate();
    const HomeHandler = () => {
        naviage('/');
    };

    return (
        <div className="flex flex-col items-center ">
            <div className="flex flex-col lg:flex-row lg:mb-8  items-center">
                <div className="flex-row">
                    <img
                        onClick={HomeHandler}
                        className="lg:w-1/2 lg:block hidden  w-1/3 items-center cursor-pointer"
                        src={VivaLogo}
                        alt="Vivacity"
                    ></img>
                </div>
                <div className="text-center lg:mx-32 ">
                    <div className="flex flex-row align-middle items-center">
                        <img
                            onClick={HomeHandler}
                            className="lg:hidden w-1/4 items-center cursor-pointer"
                            src={VivaLogo}
                            alt="Vivacity"
                        ></img>
                        <h1
                            className="lg:text-4xl text-3xl   text-white font-semibold mt-2 mb-1 lg:text-center"
                            style={{
                                fontFamily: 'Maven Pro, sans-serif',
                            }}
                        >
                            Registration
                        </h1>
                    </div>
                    <h1
                        className="text-4xl lg:text-5xl text-white font-semibold mb-4 text-center"
                        style={{
                            fontFamily: 'Maven Pro, sans-serif',
                        }}
                    >
                        Campus Ambassador
                    </h1>
                </div>
                <div className="mb-8">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white text-2xl py-2 px-6 rounded-lg"
                        onClick={showLoginForm}
                    >
                        {DisplayLoginForm ? 'Register' : 'Log In'}
                    </button>
                </div>
            </div>

            <div className="-mt-2">
                {!DisplayLoginForm ? (
                    <CaForm />
                ) : (
                    <CaLoginForm Click={showLoginForm} />
                )}
            </div>
        </div>
    );
};

export default CaRegistrationPage;
