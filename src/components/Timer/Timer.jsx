import React from 'react';

const Timer = ({ timeRemaining }) => {
    return (
        <div>Time Remaining: <strong>{timeRemaining} secs</strong></div>
    )
}

export default Timer;