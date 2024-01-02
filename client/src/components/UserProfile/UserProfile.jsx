// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CircularProgress from '@mui/material/CircularProgress';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ErrorComponent from '../ErrorComponent';
import VivaLogo from '../../assets/VivaL.webp';
import classes from './UserProfile.module.css';
import AfterMovie from '../AfterMovie';

export default function UserProfile() {
    const navigate = useNavigate();
    const [isAllowed, setIsAllowed] = useState(false);
    const [loading, setLoading] = useState(true);

    const [UserData, setUserData] = useState({});
    let hasRegCandidates = false;

    const BearerToken = Cookies.get('token');

    function copyRefCode(event) {
        navigator.clipboard.writeText(`${UserData.referral_code}`);
    }

    const fetchUser = async () => {
        try {
            const dataToBeSent = {
                encryp_key_sha256: Cookies.get('encryp_key_sha256'),
            };

            if (new Blob([dataToBeSent.encryp_key_sha256]).size !== 24) {
                navigate('/calogin');
                return;
            }

            const tokenToBeSent = `Bearer ${BearerToken}`;

            const res = await fetch(
                `https://vivacity2k24.onrender.com/user/getuser`,
                // `http://localhost:3000/user/getuser`,
                {
                    method: 'POST',
                    body: JSON.stringify(dataToBeSent),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: tokenToBeSent,
                    },
                },
            );

            const data = await res.json();

            console.log(data);

            if (data) {
                setUserData(data);
                if (UserData.referred_candidates?.length > 0) {
                    hasRegCandidates = true;
                }
                setIsAllowed(true);
            } else {
                navigate('/calogin');
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const logoutHandler = event => {
        Cookies.remove('token');
        Cookies.remove('encryp_key_sha256');
        navigate('/');
    };

    useEffect(() => {
        if (!BearerToken) {
            navigate('/calogin');
        }
        fetchUser();
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <CircularProgress size={48} />
                </div>
            ) : isAllowed && UserData ? (
                <div
                    className={`flex flex-col items-center justify-center select-none ${classes.entirebackground}`}
                >
                    <nav
                        className={`flex md:h-32 w-full justify-between items-center px-5 mb-5 md:mb-0`}
                    >
                        <img src={VivaLogo} className={`h-20 w-20`} />
                        <p
                            className={`text-3xl sm:text-5xl text-violet-300 font-bold`}
                        >
                            Campus Ambassador
                        </p>
                        <button
                            onClick={logoutHandler}
                            className={`text-red-400 sm:text-2xl border-2 border-red-400 px-2 py-1 rounded-md hover:bg-red-400 hover:text-white transition-colors duration-150 delay-50`}
                        >
                            Logout
                        </button>
                    </nav>
                    <div
                        className={`sm:w-4/5  h-4/5 md:flex-row flex-col border-4 flex bg-gray-800 border-gray-500 rounded-lg`}
                    >
                        <section
                            className={`md:w-1/3 flex-col md:h-full  flex items-center justify-center`}
                        >
                            <AfterMovie />
                            <div className="flex justify-center mt-6 md:mt-20">
                                <Link to="https://drive.google.com/u/0/uc?id=1uVtV_nn5mweW0a2mZA_mIFrHBNyWodhB&export=download">
                                    <button className="flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-6  [background:var(--bg)] [border-radius:var(--radius)] transition-all shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] hover:scale-105 duration-300  w-max  items-center justify-center  hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]">
                                        <div className="absolute inset-0 overflow-visible [container-type:size]">
                                            <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
                                                <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                                            </div>
                                        </div>
                                        <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                                        <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10 font-mabry">
                                            Brochure
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </section>
                        <section
                            className={`md:w-2/3 h-full border-s-2 border-gray-500  p-6 flex flex-col gap-10`}
                        >
                            <h1
                                className={`text-white sm:text-5xl text-3xl font-bold underline underline-offset-8`}
                            >
                                User Profile
                            </h1>
                            <section
                                className={`w-full text-left items-center flex flex-col sm:gap-6 gap-y-4`}
                            >
                                <div
                                    className={`flex justify-between sm:flex-row flex-col gap-y-4 w-full`}
                                >
                                    <div className="">
                                        <span
                                            className={`font-semibold overflow-x-clip text-xl sm:text-3xl text-gray-200`}
                                        >
                                            Name :
                                        </span>
                                        <span
                                            className={`font-normal text-xl sm:text-3xl text-violet-300`}
                                        >
                                            &nbsp;{UserData.name}
                                        </span>
                                    </div>
                                    <div className="">
                                        <span
                                            className={`font-semibold text-xl sm:text-3xl text-gray-200`}
                                        >
                                            Gender :
                                        </span>
                                        <span
                                            className={`font-normal text-xl sm:text-3xl text-violet-300`}
                                        >
                                            &nbsp;{UserData.gender}
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`flex justify-between w-full sm:flex-row flex-col gap-y-4`}
                                >
                                    <div>
                                        <span
                                            className={`font-semibold text-xl sm:text-3xl text-gray-200`}
                                        >
                                            Email :
                                        </span>
                                        <span
                                            className={`font-normal text-xl sm:text-3xl text-violet-300`}
                                        >
                                            &nbsp;{UserData.email}
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            className={`font-semibold text-xl sm:text-3xl text-gray-200`}
                                        >
                                            Phone No. :
                                        </span>
                                        <span
                                            className={`font-normal text-xl sm:text-3xl text-violet-300`}
                                        >
                                            &nbsp;{UserData.phone_number}
                                        </span>
                                    </div>
                                </div>
                                <div className={`w-full`}>
                                    <span
                                        className={`font-semibold text-xl sm:text-3xl text-gray-200`}
                                    >
                                        College :
                                    </span>
                                    <span
                                        className={`font-normal text-xl sm:text-3xl text-violet-300`}
                                    >
                                        &nbsp;{UserData.college.collegename}
                                    </span>
                                </div>
                                {UserData.college.isSociety == 'Yes' && (
                                    <div className={`w-full`}>
                                        <span
                                            className={`font-semibold text-xl sm:text-3xl text-gray-200`}
                                        >
                                            Head of Club/Society :
                                        </span>
                                        <span
                                            className={`font-normal text-xl sm:text-3xl text-violet-300`}
                                        >
                                            &nbsp;{UserData.college.society}
                                        </span>
                                    </div>
                                )}
                                <div
                                    className={`flex rounded-md w-max bg-gray-500 border-gray-400 border-4 `}
                                >
                                    <span
                                        className={`w-max p-2 text-white font-semibold`}
                                    >
                                        {`${UserData.referral_code}`}
                                    </span>
                                    <button
                                        className={`w-max flex items-center justify-center border-l-4 p-2`}
                                        onClick={copyRefCode}
                                    >
                                        <ContentCopyIcon color="action" />
                                    </button>
                                </div>
                                <div
                                    className={`w-full flex sm:flex-row flex-col gap-4`}
                                >
                                    <span
                                        className={`font-semibold text-xl sm:text-3xl text-gray-200`}
                                    >
                                        Referred Students :
                                    </span>
                                    {UserData.referred_candidates.length > 0 ? (
                                        <div
                                            className={`border-2 border-slate-400 sm:w-3/5 h-max max-h-40 rounded-md  overflow-y-scroll bg-gray-700`}
                                        >
                                            {UserData.referred_candidates.map(
                                                (student, ind) => {
                                                    return (
                                                        <div
                                                            key={ind}
                                                            className={`w-full sm:h-12 h-10 overflow-clip flex justify-between items-center border-b-2 border-slate-400`}
                                                        >
                                                            <div
                                                                className={`text-xl sm:text-3xl w-[75%] h-full overflow-x-clip text-violet-300 font-normal px-2 py-1`}
                                                            >
                                                                {student[0]}
                                                            </div>
                                                            <div
                                                                className={`text-xl sm:text-3xl text-violet-500 font-normal px-4 py-1`}
                                                            ></div>
                                                        </div>
                                                    );
                                                },
                                            )}
                                        </div>
                                    ) : (
                                        <div
                                            className={`border-2 border-slate-400 w-3/5 h-48 rounded-md overflow-scroll flex items-center justify-center text-3xl text-red-400 bg-gray-700`}
                                        >
                                            No referred Candidates
                                        </div>
                                    )}
                                </div>
                            </section>
                        </section>
                    </div>
                </div>
            ) : (
                <ErrorComponent />
            )}
        </>
    );
}
