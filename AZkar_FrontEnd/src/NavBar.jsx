import React, { Component } from 'react'
import {Navbar, Form, Button,} from "react-bootstrap"
class NavBar extends Component {
    state = {  }
    render() { 
          return(
            <Navbar className="navbar navbar-dark bg-dark">
              <div className="container-fluid">
                
                <div className="d-inline-block align-text-top">
                  <a className="navbar-brand" href="/#">
                    <i className="fas fa-kaaba fa-2x"></i>
                  </a>
                </div>
                <div className="d-inline-block align-text-center">
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>  
                <div className="d-inline-block align-text-top">
                  <a className="nav-link active" href="/#">
                    <img src="https://cdn2.iconfinder.com/data/icons/avatar-colorize-ii/100/people_character_avatar_smile_2-22-512.png" width="40" height="60" className="img-fluid" alt="muslim img" />
                  </a>
                </div>  
              </div>
          </Navbar>
              )
                             
    }
}
 
export default NavBar;