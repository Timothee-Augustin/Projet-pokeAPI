import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;
  return (
    <nav className="navBar">
      {link('/', 'Home')}
      {link('/pokedex', 'Pokedex')}
    </nav>
  );
}

export default NavBar;
