import React from 'react';

const Card = ({ icon , text  }) => {
    return (
        <div className=' bg-yellow-500 w-max p-4 m-4'>
            <div>{icon}</div>
            <div>{text}</div>
        </div>
    );
}

export default Card;
