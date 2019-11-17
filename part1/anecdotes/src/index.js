import React, { useState } from "react";
import ReactDOM from "react-dom";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getNewIndex(prevIndex, arrayLength) {
  let newRandomIndex = prevIndex;
  do {
    newRandomIndex = getRandomInt(arrayLength - 1);
  } while (newRandomIndex === prevIndex);
  return newRandomIndex;
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = props => {
  const totalAnecdotes = props.anecdotes.length;
  const randomIndex = getRandomInt(totalAnecdotes - 1);
  const [selected, setSelected] = useState(randomIndex);
  const [voted, setVoted] = useState(new Array(totalAnecdotes).fill(0));

  const voteFor = (voted, index) => {
    const votedClone = [...voted];
    votedClone[index]++;
    setVoted(votedClone);
  };

  return (
    <>
      <div>{props.anecdotes[selected]}</div>
      <div>has {voted[selected]} votes</div>
      <Button onClick={() => voteFor(voted, selected)} text="vote" />
      <Button
        onClick={() => setSelected(getNewIndex(selected, totalAnecdotes))}
        text="next anecdote"
      />
    </>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
