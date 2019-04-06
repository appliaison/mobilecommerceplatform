import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
              <p class="navbar-item"><Link to="/">MVP Store</Link></p>
          <div class="navbar-burger burger" data-target="navbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>

          <div id="navbar" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-dropdown">
                </div>
              </div>
              <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-dropdown is-right">
                
                </div>

              </div>
              <a class="navbar-item">Login</a> 
              <a class="navbar-item">Sign Up</a> 
            </div>
          </div>
          </nav>
        </div>
    );
  }
}
export default Header;