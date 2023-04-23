import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import { useAuthCtx } from '../../store/AuthProvider';
import Logout from '../auth/Logout';

function Header() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <header>
      <div className="container">
        {isLoggedIn ? (
          <Link to={'/shops'} className="logo" hrefLang="">
            <img
              className="shopLogo"
              src="/src/assets/SHOPS (3).jpg"
              alt="logo"
            />
          </Link>
        ) : (
          <Link to={'/'} className="logo" hrefLang="">
            <img
              className="shopLogo"
              src="/src/assets/SHOPS (3).jpg"
              alt="logo"
            />
          </Link>
        )}

        <nav>
          {!isLoggedIn && (
            <>
              <NavLink className="navItem" to={'/'}>
                Login
              </NavLink>
              <NavLink className="navItem" to={'/regist'}>
                Register
              </NavLink>
            </>
          )}

          {isLoggedIn && (
            <>
              <NavLink className="navItem" to={'/shops'}>
                Shops
              </NavLink>
              <NavLink className="navItem" to={'/add'}>
                Add Shop
              </NavLink>
              <NavLink className="navItem" to={'/'}>
                <Logout />
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
