import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextBox = styled.div`
    padding: 16px;
    line-height: 1.5rem;
`

const TextBox = ({ randomParagraph, textColor }) => {
    const renderParagraph = () => {
        const splittedParagraph = randomParagraph.map((character, index) => (
            <span style={{
                color: textColor[index],
                fontWeight: textColor[index] === 'red' ? 600 : 400,
            }}>
                {character}
            </span>
        ));
        return splittedParagraph;
    }

    return (
        <StyledTextBox >
            {renderParagraph()}
        </StyledTextBox>
    )
}

TextBox.propTypes = {
    randomParagraph: PropTypes.arrayOf(PropTypes.string),
    textColor: PropTypes.arrayOf(PropTypes.string),
}

TextBox.defaultProps = {
    randomParagraph: [],
    textColor: [],
}

export default TextBox;