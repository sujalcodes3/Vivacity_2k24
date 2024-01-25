import { Link } from 'react-router-dom';
import Button from './NewHomeButton';

const HomeNavbar = () => {
    return (
        <div className={`flex  justify-around items-center`}>
            <Link>
                <Button title="About Us" />
            </Link>
            <Link to="/events">
                <Button title="Events" />
            </Link>
            <Button title="Sponsors" />
            <Link to="/normalregistration">
                <Button title="Register" />
            </Link>
        </div>
    );
};

export default HomeNavbar;
