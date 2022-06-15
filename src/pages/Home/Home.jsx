import React from 'react';
import Courses from '../Courses/Courses';
import Banner from './Banner/Banner';
import BusSummery from './BusSummery/BusSummery';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <BusSummery></BusSummery>
            <Courses></Courses>
        </>
    );
};

export default Home;