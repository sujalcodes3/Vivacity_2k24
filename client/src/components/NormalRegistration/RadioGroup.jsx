
const RadioButton = ({text,name,change}) =>{
    return(
        <div>
            <input type="radio" name={name} value={text} onChange={change}/>
            <label className=" ml-4 text-white">{text}</label>
        </div>
    );
}

const RadioGroup = ({name,options,heading,change}) => {
    return ( 
        <>
            <label className=" block mb-3 font-grobold text-white text-left leading-none text-lg md:text-xl tracking-wider">
            {heading}
            </label>
            <div className="flex gap-12">
            {options.map( (val,idx) => <RadioButton key={idx} name={name} text={val} change={change}/>)}
            </div>
        </>
     );
}
 
export default RadioGroup;