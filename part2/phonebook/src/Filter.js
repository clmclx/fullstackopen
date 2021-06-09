import React from  'react';

export const Filter = (props) => {
    return (
        <div>
            search: <input onChange={props.handleFilterChange}/>
        </div>
    );
}