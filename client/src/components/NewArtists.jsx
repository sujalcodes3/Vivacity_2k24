import Artists from "../assets/newArtists.png";
import Background from "../assets/artistsBackground.png";
import char from "../assets/GIFs/charL.gif";
import nostalgia from "../assets/GIFs/nostalgia-speech.gif";
import { useScrollTop } from "../hooks/useScroll";

const NewArtists = () => {
    const res = useScrollTop(6000);
    return ( 
        <>
            <div className="w-full h-[80vh] lg:h-min bg-cover bg-no-repeat relative bg-center" style={{backgroundImage: "url("+Background+")"}}>

                <img src={Artists} alt="Artists" className="w-full" />
                <div className={`absolute bottom-[-6%] flex flex-col right-[0%] transition-all duration-400 ${
                    res ? "opacity-100 ease-in" : "opacity-0 ease-out"
                }`}>
                    <img src={nostalgia} alt="dialog" className="lg:w-[300px] w-[150px] relative left-[-15%] top-[20%]"/>
                    <img src={char} alt="character" className="lg:w-[194px]   w-[100px]"/>
                </div>
            </div>
            
        </>
     );
}
 
export default NewArtists;