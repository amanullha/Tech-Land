import React from 'react';
import SingleInstructor from './SingleInstructor';


const Instructors = () => {


    const courses = [
        {
            id: 1,
            name: 'Tutor 1',
            experties: 'C++',

            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjiZcO-YXQifsGRQvYWE8Hoxn63UhxlfFMA&usqp=CAU',
        },
        {
            id: 2,
            name: 'Tutor 2',
            experties: 'Java',

            img: 'https://homestutor.com/images/about.jpg',
        },
        {
            id: 3,
            name: 'Tutor 3',
            experties: 'Python',

            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjiZcO-YXQifsGRQvYWE8Hoxn63UhxlfFMA&usqp=CAU',
        },
        {
            id: 4,
            name: 'Tutor 4',
            experties: 'PHP',

            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXo68Yp25b4YC7aHznmeUkYExWxsbLcKmItMvjt8zRo0zkgasHZB_5YtXwxdqG7qtUD0&usqp=CAU',
        },
        {
            id: 5,
            name: 'Tutor ',
            experties: 'Python',

            img: 'https://homestutor.com/images/about.jpg',
        },
        {
            id: 6,
            name: 'Tutor 6',
            experties: 'Go Lang',

            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjiZcO-YXQifsGRQvYWE8Hoxn63UhxlfFMA&usqp=CAU',
        },

    ]













    return (
        <div className='py-20 xl:px-40 lg:px-12 px-1'>
            <div className='flex justify-center items-center gap-1'>
                <h1 className='md:text-4xl text-2xl font-bold text-black'>Out</h1>
                <h1 className='md:text-4xl text-2xl font-bold text-green-700'>Developers And </h1>
                <h1 className='md:text-4xl text-2xl font-bold text-black'>Instructors</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5 '>

                {
                    courses.map((c, i) => <SingleInstructor
                        key={i}
                        course={c}
                    />)
                }


            </div>

        </div>
    );
};

export default Instructors;