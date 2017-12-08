import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavbarAuthenticated from './navbar.authenticated';
import NavbarPublic from './navbar.public';

const renderNavigation = authenticated =>
(authenticated ? <NavbarAuthenticated /> : <NavbarPublic />);

const Navbar = ({ authenticated }) => (
  <nav className="navbar navbar-default">
    {renderNavigation(authenticated)}
  </nav>
);

Navbar.propTypes = {
  authenticated: PropTypes.bool,
};

export default Navbar;
