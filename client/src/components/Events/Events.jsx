// import React from 'react';
import star from '../../assets/Events/star.png';
// Pronite Images
import img1 from '../../assets/Events/img1.png';
import img2 from '../../assets/Events/img2.png';
import img3 from '../../assets/Events/img3.png';
import img4 from '../../assets/Events/img4.png';
import img5 from '../../assets/Events/img5.png';
import img6 from '../../assets/Events/img6.png';
// Dance Events Images
import D1 from '../../assets/Events/D1.png';
import D2 from '../../assets/Events/D2.png';
import D3 from '../../assets/Events/D3.png';
import D4 from '../../assets/Events/D4.png';
import D5 from '../../assets/Events/D5.png';
// Speaking Events
import SA1 from '../../assets/Events/SA1.png';
import SA2 from '../../assets/Events/SA2.png';
import SA3 from '../../assets/Events/SA3.png';
import SA4 from '../../assets/Events/SA4.png';
import SA5 from '../../assets/Events/SA5.png';
import SA6 from '../../assets/Events/SA6.png';
// Drama Events
import Drama1 from '../../assets/Events/Drama1.png';
import Drama2 from '../../assets/Events/Drama2.png';
import Drama3 from '../../assets/Events/Drama3.png';
// Music Events
import Music1 from '../../assets/Events/Music1.png';
import Music2 from '../../assets/Events/Music2.png';
import Music3 from '../../assets/Events/Music3.png';
import Music4 from '../../assets/Events/Music4.png';
import Music5 from '../../assets/Events/Music5.png';
// Photography Events
import P1 from '../../assets/Events/P1.png';
import P2 from '../../assets/Events/P2.png';
import P3 from '../../assets/Events/P3.png';
import P4 from '../../assets/Events/P4.png';
import P5 from '../../assets/Events/P5.png';
import P6 from '../../assets/Events/P6.png';
// Art Events
import Art1 from '../../assets/Events/Art1.png';
import Art2 from '../../assets/Events/Art2.png';
import Art3 from '../../assets/Events/Art3.png';
import Art4 from '../../assets/Events/Art4.png';
import Art5 from '../../assets/Events/Art5.png';
// Quizzing Events
import Quiz1 from '../../assets/Events/Quiz1.png';
import Quiz2 from '../../assets/Events/Quiz2.png';
// Fashion Events
import Fashion1 from '../../assets/Events/Fashion1.png';
// Nukkad Events
import Hunkaar from '../../assets/Events/Hunkaar.png';
// Social Events
import Sahyog from '../../assets/Events/Sahyog.png';
// Exciting Events
import Prom from '../../assets/Events/Prom.png';
import Disco from '../../assets/Events/Disco.png';
import Jamming from '../../assets/Events/Jamming.png';
import Spectrum from '../../assets/Events/Spectrum.png';

import bg1 from '../../assets/Events/bg1.png';

import EventsCard from './EventsCard';

const Events = () => {
    const ProniteImages = [img1, img2, img3, img4, img5, img6];
    const DanceEventImages = [D1, D2, D3, D4, D5];
    const SpeakingEventsImages = [SA1, SA2, SA3, SA4, SA5, SA6];
    const DramaEventsImages = [Drama1, Drama2, Drama3];
    const MusicEventsImages = [Music1, Music2, Music3, Music4, Music5];
    const PhotoEventsImages = [P1, P2, P3, P4, P5, P6];
    const ArtEventImages = [Art1, Art2, Art3, Art4, Art5];
    const QuizImages = [Quiz1, Quiz2];
    const FashionImages = [Fashion1];
    const NukkadImages = [Hunkaar];
    const SocialImages = [Sahyog];
    const ExcitingEvents = [Prom, Disco, Jamming, Spectrum];
    return (
        <div className="">
            <div
                className="flex flex-col "
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div>
                    <EventsCard
                        Title="Pronites"
                        Images={ProniteImages}
                        Validation={false}
                    />
                </div>
                <div>
                    <EventsCard
                        Title="Dance Events"
                        Images={DanceEventImages}
                        Validation={true}
                    />
                </div>
                <div>
                    <EventsCard
                        Title="Speaking Arts"
                        Images={SpeakingEventsImages}
                        Validation={true}
                    />
                </div>

                <div>
                    <EventsCard
                        Title="Drama Events"
                        Images={DramaEventsImages}
                        Validation={true}
                    />
                </div>
                <div>
                    <EventsCard
                        Title="Music Events"
                        Images={MusicEventsImages}
                        Validation={true}
                    />
                </div>
                <div>
                    <EventsCard
                        Title="Photography Events"
                        Images={PhotoEventsImages}
                        Validation={true}
                    />
                </div>
                <div>
                    <EventsCard
                        Title="Art Events"
                        Images={ArtEventImages}
                        Validation={true}
                    />
                </div>
                <div>
                    <EventsCard
                        Title="Quizzing Events"
                        Images={QuizImages}
                        Validation={true}
                    />
                </div>
                <div>
                    <EventsCard
                        Title="Fashion Events"
                        Images={FashionImages}
                        Validation={true}
                    />
                </div>
                <div>
                    <EventsCard
                        Title="Nukkad Events"
                        Images={NukkadImages}
                        Validation={true}
                    />
                </div>
                <div>
                    <EventsCard
                        Title="Social Events"
                        Images={SocialImages}
                        Validation={false}
                    />
                </div>
                <div>
                    <EventsCard
                        Title="Exciting Pursuits"
                        Images={ExcitingEvents}
                        Validation={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default Events;
