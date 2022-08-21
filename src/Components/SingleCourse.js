import React from 'react';

const SingleCourse = ({ course }) => {

    if (!course) return;

    return (
        <div className='card shadow-xl p-5'>

            <div className='mb-5'>
                <div className=' h-40 md:h-64'>
                    <img className='h-full w-full  ' src={course.img} alt="" />
                </div>

                < h1 className='text-xl font-bold text-blue-900 '>{course.name}</h1>
                <h1>Price: <span className='text-warning'>{course.price}</span></h1>
            </div>

            <button className='btn btn-primary'>Enroll</button>

        </div>
    );
};

export default SingleCourse;