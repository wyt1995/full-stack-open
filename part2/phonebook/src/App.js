import { useState } from 'react';
import './App.css';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const addPerson = (event) => {
    setNewName(event.target.value);
  }

  const addNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const filterPerson = (event) => {
    setNameFilter(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const person of persons) {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
        setNewName("");
        setNewNumber("");
        return;
      }
    }

    const newPerson = { name: newName, number: newNumber };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={nameFilter} filterFunc={filterPerson} />
      <PersonForm name={newName} changeName={addPerson} number={newNumber} changeNumber={addNumber} handleSubmit={handleSubmit} />
      <ShowPhonebook persons={persons} keyword={nameFilter} />
    </div>
  );
}

function Filter( {filterText, filterFunc} ) {
  return (
    <form>
      <div>
        filter shown with <input value={filterText} onChange={filterFunc} />
      </div>
    </form>
  );
}

function PersonForm( {name, changeName, number, changeNumber, handleSubmit} ) {
  return (
    <>
      <h2>Add a new person</h2>
      <form>
        <div>
          name: <input value={name} onChange={changeName} />
        </div>
        <div>
          number: <input value={number} onChange={changeNumber} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
    </>
  )
}

function ShowPhonebook({ persons, keyword }) {
  let filtered = persons;
  if (keyword !== "") {
    filtered = persons.filter((person) => person.name.includes(keyword));
  }

  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {filtered.map((person) => <li key={person.name}>{person.name}: {person.number}</li>)}
      </ul>
    </>
  )
}

export default App;
