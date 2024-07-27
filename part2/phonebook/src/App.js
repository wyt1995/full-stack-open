import { useState, useEffect } from 'react';
import Display from './components/Display';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import personService from './services/persons';
import './App.css';
import Message from './components/Message';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(true);

  useEffect(() => {
    personService.getAll().then(data => {
      setPersons(data);
    })
  }, []);

  // control the person input
  const addPerson = (event) => {
    setNewName(event.target.value);
  }

  // control the number input
  const addNumber = (event) => {
    setNewNumber(event.target.value);
  }

  // control the filter input
  const filterPerson = (event) => {
    setNameFilter(event.target.value);
  }

  const handleUpdate = (person) => {
    const updated = {...person, number: newNumber};
    personService.update(updated.id, updated).then(response => {
      setPersons(persons.map(p => p.name === newName ? response : p));
      setMessage(`${person.name} is updated`);
      setStatus(true);
      setNewName("");
      setNewNumber("");
    }).catch(error => {
      setMessage(error.response.data);
      setStatus(false);
    })
  }

  const handleCreate = () => {
    const newPerson = { name: newName, number: newNumber, id: `${persons.length + 1}` };
    personService.create(newPerson).then(response => {
      setPersons(persons.concat(response));
      setMessage(`Added ${newPerson.name}`);
      setStatus(true);
      setNewName("");
      setNewNumber("");
    }).catch(error => {
      setMessage(error.response.data);
      setStatus(false);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const person of persons) {
      if (person.name === newName) {
        handleUpdate(person);
        return;
      }
    }
    handleCreate();
  }

  const deletePerson = (id) => {
    const deleted = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${deleted.name} from phonebook?`)) {
      personService.remove(id).then(response => {
        setPersons(persons.filter(p => p.id !== response.id));
        setMessage(`${deleted.name} is deleted`);
        setStatus(true);
      }).catch(error => {
        setMessage(error.response.data);
        setStatus(false);
      });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={nameFilter} filterFunc={filterPerson} />
      <Message msg={message} success={status} />
      <PersonForm name={newName} changeName={addPerson} number={newNumber} changeNumber={addNumber} handleSubmit={handleSubmit} />
      <Display persons={persons} keyword={nameFilter} deleteFunc={deletePerson} />
    </div>
  );
}

export default App;
