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
        <div className="mb-32 relative">
            <h1 className="font-grobold text-center text-black text-3xl font-medium mb-10">
                {data.heading}
            </h1>
            <div className="flex justify-around items-center flex-wrap gap-y-16">
                {data.members.map(e => (
                    <AboutCard
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
                <div className="font-outfit text-lg text-black text-center w-[30%] mx-auto mb-10 leading-6">
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
