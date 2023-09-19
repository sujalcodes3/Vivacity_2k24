const Navbar = () => {
    return ( 
        <header className="flex bg-white text-xl h-10 justify-around items-center">
        
        <img src="/react.svg" alt="" className="block h-8"/>
        
        <nav>
            <ul className="flex space-x-2">
                <li>Events</li>
                <li>CA Portal</li>
                <li></li>
            </ul>
        </nav>
        </header>
     );
}
 
export default Navbar;