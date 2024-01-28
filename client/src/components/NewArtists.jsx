import { useScrollTop } from "../hooks/useScroll";

const NewArtists = () => {
    const res = useScrollTop(5500);
    return ( 
        <>
            <div className="w-full min-h-[80vh] lg:h-min z-[100] bg-cover bg-no-repeat relative bg-center" style={{backgroundImage: "url("+"https://d3lhw1p67h4h5r.cloudfront.net/artistsBackground.webp"+")"}}>
                <img src="https://d3lhw1p67h4h5r.cloudfront.net/newArtists.webp" alt="Artists" className="w-full" />
                <div className={`absolute bottom-[-6%] flex flex-col right-[0%] transition-all duration-400 ${
                    res ? "opacity-100 ease-in" : "opacity-0 ease-out"
                }`}>
                    <img src="https://d3lhw1p67h4h5r.cloudfront.net/nostalgia-speech.gif" alt="dialog" className="lg:w-[300px] w-[150px] relative left-[-15%] top-[20%]"/>
                    <img src="https://d3lhw1p67h4h5r.cloudfront.net/charL.gif" alt="character" className="lg:w-[194px]   w-[100px]"/>
                </div>
            </div>
            
        </>
     );
}
 
export default NewArtists;
