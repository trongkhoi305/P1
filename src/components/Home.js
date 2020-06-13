import React from 'react';
import Footter from'./Footter';
import Header from'./Header';
class Home extends React.Component {
	render() {
		return (
      <div>
      <div>
      <Header/>
      </div>
        <div id="page">
          <div id="myCarousel1" className="carousel slide" data-ride="carousel"> 
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#myCarousel1" data-slide-to={0} className="active" />
              <li data-target="#myCarousel1" data-slide-to={1} />
              <li data-target="#myCarousel1" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="item active"> <img src="images/banner5.jpg" style={{width: '100%', height: '500px'}} alt="First slide" />
                <div className="carousel-caption">
                  <h1>DANANG<br />INTERNATIONAL INSTITUTE OF TECHNOLOGY</h1>
                </div>
              </div>
              <div className="item"> <img src="images/banner.jpg" style={{width: '100%', height: '500px'}} alt="Second slide" />
                <div className="carousel-caption">
                  <h1><br /> </h1>
                </div>
              </div>
              <div className="item"> <img src="images/banner2-1.jpg" style={{width: '100%', height: '500px'}} alt="Third slide" />
                <div className="carousel-caption">
                  <h1>DANANG<br /> INTERNATIONAL INSTITUTE OF TECHNOLOGY</h1>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#myCarousel1" data-slide="prev"> <img src="images/icons/left-arrow.png" onmouseover="this.src = 'images/icons/left-arrow-hover.png'" onmouseout="this.src = 'images/icons/left-arrow.png'" alt="left" /></a>
            <a className="right carousel-control" href="#myCarousel1" data-slide="next"><img src="images/icons/right-arrow.png" onmouseover="this.src = 'images/icons/right-arrow-hover.png'" onmouseout="this.src = 'images/icons/right-arrow.png'" alt="left" /></a>
          </div>
          <div className="clearfix" />
          {/*service block-*/}
          <section className="service-block">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-6 width-50">
                  <div className="service-details text-center">
                    <div className="service-image">
                      <img alt="image" className="img-responsive" src="images/icons/wifi.png" />
                    </div>
                    <h4><a>Free wifi</a></h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6 width-50">
                  <div className="service-details text-center">
                    <div className="service-image">
                      <img alt="image" className="img-responsive" src="images/icons/key.png" />
                    </div>
                    <h4><a>Project service</a></h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
                  <div className="service-details text-center">
                    <div className="service-image">
                      <img alt="image" className="img-responsive" src="images/icons/car.png" />
                    </div>
                    <h4><a>Free parking</a></h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
                  <div className="service-details text-center">
                    <div className="service-image">
                      <img alt="image" className="img-responsive" src="images/icons/user.png" />
                    </div>
                    <h4><a>Customer support</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*gallery block-*/}
          <section className="gallery-block gallery-front">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="gallery-image">
                    <img className="img-responsive" src="images/big.jpg" />
                    <div className="overlay">
                      <a className="info pop example-image-link img-responsive" href="images/big.jpg" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true" /></a>
                      <p><a>Big Projects</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="gallery-image">
                    <img className="img-responsive" src="images/medium.jpeg" />
                    <div className="overlay">
                      <a className="info pop example-image-link img-responsive" href="images/medium.jpeg" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true" /></a>
                      <p><a>Medium Projects</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="gallery-image">
                    <img className="img-responsive" src="images/small.jpg" />
                    <div className="overlay">
                      <a className="info pop example-image-link img-responsive" href="images/small.jpg" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true" /></a>
                      <p><a>Small Projects</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="gallery-image">
                    <img className="img-responsive" src="images/Experimental.jpg" />
                    <div className="overlay">
                      <a className="info pop example-image-link img-responsive" href="images/Experimental.jpg" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true" /></a>
                      <p><a> Experimental Projects</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*offer block*/}
          <section className="vacation-offer-block">
            <div className="vacation-offer-bgbanner">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 col-sm-6 col-xs-12">
                    <div className="vacation-offer-details">
                      <h1>Wellcome</h1>
                      <h4>DNIIT</h4>
                      <button type="button" className="btn btn-default">Choose a project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End*/}
          {/*--resort-overview-*/}
          <section className="resort-overview-block">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
                  <div className="side-A">
                    <div className="product-thumb">
                      <div className="image">
                        <a><img src="images/big.jpg" className="img-responsive" alt="image" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="side-B">
                    <div className="product-desc-side">
                      <h3><a>Big project</a></h3>
                      <p>Big projects</p>
                      <div className="links"><a href="single-blog.html">Read more</a></div>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-left">
                  <div className="side-A">
                    <div className="product-thumb">
                      <div className="image">
                        <a><img alt="image" className="img-responsive" src="images/medium.jpeg" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="side-B">
                    <div className="product-desc-side">
                      <h3><a>Medium projects</a></h3>
                      <p>Medium projects</p>
                      <div className="links"><a href="single-blog.html">Read more</a></div>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
                  <div className="side-A">
                    <div className="product-desc-side">
                      <h3><a>Small projects</a></h3>
                      <p>Small projects</p>
                      <div className="links"><a href="single-blog.html">Read more</a></div>
                    </div>
                  </div>
                  <div className="side-B">
                    <div className="product-thumb">
                      <div className="image txt-rgt">
                        <a className="arrow-left"><img src="images/small.jpg" className="img-responsive" alt="imaga" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-left">
                  <div className="side-A">
                    <div className="product-desc-side">
                      <h3><a> Experimental Projects</a></h3>
                      <p> Experimental Projects</p>
                      <div className="links"><a href="single-blog.html">Read more</a></div>
                    </div>
                  </div>
                  <div className="side-B">
                    <div className="product-thumb txt-rgt">
                      <div className="image">
                        <a className="arrow-left"><img src="images/Experimental.jpg" className="img-responsive" alt="imaga" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </section>
          {/*---blog slider---*/}
          {/*blog trainer block*/}
          <section className="blog-block-slider">
            <div className="blog-block-slider-fix-image">
              <div id="myCarousel2" className="carousel slide" data-ride="carousel">
                <div className="container">
                  {/* Wrapper for slides */}
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel2" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel2" data-slide-to={1} />
                    <li data-target="#myCarousel2" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <div className="blog-box">
                        <p>Very good.</p>
                      </div>
                      <div className="blog-view-box">
                        <div className="media">
                          <div className="media-left">
                            <img src="images/client1.png" className="media-object" />
                          </div>
                          <div className="media-body">
                            <h3 className="media-heading blog-title">Walter Hucko</h3>
                            <h5 className="blog-rev">Satisfied Customer</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="blog-box">
                        <p>Very ok ... Will be back</p>
                      </div>
                      <div className="blog-view-box">
                        <div className="media">
                          <div className="media-left">
                            <img src="images/client2.png" className="media-object" />
                          </div>
                          <div className="media-body">
                            <h3 className="media-heading blog-title">Jules Boutin</h3>
                            <h5 className="blog-rev">Satisfied Customer</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="blog-box">
                        <p>Good quality</p>
                      </div>
                      <div className="blog-view-box">
                        <div className="media">
                          <div className="media-left">
                            <img src="images/client3.png" className="media-object" />
                          </div>
                          <div className="media-body">
                            <h3 className="media-heading blog-title">Attilio Marzi</h3>
                            <h5 className="blog-rev">Satisfied Customer</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </section>
          {/*-blog block-*/}
          <section className="blog-block">
            <div className="container">
              <div className="row offspace-45">
                <div className="view-set-block">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="event-blog-image">
                      <img alt="image" className="img-responsive" src="images/blog1.jpeg" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
                    <div className="event-blog-details">
                      <h4><a href="single-blog.html">How to start a technology?</a></h4>
                      <h5>Post By Admin <a><i aria-hidden="true" className="fa fa-heart-o fa-lg" />Likes</a><a><i aria-hidden="true" className="fa fa-comment-o fa-lg" />comments</a></h5>
                      <p>It’s easy to get caught up in the glamour of launching a successful startup with the possibility of it becoming the next Google or Facebook. However, because of the proliferation of overnight success stories, too many founders dive into entrepreneurship without a plan, limiting their chances of fortune and glory.</p>
                      <p>That is why we here at the Founder Institute have provided an in-depth guide to the tips and tricks of launching a startup, complete with expert advice and useful tips for every stage of your company.</p>
                      <a className="btn btn-default" href="single-blog.html">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row offspace-45">
                <div className="view-set-block">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="event-blog-image">
                      <img alt="image" className="img-responsive" src="images/blog2.png" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
                    <div className="event-blog-details">
                      <h4><a href="single-blog.html">How to manage the project?</a></h4>
                      <h5>Post By Admin <a><i aria-hidden="true" className="fa fa-heart-o fa-lg" />Likes</a><a><i aria-hidden="true" className="fa fa-comment-o fa-lg" />comments</a></h5>
                      <p>Regardless of the size of the project and if you’re hired as freelancer or in-house, project managers have the difficult task of not only launching a project, but also making sure that everything runs smoothly and collaborating with team members and the client. It can actually get stressful. But, if you properly plan and manage the project, things don’t get as hectic.</p>
                      <p>If this is your first opportunity at managing a project, here’s how you can efficiently manage a project from start to finish.</p>
                      <a className="btn btn-default" href="single-blog.html">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*-footer-*/}
      <Footter/>
        </div>
      </div>
    );
	
	}
}
export default Home;
