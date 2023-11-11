import { Link } from 'react-router-dom';

const Successfull = () => {
    /* S u c c e s s F u l l   R e g i s t r a t i o n */
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl m-4 lg:text-6xl font-semibold text-white">
                    Registration Successful
                </h1>
                <p className="text-cyan-300 text-2xl md:text-3xl lg:text-4xl">
                    See You at Vivacity
                </p>
                <p className="text-cyan-300 text-2xl md:text-3xl lg:text-4xl">
                    Till then be Vivacious
                </p>
            </div>
            <Link to="/" className="text-blue-800 text-2xl m-16">
                Explore More about Vivacity
            </Link>
        </div>
    );
};
export default Successfull;
