const Form = ({children}) => {
    return ( 
    <form className="normal-form  lg:w-2/5 w-[90%] rounded-md mx-auto mb-8 border border-solid border-[#45C7FF]">
        {children}
    </form> 
    );
}
 
export default Form;