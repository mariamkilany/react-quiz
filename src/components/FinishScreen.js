import React from "react";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}) {
  const presentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (presentage === 100) emoji = "💰";
  if (presentage >= 80 && presentage < 100) emoji = "🎉";
  if (presentage >= 50 && presentage < 80) emoji = "🙂";
  if (presentage >= 0 && presentage < 50) emoji = "😐";
  if (presentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(presentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
