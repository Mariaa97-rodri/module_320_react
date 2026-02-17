//import "./EmployeeCard.css";
function EmployeeCard({ employee }) {
  return (
    <div className="card">
      {/* Profile section */}
      <div className="card__profile">
        <img
          className="card__photo"
          src={employee.picture}
          alt={employee.firstName + " " + employee.lastName}
        />
        <h2 className="card__name">
          {employee.firstName} {employee.lastName}
        </h2>
        <p className="card__title">{employee.title}</p>
      </div>
      {/* Contact details */}
      <ul className="card__details">
        <li className="card__row">
          <span className="card__label">Phone</span>
          <span className="card__value">{employee.phone}</span>
        </li>
        <li className="card__row">
          <span className="card__label">Email</span>
          <span className="card__value">{employee.email}</span>
        </li>
      </ul>
    </div>
  );
}
export default EmployeeCard;