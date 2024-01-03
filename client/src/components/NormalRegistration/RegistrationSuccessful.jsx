import { useNavigate } from 'react-router-dom';
import NormalButton from './NormalButton';

const RegistrationSuccessful = () => {
    const navigate = useNavigate();
    return (
        <div className='normal-form lg:w-3/5 w-[90%] rounded-md mx-auto mb-8 border border-solid border-[#45C7FF]'>
            <h1 className="w-5/6 mx-auto mt-8 mb-4 text-center font-grobold text-white text-2xl tracking-wider leading-none md:text-2xl">
                Congratulations !
                <br />
                You have successfully registered for
                <br />
                Vivacity 2024
            </h1>
            <p className="text-white w-2/3 mx-auto md:text-xl">
                You will shortly be contacted by our team for payment
                instructions.
            </p>
            <NormalButton text="Home" 
            handler={ (e) => {
                navigate("/");
            }}/>
        </div>
    );
};

export default RegistrationSuccessful;
