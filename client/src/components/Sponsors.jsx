import Sponsors from '../assets/sponsors01.png';
import SponsorsMob from '../assets/mobile-sponsors.png';
import Background from '../assets/Noise2.gif';
import { useEffect, useState } from 'react';

const Sponsor = () => {

    const [isMobile,setIsMobile] = useState(false);

    window.addEventListener("resize", ()=>{
        if(window.innerWidth < 912){
            setIsMobile(true);
        }
        else{
            setIsMobile(false);
        }
    });
    
    useEffect( ()=>{
        if(window.innerWidth < 912){
            setIsMobile(true);
        }
    } , []);

    return ( 
        <>  
            <div className='min-h-screen snap-start flex items-center justify-center bg-cover bg-no-repeat bg-center' style={{backgroundImage:'url('+Background+')'}}>
                <img className='w-full' src={ isMobile?SponsorsMob:Sponsors} alt="Sponsors" />
            </div>
        </>
     );
}
 
export default Sponsor;