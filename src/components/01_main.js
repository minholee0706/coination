import React from "react";
import "./CSS/01_main.css";
import APP1_img from "../components/assets/img/portfolio/portfolio-1.jpg";
import APP2_img from "../components/assets/img/portfolio/portfolio-2.jpg";
import APP3_img from "../components/assets/img/portfolio/portfolio-3.jpg";
import APP4_img from "../components/assets/img/portfolio/portfolio-4.jpg";


const Main =()=> {

  // const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY_TEST;
  const REST_API_KEY =process.env.REACT_APP_KAKAO_REST_API_KEY_TEST;
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return(
        <div>
    {/* Hero Section  */}
        <section id="hero">
            <div className="hero-container">
            <h1>Welcome to Coination</h1>
            {/* <h2>We are team of talented designers making websites with Bootstrap</h2> */}
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
        </section>
    {/* End Hero. */}

    {/* Header */}
    <div id="header" className="d-flex align-items-center ">
        <div className="container-fluid d-flex align-items-center justify-content-lg-between">

        {/* <h1 className="logo me-auto me-lg-0"><a href="">Coination</a></h1>   */}
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
        <div className="navbar_div">
        <nav id="navbar" className="navbar order-last order-lg-0">
          
            <ul>
            
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto " href="#portfolio">Contents</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="nav-link scrollto" href={KAKAO_AUTH_URL}>KakaoLogin</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        </div>
        {/* .navbar */}

        <div className="header-social-links d-flex align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>

        </div>
    </div>
    
    {/* End Header */}

    <main id="main">

{/* <!-- ======= About Section ======= --> */}
<section id="about" className="about">
  <div className="container">

    <div className="section-title">
      <h2>About Coination</h2>
    </div>

    <div className="row content">
      <div className="col-lg-6">
        <p>
          저희는 이런 것을 합니다!
        </p>
        <ul>
          <li><i className="ri-check-double-line"></i> 코인의 실시간 정보를 확인할 수 있습니다.</li>
          <li><i className="ri-check-double-line"></i> 자신의 보유 코인을 기부할 수 있습니다.</li>
          <li><i className="ri-check-double-line"></i> 기부한 내역으로 NFT 발행을 할 수 있습니다.</li>
        </ul>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0">
        <p>
          실시간으로 여러분의 코인을 확인하고 기부를 통해 NFT를 발행해 보세요.
        </p>
        <a href="#services" className="btn-learn-more">More</a>
      </div>
    </div>

  </div>
</section>
{/* <!-- End About Section --> */}


{/* <!-- ======= Services Section ======= --> */}
<section id="services" className="services">
  <div className="container">

    <div className="section-title">
      <h2>Services</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="icon-box">
          <div className="icon"><i className="bi bi-briefcase" style={{color: "#ff689b"}}></i></div>
          <h4 className="title"><a href="">실시간 차트</a></h4>
          <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
          <div className="icon"><i className="bi bi-card-checklist" style={{color: "#e9bf06"}}></i></div>
          <h4 className="title"><a href="">알람 설정</a></h4>
          <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
        <div className="icon-box">
          <div className="icon"><i className="bi bi-bar-chart" style={{color: "#3fcdc7"}}></i></div>
          <h4 className="title"><a href="">기부</a></h4>
          <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-4">
        <div className="icon-box">
          <div className="icon"><i className="bi bi-binoculars" style={{color: "#41cf2e"}}></i></div>
          <h4 className="title"><a href="">NFT</a></h4>
          <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>

     
    </div>

  </div>
</section>
{/* <!-- End Services Section --> */}

{/* <!-- ======= Portfolio Section ======= --> */}
<section id="portfolio" className="portfolio">
  <div className="container">

    <div className="section-title">
      <h2>Contents</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>

    <div className="portfolio-container1">

      <div className="portfolio-div col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-img"><img src={APP1_img} className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="portfolio-div col-lg-4 col-md-6 portfolio-item filter-web">
        <div className="portfolio-img"><img src={APP2_img} className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>Web 3</h4>
          <p>Web</p>
          <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="portfolio-div col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-img"><img src={APP3_img} className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>App 2</h4>
          <p>App</p>
          <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

      <div className="portfolio-div col-lg-4 col-md-6 portfolio-item filter-card">
        <div className="portfolio-img"><img src={APP4_img} className="img-fluid" alt="" /></div>
        <div className="portfolio-info">
          <h4>Card 2</h4>
          <p>Card</p>
          <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>

    </div>

  </div>
</section>

{/* <!-- ======= Contact Section ======= --> */}
<section id="contact" className="contact">
  <div className="container">

    <div className="section-title">
      <h2>Contact</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>

    <div className="row mt-5">

      <div className="col-lg-4">
        <div className="info">

          <div className="email">
            <i className="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p>krs1994@naver.com</p>
          </div>

          <div className="phone">
            <i className="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>010-5620-9103</p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* <!-- End Contact Section --> */}

</main>
{/* <!-- End #main --> */}




    </div>
    );
};

export default Main;