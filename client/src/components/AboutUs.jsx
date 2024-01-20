import About from "../assets/aboutBack.svg"

const AboutUs = () => {
    return ( 
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <div className=" w-2/3 bg-no-repeat bg-cover z-50" style={{backgroundImage: "url("+About+")"}}>
                <h1 className=" font-grobold font-medium text-5xl text-white tracking-wider">About Us</h1>
                <p className=" w-5/6 mx-auto font-outfit text-2xl text-white text-center tracking-wide">Vivacity'24 unfolds "A Whimsical Odyssey" which is a playful journey inspired by classic games, guided by four charming characters. Vivacity’24 invites you to experience the essence of vibrant culture, where diversity and creativity converge in a nostalgic and enchanting atmosphere.</p>
            </div>
        </div>
     );
}
 
export default AboutUs;