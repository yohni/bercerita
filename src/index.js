import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.scss';
import Main from './containers';
import Navbar from './components/navbar';
import * as serviceWorker from './serviceWorker';

const App = () =>(
  <div className='main-container'>
    <Navbar />
    <div className='main-content'>
      <Route exact={true} path='/' component={Main} />
    </div>
  </div>
)

ReactDOM.render(
  <Router>
    <App/>
  </Router>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
