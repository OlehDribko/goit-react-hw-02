import React from "react";
import style from './Options.module.css'

export default function Options({ feedback, onLeaveFeedback, onReset }) {
    const total = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className={style.btnsection}>
    
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {total > 0&& (<button onClick={onReset} className="reset">
          Reset
        </button>)}
    </div>
  );
}
