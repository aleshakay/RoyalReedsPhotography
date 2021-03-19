import React, { Component } from 'react';
import {
BrowserRouter as Router,
Route
} from 'react-router-dom';
import { withAuthenticator} from '@aws-amplify/ui-react'
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage';
import ArticlePage from '../pages/ArticlePage';
import ArticlesList from '../pages/ArticlesList';
import NavBar from '../shared/NavBar/NavBar';
import SideNavBar from '../shared/SideNavBar/SideNavBar';
import BackDrop from '../shared/BackDrop/BackDrop';
import Header from '../shared/Header/Header';
import Gallery from '../pages/Gallery/Gallery'
import './App.scss';

const initialState = {
  username: '', password: '', email: ''
}

class App extends Component {
  state = {
    sideBarOpen: false
  };


  handleOpen = () => {
    this.setState({
      sideBarOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      sideBarOpen: false
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
        <Header /> 
          <div style = {{marginTop: "60px", marginLeft: "9px" }}>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesList} />
            <Route path="/article" component={ArticlePage} />
            <Route path="/gallery" component={Gallery} />
          </div>  
        </Router>
      </div>
    );
  }
}

export default withAuthenticator(App);
