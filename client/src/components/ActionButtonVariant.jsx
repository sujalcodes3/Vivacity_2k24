import classes from './actionButton.module.css';

const ActionButtonVariant = ({ title }) => {
    return (
        <div
            className={`${classes.actionbuttonVariant} cursor-pointer bg-no-repeat w-[338px] h-[79px] flex font-grobold p-2 items-center justify-center text-white text-2xl hover:text-navButtonYellow z-10 `}
        >
            <p className="drop-shadow-[0_0_4.8px_#5C2E00]">{title}</p>
        </div>
    );
};

export default ActionButtonVariant;