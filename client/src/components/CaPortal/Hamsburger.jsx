import React from 'react';

function Hamsburger({ hamsburgerhandler }) {
    return (
        <div>
            <div
                className="cursor-pointer h-6 w-6 mt-2"
                onClick={hamsburgerhandler}
            >
                <i className="linex line1 mb-1"></i>
                <i className="linex line2 mb-1"></i>
                <i className="linex line3"></i>
            </div>
        </div>
    );
}

export default Hamsburger;
