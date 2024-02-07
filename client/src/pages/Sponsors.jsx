import HamsburgerNavbar from "../components/HamsburgerNavbar";
import HomeNavbar from "../components/HomeNavbar";
import SponsorComponent from "../components/SponsorComponent";
import back from "./Sponsors.module.css"
import sparx from "../assets/Sponsors/Sparx.svg";
import styling from "../assets/Sponsors/Styling.svg";
import audio from "../assets/Sponsors/Audio.svg";
import banking from "../assets/Sponsors/Banking.svg";
import mall from "../assets/Sponsors/Mall.svg";
import merchandise from "../assets/Sponsors/Merchandise.svg";
import moments from "../assets/Sponsors/Moments.svg";
import platform from "../assets/Sponsors/Platform.svg";
import registration from "../assets/Sponsors/Registration.svg";
import Footer from "../components/Footer";
const Sponsors = () => {
    return ( 
        <div className={`${back.sponsorsbg} w-screen min-h-screen bg-[#010724] overflow-x-hidden relative`}>
            <HomeNavbar/>
            <HamsburgerNavbar/>

            <div className=" w-3/4 mx-auto flex flex-col items-center my-10">
                <SponsorComponent
                    text="Powered By"
                    img={sparx}
                />
            </div>
            <div className=" w-3/4 mx-auto flex flex-wrap justify-evenly gap-20 mb-10">
                <SponsorComponent
                    text="Styling Partner"
                    img={styling}
                />
                <SponsorComponent
                    text="Online Registration Partner"
                    img={registration}
                />
                <SponsorComponent
                    text="Audio Partner"
                    img={audio}
                />
                <SponsorComponent
                    text="Banking Partner"
                    img={banking}
                />
                <SponsorComponent
                    text="Platform Partner"
                    img={platform}
                    link="https://unstop.com/"
                />
                <SponsorComponent
                    text="Mall Partner"
                    img={mall}
                />
                <SponsorComponent
                    text="Rentals Partner"
                    img={sparx}
                />
                <SponsorComponent
                    text="Merchandise Partner"
                    img={merchandise}
                />
                <SponsorComponent
                    text="Radio Partner"
                    img={sparx}
                />
                <SponsorComponent
                    text="Refreshments Partner"
                    img={sparx}
                />
                <SponsorComponent
                    text="Sustainability Partner"
                    img={sparx}
                />
                <SponsorComponent
                    text="Moments Partner"
                    img={moments}
                />
            </div>
            <Footer/>
        </div>
     );
}
 
export default Sponsors;