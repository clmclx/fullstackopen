import React from 'react';
import {Statistic} from "./Statistic";


export const Statistics = (props) => {

    let {good, neutral, bad} = props;
    let average = (good - bad)/ (good + neutral + bad);
    let all = good + neutral + bad;
    let positive = (good/all)*100;
    let hasFeedback = all > 0;


    return hasFeedback? (

        <div>
            <table>
                <tbody>
                    <Statistic text="good" value={good}/>
                    <Statistic text="neutral" value={neutral}/>
                    <Statistic text="bad" value={bad}/>
                    <Statistic text="all" value={all}/>
                    <Statistic text="average" value={average}/>
                    <Statistic text="positive" value={`${positive} %`}/>
                </tbody>
            </table>
        </div>
    ): (
        <div>
            <p>No feedback given</p>
        </div>
    )
};