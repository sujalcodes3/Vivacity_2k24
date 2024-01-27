import classes from './actionButton.module.css';
import { useNavigate } from 'react-router-dom';

const ActionButton = ({ title,onclick }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => {navigate("/"+onclick)}}
            className={`${classes.actionbutton} cursor-pointer bg-no-repeat w-[18.5rem] h-[4.3125rem] flex font-grobold lg:p-2 items-center justify-center text-white lg:text-2xl text-lg py-1 object-fill hover:text-navButtonYellow z-20 `}
        >
            <p className="drop-shadow-[0_0_4.8px_#5C2E00]">{title}</p>
        </div>
    );
};

export default ActionButton;
