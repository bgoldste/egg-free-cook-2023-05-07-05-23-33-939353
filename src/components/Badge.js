import React, { useState, useEffect } from 'react';

const Badge = () => {
    const names = ['NEW', 'COOL', 'FUN', 'INFO', 'BEST OF', 'HMMM', 'WTF' , ];
    const colors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-info', 'bg-success', 'bg-warning', 'bg-error'];

    const [randomIndex, setRandomIndex] = useState(0);

    useEffect(() => {
        setRandomIndex(Math.floor(Math.random() * names.length));
    }, [names.length]);

    const getRandomColorClass = () => {
        return colors[randomIndex];
    };

    return (
        <div className={`badge ${getRandomColorClass()}`}>
            {names[randomIndex]}
        </div>
    );
};

export default Badge;
