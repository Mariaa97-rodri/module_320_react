import { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import './HomePage.css'

function HomePage({ employees, selected, onSelect }) {
  const [query, setQuery] = useState('')

  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(query.toLowerCase()) ||
    emp.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="homepage">
      <Header title="Employee Directory" />
      <SearchBar value={query} onChange={setQuery} />
      <EmployeeList employees={filtered} selected={selected} onSelect={onSelect} />
    </div>
  )
}

export default HomePage