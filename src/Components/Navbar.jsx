import React from 'react'

const Navbar = () => {
  return (
    <nav className="grid grid-flow-col p-5 justify-evenly items-center">
        <div className="left-nav">
            <a href="https://sciastra.com">
            <img src="https://www.sciastra.com/Assets/Images/newsciastra.jpg" alt="SciAstra Logo" className="h-16 w-16 rounded-[50%]" />
            </a>
        </div>
        <button className="menu-item md:hidden" data-collapse-toggle="navbar" type="button" aria-controls="navbar" aria-expanded="false">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="right-nav grid grid-flow-row gap-12 uppercase text-sm md:grid-flow-col max-lg:hidden" id="navbar">
            <div className="menu-item">
                <a className="lra" href="https://sciastra.com/">
                Home
                </a>
            </div>
            <div className="menu-item">
                <a className="lra" href="https://www.sciastra.com/courses/">
                Courses
                </a>
            </div>
            <div className="menu-item">
                <a className="lra" href="https://www.sciastra.com/selections">
                Selections
                </a>
            </div>
            <div className="menu-item">
                <a className="lra" href="https://www.sciastra.com/blog/">
                Blogs
                </a>
            </div>   
            <div className="menu-item">
                <a className="lra" href="https://www.sciastra.com/materials">
                Materials
                </a>
            </div>  
            <div className="menu-item active">
                <a className="lra">
                Team
                </a>
            </div>    
            <div className="menu-item">
                <a className="lra" href="https://www.sciastra.com/contact">
                Contact us
                </a>
            </div>  
            <div className="menu-item">
                <a className="login-button text-white text-xs p-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" href="https://sciastra.com/app/">
                Login
                </a>
            </div>
        </div>
        </nav>
  )
}

export default Navbar