import React from 'react';
import './HomeCourses';

const CardHome = (props) => {
    const {name,price} = props.single;
    return (
        <div  className='card'>
            {/* <img className='card-img' style={{width:'250px'}} src={img} alt="" /> */}
            <h1>Course Name:{name}</h1>
            <p>Course Fee:${price}</p>
            <button className='card-button'>Show Details</button>
        </div>
    );
};

export default CardHome;