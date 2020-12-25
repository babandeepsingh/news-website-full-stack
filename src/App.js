import { useEffect } from 'react';
import logo from './img/Trolley-header.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from './component/Home/Home'
import About from './component/About/About'
import PDFDownload from './component/PDFDownload';
import apiService from './api.service';
import Punjabi from './component/Home/Punjabi/Punjabi';
import Admin from './component/Admin/Admin';

function App() {
  
  return (
    <div className="App">
      <img src={logo} className='img-fluid' />
      <div className="container">
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink to="/" className="navbar-brand text-uppercase" activeClassName="active">trolley times</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link" aria-current="page" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/PDFDownload" className="nav-link" activeClassName="active">PDF-Download</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="alert alert-primary mt-2 mb-2" role="alert">
              <button type="button" className="btn btn-primary" style={{ marginRight: "10px" }}>
                Highlight
              </button>Center letter with no concrete solution. Unions meeting tomorrow morning.
            </div>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/PDFDownload">
                <PDFDownload />
              </Route>
              <Route path="/punjabi">
                <Punjabi />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              {/* <Route path="/pb">
                <Punjabi />
              </Route> */}
            </Switch>
          </div>
          <hr className="my-4" />

          <footer className="bg-light text-center text-lg-start">

            <div className="container p-4">

              <div className="row">

                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Trolley Times</h5>

                  <h6>No Farmer No Food</h6>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="http://egazette.nic.in/WriteReadData/2020/222039.pdf" target="_blank" className="text-dark">English Bills</a>
                    </li>
                    <li>
                      <a href="http://agricoop.nic.in/agriculture-reforms" target="_blank" className="text-dark">Government website</a>
                    </li>
                    <li>
                      <a href="http://agricoop.nic.in/sites/default/files/No.%2020%200f%202020%20Punjabi%20Version.pdf" target="_blank" className="text-dark">Punjab Bill 1</a>
                    </li>
                    <li>
                      <a href="http://agricoop.nic.in/sites/default/files/No.%2021%20of%202020%20Punjabi%20Version.pdf" target="_blank" className="text-dark">Punjab Bill 2</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-0">Links</h5>

                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" className="text-dark">Home</Link>
                    </li>
                    <li>
                      <Link to="/punjabi" className="text-dark">Punjabi</Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-dark">About</Link>
                    </li>
                    <li>
                      <Link to="/PDFDownload" className="text-dark">PDF Download</Link>
                    </li>
                  </ul>
                </div>

              </div>

            </div>



            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2020 Copyright: Voice of Kisaan. Developed by Babandeep Singh. {" "}
              <a className="text-dark" href="https://trolley-times.ga/">Trolley-Times.ga</a> {" "}<a className="text-dark" href="https://trolleytimes.cf">TrolleyTimes.cf</a>

            </div>

          </footer>
        </Router>
      </div >

      {/* Foooter */}


    </div >
  );
}

export default App;
