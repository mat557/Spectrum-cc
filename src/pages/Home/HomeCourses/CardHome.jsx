import React from 'react';

const CardHome = (props) => {
    const {img,name} = props.single;
    return (
        <div className='card'>
            <img style={{width:'100px'}} src={img} alt="" />
            <h1>Course Name:{name}</h1>
        </div>
    );
};

export default CardHome;