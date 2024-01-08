import { useState, useEffect } from 'react';
import Background from '../assets/Noise2.gif';
import Artists from '../assets/desktop-artists.webp';
import ArtistsMob from '../assets/mobile-artists.webp';

const ArtistLineup = () => {
    const [isDesktop, setIsDesktop] = useState(true);

    window.addEventListener('resize', () => {
        if (window.innerWidth < 912) {
            setIsDesktop(false);
        } else {
            setIsDesktop(true);
        }
    });

    useEffect(() => {
        if (window.innerWidth < 912) {
            setIsDesktop(false);
        }
    }, []);

    return (
        <>
            <div
                className="min-h-screen lg:h-screen snap-start flex items-center justify-center bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: 'url(' + Background + ')' }}
            >
                <img
                    className="lg:h-screen w-full"
                    src={isDesktop ? Artists : ArtistsMob}
                    alt="Artists"
                />
            </div>
        </>
    );
};

export default ArtistLineup;
