import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorComponent = () => {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex items-center justify-center select-none">
            <div className="text-center items-center justify-center flex flex-col">
                <h2 className="text-4xl font-bold text-red-500 mb-4">
                    Access Denied
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                    You need to be logged in to access this page.
                </p>
                <button
                    onClick={() => navigate('/calogin')}
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
        </div>
    );
};

export default ErrorComponent;
