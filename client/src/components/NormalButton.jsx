import './normalbutton.css';
const NormalButton = ({ text, handler }) => {
    return (
        <button
            className="normal-button rounded-[89.15px] py-2 px-4 my-5 md:text-3xl md:py-2 md:px-6  font-grobold text-xl tracking-wider leading-none text-white "
            onClick={handler}
        >
            {text}
        </button>
    );
};

export default NormalButton;
