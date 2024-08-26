
import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {
  const [count , setCount]= useState(0)

  return (
    <>
      <h1>React Core Concepts recap</h1>
      <ol>
          <li>Comments</li>
          <li>JSX</li>
          <li>Props</li>
          <li>Event Handler</li>
          <li>State</li>
          <li>Load data</li>
          <hr />
      </ol>
      <Posts></Posts>
    </>
  )
}

export default App
