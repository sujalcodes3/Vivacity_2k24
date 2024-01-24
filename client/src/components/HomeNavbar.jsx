import Button from './NewHomeButton';
import logo from '../assets/logoNew.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HomeNavbar = () => {
    const location = useLocation();
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (location.pathname === '/newAbout') setStatus(true);
    }, []);

    return (
        <div className={`flex  justify-around items-center`}>
            <Button title="About Us" />
            <Button title="Events" />
            {status ? <img src={logo} alt=""/> : null}
            <Button title="Sponsors" />
            <Button title="Register" />
        </div>
    );
};

export default HomeNavbar;
