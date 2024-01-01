import Form from './Form';
import NormalButton from './NormalButton';

const RegistrationSuccessful = () => {
    return (
        <Form>
            <h1 className="w-5/6 mx-auto mt-8 mb-4 text-center font-grobold text-white text-2xl tracking-wider leading-none md:text-4xl">
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
            <NormalButton text="Home" />
        </Form>
    );
};

export default RegistrationSuccessful;
