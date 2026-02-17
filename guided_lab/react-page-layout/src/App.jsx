import { useState } from 'react'
import EmployeeCard from './components/EmployeeCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const employee = {
  firstName: "Maria",
  lastName: "Aguilar",
  title: "Software Developer",
  phone: "000-000-000",
  email: "mariamamacitaaguilar@yahoo.com",
  picture: "https://randomuser.me/api/portraits/women/2.jpg"
};

function App() {
  const [count, setCount] = useState(0)
return (
  <div className = "app">
    <h1> My First React Component</h1>
    <EmployeeCard employee = {employee} />
  </div> 
)
}

export default App
