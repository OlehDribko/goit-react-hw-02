import React from "react";

export default function Options({ feedback, onLeaveFeedback, onReset }) {
    const total = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className="options">
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
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {total > 0&& (<button onClick={onReset} className="reset">
          Reset
        </button>)}
    </div>
  );
}
