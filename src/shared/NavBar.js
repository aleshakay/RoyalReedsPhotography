import React from 'react';
import { Link } from 'react-router-dom';

  export default class NavBar extends React.Component {
    render() {    
      return (
        <nav className="Nav">
          <div className="Nav__container">
            <Link to="/" className="Nav__brand">
              <img src="logo.svg" className="Nav__logo" alt="testimage"/>
            </Link>

            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/">Home</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/article">Article</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
