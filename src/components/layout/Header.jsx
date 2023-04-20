import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link href="/" className='logo'>Logo</Link>
        <nav>
            <NavLink to={'/'}>Home page</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/regist'}>Register</NavLink>
            <NavLink to={'/shops'}>Shops</NavLink>
            <NavLink to={'/add'}>Add Shop</NavLink>
        </nav>


    </header>
  )
}

export default Header