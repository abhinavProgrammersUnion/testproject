
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'
import Image from 'next/image';
import {useState,useEffect} from 'react'

import axios from 'axios'

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});



const HomeFeatureCarousal = () => {


const [data,setData]=useState([])
console.log(data,"ggggggggggg");

const fetvhData = () => {

axios.get('https://free-domain.in/Sreeja/api/newsarticle.php').then((res)=>{
  setData(res.data)
}).catch((err)=>{
  console.log(err);
})


}


useEffect(() => {
 fetvhData()
}, [])

  
  return (

<>
  {  
    <OwlCarousel className="owl-theme featured-carousel"
      loop={true}
      margin={10}
      nav={false}
      dots={false}
      responsive={{
        0: {
          items: 1,
          autoplay: true
        },
        576: {
          items: 2
        },
        768: {
          items: 2.5
        },
        992: {
          items: 3.5
        },
        1200: {
          items: 4
        }
      }}
    >


  {  
  data.slice(0,5).map((res)=>
<div className="news-list-item" key={res.news_id}>
  {console.log(res.category,'$$$$$$$$$$$')}
        <div className="img-wrapper">
          <a href="#" className="thumb">
            <Image
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
          <span className="post-category">{res.category}</span>
          <h5 className="mb-0">
            <a href="#" className="title"   dangerouslySetInnerHTML={{ __html: res.newsdetails }}>
           
            </a>
          </h5>
        </div>
      </div>
  )
  
  
}

      {/* <div className="news-list-item">
        <div className="img-wrapper">
          <a href="#" className="thumb">
            <Image
              src="assets/images/115x85-9.jpg"
              alt=""
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Sports</span>
          <h5 className="mb-0">
            <a href="#" className="title">
              Proin quis massa tincidunt justo cursus dapibus.
            </a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="#" className="thumb">
            <Image
              src="assets/images/115x85-3.jpg"
              alt=""
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Travel</span>
          <h5 className="mb-0">
            <a href="#" className="title">
              Nulla hendrerit dui in erat varius vestibulum.
            </a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="#" className="thumb">
            <Image
              src="assets/images/115x85-10.jpg"
              alt=""
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Business</span>
          <h5 className="mb-0">
            <a href="#" className="title">
              Maecenas dictum lacus in bibendum commodo.
            </a>
          </h5>
        </div>
      </div> */}
    </OwlCarousel>}

    </>

  );
};

export default HomeFeatureCarousal;