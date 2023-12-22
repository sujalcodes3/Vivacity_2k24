import React from 'react';
import Incentives from './Incentives';
import perk1 from '../../assets/perk1.jpeg';
import perk2 from '../../assets/perk2.jpeg';
import perk3 from '../../assets/perk3.jpeg';
import incen_org_1 from '../../assets/incen_org_1.jpg';
import incen_org_3 from '../../assets/incen_org_3.jpg';
import incen_org_4 from '../../assets/incen_org_4.jpg';
import './CardIncentives.css';
import Brochure from '../../assets/Events-Brochure_organized.pdf';

import classes from '../UserProfile/UserProfile.module.css';

const Card = () => {

    const downloadFileAtURL = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

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
            <div className='flex justify-center mt-20'>
            <button
                onClick={()=>{downloadFileAtURL(Brochure)}}
                className="flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-6  [background:var(--bg)] [border-radius:var(--radius)] transition-all shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] hover:scale-105 duration-300  w-max  items-center justify-center  hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]">
                    <div className="absolute inset-0 overflow-visible [container-type:size]">
                    <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
                        <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]">
                        </div>
                        </div>
                    </div>
                    <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]">
                    </div>
                    <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10 font-mabry">Brochure</span>
            </button>
            </div>
        </div>
    );
};

export default Card;
