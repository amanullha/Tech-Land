import React from 'react';
import Slider from 'infinite-react-carousel';


import banner1 from '../Assets/images/banner1.jpg'
import banner2 from '../Assets/images/banner2.jpg'
import banner3 from '../Assets/images/banner3.jpg'
import banner5 from '../Assets/images/banner5.jpg'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const ReactSlider = () => {
    const settings = {
        autoplay: true,
        arrows: false
    };


    return (
        <div className='relative'>

            <Slider {...settings} className="z-0">

                <div>
                    <img className='min-h-[60vh] lg:max-h-[80vh] w-full' src={banner1} alt="" />
                </div>
                <div>
                    <img className='min-h-[60vh] lg:max-h-[80vh] w-full' src={banner2} alt="" />
                </div>
                <div>
                    <img className='min-h-[60vh] lg:max-h-[80vh] w-full' src={banner3} alt="" />
                </div>

                <div>
                    <img className='min-h-[60vh] lg:max-h-[80vh] w-full' src={banner5} alt="" />
                </div>


            </Slider>

            <div className='absolute z-10 top-[40%] flex justify-center items-center'>

                <div className='px-5 lg:px-20 xl:mx-32'>

                    <div className='pl-5 md:pl-0 flex gap-5  items-end'>
                        <h1 className=' text-green-600 text-6xl md:text-9xl font-bold tracking-wider '>Tech</h1>
                        <h1 className='text-yellow-400 text-4xl md:text-7xl font-bold tracking-wider '>Land</h1>
                    </div>

                    <p className='text-xl font-bold tracking-wide text-gray-400 pl-8'>Tech Land is the fastest growing software developer community and
                        leading e-learning platform that has brought a new way of learning
                        for the next generation of developers to learn and upskills
                        themselves and created an interconnected community of developers
                        that is deeply collaborative and extends across Bangladesh</p>
                </div>

            </div>


        </div>
    );
};

export default ReactSlider;