import React from 'react'

const Footer = () => {
  return (
    <footer className="main_footer p-5 text-white bg-gradient-to-br from-black via-[#070e1f] to-[#56296b]">
    <div className="py-5 grid max-lg:justify-center">
        <img src="https://sciastra.com/Assets/Images/newsciastra.jpg" className="w-20" alt=""/>
        <h3 className="text-white">
        SciAstra
        </h3>
    </div>
    <div className="Pages grid max-lg:justify-center ">
        <p className="mb-4 font-bold fs-5  footer_links_2">
        © SciAstra
        </p>
        <ul className="list-unstyled text-light">
        <li className="mb-3">
            <a className="text-light" href="https://sciastra.com/">
            Home
            </a>
        </li>
        <li className="mb-3">
            <a className="text-light" href="https://sciastra.com/courses/">
            Our Courses
            </a>
        </li>
        <li className="mb-3">
            <a className="text-light" href="https://sciastra.com/blog/">
            Blog
            </a>
        </li>
        <li className="mb-3">
            <a className="text-light" href="https://sciastra.com/materials/">
            Free Materials
            </a>
        </li>
        <li className="mb-3">
            <a className="text-light" href="https://sciastra.com/teams/">
            Our Team
            </a>
        </li>
        <li className="mb-3">
            <a className="text-light" href="https://sciastra.com/contact/">
            Contact Us
            </a>
        </li>
        </ul>
    </div>
    <div className="container basic ">
        <div className="row">
        <div className="col-md-3 col-lg-3 mt-4 mt-lg-0">
            <p className="text-center text-lg-start fs-6">
            SciAstra Education Pvt Ltd, Bhubaneswar, Odisha
            </p>
        </div>
        <div className="col-md-3 col-lg-3 mt-4 mt-lg-0 text-center text-lg-start">
        </div>
        <div className="col-md-3 col-lg-3 mt-4 mt-lg-0 text-center text-lg-start mail">
            <a href="mailto:support@sciastra.com" className="fs-6 text-white ps-0 ps-lg-5 text-center text-lg-start">
            support@sciastra.com
            </a>
        </div>
        </div>
    </div>
    </footer>

  )
}

export default Footer