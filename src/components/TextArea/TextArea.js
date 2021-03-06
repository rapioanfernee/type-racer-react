import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
    background-color: transparent;
    border: 2px solid #f1f1f1;
    outline: none;
    height: 8rem;
    resize: none;
    padding: 8px;
    margin: 8px;
    &:focus{
        border-color: black;
    }
`

const TextArea = ({ handleInputChange, isFinished, textAreaRef }) => {
    useEffect(() => {
        if (isFinished) {
            textAreaRef.current.blur();
        }
    }, [isFinished])
    return (
        <StyledTextArea
            ref={textAreaRef}
            disabled={isFinished}
            onChange={handleInputChange}
            onPaste={(e) => e.preventDefault()}
            placeholder="Start typing the text above"
        >
        </StyledTextArea>
    )
}

TextArea.propTypes = {
    handleInputChange: PropTypes.func,
    isFinished: PropTypes.bool,
    textAreaRef: PropTypes.object,
}

TextArea.defaultProps = {
    handleInputChange: () => { },
    isFinished: false,
    textAreaRef: {}
}

export default TextArea;