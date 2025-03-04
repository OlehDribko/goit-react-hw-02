import React from "react";

export default function Feedback({
  totalFeedback,
  positiveFeedBack,
  feedback,
}) {
  
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive:{positiveFeedBack}%</li>
    </ul>
  );
}
