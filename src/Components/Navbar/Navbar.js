import * as React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <nav>
          <div className='menu'><MenuIcon/></div>
        <ul>
          <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

export default Navbar
