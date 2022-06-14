import React, { useState } from 'react';
import "./Navbar.css";
import menuPic from "../../images/menu.png";
import closePic from "../../images/close.png";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [showbar,setShowbar] = useState(false);
    const [user] = useAuthState(auth);


    const handleSignout = () =>{
        signOut(auth);
    }
    

    return (
        <div className='body'>
            <div className="container">
                {
                    showbar ?
                    <img onClick={() => setShowbar(!showbar)} src={closePic} alt="" className='menu-cross'/>
                    :
                    <img onClick={() => setShowbar(!showbar)} src={menuPic} alt="" className='menu-icon'/>
                }
                
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
                                <Link className='link-title' to="/teacher">Teachers</Link>
                                {
                                user && <Link className='link-title' to="/dashboard">Dashboard</Link>
                                }
                                {
                                    user ?
                                    <button onClick={handleSignout} className='signout-button'>Sign Out</button>
                                    :
                                    <Link className='link-title' to="/login">Login</Link>
                                }
                         </div>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Navbar;