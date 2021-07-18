import React from 'react'

export const Notification = (props) => {

    let {message, type} = props;

    if (message === null) {
        return null;
    }
    return (
        <div className={type}>
            {message}
        </div>
    )
}