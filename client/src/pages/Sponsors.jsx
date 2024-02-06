import HamsburgerNavbar from "../components/HamsburgerNavbar";
import HomeNavbar from "../components/HomeNavbar";
import SponsorComponent from "../components/SponsorComponent";
import back from "./Sponsors.module.css"
import sparx from "../assets/Sponsors/Sparx.svg"
const Sponsors = () => {
    return ( 
        <div className={`${back.sponsorsbg} w-full min-h-screen bg-[#010724]`}>
            <HomeNavbar/>
            <HamsburgerNavbar/>

            <div className=" w-1/3 mx-auto flex flex-col items-center gap-[245px] mt-10">
                <SponsorComponent
                    text="Powered By"
                    img={sparx}
                />
            </div>

        </div>
     );
}
 
export default Sponsors;