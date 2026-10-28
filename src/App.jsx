import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TextBox from "./components/TextBox/TextBox";
import Timer from "./components/Timer/Timer"
import WordPerMinute from "./components/WordPerMinute/WordPerMinute"
import TextArea from './components/TextArea/TextArea'
import Completion from "./components/Completion/Completion"
import MatchHistory from "./components/MatchHistory/MatchHistory"
import { v4 } from 'uuid';

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 16px;
  width: 100%;
`;

const RetryButton = styled.button`
  background-color: #f0f0f0;
  border-radius: 4px;
  border: 1px solid black;
  cursor: pointer;
  margin: 8px;
  &:focus{
    border: 1px solid grey;
  }
`;

const SaveButton = styled.button`
  background-color: rgb(200,255,200);
  border-radius: 4px;
  border: 1px solid black;
  cursor: pointer;
  margin: 8px;
  &:focus{
    border: 1px solid grey;
  }
  &:disabled{
    pointer-events: none;
    opacity: 0.54;
    cursor: initial;
  }
`;

const StyledNameInput = styled.input`
  height: 16px;
  padding: 4px;
`

const RANDOM_PARAGRAPH_API_URL = 'https://baconipsum.com/api/';
const FAKE_SERVER_API = "https://fake-type-racer-server.herokuapp.com/matches"

const App = () => {
  const MAX_TIME_IN_SECONDS = 180;

  const [randomParagraph, setRandomParagraph] = useState([]);
  const [textColor, setTextColor] = useState([]);
  const [matches, setMatches] = useState([]);
  const [time, setTime] = useState(null);
  const [error, setError] = useState(null);
  const [wordPerMinute, setWordPerMinute] = useState(0);
  const [completion, setCompletion] = useState(0);

  const textAreaRef = useRef(null);
  const intervalRef = useRef(null);
  const totalRef = useRef(0);

  const isFinished = MAX_TIME_IN_SECONDS - time <= 0;

  const getTimerTime = (startTime) => {
    return Math.floor((new Date - startTime) / 1000)
  }

  const startTimer = () => {
    const startTime = new Date();
    intervalRef.current = setInterval(() => {
      if (!isFinished) {
        setTime(getTimerTime(startTime));
      }
    }, 1000);
  }

  const handleInputChange = (e) => {
    if (!isFinished) {
      if (!intervalRef.current) {
        startTimer();
      }
      const splittedTargetValue = e.target.value.split('');
      const textColorCopy = [...textColor];
      totalRef.current = 0;
      randomParagraph.forEach((value, index) => {
        if (!splittedTargetValue[index]) {
          textColorCopy[index] = 'red';
          setTextColor(textColorCopy);
        }
        else if (value === splittedTargetValue[index]) {
          textColorCopy[index] = 'green';
          setTextColor(textColorCopy);
          totalRef.current += 1;
        }
        else {
          textColorCopy[index] = 'red';
          setTextColor(textColorCopy);
          totalRef.current += 1;
        }
      });
      setCompletion(splittedTargetValue.length / randomParagraph.length)
    }
  }

  const resetAllValues = () => {
    clearInterval(intervalRef.current)
    setTime(null);
    totalRef.current = 0;
    intervalRef.current = null;
    setWordPerMinute(0);
    setCompletion(0);
    setTime(null);
    setError(null);
    getRandomParagraph()
    textAreaRef.current.value = '';
  }

  const getRandomParagraph = () => {
    const DEFAULT_TYPE = 'all-meat';
    fetch(`${RANDOM_PARAGRAPH_API_URL}?type=${DEFAULT_TYPE}`)
      .then(response => response.json())
      .then(data => {
        const splittedParagraph = data.join(' ').replace(/\s{2,}/g, ' ').split('');
        const colorArray = splittedParagraph.map(_ => 'red');
        setTextColor(colorArray);
        setRandomParagraph(splittedParagraph);
      })
      .catch((error) => setError(error));
  }

  const saveCurrentValues = () => {
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    }

    const form = {
      id: v4(),
      wpm: wordPerMinute,
      playerName: "Guest"
    };
    postData(FAKE_SERVER_API, form);
    setMatches([...matches, form])
  }

  const fetchMatches = () => {
    fetch(FAKE_SERVER_API)
      .then(response => response.json())
      .then(data => setMatches(data))
  }

  useEffect(() => {
    getRandomParagraph()
    fetchMatches();
    return () => {
      clearInterval(intervalRef.current)
    }
  }, []);

  useEffect(() => {
    if (completion >= 1) {
      textAreaRef.current.blur();
      clearInterval(intervalRef.current)
    }
  }, [completion])

  useEffect(() => {
    if (isFinished) {
      clearInterval(intervalRef.current)
    }
    if (time && !isFinished) {
      const timeInMinute = time / 60;
      const grossWordPerMinute = Math.floor((totalRef.current / 5) / timeInMinute);
      setWordPerMinute(grossWordPerMinute);
      if (MAX_TIME_IN_SECONDS - time < 0) {
        resetAllValues();
      }
    }
  }, [time]);

  return (
    <Container>
      <Header>
        <span>Player Name: <strong>Guest</strong></span>
        <Timer timeRemaining={MAX_TIME_IN_SECONDS - time} />
        <WordPerMinute wordPerMinute={wordPerMinute} />
        <Completion completion={completion} />
      </Header>
      {!error
        ? <TextBox textColor={textColor} randomParagraph={randomParagraph} />
        : { error }}
      <TextArea
        handleInputChange={handleInputChange}
        isFinished={isFinished}
        textAreaRef={textAreaRef}
      />
      <RetryButton onClick={resetAllValues}>Retry</RetryButton>
      <SaveButton disabled={!isFinished} onClick={saveCurrentValues}>Save Current WPM</SaveButton>
      <MatchHistory matches={matches} />
    </Container>
  )
}

export default App;