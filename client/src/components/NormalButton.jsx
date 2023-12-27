import './normalbutton.css';
const NormalButton = ({text,handler}) => {
    return ( 
        <button className="normal-button rounded-[89.15px] py-[15.42px] px-[28.15px] font-grobold text-[28.15px] tracking-wider leading-none text-white " onClick={handler}>
            {text}
        </button>
     );
}
 
export default NormalButton;