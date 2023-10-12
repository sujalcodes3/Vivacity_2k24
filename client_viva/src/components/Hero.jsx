import Background from '../assets/VivaCrowdEdited.png';
const Hero = () => {
    return ( 
        <div className="h-[85vh] w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage:'url('+Background+')'}}>
            <div className='text-white text-center flex-col justify-center items-center space-y-2 pt-[15vh]'>
                <h1 className='text-8xl text-purple-500 font-bold'> Vivacity 2k24</h1>
                <h2 className='text-4xl'> Wabi Sabi</h2>
            </div>
            
        </div>
     );
}
 
export default Hero;