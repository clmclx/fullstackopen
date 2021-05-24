import React, { useState } from 'react'
import Anecdote from "./Anecdote";

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);
  const handleSelectNewAnecdote = () =>{
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const handleAddVote = () =>{
    let newVotes = [... votes];
    newVotes[selected] +=1;
    setVotes(newVotes);
  };

  const getAnecdoteWithTheMostVotes = () =>{
      return votes.indexOf(Math.max.apply(null,votes));
  };



  return (
      <div>
        <h1>Anecdote of the day</h1>
        <div>
          <Anecdote
            text = {anecdotes[selected]}
            votes = {votes[selected]}
          />
            <button onClick={handleAddVote}>vote</button>
            <button onClick={handleSelectNewAnecdote}>next anecdote</button>
        </div>
        <div>
          <h1>Anecdote with the most votes</h1>
          <Anecdote
            text = {anecdotes[getAnecdoteWithTheMostVotes()]}
            votes = {votes[getAnecdoteWithTheMostVotes()]}
          />
        </div>
      </div>
)
}

export default App