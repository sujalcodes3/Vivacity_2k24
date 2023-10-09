import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6 border-b-2 bottom-solid border-slate-200 pb-2">
            <div
                className="flex justify-between text-xl items-center cursor-pointer text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="font-bold text-left mr-2">{question}</div>
                <div
                    className={`font-bold fas fa-chevron-down transfor ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                >
                    {isOpen ? '-' : '+'}
                </div>
            </div>
            {isOpen && <div className="mt-2 text-left">{answer}</div>}
        </div>
    );
};

export default FAQItem;
