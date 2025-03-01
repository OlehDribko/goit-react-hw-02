import React from "react";

export default function Feedback({ feedback }) {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
if(totalFeedback === null){
  return
}
  return (
    <ul>
    <li>Good: {feedback.good}</li>
    <li>Neutral: {feedback.neutral}</li>
    <li>Bad: {feedback.bad}</li>
    <li>Total: {feedback.good + feedback.neutral + feedback.bad}</li>
    <li>
      Positive:{" "}
      {feedback.good + feedback.neutral + feedback.bad > 0
        ? Math.round((feedback.good / (feedback.good + feedback.neutral + feedback.bad)) * 100)
        : 0}
      %
    </li>
  </ul>
  );
}

