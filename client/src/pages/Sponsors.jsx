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
import rental from "../assets/Sponsors/Rentals.png";
import radio from "../assets/Sponsors/Radio.png";
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
                    link = "https://www.relaxofootwear.com/collection/brand-sparx"
                />
            </div>
            <div className=" w-3/4 mx-auto flex flex-wrap justify-evenly gap-20 mb-10">
                <SponsorComponent
                    text="Styling Partner"
                    img={styling}
                    link = "https://www.philips.co.in/c-p/QP2525_10/oneblade-face"
                />
                <SponsorComponent
                    text="Online Registration Partner"
                    img={registration}
                    link = "https://slickapp.co/"
                />
                <SponsorComponent
                    text="Audio Partner"
                    img={audio}
                    link = "https://zebronics.com/"
                />
                <SponsorComponent
                    text="Banking Partner"
                    img={banking}
                    link = "https://www.icicibank.com/"
                />
                <SponsorComponent
                    text="Platform Partner"
                    img={platform}
                    link="https://unstop.com/"
                />
                <SponsorComponent
                    text="Mall Partner"
                    img={mall}
                    link = "https://www.instagram.com/pinksquaremall/?hl=en"
                />
                <SponsorComponent
                    text="Rentals Partner"
                    img={rental}
                    link="https://freedo.rentals/"
                />
                <SponsorComponent
                    text="Merchandise Partner"
                    img={merchandise}
                    link = "https://rayacloset.in/"
                />
                <SponsorComponent
                    text="Radio Partner"
                    img={radio}
                    link="https://www.radiocity.in/"
                />
                {/*
                <SponsorComponent
                    text="Refreshments Partner"
                    img={sparx}
                />
                <SponsorComponent
                    text="Sustainability Partner"
                    img={sparx}
                /> */}
                <SponsorComponent
                    text="Moments Partner"
                    img={moments}
                    link = "https://www.instax.in/"
                />
            </div>
            <Footer/>
        </div>
     );
}
 
export default Sponsors;