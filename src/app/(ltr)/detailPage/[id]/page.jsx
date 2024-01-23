"use client"

import LayoutTwo from '@/components/ltr/layout/layout-two';
import LeftCarousal from '@/components/ltr/left-carousal/left-carousal';
import useRemoveBodyClass from '@/components/ltr/useEffect-hook/useEffect-hook';
import Link from 'next/link';
import React, { UseEffect, UseState } from 'react';
import StickyBox from 'react-sticky-box';
import axios from 'axios'
import { UsePathname } from 'next/navigation';
import Image from 'next/image';
const page = () => {

  const [fetch, setFetch] = UseState([])


  const pathname = UsePathname();

  const pathnamedata = pathname.split('/').slice(2, 4);

  console.log(pathnamedata, "444444");
  const filteredData = fetch.filter((res) => res.category == pathnamedata);





  const fetchedData = () => {
    axios.get('https://free-domain.in/Sreeja/api/newsarticle.php').then((resp) => {
      setFetch(resp.data)
    })
  }





  UseEffect(() => {
    fetchedData()
  }, [])


  return (
    <LayoutTwo>
      {/* START PAGE TITLE */}
      <div className="page-title">
        <div className="container">
          <div className="align-items-center row">
            <div className="col">
              <h1 className="mb-sm-0">
                <strong>Category Style</strong> One
              </h1>
            </div>
            <div className="col-12 col-sm-auto">

            </div>
          </div>
        </div>
      </div>
      {/* END OF /. PAGE TITLE */}


      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        {/* START POST BLOCK SECTION */}
        <section className="slider-inner">
          <div className="container">

          </div>
        </section>
        {/* END OF /. POST BLOCK SECTION */}
        <div className="container">
          <div className="row row-m">
            {/* START MAIN CONTENT */}
            <div className="col-sm-7 col-md-8 col-p main-content">
              <StickyBox>
                <div className="post-inner categoty-style-1">
                  {/* post body */}
                  <div className="post-body">

                    {filteredData.map((item) =>
                      <div className="row row-m" key={item.news_id}>
                        <div className="col-md-6 col-p">
                          <article>
                            <figure>
                              <a href="">

                               <Image
                                  src={item.image_path}
                                  height={242}
                                  width={345}
                                  alt=""
                                  className="img-fluid"
                                />
                              </a>
                              <span className="post-category">{item.title}</span>
                            </figure>
                            <div className="post-info">
                              <h3>
                                <a href="#" dangerouslySetInnerHTML={{ __html: item.newsdetails.split(' ').slice(0, 10).join(' ') }}>
                                  {/* {item.newsdetails.split(' ').slice(0,10).join(' ')} */}
                                </a>
                              </h3>
                              <ul className="authar-info d-flex flex-wrap">
                                <li>
                                  <i className="ti ti-timer" /> May 15, 2016
                                </li>
                                <li>
                                  <a href="#" className="link">
                                    <i className="ti ti-thumb-up" />
                                    15 likes
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </article>
                        </div>
                        <div className="col-md-6 col-p">
                          <article>
                            <figure>
                              <a href="">
                               <Image
                                  src={item.image_path}
                                  height={242}
                                  width={345}
                                  alt=""
                                  className="img-fluid"
                                />
                              </a>
                              <span className="post-category">{item.title}</span>
                            </figure>
                            <div className="post-info">
                              <h3>
                                <a href="#" dangerouslySetInnerHTML={{ __html: item.newsdetails.split(' ').slice(0, 10).join(' ') }}>
                                  {/* {item.newsdetails.split(' ').slice(0,10).join(' ')} */}
                                </a>
                              </h3>
                              <ul className="authar-info d-flex flex-wrap">
                                <li>
                                  <i className="ti ti-timer" /> May 15, 2016
                                </li>
                                <li>
                                  <a href="#" className="link">
                                    <i className="ti ti-thumb-up" />
                                    15 likes
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </article>
                        </div>
                      </div>
                    )}



                  </div>
                  {/* Post footer */}
                  <div className="post-footer">
                    {/* <div className="row thm-margin">
                      <div className="col-xs-12 col-sm-12 col-md-12 thm-padding">
                      
                        <ul className="pagination">
                          <li className="disabled">
                            <span className="ti ti-angle-left" />
                          </li>
                          <li className="active">
                            <span>1</span>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li className="disabled">
                            <span className="extend">...</span>
                          </li>
                          <li></li>
                          <li>
                            <a href="#">12</a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ti ti-angle-right" />
                            </a>
                          </li>
                        </ul>{" "}
                      
                      </div>
                    </div> */}
                  </div>{" "}

                </div>
              </StickyBox>
            </div>
            {/* END OF /. MAIN CONTENT */}
            {/* START SIDE CONTENT */}
            <div className="col-sm-5 col-md-4 col-p rightSidebar">
              <StickyBox>
                {/* START SOCIAL COUNTER TEXT */}
                <div className="align-items-center d-flex fs-6 justify-content-center mb-1 text-center social-counter-total">
                  <i className="fa-solid fa-heart text-primary me-1" /> Join{" "}
                  <span className="fw-bold mx-1">2.5M</span> Followers
                </div>
                {/* END OF /. SOCIAL COUNTER TEXT */}
                {/* START SOCIAL ICON */}
                <div className="social-media-inner mb-2">
                  <ul className="g-1 row social-media">
                    <li className="col-4">
                      <a href="#" className="rss">
                        <i className="fas fa-rss" />
                        <div>2,035</div>
                        <p>Subscribers</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="fb">
                        <i className="fab fa-facebook-f" />
                        <div>3,794</div>
                        <p>Fans</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="insta">
                        <i className="fab fa-instagram" />
                        <div>941</div>
                        <p>Followers</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="you_tube">
                        <i className="fab fa-youtube" />
                        <div>7,820</div>
                        <p>Subscribers</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter" />
                        <div>1,562</div>
                        <p>Followers</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="pint">
                        <i className="fab fa-pinterest-p" />
                        <div>1,310</div>
                        <p>Followers</p>
                      </a>
                    </li>
                  </ul>{" "}
                  {/* /.social icon */}
                </div>
                {/* END OF /. SOCIAL ICON */}
                {/* START ADVERTISEMENT */}
                <div className="add-inner">
                 <Image
                    src="assets/images/add320x270-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                {/* END OF /. ADVERTISEMENT */}
                {/* START NAV TABS */}
                <div className="tabs-wrapper">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border-0 active"
                        id="most-viewed"
                        data-bs-toggle="tab"
                        data-bs-target="#most-viewed-pane"
                        type="button"
                        role="tab"
                        aria-controls="most-viewed-pane"
                        aria-selected="true"
                      >
                        Most Viewed
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border-0"
                        id="popular-news"
                        data-bs-toggle="tab"
                        data-bs-target="#popular-news-pane"
                        type="button"
                        role="tab"
                        aria-controls="popular-news-pane"
                        aria-selected="false"
                      >
                        Popular news
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="most-viewed-pane"
                      role="tabpanel"
                      aria-labelledby="most-viewed"
                      tabIndex={0}
                    >
                      <div className="most-viewed">
                        <ul id="most-today" className="content tabs-content">
                          <li>
                            <span className="count">01</span>
                            <span className="text">
                              <a href="#">
                                South Africa bounce back on eventful day
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">02</span>
                            <span className="text">
                              <a href="#">
                                Steyn ruled out of series with shoulder fracture
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">03</span>
                            <span className="text">
                              <a href="#">
                                BCCI asks ECB to bear expenses of team s India tour
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">04</span>
                            <span className="text">
                              <a href="#">
                                Duminy, Elgar tons set Australia huge target
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">05</span>
                            <span className="text">
                              <a href="#">
                                English spinners are third-class citizens, says
                                Graeme Swann
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="popular-news-pane"
                      role="tabpanel"
                      aria-labelledby="popular-news"
                      tabIndex={0}
                    >
                      <div className="popular-news">
                        <div className="p-post">
                          <h4>
                            <a href="#">
                              It is a long established fact that a reader will be
                              distracted by{" "}
                            </a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="#">
                                <i className="ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                        <div className="p-post">
                          <h4>
                            <a href="#">
                              It is a long established fact that a reader will be
                              distracted by{" "}
                            </a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="#">
                                <i className="ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                        <div className="p-post">
                          <h4>
                            <a href="#">
                              It is a long established fact that a reader will be
                              distracted by{" "}
                            </a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="#">
                                <i className="ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END OF /. NAV TABS */}
              </StickyBox>
            </div>
            {/* END OF /. SIDE CONTENT */}
          </div>
        </div>
      </main>
      {/* *** END OF /. PAGE MAIN CONTENT *** */}
    </LayoutTwo>

  );
};

export default page;