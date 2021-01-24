import React from 'react';
import {
BrowserRouter as Router,
Route
} from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import './App.scss';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ArticlePage from '../pages/ArticlePage';
import ArticlesList from '../pages/ArticlesList';
import NavBar from '../shared/NavBar';



function App() {
  return (
    <Router>
    <NavBar />
      <div className="App">
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          <Route path="/article" component={ArticlePage} />
          <h1>We now have Auth!</h1>
          <AmplifySignOut />
        </div>  
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
