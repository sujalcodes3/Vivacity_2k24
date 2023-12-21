import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import ErrorComponent from '../ErrorComponent';

import VivaLogo from '../../assets/VivaL.png';
import UserProfileDummy from '../../assets/UserProfileDummy.png';

import classes from './UserProfile.module.css';

export default function UserProfile() {
    const navigate = useNavigate();
    const [isAllowed, setisAllowed] = useState(false);

    const [UserData, setUserData] = useState({});

    let hasRegCandidates = false;

    const BearerToken = localStorage.getItem('token');
    const Usermail = localStorage.getItem('UserEmail');

    function copyRefCode(event) {
        navigator.clipboard.writeText(refCode);
    }
    const fetchUser = async () => {
        try {
            const dataToBeSent = {
                email: Usermail,
            };
            const tokenToBeSent = `Bearer ${BearerToken}`;

            const res = await fetch(`http://localhost:3000/user/getuser`, {
                method: 'POST',
                body: JSON.stringify(dataToBeSent),
                headers: {
                    'Content-Type': 'application/json', // don't forget this

                    Authorization: tokenToBeSent,
                },
            });

            const data = await res.json();
            if (data) {
                setUserData(data);
                if (UserData.referred_candidates?.length > 0) {
                    hasRegCandidates = true;
                }
                setisAllowed(true);
            } else {
                navigate('/calogin');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const logoutHandler = event => {
        localStorage.removeItem('token');
        localStorage.removeItem('UserEmail');
        navigate('/calogin');
    };

    useEffect(() => {
        if (!BearerToken || !Usermail) {
            navigate('/calogin');
        }
        fetchUser();
    }, []);

    return isAllowed && UserData ? (
        <div
            className={`w-screen h-screen flex flex-col items-center justify-center select-none ${classes.entirebackground}`}
        >
            <nav
                className={`flex md:h-32 w-full justify-between items-center px-5`}
            >
                <img src={VivaLogo} className={`h-2/3`} />
                <button
                    onClick={logoutHandler}
                    className={`text-red-400 text-2xl border-2 border-red-400 px-2 py-1 rounded-md hover:bg-red-400 hover:text-white transition-colors duration-150 delay-50`}
                >
                    Logout
                </button>
            </nav>
            <div
                className={`w-4/5 h-4/5 border-4 flex bg-gray-800 border-gray-500 rounded-lg`}
            >
                <section
                    className={`w-1/3 h-full border-r-2 border-gray-500 flex items-center justify-center`}
                >
                    <img src={UserProfileDummy} />
                </section>
                <section className={`w-2/3 h-full p-6 flex flex-col gap-10`}>
                    <h1
                        className={`text-white text-5xl font-bold underline underline-offset-8`}
                    >
                        User Profile
                    </h1>
                    <section
                        className={`w-full text-left items-center flex flex-col gap-6`}
                    >
                        <div className={`flex justify-between w-full`}>
                            <div>
                                <span
                                    className={`font-semibold text-3xl text-gray-200`}
                                >
                                    Name :
                                </span>
                                <span
                                    className={`font-normal text-3xl text-violet-300`}
                                >
                                    &nbsp;{UserData.name}
                                </span>
                            </div>
                            <div>
                                <span
                                    className={`font-semibold text-3xl text-gray-200`}
                                >
                                    Gender :
                                </span>
                                <span
                                    className={`font-normal text-3xl text-violet-300`}
                                >
                                    &nbsp;{UserData.gender}
                                </span>
                            </div>
                        </div>
                        <div className={`flex justify-between w-full`}>
                            <div>
                                <span
                                    className={`font-semibold text-3xl text-gray-200`}
                                >
                                    Email :
                                </span>
                                <span
                                    className={`font-normal text-3xl text-violet-300`}
                                >
                                    &nbsp;{UserData.email}
                                </span>
                            </div>
                            <div>
                                <span
                                    className={`font-semibold text-3xl text-gray-200`}
                                >
                                    Phone No. :
                                </span>
                                <span
                                    className={`font-normal text-3xl text-violet-300`}
                                >
                                    &nbsp;{UserData.phone_number}
                                </span>
                            </div>
                        </div>
                        <div className={`w-full`}>
                            <span
                                className={`font-semibold text-3xl text-gray-200`}
                            >
                                College :
                            </span>
                            <span
                                className={`font-normal text-3xl text-violet-300`}
                            >
                                &nbsp;{UserData.college.collegename}
                            </span>
                        </div>
                        <div
                            className={`flex rounded-md w-max bg-gray-500 border-gray-400 border-4 `}
                        >
                            <span
                                className={`w-max p-2 text-white font-semibold`}
                            >
                                {`#${UserData.referral_code}`}
                            </span>
                            <button
                                className={`w-max flex items-center justify-center border-l-4 p-2`}
                                onClick={copyRefCode}
                            >
                                <ContentCopyIcon color="action" />
                            </button>
                        </div>
                        <div className={`w-full flex gap-4`}>
                            <span
                                className={`font-semibold text-3xl text-gray-200`}
                            >
                                Referred Students :
                            </span>

                            {hasRegCandidates ? (
                                <div
                                    className={`border-2 border-slate-400 w-3/5 h-max max-h-48 rounded-md overflow-scroll bg-gray-700`}
                                >
                                    {UserData.referred_candidates.map(
                                        (student, ind) => (
                                            <div
                                                key={ind}
                                                className={`w-full h-max flex justify-between items-center border-b-2 border-slate-400`}
                                            >
                                                <span
                                                    className={`text-3xl text-violet-300 font-normal px-2 py-1`}
                                                >
                                                    {student}
                                                </span>
                                                <span
                                                    className={`text-3xl text-violet-500 font-normal px-4 py-1`}
                                                >
                                                    Extra
                                                </span>
                                            </div>
                                        ),
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
    );
}
