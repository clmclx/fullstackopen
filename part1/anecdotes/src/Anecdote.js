import React from 'react';


const Anecdote = (props) =>{
    let {text, votes} = props;

    return (
      <div>
          <div>{text}</div>
          <div>{`has ${votes} votes`}</div>
      </div>
    );
};

export default Anecdote;