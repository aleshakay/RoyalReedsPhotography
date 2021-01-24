import React from 'react';
import {
BrowserRouter as Router,
Route
} from 'react-router-dom';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ArticlePage from '../pages/ArticlePage';
import ArticlesList from '../pages/ArticlesList';
import NavBar from '../shared/NavBar';
import './App.scss';

const initialFormState = { name: '', description: '' }


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
          <AmplifySignOut />
        </div>  
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
