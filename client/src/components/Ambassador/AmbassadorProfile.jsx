// import React from 'react';
import Person from './Person.jpg';
import Incentives from '../CaPortal/Incentives';
import { Link } from 'react-router-dom';
const AmbassadorProfile = () => {
    return (
        <div className="text-white">
            <div></div>
            <div className="flex items-center">
                <img
                    alt="Person"
                    className="bg-slate-100 rounded-full m-16"
                    src={Person}
                ></img>
                <div className="text-white text-left ml-28">
                    <h1 className="my-4 font-bold text-xl">
                        Hello Dhruv Chandak
                    </h1>
                    <p className="my-4 font-bold text-xl">Points: 100</p>
                    <p className="my-4 font-bold text-xl">
                        Leader Board Position: 3rd
                    </p>
                </div>
            </div>
            <div className="">
                <p className="text-4xl text-center">Assignment of This Week</p>
                <p className="text-xl my-6 ">
                    Share the recent Vivacity Poster to your 4 watsapp Groups
                    and upload Screenshot.
                </p>
                <Link
                    target="_blank"
                    to="https://www.instagram.com/p/CqqFF3QrSa1/?igshid=MmU2YjMzNjRlOQ=="
                    className="text-blue-400 text-xl"
                >
                    Vivacity Poster
                </Link>
                <form action="/action_page.php" className="m-8 font-mabry">
                    <input type="file" id="myFile" name="filename" />
                    <input type="submit" />
                </form>
            </div>
            <Incentives />
        </div>
    );
};
export default AmbassadorProfile;
