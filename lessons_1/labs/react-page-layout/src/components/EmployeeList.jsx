import EmployeeListItem from './EmployeeListItem'
import './EmployeeList.css'

function EmployeeList({ employees, selected, onSelect }) {
  if (employees.length === 0) {
    return <p className="emp-list__empty">No results found.</p>
  }

  return (
    <div className="emp-list">
      {employees.map((emp) => (
        <EmployeeListItem
          key={emp.id}
          employee={emp}
          isSelected={selected?.id === emp.id}
          onClick={onSelect}
        />
      ))}
    </div>
  )
}

export default EmployeeList