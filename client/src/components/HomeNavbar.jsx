import Button from './NewHomeButton';
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
        if (location.pathname.toLowerCase() === '/about')
            setPathLocation('about');
        if (location.pathname.toLowerCase() === '/')
            setPathLocation('home');
        if (location.pathname.toLowerCase() === '/events')
            setPathLocation('events');
        if (location.pathname.toLowerCase() === '/registration')
            setPathLocation('registration');
            if (location.pathname.toLowerCase() === '/sponsors')
            setPathLocation('sponsors');
    }, []);

    const aboutNavbar = (
        <div
            className={`lg:flex hidden ${classes.header} py-4 justify-around items-center `}
        >
            {/* <Button title="Our Team" onclick='about'/> */}
            <Button title="Events" onclick='events'/>
            <Button title="Sponsors" onclick='sponsors'/>
            {pathLocation === 'about' ? <img src='https://d3lhw1p67h4h5r.cloudfront.net/logoNew.svg' alt="" style={{cursor: "pointer"}} onClick={()=>{navigate('/')}}/> : null}
            <Button title="Register" onclick='registration'/>
            <Button title="Buy Merch" />
        </div>
    );

    const homeNavbar = (
        <div className={`lg:flex hidden w-full justify-around items-center`}>
            <Button title="Our Team" onclick='about'/>
            <Button title="Events" onclick='events'/>
            <Button title="Sponsors" onclick='sponsors'/>
            <Button title="Register" onclick='registration'/>
            <Button title="Buy Merch" />
        </div>
    );

    const eventNavbar = (
        <div className={`${classes.eventHeader} py-5 lg:flex hidden w-full justify-around items-center`}>
            <Button title="Our Team" onclick='about'/>
            {/* <Button title="Events"onclick='events' /> */}
            <Button title="Sponsors" onclick='sponsors'/>
            {pathLocation === "events"? <img src='https://d3lhw1p67h4h5r.cloudfront.net/logoNew.svg' alt="" style={{cursor: "pointer"}} onClick={()=>{navigate('/')}}/> : null}
            <Button title="Register" onclick='registration'/>
            <Button title="Buy Merch" />
        </div>
    );

    const sponsorNavbar = (
        <div className={` bg-[white] bg-opacity-10 py-5 lg:flex hidden w-full justify-around items-center`}>
            <Button title="Our Team" onclick='about'/>
            <Button title="Events" onclick='events'/>
            {pathLocation === "sponsors"? <img src='https://d3lhw1p67h4h5r.cloudfront.net/logoNew.svg' alt="" style={{cursor: "pointer"}} onClick={()=>{navigate('/')}}/> : null}
            <Button title="Register" onclick='registration'/>
            <Button title="Buy Merch" />
        </div>
    );

    const registrationNavbar = (
        <div className={`${classes.eventHeader} py-5 lg:flex hidden w-full justify-around items-center`}>
            <Button title="Our Team" onclick='about'/>
            {/* <Button title="Events"onclick='events' /> */}
            <Button title="Sponsors" onclick='sponsors'/>
            {pathLocation === "registration"? <img src='https://d3lhw1p67h4h5r.cloudfront.net/logoNew.svg' alt="" style={{cursor: "pointer"}} onClick={()=>{navigate('/')}}/> : null}
            <Button title="Events" onclick='events'/>
            <Button title="Buy Merch" />
        </div>
    );

    const navbar =
        pathLocation === 'about'
            ? aboutNavbar
            : pathLocation === 'home'
            ? homeNavbar
            : pathLocation === 'registration' 
            ? registrationNavbar
            : pathLocation === 'sponsors'
            ? sponsorNavbar
            : eventNavbar;

    return navbar;
};

export default HomeNavbar;
