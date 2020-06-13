import React from 'react';
import Footter from'./Footter';
import Header from'./Header';
class Project extends React.Component {
	render() {
    return (
      <div>
       <div>
      <div>
      <Header/>
      </div>
          <section className="image-head-wrapper" style={{backgroundImage: 'url("images/banner4.jpg")'}}>
            <div className="inner-wrapper">
              <h1>Contact Us</h1>
            </div>
          </section>
          <div className="clearfix" />
          <section className="contact-block">
            <div className="container">
              <div className="col-md-6 contact-left-block">
                <h3><span>Contact </span>Us</h3>
                <p className="text-left"> Any questions please contact us.</p>
                <p className="text-right"> Phòng 602-604, Khu B, Đại học Đà Nẵng, 41 Lê Duẫn, Đà Nẵng<i className="fa fa-map-marker fa-lg" /></p>
                <p className="text-right"><a href="tel:+1-202-555-0100"> (84-236) 3822041 <i className="fa fa-phone fa-lg" /></a></p>
                <p className="text-right"><a href="mailto:demo@info.com"> contact@dniit.udn.vn <i className="fa fa-envelope" /></a></p>
              </div>
              <div className="col-md-6 contact-form">
                <h3>Send a <span>Message</span></h3>
                <form action="#" method="post">
                  <input type="text" className="form-control" name="Name" placeholder="Name" required />
                  <input type="email" className="form-control" name="Email" placeholder="Email" required />
                  <textarea className="form-control" name="Message" placeholder="Message Here...." required defaultValue={""} />
                  <input type="submit" className="submit-btn" defaultValue="Submit" />
                </form>
              </div>
              <div className="clearfix" />
            </div>
          </section>
          {/*-footer-*/}
          <Footter/>
      </div>
      </div>
    );
  }
}

export default Project;
