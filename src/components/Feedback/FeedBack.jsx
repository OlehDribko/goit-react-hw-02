import React from "react";

export default function Feedback({ feedback }) {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
  totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
if(totalFeedback === null){
  return
}
  return (
    <div className="feedback">
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}

