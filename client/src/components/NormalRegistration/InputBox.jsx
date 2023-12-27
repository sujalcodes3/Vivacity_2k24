
const InputBox = ({text,val,change}) => {
    return (
        <div className=" w-5/6 mx-auto">
            <label className=" block mb-5 font-grobold text-white text-left leading-none text-2xl tracking-wider">
                {text}
            </label>
            <input type="text" value={val} onChange={change} className="text-box block w-full py-3 px-6 rounded-[8px] border border-[#4A3FAD]" placeholder={"Enter "+text}/>
        </div>
     );
}
 
export default InputBox;