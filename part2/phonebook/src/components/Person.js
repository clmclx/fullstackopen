import React from 'react'
import {deleteFromdB} from "../services/phonebook";


export const Person = (props) => {

    let {person, deletePerson} = props;

    return (
        <div>
            <p key={person.name}>{`${person.name} ${person.number} `}</p><button onClick={deletePerson}>delete</button>
        </div>
    )
}