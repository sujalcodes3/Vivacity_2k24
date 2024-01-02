import './normalbutton.css';
const NormalButton = ({ text, handler, name }) => {
    return (
        <button
            className="normal-button rounded-[89.15px] py-2 px-4 my-5 md:text-xl md:py-2 md:px-4  font-grobold text-xl tracking-wider leading-none text-white "
            name={name}
            onClick={handler}
        >
            {text}
        </button>
    );
};

export default NormalButton;
