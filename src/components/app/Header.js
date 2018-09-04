import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Error from './Error';
import logo from '../../assets/logo.png';
import styles from './Header.css';

class Header extends Component {

  static propTypes = {

  };
  
  render() {

    return (
      <div className={styles.header}>

        <section className="header-container">
          <div className="logo">
            <img src={logo}/>
            <h1>Image Gallery</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/albums">Albums</NavLink>
              </li>

              <li>
                <NavLink activeClassName="active" to="/images">Images</NavLink>
              </li>
            </ul>
          </nav>
        </section>
      
        <Error/>
      </div>
    );
  }
}

export default Header;