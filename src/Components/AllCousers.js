import React from 'react';
import SingleCourse from './SingleCourse';


const AllCousers = () => {


    const courses = [
        {
            id: 1,
            name: 'Learn java opp',
            price: 200,
            img: 'https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg',
        },
        {
            id: 2,
            name: 'Learn JavaScript',
            price: 200,
            img: 'https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
        },
        {
            id: 3,
            name: 'Learn java opp',
            price: 200,
            img: 'https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg',
        },
        {
            id: 3,
            name: 'Learn java opp',
            price: 200,
            img: 'https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg',
        },
        {
            id: 5,
            name: 'Learn java opp',
            price: 200,
            img: 'https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg',
        },
        {
            id: 6,
            name: 'Learn JavaScript',
            price: 200,
            img: 'https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
        },
        {
            id: 7,
            name: 'Learn java opp',
            price: 200,
            img: 'https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg',
        },
        {
            id: 8,
            name: 'Learn JavaScript',
            price: 200,
            img: 'https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
        },
    ]













    return (
        <div className='py-20 xl:px-40 lg:px-12 px-1'>
            <div className='flex justify-center items-center gap-1'>
                <h1 className='md:text-4xl text-2xl font-bold text-black'>Pick a</h1>
                <h1 className='md:text-4xl text-2xl font-bold text-green-700'>Programming Language</h1>
                <h1 className='md:text-4xl text-2xl font-bold text-black'>To Learn</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5 '>

                {
                    courses.map((c, i) => <SingleCourse
                        key={i}
                        course={c}
                    />)
                }


            </div>

        </div>
    );
};

export default AllCousers;