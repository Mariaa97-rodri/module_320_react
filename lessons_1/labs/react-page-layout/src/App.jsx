import { useState } from 'react'
import HomePage from './components/HomePage'
import EmployeePage from './components/EmployeePage'
import './App.css'

const employees = [
  { id: 1, name: 'James King',    title: 'President and CEO', initials: 'JK', color: '#b5541b', photo: 'https://i.pravatar.cc/150?img=11', office: '781-000-0001', mobile: '617-000-0001', email: 'jking@fakemail.com' },
  { id: 2, name: 'Julie Taylor',  title: 'VP of Marketing',   initials: 'JT', color: '#c06020', photo: 'https://i.pravatar.cc/150?img=47', office: '781-000-0002', mobile: '617-000-0002', email: 'jtaylor@fakemail.com' },
  { id: 3, name: 'Eugene Lee',    title: 'CFO',               initials: 'EL', color: '#4a7c59', photo: 'https://i.pravatar.cc/150?img=15', office: '781-000-0003', mobile: '617-000-0003', email: 'elee@fakemail.com' },
  { id: 4, name: 'John Williams', title: 'VP of Engineering', initials: 'JW', color: '#3a6090', photo: 'https://i.pravatar.cc/150?img=12', office: '781-000-0004', mobile: '617-000-0004', email: 'jwilliams@fakemail.com' },
  { id: 5, name: 'Ray Moore',     title: 'VP of Sales',       initials: 'RM', color: '#8a5a1a', photo: 'https://i.pravatar.cc/150?img=53', office: '781-000-0005', mobile: '617-000-0005', email: 'rmoore@fakemail.com' },
  { id: 6, name: 'Paul Jones',    title: 'QA Manager',        initials: 'PJ', color: '#6b3a6b', photo: 'https://i.pravatar.cc/150?img=17', office: '781-000-0006', mobile: '617-000-0006', email: 'pjones@fakemail.com' },
]

function App() {
  const [selected, setSelected] = useState(employees[1])

  return (
    <div className="app">
      <HomePage employees={employees} selected={selected} onSelect={setSelected} />
      <EmployeePage employee={selected} onBack={() => setSelected(null)} />
    </div>
  )
}

export default App