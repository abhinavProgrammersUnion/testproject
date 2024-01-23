import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'
import { useContext, useState ,useEffect} from 'react'
import MyContext from "../../../app/hooks/MyContext";
import axios from 'axios'
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
})
const HomeCenterSlider = () => {


const [test,setTest]=useState([])

console.log(test,"888888gggggggg");

  // let imgUrl = []
  //   console.log(imgUrl,"img555h5h5hh5h55");

  const ContextValue = useContext(MyContext);
  // ContextValue.map((res)=>{
  //   console.log(res,"res4444");
  //   imgUrl.push(res.image_path)
  // })

  
  ContextValue.map((item) => {
    console.log(item.image_path, '&&&&&&&&&&')
  })
  const optionEight = {
    loop: true,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    autoplayTimeout: 4000, //Set AutoPlay to 4 seconds
    autoplayHoverPause: true,
    nav: true,
    navText: [
      `<i class='ti ti-angle-left'></i>`,
      `<i class='ti ti-angle-right'></i>`
    ]
  }

  const dataFetch = () => {
  
    axios.get('https://free-domain.in/Sreeja/api/newsarticle.php').then((resp)=>{
      setTest(resp.data)
    }).then((err)=>{
      console.log(err);
    })
  }

useEffect(() => {
 
  dataFetch()

}, [])



  
  return (
    <>

    </>
  );
};

export default HomeCenterSlider;