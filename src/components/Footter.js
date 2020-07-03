import React from 'react';
class Footter extends React.Component {
  render() {
  return (
    <div>
     <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12 width-set-50">
                  <div className="footer-details">
                    <h4>Get in touch</h4>
                    <ul className="list-unstyled footer-contact-list">
                      <li>
                        <i className="fa fa-map-marker fa-lg" />
                        <p>Phòng 602-604, Khu B, Đại học Đà Nẵng, 41 Lê Duẫn, Đà Nẵng</p>
                      </li>
                      <li> 
                        <i className="fa fa-phone fa-lg" />
                        <p><a href="tel:+1-202-555-0100"> (84-236) 3822041</a></p>
                      </li>
                      <li>
                        <i className="fa fa-envelope-o fa-lg" />
                        <p><a href="mailto:demo@info.com"> contact@dniit.udn.vn</a></p>
                      </li>
                    </ul>
                    <div className="footer-social-icon">
                      <a href="#"><i className="fa fa-facebook" /></a>
                      <a href="#"><i className="fa fa-twitter" /></a>                           
                      <a href="#"><i className="fa fa-instagram" /></a>
                      <a href="#"><i className="fa fa-google-plus" /></a>
                      <a href="#"><i className="fa fa-youtube-play" /></a>
                    </div>
                    <div className="input-group" id="subscribe">
                      <input type="text" className="form-control subscribe-box" defaultValue name="subscribe" placeholder="EMAIL ID" />
                      <span className="input-group-btn">
                        <button type="button" className="btn subscribe-button"><i className="fa fa-paper-plane fa-lg" /></button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 width-50 width-set-50">
                  <div className="footer-details">
                    <h4>explore</h4>
                    <ul className="list-unstyled footer-links">
                      <li><a href="index.html">Home</a></li>
                      <li className="active"><a>Database</a></li>
                      <li><a href="rooms.html">Project</a></li>
                      <li><a href="gallery.html">Gallery</a></li>
                      <li> <a href="news.html">Introduce</a></li>
                      <li> <a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="footer-details">
                    <h4>Now On Instagram</h4>
                    <div className="row">
                      <div className="instagram-images">
                        <div id="instafeed" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright">
                © 2017 All right reserved. Designed by <a href="http://www./" target="_blank">Intern DNIIT</a>
              </div>
            </div>
          </footer>
          <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top" id="back-to-top">
            <span><i aria-hidden="true" className="fa fa-angle-up fa-lg" /></span>
            <span>Top</span>
          </a>
          </div>
  );
}

}

export default Footter;
