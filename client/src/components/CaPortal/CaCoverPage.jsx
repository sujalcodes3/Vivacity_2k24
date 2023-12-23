import './CaPortalPage.css';
import { Link, useNavigate } from 'react-router-dom';
import VivaLogo from '../../assets/VivaL.webp';
import vivalo from "../../assets/VIVACITY.svg"


function CaCoverPage() {
    const navigate = useNavigate();
    return (
        <div className="ca-coverphoto h-full bg-no-repeat bg-cover bg-center">
            <div className="flex Canavbar text-white text-xl h-10 justify-between w-full items-center px-16 pt-12">
                <li className='w-20 h-20 list-none'>
                    <Link to="/"><img
                        className="cursor-pointer"
                        src={VivaLogo}
                        alt="Vivacity"
                    ></img></Link>
                </li>

                <button
                onClick={()=>navigate("/calogin")}
                className="flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-6  [background:var(--bg)] [border-radius:var(--radius)] transition-all shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] hover:scale-105 duration-300  w-max  items-center justify-center  hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]">
                    <div className="absolute inset-0 overflow-visible [container-type:size]">
                    <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
                        <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]">
                        </div>
                        </div>
                    </div>
                    <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]">
                    </div>
                    <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10 font-mabry">Log In</span>
                </button>
            </div>

            <div
                className="flex-col justify-center flex h-screen items-center items text-white sm:w-9/12 w-10/12 mx-auto"
            >
                <img src={vivalo} alt="" />
                <Link
                    to="/caregistration"
                    className="text-xl mt-8 font-semibold px-3 py-2 rounded-lg bg-[#EEB199]  text-[#010516]" style={{fontFamily:"'Orbitron', sans-serif",fontWeight:600}}
                >
                    REGISTER
                </Link>
            </div>
        </div>
    );
}

export default CaCoverPage;
