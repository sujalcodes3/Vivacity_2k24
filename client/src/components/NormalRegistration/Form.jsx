const Form = ({ children, submit }) => {
    return (
        <form
            onSubmit={submit}
            className="normal-form  lg:w-2/5 w-[90%] rounded-md mx-auto border border-solid border-[#45C7FF]"
        >
            {children}
        </form>
    );
};

export default Form;
