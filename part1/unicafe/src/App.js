import React, { useState } from 'react'
import {Statistics} from "./Statistics";
import {Button} from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAddPositive = () =>{
    setGood(good +1);
  };

  const handleAddNeutral = () => {
    setNeutral(neutral + 1)
  };

  const handleAddNegative = () => {
      setBad(bad +1)
  };


  return (
      <div>
          <h1>give feedback</h1>
          <div>
              <Button text='good' handler={handleAddPositive}/>
              <Button text='neutral' handler={handleAddNeutral}/>
              <Button text='bad' handler={handleAddNegative}/>
          </div>
          <h1>statistics</h1>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
          />
      </div>
  )
};

export default App