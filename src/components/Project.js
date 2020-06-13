import React from 'react';
import Footter from'./Footter';
import Header from'./Header';
class Project extends React.Component {
	render() {
		return (
      <div>
      <div>
      <Header/>
      </div>
		<div>
        <div id="page">
          <section className="image-head-wrapper" style={{backgroundImage: 'url("images/banner3.jpg")'}}>
            <div className="inner-wrapper">
              <h1>Database</h1>
            </div>
          </section>
          <div className="clearfix" />
          <section className="about-block">
            <div className="container">
              <div className="row">
                <div className="col-md-5 about-left">
                  <p>Project <label>Data </label>Storage <span>System </span></p>
                </div>
                <div className="col-md-7 about-right">
                  <h3> Database of the project</h3>
                  <p>The projects</p>
                  <ul className="list-unstyled list-inline">
                    <li>Project 1. </li>
                    <li>Project 2. </li>
                    <li>Project 3. </li>
                    <li>Project 4. </li>
                    <li>Project 5. </li>
                  </ul>
                  <span>Choose a projects</span>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </section>
        </div>
        <Footter/>
      </div>
      </div>
    );	
  }
}

export default Project;
