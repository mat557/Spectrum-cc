import React, { useState } from 'react';
import "./Navbar.css";
import menuPic from "../../images/menu.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showbar,setShowbar] = useState(false);

    // console.log(showbar)

    return (
        <div className='body'>
            <div className="container">
                <img onClick={() => setShowbar(!showbar)} src={menuPic} alt="" className='menu-icon'/>
                {
                    showbar
                    
                    &&
                     
                    <div  className="menu-box">
                        <div className="right-links">
                            <Link className='heading-btn' to="/">Get Started</Link>
                        </div>
                            <div className="menu-links">
                                <Link className='link-title' to="/">Home</Link>
                                <Link className='link-title' to="/courses">Courses</Link>
                                <Link className='link-title' to="/blog">Blog</Link>
                                <Link className='link-title' to="/dashboard">Dashboard</Link>
                                <Link className='link-title' to="/login">Login</Link>
                         </div>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Navbar;