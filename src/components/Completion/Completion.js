import React from 'react';
import PropTypes from 'prop-types';

const Completion = ({
    completion
}) => {
    return (
        <div>
            Completion: <strong>{Math.floor(completion * 100)}%</strong>
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