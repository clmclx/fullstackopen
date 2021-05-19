import React from 'react';


export const Statistic = (props) => {
    let {text, value} = props;

    return (
        <tr>
            <td>
                {text}
            </td>
            <td>
                {value}
            </td>
        </tr>
);
};
