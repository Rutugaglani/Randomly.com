import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import fire from '../config/firebase'
import '../css_styling/nav.css'

 class NavbarMain extends Component {
   constructor(props)
   {
     super(props)
     this.handleClick=this.handleClick.bind(this);
   }
   handleClick=()=>{
     fire.auth().signOut();
   }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg"  className="navMain">
            <Navbar.Brand className="nav_brand">Randomly.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                  <Link to="/nasa" className="Nav_comp" style={{marginLeft:0}}>Home</Link>
                  <Link to="/unsplash" className="Nav_comp">Unsplash</Link>
                  <Link to="/post" className="Nav_comp">Post</Link>
                  <Link to="/albums" className="Nav_comp">Album</Link>
              </Nav>
              <Nav>
                <Link to="/" className="Nav_comp" onClick={this.handleClick} >Logout</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavbarMain
