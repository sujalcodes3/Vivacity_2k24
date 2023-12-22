import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Successfull = () => {
    const navigate = useNavigate();

    /* S u c c e s s F u l l   R e g i s t r a t i o n */
    return (
        <div className="flex flex-col justify-center items-center h-screen font-mabry">
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
            <Link to="/" className="text-blue-800 text-2xl m-16 font-mabry">
                Explore More about Vivacity
            </Link>
            <button
                onClick={() => navigate('/calogin')}
                className="flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-6  [background:var(--bg)] [border-radius:var(--radius)] transition-all shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] hover:scale-105 duration-300  w-max  items-center justify-center  hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]"
            >
                <div className="absolute inset-0 overflow-visible [container-type:size]">
                    <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
                        <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                    </div>
                </div>
                <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10 font-mabry">
                    Log In
                </span>
            </button>
        </div>
    );
};
export default Successfull;
