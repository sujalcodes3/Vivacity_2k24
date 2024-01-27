import React from 'react';
import ActionButton from './NewHomeActionButton';

const ActionButtons = () => {
    return (
        <div className={`z-30 w-full h-[20%]`}>
            <ActionButton title="Explore Events" onclick='events'/>
            <ActionButton title="Register" onclick='normalregistration'/>
        </div>
    );
};

export default ActionButtons;
