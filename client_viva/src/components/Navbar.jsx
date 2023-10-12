import { Link } from "react-router-dom";
import Logo from "../assets/VivaLogo.png";
const Navbar = () => {
    return ( 
        <header className="flex bg-transparent text-white text-xl justify-around items-center h-[15vh] py-4 border-b-1 border-gray-300 w-screen">
          <nav>
            <ul className="flex space-x-3">
            {/* // TODO : Links are not complete */}
              <li><Link to="events">Events</Link></li>
            </ul>
          </nav>
          <img src={Logo} alt="Logo" className="block h-5/6"/>
          <Link to="/CA-registration">CA Portal</Link>
        </header>
     );
}
 
export default Navbar;