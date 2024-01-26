import classes from './actionButton.module.css';

const ActionButton = ({ title }) => {
    return (
        <div
            className={`${classes.actionbutton} cursor-pointer bg-no-repeat lg:w-[18.5rem] w-[14rem] py-3 lg:h-[4.3125rem] w-2/3 h-max flex font-grobold lg:p-2 items-center justify-center text-white lg:text-2xl text-lg hover:text-navButtonYellow z-20 `}
        >
            <p className="drop-shadow-[0_0_4.8px_#5C2E00]">{title}</p>
        </div>
    );
};

export default ActionButton;
