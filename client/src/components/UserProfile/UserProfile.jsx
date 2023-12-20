import UserProfileDummy from '../../assets/UserProfileDummy.png';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const DUMMY_REFERRED_STUDENTS = [
    'John Doe',
    'John Doe',
    'John Doe',
    'John Doe',
    'John Doe',
    'John Doe',
    'John Doe',
    'John Doe',
    'John Doe',
];

export default function UserProfile() {
    const [isAllowed, setisAllowed] = useState(true);
    const [user, setuser] = useState({});
    const refCode = '#ABC123';
    const usermail = localStorage.getItem('UserEmail');
    const Token = localStorage.getItem('token');
    let ErrorComponent = `<h1>Please Login</h1>`;

    const getuser = async (usermail, token) => {
        try {
            const user = await axios.get(
                `http://localhost:3000/user/getuser`,
                {
                    email: `${usermail}`,
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                },
            );
            if (user) {
                setuser(user.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!Token) {
            setisAllowed(false);
        }
        const fetchData = async () => {
            try {
                await getuser(usermail, Token);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (usermail) {
            fetchData();
        }
    }, [usermail]);
    // console.log(user);
    function copyRefCode(event) {
        navigator.clipboard.writeText(refCode);
    }
    let returncomponent = isAllowed ? (
        <div
            className={`w-screen h-screen flex items-center justify-center select-none`}
        >
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
                                    &nbsp;John Doe
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
                                    &nbsp;Female
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
                                    &nbsp;john@doe.com
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
                                    &nbsp;+91 9876543210
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
                                &nbsp;The LNM Institute of Information
                                Technology
                            </span>
                        </div>
                        <div
                            className={`flex rounded-md w-max bg-gray-500 border-gray-400 border-4 `}
                        >
                            <span
                                className={`w-max p-2 text-white font-semibold`}
                            >
                                {refCode}
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
                            <div
                                className={`border-2 border-slate-400 w-3/5 h-max max-h-48 rounded-md overflow-scroll bg-gray-700`}
                            >
                                {DUMMY_REFERRED_STUDENTS.map(student => (
                                    <div
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
                                ))}
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    ) : (
        ErrorComponent
    );
    return returncomponent;
}
