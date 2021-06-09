import React from "react";

const Total = ({ course }) => {
    const sum = course.parts.reduce((sum, current) =>sum + current.exercises, 0);
    return(
        <b>total of exercises {sum}</b>
    )
};

export default Total;