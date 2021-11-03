import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import logo from '../../img/block.png';
import imgAside from '../../img/Business_PNG.png';

import './header.scss'

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-container">
        <div className="container-logo">
          <img src={logo} className="logo-img" alt="logo"></img>
          <h2 className="logo-name">Series Day</h2>
        </div>

        <nav className="menu">
          <Link className="option" to="/about"><span className="btn-1">About</span></Link>
          <Link className="option" to="/services"><span className="btn-2">Services</span></Link>
          <Link className="option" to="/contact-us"><span className="btn-3">Contact Us</span></Link>
          <Link className="option btn-sign" to="/register">Sign Up</Link>
          <Link className="option btn-sign" to="/login">Login</Link>
        </nav>
      </div>

      <div className="container-title">
        <div>
          <h1 className="title title-principal">Rede Social Voltada Para Amantes de Series!</h1>
          <p className="title sub-title">Compartilhamento de Reviews</p>
          <Button 
            className="btn-principal"
            children="Ver Mais"
            onClick="/#anchor"
          />
          <a className="btn-principal is-active" href="#anchor">Ver Mais</a>
        </div>
        <img src={imgAside} className="img-aside" alt="logo"></img>
      </div>
    </div>
  )
}

export default Header