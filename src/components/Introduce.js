import React from 'react';
import Footter from'./Footter';
import Header from'./Header';
class Imtroduce extends React.Component {
	render() {
    return (
      <div>
      <div>
      <Header/>
      </div>
         <div>
        <section className="image-head-wrapper" style={{backgroundImage: 'url("images/banner5.jpg")'}}>
          <div className="inner-wrapper">
            <h1>Introduce</h1>
          </div>
        </section>
        <div className="clearfix" />
        <section className="resort-overview-block">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
                <div className="side-A">
                  <div className="product-thumb">
                    <div className="image">
                      <a href="single-blog.html"><img alt="image" className="img-responsive" src="images/category1.png" /></a>
                    </div>
                  </div>
                </div>
                <div className="side-B">
                  <div className="product-desc-side">
                    <h3><a href="single-blog.html">Giới thiệu chung</a></h3>
                    <p>Viện DNIIT thuộc Đại học Đà Nẵng được thành lập và hoạt động theo Quyết định số 1551/QĐ-ĐHĐN ngày 05 tháng 05 năm 2017 của Giám đốc Đại Học Đà Nẵng. Mục đích thành lập Viện là nhằm đáp ứng yêu cầu hợp tác khoa học, đào tạo sau đại học và chuyển giao công nghệ  của Đại học Đà Nẵng,...</p>
                    <div className="links"><a href="single-blog.html">Read more</a></div>
                  </div>
                </div>
              </div>
              <div className="clear" />
              <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-left">
                <div className="side-A">
                  <div className="product-thumb">
                    <div className="image">
                      <a href="single-blog.html"><img src="images/category2.jpg" className="img-responsive" alt="image" /></a>
                    </div>
                  </div>
                </div>
                <div className="side-B">
                  <div className="product-desc-side">
                    <h3><a href="single-blog.html">Nhiệm vụ</a></h3>
                    <p>Viện có nhiệm vụ phát triển nghiên cứu khoa học đa ngành, đào tạo sau đại học, chuyển giao công nghệ, phổ biến thông tin khoa học và sáng tạo dựa trên mô hình tích hợp năng lực giữa các Đại học lớn thông qua việc hợp tác quốc tế trong lĩnh vực đào tạo và nghiên cứu khoa học, đặc biệt ...</p>
                    <div className="links"><a href="single-blog.html">Read more</a></div>
                  </div>
                </div>
              </div>
              <div className="clear" />
              <div className="col-md-12 offspace-45" />
              <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
                <div className="side-A">
                  <div className="product-desc-side">
                    <h3><a href="single-blog.html">Các trung tâm</a></h3>
                    <p>Viện DNIIT có ba trung tâm:
                      - Trung tâm nghiên cứu và chuyển giao công nghệ MIRE;
                      - Trung tâm quản lý đào tạo, thông tin khoa học công nghệ NiceCAMPUS ;
                      - Trung tâm CNFp (campus numérique francophone partenaire).</p>
                    <div className="links"><a href="single-blog.html">Read more</a></div>
                  </div>
                </div>
                <div className="side-B">
                  <div className="product-thumb">
                    <div className="image txt-rgt">
                      <a className="arrow-left" href="single-blog.html"><img alt="imaga" className="img-responsive" src="images/category3.png" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear" />
              <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-left">
                <div className="side-A">
                  <div className="product-desc-side">
                    <h3><a href="single-blog.html">Chắc năng các trung tâm</a></h3>
                    <p>1. Với chức năng là một cơ sở hợp tác nghiên cứu sáng tạo, trao đổi thông tin khoa học và chuyển giao công nghệ,MIRE nhằm đáp ứng các mục tiêu sau đây:...</p>
                    <div className="links"><a href="single-blog.html">Read more</a></div>
                  </div>
                </div>
                <div className="side-B">
                  <div className="product-thumb txt-rgt">
                    <div className="image">
                      <a className="arrow-left" href="single-blog.html"><img alt="imaga" className="img-responsive" src="images/category4.jpg" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </section>
          <Footter/>
      </div>
      </div>
    );
  }
}

export default Imtroduce;
