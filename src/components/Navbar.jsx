import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useWishlist } from '../hooks/useWishlist'

export default function Navbar(){
  const { items } = useWishlist()
  return (
    <nav className="navbar navbar-expand-md shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">Hyummy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/menu">Menu</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/wishlist">
                Wishlist <span className="badge bg-danger ms-1">{items.length}</span>
              </NavLink>
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/register">Register</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
