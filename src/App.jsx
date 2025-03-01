import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Description from './componen/Description/Description'
import Feedback from './componen/Feedback/FeedBack'
import Options from './componen/Options/Options'


function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });


  const handleFeedback = (type) => {
    setFeedback((prevState) => {
      const updatedFeedback = { ...prevState, [type]: prevState[type] + 1 };
      localStorage.setItem("feedback", JSON.stringify(updatedFeedback)); 
      return updatedFeedback;
    });
  };

  const resetFeedback = () => {
    const resetState = { good: 0, neutral: 0, bad: 0 };
    setFeedback(resetState);
    localStorage.setItem("feedback", JSON.stringify(resetState));
  };

  return (
    <div>
      <Description />
      <Options feedback={feedback} onLeaveFeedback={handleFeedback} onReset={resetFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}

export default App
