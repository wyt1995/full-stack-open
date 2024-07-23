/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css'

function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => <Course key={course.id} info={course} />)}
    </div>
  )
}

function Course(props) {
  return (
    <>
      <Header course={props.info.name} />
      <Content parts={props.info.parts} />
      <Total parts={props.info.parts} />
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
  return (
    <>
      {props.parts.map( (part) => {
        return <Part key={part.id} part={part} />;
      }
      )}
    </>
  );
}

function Part(props) {
  return <p>{props.part.name} {props.part.exercises}</p>;
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
