import React from 'react';
import './BusSummery.css';
import { SiCirrusci } from "react-icons/si";
import { MdContactPage } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

const BusSummery = () => {
    return (
        <div className='summary-holder'>
            <div className='summary'>
                
                <div className="summary-part">
                    <SiCirrusci className='icon-tag'/>
                    <div className='sum-text'>
                        <p>7+ Courses</p>
                        <h4>Based on NCTV</h4>
                        <h5>Lorem ipsum dolor sit amet consectetur</h5>
                    </div>
                </div>

                <div className="summary-part">
                    <MdContactPage className='icon-tag'/>
                    <div className='sum-text'>
                        <p>20+ Teachers</p>
                        <h4>Experienced Teachers</h4>
                        <h5>We collect teachers from univrsities,colleges</h5>
                    </div>
                </div>

                <div className="summary-part">
                    <h3><MdShoppingCart className='icon-tag'/></h3>
                    <div className='sum-text'>
                        <p>5000k or less</p>
                        <h4>Budget Friendly Courses</h4>
                        <h5>Lorem ipsum dolor sit amet consectetur</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusSummery;