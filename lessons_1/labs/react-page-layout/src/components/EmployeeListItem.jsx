import './EmployeeListItem.css'

function EmployeeListItem({ employee, isSelected, onClick }) {
  return (
    <div
      className={`emp-item ${isSelected ? 'emp-item--selected' : ''}`}
      onClick={() => onClick(employee)}
    >
      <div className="emp-item__avatar" style={{ backgroundColor: employee.color }}>
        {employee.photo
          ? <img src={employee.photo} alt={employee.name} className="emp-item__photo" />
          : employee.initials
        }
      </div>
      <div className="emp-item__info">
        <span className="emp-item__name">{employee.name}</span>
        <span className="emp-item__title">{employee.title}</span>
      </div>
      <span className="emp-item__chevron">›</span>
    </div>
  )
}

export default EmployeeListItem