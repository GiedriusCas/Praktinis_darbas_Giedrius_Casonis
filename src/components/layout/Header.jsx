import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss'

function Header() {
  const isLogedIn = false;
  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          Logo
        </Link>
        <nav>
          <NavLink className='navItem' to={'/'}>Home page</NavLink>
          <NavLink className='navItem' to={'/login'}>Login</NavLink>
          <NavLink className='navItem' to={'/regist'}>Register</NavLink>
          <NavLink className='navItem' to={'/shops'}>Shops</NavLink>
          <NavLink className='navItem' to={'/add'}>Add Shop</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
