import React from 'react';
import {Person} from "./Person";

export const PersonsList = (props) => {

    let {persons, filter, handleDeletePerson}  = props

      if (filter === '') {
          return (
              <div>
                  {persons.map(person =><Person person={person} deletePerson={()=>handleDeletePerson(person)}/>)}
              </div>
          );
      } else {
          return (
              <div>
                  {persons
                      .filter(person => person.name.toLowerCase()
                          .indexOf(props.filter.toLowerCase()) !== -1).map(person =>
                              <Person person={person} deletePerson={()=>handleDeletePerson(person)}/>
                      )}
              </div>
          );
      }
};