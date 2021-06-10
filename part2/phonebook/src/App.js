import React, {useEffect, useState} from 'react'
import {Filter} from "./components/Filter";
import {PersonsList} from "./components/PersonsList";
import {PersonForm} from "./components/PersonForm";
import {getAll, create, deleteFromdB, update} from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
      getAll()
          .then(response => {
              setPersons(response.data)
          }
      ).catch(err =>{
          alert("could not retrieve the phone numbers")
      })
      }, []);

    const handleNameChange =(event) => {
      setNewName(event.target.value);
  } ;

    const handleNumberChange =(event) =>{
        setNewNumber(event.target.value);
    } ;

  const handleAddPerson = (event) =>{
      event.preventDefault();
      let newBook = [...persons];
      let currentEntry = newBook.find(el=> el.name === newName);

      if (currentEntry){
          if (currentEntry.number === newNumber) {
              alert(`${newName} is already added to the phonebook`);
          } else {
              let changeNumber = window.confirm(`${newName} already exists in the phonebook. Do you want to change the number?`);
              if (changeNumber) {
                  let idToUpdate = currentEntry.id;
                  update(idToUpdate, {name: newName, number:newNumber})
                      .then(returnedPerson=>{
                          console.log(returnedPerson);
                          setPersons(persons.map(person => person.id !== idToUpdate? person : returnedPerson));
                      })
                      .catch(err=>{
                          alert("could not update number");
                      });
              }
          }
      } else if(!newName) {
          alert("Please enter the person's name")
      } else if (!newNumber) {
          alert("Please enter the person's number")

      } else {
          create({name: newName, number: newNumber}).then(
              response=>{
                  console.log("response", response);
                  setPersons(persons.concat({name: newName, number: newNumber, id: response.data.id}))
              }
          )
      }
  };

  const handleFilterChange = (event) => {
      setFilter(event.target.value);
  };

  const handleDeletePerson = (personToDelete) => {
        console.log('deleting from db');
        let deleteFromPhoneBook = window.confirm(`delete ${personToDelete.name} from phonebook?`);
        if (deleteFromPhoneBook) {
            console.log('delete valid')
            deleteFromdB(personToDelete.id)
                .then(r => r.data)
                .catch(err => {
                    alert(`could not delete ${personToDelete.name} from phonebook`)
                });
            setPersons(persons.filter(person=>person.id !== personToDelete.id));
        }
  };

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
          <PersonsList filter={filter} persons={persons} handleDeletePerson={handleDeletePerson}/>
      </div>
  )
};

export default App