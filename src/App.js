import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
 

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar navbar-expand-lg navbar-light bg-dark bg-gradient fixed-top'>
          <div className='container'>
            <Link className='navbar-brand fs-5 fw-5 text-white' to={'/sign-in'}>
              REACT PRACTICE
            </Link>
            <div className='collapse navbar-collapse d-block' id='navbarTogglerDemo2'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link text-info' to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link text-primary' to={'/sign-up'}>
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
