import React from 'react';

const navLinks = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"];

function Nav({ className }) {
  return (
    <nav aria-label="Navigation" role="navigation">
      <ul className={`nav-list ${className || ''}`}>
        {navLinks.map(link => (
          <li key={link}><a href="#">{link}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;