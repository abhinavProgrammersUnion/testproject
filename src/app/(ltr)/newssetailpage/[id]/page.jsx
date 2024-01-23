"use client"

import LayoutTwo from '@/components/ltr/layout/layout-two';
import LeftCarousal from '@/components/ltr/left-carousal/left-carousal';
import useRemoveBodyClass from '@/components/ltr/useEffect-hook/useEffect-hook';
import Link from 'next/link';
import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import { usePathname } from 'next/navigation';
import { useState } from 'react'
import axios from 'axios';


const page = () => {

    const [newStore, setStore] = useState([])
    let totalResult = []
    const pathName = usePathname().split('/newssetailpage/')[1]
    console.log(pathName,"testingggg");
    newStore.map((item) => {
        if (item.title.split(' ').join('-') === pathName) {
            totalResult.push(item)
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://free-domain.in/Sreeja/api/newsarticle.php').then((resp) => {
                setStore(resp.data);
            });
        };
        fetchData();
    }, []);
    return (
        <LayoutTwo>
            {/* START PAGE TITLE */}
            <div className="page-title">
                <div className="container">
                    <div className="align-items-center row">
                        <div className="col">
                            <h1 className="mb-sm-0">
                                <strong>
                                    news Details</strong>
                            </h1>
                        </div>

                    </div>
                </div>
            </div>
            <main className="page_main_wrapper">
                {/* START POST BLOCK SECTION */}
                <section className="slider-inner">
                    <div className="container">
                        <div className="row thm-margin">
                            <div className="col-md-6 thm-padding">
                                <div className="slider-wrapper">

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row row-m">
                        <div className="col-sm-7 col-md-8 col-p main-content">
                            <StickyBox>
                                <div className="post-inner categoty-style-1">
                                    <div className="post-body">
                                        <div className="row row-m">

                                            {totalResult.map((item) =>
                                                <div className="col-md-12 col-p">
                                                    <article>
                                                        <figure>
                                                            <a href="">
                                                                <img
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
                                                                <a href="#">
                                                                    {item.subtitle}
                                                                </a>
                                                            </h3>
                                                            <ul className="authar-info d-flex flex-wrap">
                                                                <li>
                                                                    <i className="ti ti-timer" /> {item.publish_date}
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </article>
                                                </div>
                                            )}









                                        </div>
                                    </div>
                                    {/* Post footer */}
                                    <div className="post-footer">
                                        <div className="row thm-margin">
                                            <div className="col-xs-12 col-sm-12 col-md-12 thm-padding">
                                                {/* pagination */}
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
                                                {/* /.pagination */}
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                            </StickyBox>
                        </div>
                        <div className="col-sm-5 col-md-4 col-p rightSidebar">
                            <StickyBox>





                                {
                                    totalResult?.map((res) =>
                                        <div className="add-inner">


                                            <p style={{ color: "black",marginTop:"22px" }} dangerouslySetInnerHTML={{ __html: res.newsdetails }} />

                                        </div>

                                    )
                                }


                                <div className="tabs-wrapper">

                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="most-viewed-pane"
                                            role="tabpanel"
                                            aria-labelledby="most-viewed"
                                            tabIndex={0}
                                        >
                                        
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




                            </StickyBox>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutTwo>

    );
};

export default page