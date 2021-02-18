import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    margin: 16px;
`;

const PlayerContainer = styled.div`
    min-height: 75px;
    padding: 16px;
    border: 1px solid grey;
    border-radius: 4px;
    margin: 16px 0;
    border-left: 4px solid grey;
`;


const MatchHistory = ({ matches }) => {

    const sorter = (a, b) => {
        return Number(a.wpm) < Number(b.wpm);
    }

    const renderMatches = () => {
        const sortedMatches = matches.sort(sorter);
        const matchesDiv = sortedMatches.map((match) => (
            <PlayerContainer key={match.matchId}>
                <div>
                    Player Name: {match.playerName}
                </div>
                <div>
                    WPM: {match.wpm}
                </div>
            </PlayerContainer>
        ));
        return matchesDiv
    }

    return (
        <Container>
            <br></br>
            Match History (Sorted based on score):
            {renderMatches()}
        </Container>
    )
}

export default MatchHistory