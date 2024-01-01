const InputBox = ({ text, value, change, name }) => {
    return (
        <div className=" w-5/6 mx-auto flex flex-col gap-3">
            <label className=" block font-grobold text-white text-left leading-none text-lg md:text-xl tracking-wider">
                {text}
            </label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={change}
                className="text-box block w-full text-white py-1 px-4 md:py-3 md:px-6 rounded-[8px] border border-[#4A3FAD]"
                placeholder={'Enter ' + text}
            />
        </div>
    );
};

export default InputBox;
