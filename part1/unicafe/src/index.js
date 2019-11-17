import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ label, text }) => {
  return (
    <li>
      {label}: {text}
    </li>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const header = <h2>Statistics</h2>;
  if (all === 0) {
    return (
      <>
        {header}
        <div>No feedback given</div>
      </>
    );
  }
  const average = (good, neutral, bad) => {
    const all = good + neutral + bad;
    if (all === 0) {
      return 0;
    }
    return (good - bad) / all;
  };
  const positive = (good, neutral, bad) => {
    const all = good + neutral + bad;
    if (all === 0) {
      return 0;
    }
    return (good / all) * 100;
  };

  return (
    <>
      {header}
      <ul>
        <Statistic label="Good" text={good} />
        <Statistic label="Neutral" text={neutral} />
        <Statistic label="Bad" text={bad} />
        <Statistic label="All" text={all} />
        <Statistic label="Average" text={average(good, neutral, bad)} />
        <Statistic label="Positive" text={positive(good, neutral, bad) + "%"} />
      </ul>
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Feedback = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
    </>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = type => {
    switch (type) {
      case "good":
        return () => setGood(good + 1);
      case "neutral":
        return () => setNeutral(neutral + 1);
      case "bad":
        return () => setBad(bad + 1);
      default:
        throw new Error("Unknown feedback name");
    }
  };

  return (
    <div>
      <Feedback
        handleGood={addFeedback("good")}
        handleNeutral={addFeedback("neutral")}
        handleBad={addFeedback("bad")}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
