
"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';


const HomeLinks = [
    { href: '/', text: 'Home – Layout 1', badge: 'NEW' },
    { href: '/home-two', text: 'Home – Layout 2', badge: 'POPULAR' },
    { href: '/home-three', text: 'Home – (Box) Layout 3' },
    { href: '/home-four', text: 'Home – Layout 4' },
    { href: '/home-five', text: 'Home – Layout 5' },
    { href: '/home-six', text: 'Home – Layout 6' },
    { href: '/home-seven', text: 'Home – Layout 7' },
    { href: '/home-eight', text: 'Home – Layout 8' },
    { href: '/home-nine', text: 'Home – Layout 9' },
    { href: '/category-style', text: 'Category - layout 1' },
    { href: '/category-style-two', text: 'Category - layout 2' },
    { href: '/category-style-three', text: 'Category - layout 3' },
    { href: '/post-template', text: 'Post - layout 1' },
    { href: '/post-template-two', text: 'Post - layout 2' },
    { href: '/post-template-three', text: 'Post - layout 3' },

];


const HeaderTwo = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const store = [];

    const router = useRouter();

    data.map((res) => {
        store.push(res.category);
    });

    const uniqueCategories = [...new Set(store)];
    console.log(uniqueCategories, "uniqueCategories");


    const fetch = () => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://free-domain.in/Sreeja/api/newsarticle.php');
                setData(response.data);



            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }


    useEffect(() => {
        fetch()

    }, [])


    const path = usePathname()
    useEffect(() => {
        const fullSkinSearch = () => {
            let wHeight = window.innerHeight;
            // Search bar middle alignment
            const fullscreenSearchform = document.getElementById('fullscreen-searchform');
            fullscreenSearchform.style.top = `${wHeight / 2}px`;
            // Reform search bar on window resize
            window.addEventListener('resize', () => {
                wHeight = window.innerHeight;
                fullscreenSearchform.style.top = `${wHeight / 2}px`;
            });
        };

        fullSkinSearch(); // Call the function once the component is mounted

        // Cleanup function if needed
        return () => {
            // Remove event listeners or perform cleanup if required
        };
    }, []);

    const handleSearchButtonClick = () => {
        setIsSearchOpen(!isSearchOpen);
        console.log(isSearchOpen ? 'Closed Search' : 'Open Search, Search Centered');
    };

    const handleCloseButtonClick = () => {
        setIsSearchOpen(false);
        console.log('Closed Search');
    };
    return (
        <header>
            {/* START HEADER TOP SECTION */}
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* Start top left menu */}
                            <div className="d-flex top-left-menu">
                                <ul className="align-items-center d-flex flex-wrap">
                                    <li>
                                        {/* Start header social */}
                                        <div className="header-social">
                                            <ul className="align-items-center d-flex gap-2">

                                            </ul>
                                        </div>
                                        {/* End of /. header social */}
                                    </li>
                                    <li className="d-none d-sm-block">
                                        <Link href="#">Contact</Link>
                                    </li>

                                </ul>
                            </div>
                            {/* End of /. top left menu */}
                        </div>
                        {/* Start header top right menu */}
                        <div className="col-auto ms-auto">
                            <div className="header-right-menu">
                                <ul className="d-flex justify-content-end">



                                </ul>
                            </div>
                        </div>{" "}
                        {/* end of /. header top right menu */}
                    </div>{" "}
                    {/* end of /. row */}
                </div>{" "}
                {/* end of /. container */}
            </div>
            {/* END OF /. HEADER TOP SECTION */}
            {/* START MIDDLE SECTION */}
            <div className="d-md-block d-none header-mid">
                <div className="container">
                    <div className="align-items-center row">
                        <div className="col-sm-4">
                            <Link href="/">
                                <img
                                    src="assets/images/logo.png"
                                    className="img-fluid header-logo header-logo_dark"
                                    alt=""
                                />
                                <img
                                    src="assets/images/logo-white.png"
                                    className="img-fluid header-logo_white"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="col-sm-8">
                            <Link href="#">
                                <img
                                    src="assets/images/add728x90-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* END OF /. MIDDLE SECTION */}
            {/* START NAVIGATION */}
            {/* START NAVIGATION */}
            {/* START NAVIGATION */}
            {/* START NAVIGATION */}
            <nav className="custom-navbar navbar navbar-expand-lg sticky-top flex-column no-logo no-logo">
                {/* Start Fullscreen Search */}
                <div className={`fullscreen-search-overlay ${isSearchOpen ? 'fullscreen-search-overlay-show' : ''}`} >
                    <Link
                        href="#"
                        className="fullscreen-close"
                        onClick={handleCloseButtonClick}
                        id="fullscreen-close-button"
                    >
                        <i className="ti ti-close" />
                    </Link>
                    <div id="fullscreen-search-wrapper">
                        <form method="get" id="fullscreen-searchform">
                            <input
                                type="text"
                                defaultValue=""
                                placeholder="Type keyword(s) here"
                                id="fullscreen-search-input"
                            />
                            <i className="ti ti-search fullscreen-search-icon">
                                <input value="" type="submit" />
                            </i>
                        </form>
                    </div>
                </div>
                {/* /. End Fullscreen Search */}
                <div className="container position-relative">
                    {/* Start Navbar Brand*/}
                    <Link className="navbar-brand d-md-none" href="/">
                        {/* <img class="logo-dark" src="assets/images/logo.png" alt=""> */}
                        <img
                            src="assets/images/logo.png"
                            className="header-logo_dark"
                            alt=""
                        />
                        <img
                            src="assets/images/logo-white.png"
                            className="header-logo_white"
                            alt=""
                        />
                    </Link>
                    {/* End Navbar Brand*/}
                    {/* Start Search Button */}
                    <button
                        type="button"
                        className="btn btn-search_two  ms-auto ms-md-0 d-lg-none"
                        onClick={handleSearchButtonClick}
                    >
                        <i className="fa fa-search" />
                    </button>
                    {/* End Search Button */}
                    {/* Start Navbar Toggler Buton */}
                    <button
                        className="navbar-toggler ms-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {" "}
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* End Navbar Toggler Buton */}



                    <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                        {/* Start Navbar Collapse Header */}
                        <div className="align-items-center border-bottom d-flex d-lg-none  justify-content-between mb-3 navbar-collapse__header pb-3">
                            {/* Start Brand Logo For Mobile */}
                            <div className="collapse-brand flex-shrink-0">
                                <Link href="/">
                                    <img
                                        src="assets/images/logo.png"
                                        className="header-logo_dark"
                                        alt=""
                                    />
                                </Link>
                                <Link href="/">
                                    <img
                                        src="assets/images/logo-white.png"
                                        className="header-logo_white"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            {/* End Brand Logo For Mobile */}
                            {/* Start Collapse Close Button */}
                            <div className="flex-grow-1 ms-3 text-end">
                                <button
                                    type="button"
                                    className="bg-transparent border-0 collapse-close p-0 position-relative"
                                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                                >
                                    <span /> <span />
                                </button>
                            </div>
                            {/* End Collapse Close Button */}
                        </div>
                        {/* End Navbar Collapse Header */}


                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link " href="#" data-bs-auto-close="outside" aria-expanded="false">
                                    Home
                                </Link>
                            </li>


                            {HomeLinks.slice(15, 19).map((link, index) => (
                                <li key={index} className="nav-item">
                                    <Link className={`nav-link ${path === link.href ? 'active' : ''}`} href={link.href}>
                                        {link.text} {link.badge && <span className="menu-badge">{link.badge}</span>}
                                    </Link>
                                </li>
                            ))}

                            {uniqueCategories?.map((res) => (
                                <li
                                    onClick={() =>
                                        router.push(`/detailPage/${res}`)
                                        // router.push(`detailPage/${res}`)
                                    }
                                    className="">
                                    <div className='nav-link nav-item ' >
                                        <span span className="" >{res}</span>
                                    </div>
                                </li>
                            ))}



                        </ul>


                    </div>





                    <div className="w-100 w-lg-auto d-none d-lg-flex">
                        {/* Start Search Button */}
                        <div className='d-flex align-items-center'>
                            <button type="button" className="btn btn-search_two ms-auto" onClick={handleSearchButtonClick} >

                                <i className="fa fa-search fa-lg" />
                            </button>



                        </div>
                        {/* End Search Button */}
                    </div>
                    {/* End Color Change Button */}
                </div>
            </nav>
            {/* END OF/. NAVIGATION */}
            {/* END OF/. NAVIGATION */}
            {/* END OF/. NAVIGATION */}
            {/* END OF/. NAVIGATION */}
        </header>
    );
};

export default HeaderTwo;