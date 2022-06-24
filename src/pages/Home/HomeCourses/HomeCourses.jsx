import React from 'react';
import useCourses from '../../../Hooks/useCourses';
import CardHome from './CardHome';
import './HomeCourses.css'

const HomeCourses = () => {
    const [course] = useCourses();
    return (
        <div className='courser-holder'>
            <div className='course-title'>
                <h1>Our Courses</h1>
                <p>Checkout what we got for you</p>
            </div>
            <div className='course-card'>
                {
                    course.map(single => <CardHome
                    key={single._id}
                    single={single}
                    ></CardHome>)
                }
            </div>
            <button className='show-all-button'>Show All</button>
        </div>
    );
};

export default HomeCourses;