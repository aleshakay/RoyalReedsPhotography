import React from 'react'
import { Link } from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './SideNavBar.scss'

const SideNavBar = ({ close, display }) => {
  let Classes = "side-nav-bar";
  if (display) {
    Classes = "side-nav-bar open";
  }
  return (
    <nav className={Classes}>
      <ul>
        <li onClick={close}>
          <i className="material-icons">close</i>
        </li>
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
    </nav>
  );
};

export default SideNavBar;