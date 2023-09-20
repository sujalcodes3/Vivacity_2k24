import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header className="flex bg-white text-xl justify-around items-center h-max py-2 border-b-2 border-gray-300">
          <img src="/react.svg" alt="Logo" className="block h-8"/>
          <nav>
            <ul className="flex space-x-3">
            // TODO : Links are not complete
              <li><Link>Events</Link></li>
              <li><Link>CA Portal</Link></li>
            </ul>
          </nav>
        </header>
     );
}
 
export default Navbar;