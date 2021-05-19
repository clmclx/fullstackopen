import React from 'react';


export const Button = (props) =>{

    let {text, handler} = props;

    return(
        <button onClick={handler}>{text}</button>
    )
};