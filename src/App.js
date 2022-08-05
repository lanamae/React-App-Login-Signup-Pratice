import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './login.components';
import Signup from './signup.components';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar navbar-expand-lg navbar-light bg-warning bg-gradient fixed-top'>
          <div className='container'>
            <Link className='navbar-brand fs-5 fw-5' to={'/sign-in'}>
              REACT PRACTICE
            </Link>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo2'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/sign-up'}>
                    Signup
                  </Link>
                </li>
              </ul>


            </div>

          </div>
        </nav>

        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route path="/sign-in" element={<Login/>}/>
              <Route path="/sign-up" element={<Signup/>}/>
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
