import React from 'react';
import Incentives from './Incentives';
import perk1 from '../../assets/perk1.webp';
import perk2 from '../../assets/perk2.webp';
import perk3 from '../../assets/perk3.webp';
import incen_org_1 from '../../assets/incen_org_1.webp';
import incen_org_3 from '../../assets/incen_org_3.webp';
import incen_org_4 from '../../assets/incen_org_4.webp';
import './CardIncentives.css';
import Brochure from '../../assets/Events-Brochure_organized.pdf';

import classes from '../UserProfile/UserProfile.module.css';

const Card = () => {
    const downloadFileAtURL = url => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    return (
        <div
            className={`${classes.entirebackground} w-full px-6 sm:px-12 md:px-16 py-20`}
        >
            <div>
                <h1 className="text-3xl text-white md:text-5xl mb-10">
                    Incentives
                </h1>
            </div>
            <div className="flex gap-x-8 justify-center cards-incen">
                <Incentives
                    content="As a campus ambassador, you will gain valuable skills and experience that can be added to your resume and portfolio. You can highlight your leadership, communication, and organizational skills as well."
                    coverImage={incen_org_1}
                />
                <Incentives
                    content="Free entry to CA on 15+ participation."
                    coverImage={incen_org_3}
                />
                <Incentives
                    content="Showcase your commitment and leadership as a Campus Ambassador, adding a valuable credential to your resume. And  Stand a chance to win fantastic swags and goodies as a token of appreciation for your dedication."
                    coverImage={incen_org_4}
                />
            </div>
        </div>
    );
};

export default Card;
