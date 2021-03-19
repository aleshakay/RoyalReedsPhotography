import React from 'react';
import { Link } from 'react-router-dom';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './NavBar.scss'

const NavBar = ({ open }) => {
      return (
        <div className="nav">
          <div onClick={open} className="Nav-Icon">
          <i className="material-icons">menu</i>
          <h1 className='HPTitleValue'>Royal Reed's Photography</h1>
          </div>
            <div className="Nav-space" />
            <div className="Nav-items">
              <ul>
                <li>
                  <Link className="Nav__link" to="/">Home</Link>
                </li>
                <li>
                  <Link className="Nav__link" to="/article">Article</Link>
                </li>
                <li>
                  <Link className="Nav__link" to="/about">About</Link>
                </li>
                <li>
                  <Link className="Nav__link" to="/AmplifySignOutout"><AmplifySignOut /></Link>
                </li>
              </ul>
            </div>
          </div>
      );
    }
    export default NavBar;
