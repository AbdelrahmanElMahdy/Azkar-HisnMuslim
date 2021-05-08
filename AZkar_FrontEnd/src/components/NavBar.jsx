import React, { Component } from 'react'
import {Navbar,} from "react-bootstrap"
class NavBar extends Component {
    state = {  }
    render() { 
          return(
            <Navbar className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <div className="d-inline-block ">
                  <a className="navbar-brand" href="/home">
                    <i className="fas fa-kaaba fa-2x" title="AZKAR" ></i>
                  </a>
                </div>
                <div className="d-inline-block ">
                  <a className="nav-link active" href="/profile">
                    <img src="https://cdn2.iconfinder.com/data/icons/avatar-colorize-ii/100/people_character_avatar_smile_2-22-512.png" width="40" height="60" className="img-fluid" alt="muslim img" title="Muslim" />
                  </a>
                </div>
              </div>
          </Navbar>
              )
                             
    }
}
 
export default NavBar;