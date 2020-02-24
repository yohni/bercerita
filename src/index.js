import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
import Footer from './components/footer';
import Main from './containers';
import Navbar from './components/navbar';
import * as serviceWorker from './serviceWorker';


const App = () =>(
  <div className='container main-container'>
    <Navbar />
    <div className='main-content'>
      <Route path='/' component={Main} />
    </div>
    <Footer />
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App/>
  </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
