import Logo from "../assets/VivaLogo.png";

const Footer = () => {
    return ( 
    <>
        <footer className="flex bg-stone-950 text-white justify-around items-center px-4 py-12 border-t border-gray-300">
            <div className=" grow ">
                <h1 className="text-xl">Contact Us</h1>
                <p className="text-base mt-4">Name 1 <br /> 910077868</p>
                <p className="text-base mt-2 mb-4">Name 2 <br /> 840978643</p>
            </div>
            <div className=" grow ">
                <img src={Logo} alt="Viva Logo" />
            </div>
            <div className=" border-gray-500">
                <div className=" flex-col">
                    Social Media Icons
                </div>
            </div>
        </footer>
    </> 
    );
}
 
export default Footer;