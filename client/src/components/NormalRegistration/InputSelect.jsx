const InputSelect = ({text,options,change,value,name}) => {
    return ( 
        <div className="normal-select w-5/6 mx-auto flex flex-col gap-3">
            <label className=" block font-grobold text-white text-left leading-none text-lg md:text-xl tracking-wider">{text}</label>
            <select onChange={change} value={value} name={name} className="text-white cursor-pointer py-1 px-4 md:py-3 md:px-6 rounded-[8px] border border-[#4A3FAD]">
                <option value="" className="text-white cursor-pointer py-1 px-4 md:py-3 md:px-6">Select {text}</option>
                {options.map((val,idx) => (
                    <option key={idx} value={val} className="text-white cursor-pointer py-1 px-4 md:py-3 md:px-6">
                        {val}
                    </option>
                ))}
            </select>
        </div>   
     );
}
 
export default InputSelect;