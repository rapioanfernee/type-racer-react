import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TextBox from "./components/TextBox/TextBox";
import Timer from "./components/Timer/Timer"
import WordPerMinute from "./components/WordPerMinute/WordPerMinute"
import TextArea from './components/TextArea/TextArea'

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
`

const RANDOM_PARAGRAPH_API_URL = 'https://baconipsum.com/api/';

const App = () => {
  const MAX_TIME_IN_SECONDS = 3;

  const [randomParagraph, setRandomParagraph] = useState([]);
  const [textColor, setTextColor] = useState([]);
  const [time, setTime] = useState(null);
  const [error, setError] = useState(null);
  const [wordPerMinute, setWordPerMinute] = useState(0);

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
    }
  }

  const resetAllValues = () => {
    setTime(null);
  }

  useEffect(() => {
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

    return () => {
      clearInterval(intervalRef.current)
    }
  }, []);

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
        <Timer timeRemaining={MAX_TIME_IN_SECONDS - time} />
        <WordPerMinute wordPerMinute={wordPerMinute} />
      </Header>

      { !error
        ? <TextBox textColor={textColor} randomParagraph={randomParagraph} />
        : { error }}
      <TextArea
        handleInputChange={handleInputChange}
        isFinished={isFinished}
      ></TextArea>
    </Container>
  )
}

export default App;