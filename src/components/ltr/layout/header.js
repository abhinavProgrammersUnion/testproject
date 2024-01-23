
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { WiDayLightning } from 'weather-icons-react';
import ThemeChanger from '../style-selectors/style-selector';
import axios from 'axios'
import MyContext from '.././../../app/hooks/MyContext';
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
const Header = () => {
    const router = useRouter()
    console.log('Router:', router);
    // const handleCategoryClick = (category) => {

    //     console.log(category, "handleCategoryClick");
    //     router.push(`detailPage/${category}`)

    // }


    const ContextValue = useContext(MyContext);
    console.log(ContextValue, "ooookkkkk");

    //filtered by categories
    let fetchedcartebyreduce = []
    ContextValue?.map((res) => {
        fetchedcartebyreduce.push(res.category)
    })
    let filtered = [...new Set(fetchedcartebyreduce)]

    console.log(filtered, "5555jjn");
    //filtered by categories end




    const [isSidebarActive, setSidebarActive] = useState(false);
    const [isOverlayActive, setOverlayActive] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [wetherData, setWetherData] = useState([])
    const path = usePathname()
    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
        setOverlayActive(!isOverlayActive);
    };

    const closeSidebar = () => {
        setSidebarActive(false);
        setOverlayActive(false);
    };

    

    // useEffect(() => {
    //     const dismissOverlay = document.querySelector('#dismiss');
    //     const overlay = document.querySelector('.overlay');
    //     const navIcon = document.querySelector('#nav-icon');

    //     if (dismissOverlay && overlay) {
    //         dismissOverlay.addEventListener('click', closeSidebar);
    //         overlay.addEventListener('click', closeSidebar);
    //     }

    //     if (navIcon) {
    //         navIcon.addEventListener('click', toggleSidebar);
    //     }


    //     // Cleanup function for removing event listeners
    //     return () => {
    //         if (dismissOverlay && overlay) {
    //             dismissOverlay.removeEventListener('click', closeSidebar);
    //             overlay.removeEventListener('click', closeSidebar);
    //         }
    //         if (navIcon) {
    //             navIcon.removeEventListener('click', toggleSidebar);
    //         }
    //     };
    // }, [isSidebarActive, isOverlayActive]); // R




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
    };

    const handleCloseButtonClick = () => {
        setIsSearchOpen(false);
    };
    let dateAndtime = new Date().toString().split(' ')


    const wetherFetch = () => {

        axios.get('https://api.weatherapi.com/v1/current.json?key=315f2285e8a24faa8b973133241001&q=London').then((resp) => {
            setWetherData(resp.data)
            console.log(resp.data,"axiosTest");

        }).catch((err) => {
            console.log(err);
        })


    }



    useEffect(() => {

        wetherFetch()

    }, [])



    return (
        <>
            {/* *** START PAGE HEADER SECTION *** */}
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
                            </div>
                            {/* end of /. header top right menu */}
                        </div>
                        {/* end of /. row */}
                    </div>
                    {/* end of /. container */}
                </div>
                {/* END OF /. HEADER TOP SECTION */}
                {/* START MIDDLE SECTION */}
                <div className="d-md-block d-none header-mid">
                    <div className="container">
                        <div className="align-items-center row justify-content-center">
                            <div className="col">
                                <div className="hstack gap-3">
                                    <div id="nav-icon" className={isSidebarActive ? 'open' : ''}>
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <div className="vr" />
                                    <span className="fw-semibold text-uppercase menu-text">
                                        All Section
                                    </span>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="align-items-center d-flex gap-3">
                                    {/* Start weather text */}

                                    {/* {  wetherData.map((resp)=>(
    <div className="fs-5 fw-semibold weather-text">

                                    
<WiDayLightning size={28} /> 11.23°C
</div>
))     } */}
                                    <div style={{}}>
                                        <span style={{ marginRight: "5px" }}>{wetherData?.location?.name}   </span>

                                        {wetherData?.current?.temp_c}    °C
                                    </div>





                                    {/* Start logo */}

                                    {/* Start language dropdown */}

                                </div>
                            </div>

                            <div className="col text-end fw-semibold text-uppercase date-text">
                                <p> {dateAndtime[0]}, {dateAndtime[1]}, {dateAndtime[2]} ,{dateAndtime[3]}</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* END OF /. MIDDLE SECTION */}
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
                          <Image
                                src="assets/images/logo.png"
                                className="header-logo_dark"
                                alt=""
                            />
                          <Image
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
                            className={`navbar-toggler ms-1`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >

                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* End Navbar Toggler Buton */}


                        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                            {/* Start Navbar Collapse Header */}
                            <div className="align-items-center border-bottom d-flex d-lg-none  justify-content-between mb-3 navbar-collapse__header pb-3">
                                {/* Start Brand Logo For Mobile */}
                                <div className="collapse-brand flex-shrink-0">
                                    <Link href="/">
                                      <Image
                                            src="assets/images/logo.png"
                                            className="header-logo_dark"
                                            alt=""
                                        />
                                    </Link>
                                    <Link href="/">
                                      <Image
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

                                {filtered?.map((res) => (
                                    <li key={res.news_id}
                                        onClick={() =>
                                            router.push(`detailPage/${res}`)
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
                {/* START SIDEBAR */}
                <nav id="sidebar" className={isSidebarActive ? "active p-4" : "p-4"} >
                    <div id="dismiss">
                        <i className="fas fa-arrow-left" />
                    </div>
                    <div className="d-flex flex-column h-100">
                        <div className="">
                            <Link href="/" className="d-inline-block my-3">
                              <Image src="assets/images/logo-white.png" alt="" height={50} />
                            </Link>
                            <p>
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <ul className="nav d-block flex-column my-4">
                            <li className="nav-item h5">
                                <Link className="nav-link" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item h5">
                                <Link className="nav-link" href="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item h5">
                                <Link className="nav-link" href="#">
                                    Our Journal
                                </Link>
                            </li>
                            <li className="nav-item h5">
                                <Link className="nav-link" href="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <h5 className="wiget-title">Instagrams</h5>
                        <ul className="g-1 insta_thumb list-unstyled p-0 row">
                            <li className="col-6">
                                <Link href="#" className="insta_effect d-inline-block position-relative">
                                  <Image
                                        src="assets/images/instagram-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </Link>
                            </li>
                            <li className="col-6">
                                <Link href="#" className="insta_effect d-inline-block position-relative">
                                  <Image
                                        src="assets/images/instagram-2.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </Link>
                            </li>
                            <li className="col-6">
                                <Link href="#" className="insta_effect d-inline-block position-relative">
                                  <Image
                                        src="assets/images/instagram-3.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </Link>
                            </li>
                            <li className="col-6">
                                <Link href="#" className="insta_effect d-inline-block position-relative">
                                  <Image
                                        src="assets/images/instagram-4.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-auto pb-3">
                            {/* Address */}
                            <p className="mb-2 fw-bold">New York, USA (HQ)</p>
                            <address className="mb-0">
                                1123 Fictional St, San Francisco, CA 94103
                            </address>
                            <p className="mb-2">
                                Call:{" "}
                                <Link href="#" className="text-white">
                                    <u>(123) 456-7890</u> (Toll-free)
                                </Link>{" "}
                            </p>
                            <Link href="#" className="d-block text-white">
                                hello@inews.com
                            </Link>
                        </div>
                    </div>
                </nav>
                {/* END OF /. SIDEBAR */}
                <div className={isOverlayActive ? "overlay active" : "overlay"} />

            </header>
            {/* *** END OF /. PAGE HEADER SECTION *** */}

        </>
    );
};

export default Header;