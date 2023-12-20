import React from 'react';
import Incentives from './Incentives';
import perk1 from '../../assets/perk1.jpeg';
import perk2 from '../../assets/perk2.jpeg';
import perk3 from '../../assets/perk3.jpeg';
import './CardIncentives.css';

const Card = () => {
    return (
        <div className="w-full px-6 sm:px-12 md:px-16 py-20">
            <div>
                <h1 className="text-3xl text-white md:text-5xl mb-10">
                    Incentives
                </h1>
            </div>
            <div className="flex gap-x-8 justify-center cards-incen">
                <Incentives
                    content="As a campus ambassador, you will gain valuable skills and experience that can be added to your resume and portfolio. You can highlight your leadership, communication, and organizational skills as well."
                    coverImage={perk1}
                />
                <Incentives
                    content="Free entry to CA on 15+ participation."
                    coverImage={perk2}
                />
                <Incentives
                    content="Participate in events and contests to win exciting prizes and free swags."
                    coverImage={perk3}
                />
            </div>
        </div>
    );
};

export default Card;
