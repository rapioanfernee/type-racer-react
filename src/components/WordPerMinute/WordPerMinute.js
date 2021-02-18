import React from 'react';
import PropTypes from 'prop-types';

const WordPerMinute = ({ wordPerMinute }) => {
    return (
        <div>WPM (Word per Minute): {wordPerMinute}</div>
    )
}

WordPerMinute.propTypes = {
    wordPerMinute: PropTypes.number,
}

WordPerMinute.defaultProps = {
    wordPerMinute: 0,
}

export default WordPerMinute;