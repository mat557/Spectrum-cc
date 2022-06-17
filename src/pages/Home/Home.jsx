import React from 'react';
import Banner from './Banner/Banner';
import BusSummery from './BusSummery/BusSummery';
import HomeCourses from './HomeCourses/HomeCourses';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <BusSummery></BusSummery>
            <HomeCourses></HomeCourses>
        </>
    );
};

export default Home;