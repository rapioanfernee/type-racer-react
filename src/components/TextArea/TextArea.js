import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
    background-color: transparent;
    border: 2px solid #f1f1f1;
    outline: none;
    height: 8rem;
    resize: none;
    padding: 16px;
    &:focus{
        border-color: black;
    }
`

const TextArea = ({ handleInputChange, isFinished }) => {
    return (
        <StyledTextArea disabled={isFinished} onChange={handleInputChange} autoFocus></StyledTextArea>
    )
}

TextArea.propTypes = {
    handleInputChange: PropTypes.func,
    isFinished: PropTypes.bool,
}

TextArea.defaultProps = {
    handleInputChange: () => { },
    isFinished: false,
}

export default TextArea;