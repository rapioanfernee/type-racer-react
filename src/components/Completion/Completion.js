import React from 'react';
import PropTypes from 'prop-types';

const Completion = ({
    completion
}) => {
    return (
        <div>
            Completion: {Math.floor(completion * 100)}%
        </div>
    )
}

Completion.propTypes = {
    completion: PropTypes.number,
}

Completion.defaultProps = {
    completion: 0,
}

export default Completion;