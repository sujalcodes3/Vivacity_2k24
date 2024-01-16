import Button from './NewHomeButton';

const HomeNavbar = () => {
    return (
        <div className={`flex w-screen justify-around items-center`}>
            <Button title="About Us" />
            <Button title="Events" />
            <Button title="Sponsors" />
            <Button title="Register" />
        </div>
    );
};

export default HomeNavbar;
