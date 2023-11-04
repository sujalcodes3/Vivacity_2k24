import { useEffect, useState } from 'react';
import VivaLogo from '../../assets/VivaLogo.jpeg';
import { useLocation, useNavigate } from 'react-router-dom';

const CaRegistrationPage = () => {
    const [Name, setName] = useState('');
    const navigate = useNavigate();
    const HomeHandler = () => {
        navigate('/');
    };
    const location = useLocation();
    const GoToFormHandler = () => {
        if (location.pathname.includes('caregistration')) {
            setName('Login');
            navigate('/calogin');
        } else {
            setName('Register');
            navigate('/caregistration');
        }
    };
    useEffect(() => {
        if (location.pathname.includes('caregistration')) {
            setName('Login');
        } else {
            setName('Register');
        }
    }, [location.pathname]);

    return (
        <div className="flex flex-col items-center ">
            <div className="flex flex-col lg:flex-row   items-center">
                <div className="flex-row">
                    <img
                        onClick={HomeHandler}
                        className="lg:w-1/2 lg:block hidden  w-1/3 items-center cursor-pointer"
                        src={VivaLogo}
                        alt="Vivacity"
                    ></img>
                </div>
                <div className="text-center lg:mx-32 ">
                    <div className="flex lg:flex-col p-2 text-center  align-middle items-center">
                        <img
                            onClick={HomeHandler}
                            className="lg:hidden w-1/4 items-center cursor-pointer"
                            src={VivaLogo}
                            alt="Vivacity"
                        ></img>
                        <h1
                            className="lg:text-4xl text-3xl   text-white font-semibold text-center  lg:text-center"
                            style={{
                                fontFamily: 'Maven Pro, sans-serif',
                            }}
                        >
                            Registration
                        </h1>
                    </div>
                    <h1
                        className="text-4xl lg:text-5xl text-white font-semibold mb-4"
                        style={{
                            fontFamily: 'Maven Pro, sans-serif',
                        }}
                    >
                        Campus Ambassador
                    </h1>
                </div>
                <div className="my-2 pb-4 lg:m-0">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white text-2xl py-2 px-6 rounded-lg"
                        onClick={GoToFormHandler}
                    >
                        {Name}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaRegistrationPage;
