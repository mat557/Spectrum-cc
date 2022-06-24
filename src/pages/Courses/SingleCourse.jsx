import React from 'react';
import './Courses.css';

const SingleCourse = ({c}) => {
    const {img , name ,lecture,exams,price,description} = c;


    return (
        <div className='single-card'>
            <img src={img} alt="" />
            <div className='card-text'>
                <h5>Course : {name}</h5>
                <p>{lecture} lectures & {exams} exams</p>
                <p>Cost : ${price}</p>
                <button className='enrole-button'>Enrole</button>
            </div>
        </div>
    );
};

export default SingleCourse;