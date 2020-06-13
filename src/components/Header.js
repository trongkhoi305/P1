import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
class Header extends React.Component {
	render() {
    return (
      <div>
         <div>
       <header className="header-container">
            <div className="container">
              <div className="top-row">
                <div className="row">
                  <div className="col-md-2 col-sm-6 col-xs-6">
                    <div id="logo">
                      {/*<a href="index.html"><img src="images/logo.png" alt="logo"></a>*/}
                      <Link data-hove="index.html" to="/" ><span>DNIIT</span>DNIIT</Link>
                    </div>                       
                  </div>
                  <div className="col-sm-6 visible-sm">
                    <div className="text-right"><button type="button" className="book-now-btn">Login</button></div>
                  </div>
                  <div className="col-md-8 col-sm-12 col-xs-12 remove-padd">
                    <nav className="navbar navbar-default">
                      <div className="navbar-header page-scroll">
                        <button data-target=".navbar-ex1-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>
                      </div>
                      <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
                        <ul className="list-unstyled nav1 cl-effect-10">
                          <li><Link data-hover="Home" to="/" ><span>Home</span></Link></li>
                          <li><Link data-hover="Database" to="/App"><span>Database</span></Link></li>
                          <li><Link data-hover="Project" to="/Project"><span>Project</span></Link></li>
                          <li><Link data-hover="Gallery" to="/Gallery"><span>Gallery</span></Link></li>
                          <li><Link data-hover="Introduce" to="/Introduce"><span>Introduce</span></Link></li>
                          <li><Link data-hover="Contact Us" to="/Contact"><span>Contact Us</span></Link></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-2  col-sm-4 col-xs-12 hidden-sm">
                
                    <div className="text-right">
                    <li><Link data-hover="Login" to="/Login"><button type="button" className="book-now-btn">Login</button></Link></li>
                    
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </header>
      </div>
      </div>
    );
  }
}

export default Header;
