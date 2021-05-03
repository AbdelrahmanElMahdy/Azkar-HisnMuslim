import React, { Component } from 'react'
import {Navbar,} from "react-bootstrap"
class NavBar extends Component {
    state = {  }
    render() { 
          return(
            <Navbar className="navbar navbar-dark bg-dark">
              <div className="container-fluid">
                <div className="d-inline-block ">
                  <a className="navbar-brand" href="/#">
                    <i className="fas fa-kaaba fa-2x" title="AZKAR" ></i>
                  </a>
                </div>
                {/*
                <div className="d-inline-block ">
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>  
                 */}  
                 
                <div className="d-inline-block ">
                  <a className="nav-link active" href="/#">
                    <img src="https://cdn2.iconfinder.com/data/icons/avatar-colorize-ii/100/people_character_avatar_smile_2-22-512.png" width="40" height="60" className="img-fluid" alt="muslim img" title="Muslim" />
                  </a>
                </div>
              </div>
          </Navbar>
              )
                             
    }
}
 
export default NavBar;