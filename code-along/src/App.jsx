import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Fruits from './components/Fruits.jsx'
import './App.css'


function HelloWorld(props) {
  return <div>
    <p>Hello {props.name}</p>
    <p>Age: {props.age}</p>
    </div>
 
}
function App() {
  return (
    <>
    <HelloWorld name="Maria" age={28}/>
    <Counter />
    <Fruits />
    </>
  )
}


export default App
