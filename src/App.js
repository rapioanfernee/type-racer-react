import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TextBox from "./components/TextBox/TextBox";
import Timer from "./components/Timer/Timer"
import TextArea from './components/TextArea/TextArea'

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const RANDOM_PARAGRAPH_API_URL = 'https://baconipsum.com/api/';

const App = () => {
  const intervalRef = useRef(null);
  const [randomParagraph, setRandomParagraph] = useState([]);
  const [textColor, setTextColor] = useState([]);
  const [time, setTime] = useState(null);
  const [error, setError] = useState(null);

  const getTimerTime = (startTime) => {
    return Math.floor((new Date - startTime) / 1000)
  }

  const startTimer = () => {
    const startTime = new Date();
    intervalRef.current = setInterval(() => {
      setTime(getTimerTime(startTime));
    }, 1000);

  }

  const handleInputChange = (e) => {
    if (!time) {
      startTimer();
    }
    const splittedTargetValue = e.target.value.split('');
    const textColorCopy = [...textColor];
    randomParagraph.forEach((value, index) => {
      if (value === splittedTargetValue[index]) {
        textColorCopy[index] = 'green';
        setTextColor(textColorCopy)
      }
      else {
        textColorCopy[index] = 'red';
        setTextColor(textColorCopy)
      }
    });
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

  return (
    <Container>
      <Timer time={time} />
      { !error
        ? <TextBox textColor={textColor} randomParagraph={randomParagraph} />
        : { error }}
      <TextArea
        handleInputChange={handleInputChange}
      ></TextArea>
    </Container>
  )
}

export default App;