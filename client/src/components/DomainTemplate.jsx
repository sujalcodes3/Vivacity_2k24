import React, { useEffect, useState } from 'react';
import AboutCard from './AboutCard';
import Star from './Star';

const DomainTemplate = ({ data }) => {
    const [status, setStatus] = useState(false);

    useEffect(e => {
        if (
            data.heading === 'MENTORS' ||
            data.heading === 'CULTURAL COUNCIL' ||
            data.heading === 'COVERAGE TEAM' ||
            data.heading === 'ARTISTS MANAGEMENT AND LOGISTICS TEAM' ||
            data.heading === 'DEVELOPMENT TEAM'
        )
            setStatus(true);
        else setStatus(false);
    }, []);

    return (
        <div className="sm:mb-32 mb-20 relative sm:mx-28 mx-1">
            <h1 className="font-grobold text-center text-black text-xl sm:text-3xl font-medium sm:mb-10 mb-5">
                {data.heading}
            </h1>
            <div className="flex w-full justify-center items-center flex-wrap lg:gap-x-[100px] gap-x-[25px] sm:gap-y-16 gap-y-6">
                {data.members.map((e,key) => (
                    <AboutCard
                        key = {key}
                        imag={e.img}
                        name={e.name}
                        role={e.role}
                        phone={e.phone}
                        insta={e.insta}
                        mail={e.mail}
                    />
                ))}
            </div>
            {data.team ? (
                <div className="font-outfit text-xs sm:text-lg text-black text-center  md:w-[50%] sm:w-[30%] w-[95%] mx-auto leading-4 sm:leading-6 mt-5">
                    <h1 className="fo font-medium">TEAM MEMBERS:</h1>
                    <p className="font-normal">{data.team}</p>
                </div>
            ) : null}
            {status ? (
                <Star left={'left-[320px]'} top={'top-[0px]'} right={''} />
            ) : (
                <Star left={''} top={'top-[0px]'} right={'right-[200px]'} />
            )}
        </div>
    );
};

export default DomainTemplate;
