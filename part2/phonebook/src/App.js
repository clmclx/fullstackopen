import React, { useState } from 'react'
import {Filter} from "./Filter";
import {Persons} from "./Persons";
import {PersonForm} from "./PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
    const handleNameChange =(event) =>{
      console.log(event.target.value);
      setNewName(event.target.value);
  } ;

    const handleNumberChange =(event) =>{
        console.log(event.target.value);
        setNewNumber(event.target.value);
    } ;

  const handleAddPerson = (event) =>{
      event.preventDefault();
      let newBook = [...persons];
      if (newBook.map(el=> el.name).includes(newName)){
          alert(`${newName} is already added to the phonebook`);
      } else if(!newName) {
          alert("Please enter the person's name")
      } else if (!newNumber) {
          alert("Please enter the person's number")

      } else {
          newBook.push({name: newName, number: newNumber});
          setPersons(newBook);
      }
  };

  const handleFilterChange = (event) => {
      console.log('filter: ', event.target.value);
      setFilter(event.target.value);
  }

  return (
      <div>
        <h2>Phonebook</h2>
          <Filter handleFilterChange = {handleFilterChange}/>
          <h3>Add new person</h3>
          <PersonForm
            addPerson={handleAddPerson}
            nameChange={handleNameChange}
            numberChange={handleNumberChange}
          />

        <h3>Numbers</h3>
          <Persons filter={filter} persons={persons}/>
      </div>
  )
};

export default App