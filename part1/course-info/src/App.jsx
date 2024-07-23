/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css'

function App() {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Counter />
    </>
  )
}

function Header(props) {
  return (
    <h1>{props.course}</h1>
  )
}

function Content(props) {
  const displayObject = (part) => {
    return <p key={part.name}>{part.name} {part.exercises}</p>
  }

  return (
    <>
      {props.parts.map(displayObject)}
    </>
  )
}

function Total(props) {
  const sum = props.parts.reduce((acc, obj) => acc + obj.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prevState => prevState + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default App
