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

const DayAnecdote = ({ anecdote, votes, voteHandler, nextHandler }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
      <Button onClick={voteHandler} text="vote" />
      <Button onClick={nextHandler} text="next anecdote" />
    </>
  );
};

function getFirstIndexForValue(collection, value) {
  let found = false,
    index = 0;
  for (index = 0; index < collection.length && !found; index++) {
    found = collection[index] === value;
  }
  return index - 1;
}
const MostVoted = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes);
  const index = getFirstIndexForValue(votes, maxVotes);
  return (
    <>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[index]}</div>
      <div>has {maxVotes} votes</div>
    </>
  );
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
      <DayAnecdote
        anecdote={props.anecdotes[selected]}
        votes={voted[selected]}
        voteHandler={() => voteFor(voted, selected)}
        nextHandler={() => setSelected(getNewIndex(selected, totalAnecdotes))}
      />
      <MostVoted anecdotes={props.anecdotes} votes={voted} />
    </>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
