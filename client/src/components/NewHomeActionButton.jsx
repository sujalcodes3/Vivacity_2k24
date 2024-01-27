import classes from './actionButton.module.css';

const ActionButton = ({ title }) => {
    return (
        <div
            className={`${classes.actionbutton} cursor-pointer bg-no-repeat h-[4.3125rem] w-[18.5rem] flex font-grobold lg:p-2 items-center justify-center text-white lg:text-2xl text-lg hover:text-navButtonYellow py-1 z-20 object-fill`}
        >
            <p className="drop-shadow-[0_0_4.8px_#5C2E00]">{title}</p>
        </div>
    );
};

export default ActionButton;
