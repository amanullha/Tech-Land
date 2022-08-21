

import React from 'react';

const SingleInstructor = ({ course }) => {

    if (!course) return;

    return (
        <div className='card  p-5'>

            <div className='mb-5 card-body'>
                <div className=' h-40 md:h-64'>
                    <img className='h-full w-full rounded-3xl  ' src={course.img} alt="" />
                </div>

                < h1 className=' text-center text-2xl font-bold text-blue-900 '>{course.name}</h1>

                <h1 className='text-center'>Expertise: <span className=' text-center  text-yellow-700'>{course.experties}</span></h1>
            </div>



        </div>
    );
};

export default SingleInstructor;