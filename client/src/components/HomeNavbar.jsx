import Button from './NewHomeButton';
import logo from '../assets/logoNew.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './Footer.module.css';
import { useMediaQuery } from 'react-responsive';
import HamsburgerNavbar from './HamsburgerNavbar';

const HomeNavbar = () => {
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
            <Button title="About Us" />
            <Button title="Events" />
            {pathLocation === 'about' ? <img src={logo} alt="" /> : null}
            <Button title="Sponsors" />
            <Button title="Register" />
        </div>
    );

    const homeNavbar = (
        <div className={`lg:flex hidden w-full justify-around items-center`}>
            <Button title="About Us" />
            <Button title="Events" />
            <Button title="Sponsors" />
            <Button title="Register" />
        </div>
    );

    const eventNavbar = (
        <div
            className={`${classes.eventHeader} py-5 lg:flex hidden w-full justify-around items-center`}
        >
            <Button title="About Us" />
            <Button title="Events" />
            {pathLocation === 'events' ? <img src={logo} alt="" /> : null}
            <Button title="Sponsors" />
            <Button title="Register" />
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
