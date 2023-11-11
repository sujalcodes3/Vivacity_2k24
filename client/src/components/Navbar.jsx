import { Link } from "react-router-dom";
import Logo from "../assets/VivaL.png";
import { useRef } from "react";
const Navbar = () => {
    const headerRef = useRef();
    
    const changeColor = () => {
        if(window.scrollY > 100){
          headerRef.current.classList.remove("bg-transparent");
          headerRef.current.classList.add("bg-inherit");
        }
        else{
          headerRef.current.classList.remove("bg-inherit");
          headerRef.current.classList.add("bg-transparent");
        }
    }
    
    window.addEventListener('scroll',changeColor);

    return ( 
        <header ref={headerRef} className="flex  bg-transparent text-white text-xl justify-between px-24 items-center min-h-[15vh] py-4 border-b-1 border-gray-300 w-screen fixed top-0 left-0">
          
          <div className=" bg-white rounded-full w-[11vh] h-[11vh] flex items-center justify-center">
            <img src={Logo} alt="Logo" className=" h-[8vh]"/>
          </div>
          
          <div className='list-none bg-blue-500 hover:bg-blue-600 text-white text-2xl py-2 px-6 rounded-lg '>
            <Link to="/caportal">CA Portal</Link>
          </div>
        </header>
     );
}
 
export default Navbar;