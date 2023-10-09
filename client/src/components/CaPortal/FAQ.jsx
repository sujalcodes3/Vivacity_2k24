import React from 'react';
import FAQItem from './FAQItem';
import FAQdata from './Data/FAQdata';

const FAQ = () => {
    return (
        <div id="faq">
            <div className="mb-10">
                <h1 className="text-3xl md:text-5xl text-white">FAQ's</h1>
            </div>
            <div className="space-y-10 text-white">
                <FAQItem
                    question={FAQdata[0].title}
                    answer={FAQdata[0].content}
                />
                <FAQItem
                    question={FAQdata[1].title}
                    answer={FAQdata[1].content}
                />
                <FAQItem
                    question={FAQdata[2].title}
                    answer={FAQdata[2].content}
                />
                <FAQItem
                    question={FAQdata[3].title}
                    answer={FAQdata[3].content}
                />
                <FAQItem
                    question={FAQdata[4].title}
                    answer={FAQdata[4].content}
                />
                <FAQItem
                    question={FAQdata[5].title}
                    answer={FAQdata[5].content}
                />
            </div>
        </div>
    );
};

export default FAQ;
