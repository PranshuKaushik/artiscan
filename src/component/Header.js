import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="site-title">
                    <a href="/#home" style={{ textDecoration: "none" }}>
                      <h3>ArtiScan</h3>
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-md-9 col-sm-9 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/#home" className="active">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/#about">About</a>
                      </li>
                      <li>
                        <a href="/#history">History</a>
                      </li>
                      <li>
                        <a href="/#time-period">Time Period</a>
                      </li>
                      <li>
                        <a href="/#algos">Algos</a>
                      </li>
                      <li>
                        
                      <Link to="/output">Know Your Artifacts</Link>
                      </li>
                    </ul>
                    {/* <div className="input">
                      <form>
                        <input type="file" id="input" />
                      </form>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Header;
