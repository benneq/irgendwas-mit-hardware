import React from 'react';
import MemoryLatencyCalculator from './MemoryLatencyCalculator';
import MemoryChannelCalculator from './MemoryChannelCalculator';



const Memory: React.FunctionComponent = () => {
    return (
        <>
            <MemoryLatencyCalculator />

            <MemoryChannelCalculator />
        </>
    );
};

export default Memory;
