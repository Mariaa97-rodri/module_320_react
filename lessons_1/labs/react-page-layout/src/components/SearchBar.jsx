import './SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar-wrap">
      <div className="searchbar">
        <span className="searchbar__icon">🔍</span>
        <input
          className="searchbar__input"
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchBar