import { Link } from "react-router-dom";
import Logo from "../assets/VivaL.webp";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./button.css";
const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <header  className="flex bg-transparent text-white text-xl justify-between items-center min-h-[15vh] py-4 border-b-1 border-gray-300 w-full px-24 absolute top-0 left-0">

      <div className="flex items-center justify-center w-[11vw] h-[11vw] lg:w-[11vh] lg:h-[11vh]">
        <img src={Logo} alt="Logo" className=" h-[8vw] lg:h-[8vh]" />
      </div>
      <button
      onClick={(e)=>navigate("/caportal")}
      className="flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-6  [background:var(--bg)] [border-radius:var(--radius)] transition-all shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] hover:scale-105 duration-300  w-max  items-center justify-center  hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]">
        <div className="absolute inset-0 overflow-visible [container-type:size]">
          <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
            <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]">
              </div>
            </div>
        </div>
        <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]">
        </div>
        <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10 font-mabry">CA Portal</span>
      </button>
      
    </header>
  );
};

export default Navbar;
