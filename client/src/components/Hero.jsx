import Background from '../assets/racecar.gif';
const Hero = () => {
    return (
        <div
            className="h-screen snap-start w-full bg-cover bg-no-repeat bg-[52%_0] lg:bg-center"
            style={{ backgroundImage: 'url(' + Background + ')' }}
        >
            <div className="text-white text-center flex-col justify-center items-center space-y-2 pt-[35vh]">
                <h1 className="text-8xl text-purple-200 cursor-default select-none hover:text-purple-300 transition-all duration-300 delay-100 font-bold animate-bounce font-mabry">
                    Road to Vivacity
                </h1>
            </div>
        </div>
    );
};

export default Hero;
