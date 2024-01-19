import Artists from "../assets/newArtists.png"
import Background from "../assets/artistsBackground.png"

const NewArtists = () => {
    return ( 
        <>
            <div className="w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url("+Background+")"}}>
                <img src={Artists} alt="Artists" className="w-full" />
            </div>
            
        </>
     );
}
 
export default NewArtists;