import Header from './Header'
import './EmployeePage.css'

function ContactRow({ label, value }) {
  return (
    <div className="contact-row">
      <div className="contact-row__text">
        <span className="contact-row__label">{label}</span>
        <span className="contact-row__value">{value}</span>
      </div>
      <span className="contact-row__chevron">›</span>
    </div>
  )
}

function EmployeePage({ employee, onBack }) {
  if (!employee) {
    return (
      <div className="emp-page emp-page--empty">
        <Header title="Employee" showBack onBack={onBack} />
        <p className="emp-page__placeholder">Select an employee</p>
      </div>
    )
  }

  return (
    <div className="emp-page">
      <Header title="Employee" showBack onBack={onBack} />

      <div className="emp-page__profile">
        <div className="emp-page__avatar" style={{ backgroundColor: employee.color }}>
          {employee.photo
            ? <img src={employee.photo} alt={employee.name} className="emp-page__photo" />
            : employee.initials
          }
        </div>
        <div className="emp-page__identity">
          <h2 className="emp-page__name">{employee.name}</h2>
          <p className="emp-page__title">{employee.title}</p>
        </div>
      </div>

      <div className="emp-page__contacts">
        <ContactRow label="Call Office" value={employee.office} />
        <ContactRow label="Call Mobile" value={employee.mobile} />
        <ContactRow label="SMS"         value={employee.mobile} />
        <ContactRow label="Email"       value={employee.email} />
      </div>
    </div>
  )
}

export default EmployeePage