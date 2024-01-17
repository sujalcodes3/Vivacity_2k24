import React from 'react';
import ActionButton from './NewHomeActionButton';

const ActionButtons = () => {
    return (
        <div className={`z-30 w-full h-[20%]`}>
            <ActionButton title="Explore Events" />
            <ActionButton title="Register" />
        </div>
    );
};

export default ActionButtons;
