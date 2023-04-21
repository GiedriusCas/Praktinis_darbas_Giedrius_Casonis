import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import { useAuthCtx } from '../../store/AuthProvider';

function Header() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <header>
      <div className="container">
        <Link to={'/'} className="logo" hrefLang="">
          <img className="shopLogo" src="/public/SHOPS (3).jpg" alt="logo" />
        </Link>
        <nav>
          <NavLink className="navItem" to={'/'}>
            Home page
          </NavLink>
          <NavLink className="navItem" to={'/login'}>
            Login
          </NavLink>
          <NavLink className="navItem" to={'/regist'}>
            Register
          </NavLink>
          {isLoggedIn && (
            <NavLink className="navItem" to={'/shops'}>
              Shops
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink className="navItem" to={'/add'}>
              Add Shop
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
