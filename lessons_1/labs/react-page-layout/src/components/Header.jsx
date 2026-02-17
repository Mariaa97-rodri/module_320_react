import './Header.css'

function Header({ title, showBack, onBack }) {
  return (
    <header className="header">
      {showBack && (
        <button className="header__back" onClick={onBack}>‹</button>
      )}
      <h1 className="header__title">{title}</h1>
    </header>
  )
}

export default Header