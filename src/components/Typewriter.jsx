import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 70, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const timer = setInterval(() => {
            setDisplayText(text.substring(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(timer);
        }, speed);

        return () => clearInterval(timer);
    }, [started, text, speed]);

    return <span>{displayText}</span>;
};

export default Typewriter;