import React from 'react';

const StyleButton = ({ title, className }) => {
    return (
        <div>
            <button className={className}>{title}</button>
        </div>
    );
};

export default StyleButton;