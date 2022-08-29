import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import Nav from './Nav'

ReactDOM.render(
  <Router>
  <Nav/>
  <App />
  </Router>,
  document.querySelector('.contain')
);
