import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div className='banner-holder'>
            <div className='contant-holder'>
                <div className='text-holder'>
                    <p>explore 7+ courses from</p>
                    <h1>Spectrum CC</h1>
                    <h3>Check our teachers panel,Experience our courses based on national curriculam</h3>
                    <h3>Check our teachers panel,Experience our courses based on national curriculam</h3>
                    {/* <h3>Experience our courses based on </h3>
                    <h3><span>national curriculam</span></h3> */}
                    <div className="button-group">
                        <button>Check Teachers</button>
                        <button>check Courses</button>
                    </div>
                </div>
                <div className='img-holder'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;