

import ScrollToTopUI from '../scroll-to-top/scroll-to-top';
import { useBackgroundImageLoader } from '../use-background-image/use-background-image';
import axios from 'axios';
import {useEffect,useState} from 'react'
const Footer = () => {

  const [data,setData]=useState()
  
  useBackgroundImageLoader()

const fetchData = () => {
axios.get('https://free-domain.in/Sreeja/api/newsarticle.php').then((res)=>{
  setData(res.data)
}).catch((err)=>{
  console.log(err);
})

}

useEffect(() => {
 
fetchData()


}, [])


  return (
    <>
       <ScrollToTopUI/>
      {/* *** START FOOTER *** */}
      <footer
        className="main-footer bg-img"
        data-image-src="assets/images/1920x1000-1.jpg"
      >
        <div className="container position-relative z-1">
          <div className="g-3 row">
            <div className="col-md-3">
              <img
                src="assets/images/logo-white.png"
                alt="footer logo"
                className="img-fluid"
              />
            </div>
          
            <div className="col-md-4">
              {/* Form */}
              <form className="row row-cols-lg-auto g-2 align-items-center justify-content-end">
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-news m-0">
                    Subscribe
                  </button>
                </div>
                <div className="form-text mt-2 text-white">
                  By subscribing you agree to our
                  <a href="#" className="text-decoration-underline text-primary">
                    Privacy Policy
                  </a>
                </div>
              </form>
            </div>
          </div>
          <hr className="mt-5 mb-4" />
          <div className="row">
            {/* START FOOTER BOX (Qr Code) */}
            {/* <div className="col-sm-6 col-lg-3 footer-box py-4">
              <div className="about-inner text-center">
                <h5 className="wiget-title">Get My App</h5>
                <div className="bg-white mb-3 d-inline-block">
                  Start Qr Code Image
                  <img
                    src="assets/images/qr-code.png"
                    className="figure-img img-fluid mb-0"
                    height={146}
                    width={146}
                    alt="..."
                  />
                  /. End Qr Code Image
                </div>
                <p>Scan qr code and download the app for your mobile. </p>
              </div>
            </div> */}
            {/*  END OF /. FOOTER BOX (Qr Code) */}
            {/* START FOOTER BOX (Twitter feeds) */}
            <div className="col-sm-6 col-lg-3 footer-box py-4">
              <div className="twitter-inner">
                <h5 className="wiget-title">Twitter feeds</h5>
                <ul className="margin-top-60">
                  <li>
                    Typi non habent claritatem insitam est usus legent is iis qui
                    facit claritatem. Investigatione{" "}
                    <a href="https://t.co/erenthemeGHTQ">
                      https://t.co/erenthemeGHTQ
                    </a>
                    <span>
                      <i className="ti ti-twitter" />
                      12 days ago
                    </span>
                  </li>
                  <li>
                    Typi non habent claritatem insitam est usus legent is{" "}
                    <a href="https://t.co/erenthemeGHTQ">
                      https://t.co/erenthemeGHTQ
                    </a>
                    <span>
                      <i className="ti ti-twitter" />
                      10 days ago
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* END OF /. FOOTER BOX (Twitter feeds) */}
            {/* START FOOTER BOX (Category) */}
            <div className="col-sm-6 col-lg-3 footer-box py-4">
              <h5 className="wiget-title">Category</h5>
              <div className="row">
                <div className="col-6">

{
data?.slice(0,8).map((res)=>(
  <ul className="list-unstyled m-0 menu-services">
  <li>
    <a href="#">{res.category}</a>
  </li>
</ul>

))
              

}
                </div>
                <div className="col-6">
                  <ul className="list-unstyled m-0 menu-services">
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">Startups</a>
                    </li>
                    <li>
                      <a href="#">Gadgets</a>
                    </li>
                    <li>
                      <a href="#">Inspiration</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* END OF /. FOOTER BOX (Category) */}
            {/* START FOOTER BOX (Recent Post) */}
            <div className="col-sm-6 col-lg-3 footer-box py-4">
              <h5 className="wiget-title">Recent Post</h5>
              <div className="footer-news-grid">
{

  data?.slice(0,3).map((res)=>(


    <div className="news-list-item">


    <div className="img-wrapper">
      <a href="#" className="thumb">
        <img
          src={res.image_path}
          alt="image"
          className="img-fluid"
        />
        <div className="link-icon">
          <i className="fa fa-camera" />
        </div>
      </a>
    </div>

    <div className="post-info-2">
      <h5>
        <a href="#" className="title">
          {res.subtitle }
        </a>
      </h5>
      <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
        <li>{res.publish_date}</li>
      </ul>
    </div>
  </div>
  ))
}


        
              </div>
            </div>
            {/* END OF /. FOOTER BOX (Recent Post) */}
          </div>
          {/* START HOT TOPICS */}
          
          
          {/* END OF /. HOT TOPICS */}
        </div>
      </footer>
      {/* *** END OF /. FOOTER *** */}

      {/* *** START SUB FOOTER *** */}
      <div className="sub-footer">
        <div className="container">
          <div className="align-items-center g-1 g-sm-3 row">
            <div className="col text-center text-sm-start">
              <div className="copy">Copyright@2023 I-News Inc.</div>
            </div>
            <div className="col-sm-auto">
              <ul className="footer-nav list-unstyled text-center mb-0">
                <li className="list-inline-item">
                  <a href="privacy.html">Privacy</a>
                </li>
                <li className="list-inline-item">
                  <a href="contact.html">Contact</a>
                </li>
                <li className="list-inline-item">
                  <a href="about.html">About</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Donation</a>
                </li>
                <li className="list-inline-item">
                  <a href="faq.html">F.A.Q</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Footer;