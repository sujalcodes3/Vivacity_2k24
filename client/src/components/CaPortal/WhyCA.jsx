import React, { useEffect } from 'react';
import data from './Data/IncentivesData';
import './CaPortalPage.css';

import classes from '../UserProfile/UserProfile.module.css';

const WhyCA = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.timeline li');

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function handleScroll() {
            items.forEach(item => {
                if (isElementInViewport(item)) {
                    item.classList.add('in-view');
                } else {
                    item.classList.remove('in-view');
                }
            });
        }

        handleScroll(); // Call the function on initial load
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            className={`${classes.entirebackground} timeline w-full px-6 sm:px-12 md:px-16  py-20`}
        >
            <h1 className="text-3xl text-white md:text-5xl mb-10 font-mabry">
                Why CA?
            </h1>
            <ul>
                {data.map((e, ind) => (
                    <li key={ind}>
                        <div className="hl text-white  backdrop-blur-xl opacity-50 h-[250px] flex md:w-[300px] lg:w-[450px] xl:w-[500px] relative bottom-0 p-4 rounded-xl">
                            <div className="text-center text-xl leading-6 px-2 items-center flex">
                                <p>{e.content}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default WhyCA;
