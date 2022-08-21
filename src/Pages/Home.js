import React from 'react';
import AllCousers from '../Components/AllCousers';
import Instructors from '../Components/Instructors';
// import Banner from '../Components/Banner';
import ReactSlider from '../Components/ReactSlider';

const Home = () => {
    return (
        <div>
            <ReactSlider />
            <AllCousers />
            <Instructors />
        </div>
    );
};

export default Home;