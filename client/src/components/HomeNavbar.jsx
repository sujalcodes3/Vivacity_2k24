import Button from './NewHomeButton';
import logo from '../assets/logoNew.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './Footer.module.css';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HamsburgerNavbar from './HamsburgerNavbar';

const HomeNavbar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [pathLocation, setPathLocation] = useState('');

    useEffect(() => {
        if (location.pathname.toLowerCase() === '/newabout')
            setPathLocation('about');
        if (location.pathname.toLowerCase() === '/newhome')
            setPathLocation('home');
        if (location.pathname.toLowerCase() === '/events')
            setPathLocation('events');
    }, []);

    const aboutNavbar = (
        <div
            className={`lg:flex hidden ${classes.header} py-4 justify-around items-center `}
        >
            {/* <Button title="About Us" onclick='newAbout'/> */}
            <Button title="Events" onclick='events'/>
            <Button title="Sponsors" onclick='newHome'/>
            {pathLocation === 'about' ? <img src={logo} alt="" style={{cursor: "pointer"}} onClick={()=>{navigate('/newHome')}}/> : null}
            <Button title="Register" onclick='normalregistration'/>
            <Button title="Buy Merch" />
        </div>
    );

    const homeNavbar = (
        <div className={`lg:flex hidden w-full justify-around items-center`}>
            <Button title="About Us" onclick='newAbout'/>
            <Button title="Events" onclick='events'/>
            <Button title="Sponsors" onclick='newHome'/>
            <Button title="Register" onclick='normalregistration'/>
            <Button title="Buy Merch" />
        </div>
    );

    const eventNavbar = (
        <div className={`${classes.eventHeader} py-5 lg:flex hidden w-full justify-around items-center`}>
            <Button title="About Us" onclick='newAbout'/>
            {/* <Button title="Events"onclick='events' /> */}
            <Button title="Sponsors" onclick='newHome'/>
            {pathLocation === "events"? <img src={logo} alt="" style={{cursor: "pointer"}} onClick={()=>{navigate('/newHome')}}/> : null}
            <Button title="Register" onclick='normalregistration'/>
            <Button title="Buy Merch" />
        </div>
    );

    const navbar =
        pathLocation === 'about'
            ? aboutNavbar
            : pathLocation === 'home'
            ? homeNavbar
            : eventNavbar;

    return navbar;
};

export default HomeNavbar;
