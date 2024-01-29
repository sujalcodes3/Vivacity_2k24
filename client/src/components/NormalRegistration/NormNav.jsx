import { useNavigate } from 'react-router-dom';
import V24Logo from '../../assets/viva24Logo.svg';

const NormNav = () => {
    const nav = useNavigate();
    return (
        <header className=" w-full py-12 lg:py-4 flex justify-center items-center">
            <img src={V24Logo} className=" h-[12vh] " onClick={ (e)=>{nav('/')}} />
        </header>
    );
};

export default NormNav;
