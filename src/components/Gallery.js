import React from 'react';
import Footter from'./Footter';
import Header from'./Header';
class Gallery extends React.Component {
	render() {
    return (
      <div>
      <div>
      <Header/>
      </div>
      <div>
        <div id="page">
          <section className="image-head-wrapper">
            <div className="inner-wrapper">
              <h1>Gallery</h1>
            </div>
          </section>
          <div className="clearfix" />
          <section className="gallery-block">
            <div className="container">
              <div className="row">
                <div className="grid hover-effect">
                  <div className="grid-sizer" />
                  <div className="grid-item percent37 gallery-image">
                    <a className="example-image-link img-responsive" href="images/gallery1-1.jpg" data-lightbox="example-1"><img src="images/gallery1.jpg" className="img-responsive" alt="gallery1" /></a>
                  </div>
                  <div className="grid-item percent25 gallery-image">
                    <a className="example-image-link img-responsive" href="images/gallery2-2.png" data-lightbox="example-1"><img src="images/gallery2.png" className="img-responsive" alt="gallery1" /></a>
                  </div>
                  <div className="grid-item percent37 gallery-image">
                    <a className="example-image-link img-responsive" href="images/gallery3-3.jpg" data-lightbox="example-1"><img src="images/gallery3.jpg" className="img-responsive" alt="gallery1" /></a>
                  </div>
                  <div className="grid-item percent25 gallery-image">
                    <a className="example-image-link img-responsive" href="images/gallery4-4.jpg" data-lightbox="example-1"><img src="images/gallery4.jpg" className="img-responsive" alt="gallery1" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*-footer-*/}
          <Footter/>
          {/*back to top-*/}
          <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top" id="back-to-top">
            <span><i aria-hidden="true" className="fa fa-angle-up fa-lg" /></span>
            <span>Top</span>
          </a>
        </div>
      </div>
      </div>
    );
		
}
}

export default Gallery;
