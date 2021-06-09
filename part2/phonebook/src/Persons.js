import React from 'react';

export const Persons = (props) => {
    console.log(props.filter);
      if (props.filter === '') {
          return (
              <div>
                  {props.persons.map(person => <p key={person.name}>{`${person.name} ${person.number}`}</p>)}
              </div>
          );
      } else {
          return (
              <div>
                  {props.persons.filter(person => person.name.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1).map(person => <p key={person.name}>{person.name} {person.number}</p>)}
              </div>
          );
      }
};