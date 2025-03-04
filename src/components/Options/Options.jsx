import React from "react";
import style from "./Options.module.css";

export default function Options({ onLeaveFeedback, onReset, totalFeedback }) {
  return (
    <div className={style.btnsection}>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={onReset} className="reset">
          Reset
        </button>
      )}
    </div>
  );
}
