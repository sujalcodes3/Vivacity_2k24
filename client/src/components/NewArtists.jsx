import Artists from "../assets/newArtists.png";
import Background from "../assets/artistsBackground.png";
import char from "../assets/GIFs/charL.gif";
import nostalgia from "../assets/GIFs/nostalgia-speech.gif";

const NewArtists = () => {
    return ( 
        <>
            <div className="w-full bg-cover bg-no-repeat relative bg-center" style={{backgroundImage: "url("+Background+")"}}>
                <img src={Artists} alt="Artists" className="w-full" />
                <div className=" absolute bottom-4 flex flex-col right-[0%] z-50">
                    <img src={nostalgia} alt="dialog" className="lg:w-[300px] w-[150px] relative left-[-15%]"/>
                    <img src={char} alt="character" className="lg:w-[194px] w-[100px]"/>
                </div>
            </div>
            
        </>
     );
}
 
export default NewArtists;