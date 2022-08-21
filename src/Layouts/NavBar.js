import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi'
import logo from '../Assets/images/logo.png'
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import { FaUser } from 'react-icons/fa'


const NavBar = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);

    console.log("user : ", user);

    const navigate = useNavigate();

    const handleProfile = () => {
        navigate('/profile')
    }
    const HeaderList = <>

        <li>
            <NavLink to='/' className='rounded-lg'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/news-feed' className='rounded-lg'>
                News Feed
            </NavLink>
        </li>

        <li>
            <NavLink to='/all-courses' className='rounded-lg'>
                All Courses
            </NavLink>
        </li>
        <li>
            <NavLink to='/groups' className='rounded-lg'>
                Groups
            </NavLink>
        </li>
        <li>
            <NavLink to='/discussion-forum' className='rounded-lg'>
                Discussion Forum
            </NavLink>
        </li>
        <li>
            <NavLink to='/blogs' className='rounded-lg'>
                Blogs
            </NavLink>
        </li>

    </>



    const sideList = <>
        <li>
            <div>
                <HiOutlineShoppingCart className='text-black' />
            </div>

        </li>

        {
            user ?
                <>
                    <button
                        onClick={() => signOut(auth)}
                        className='btn btn-primary mr-1 '>LogOut</button>


                </>
                :
                <>

                    <li>
                        <NavLink to='/login' className='rounded-lg'>
                            Login
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/signup' className='rounded-lg'>
                            SignUp
                        </NavLink>

                    </li>

                </>
        }

        {
            user ?
                <li className='flex flex-col justify-center items-center gap-0 ml-2 cursor-pointer' onClick={handleProfile}>

                    {
                        user?.photoURL ? <img className='rounded-full h-8 w-10 m-0 p-0' src={user?.photoURL} alt="" />
                            :
                            <div className='m-0 p-0'><FaUser size={30} /></div>
                    }

                    <small readonly="readonly" className='m-0 p-0 ' readOnly>{user?.displayName}</small>




                </li>
                :
                ''
        }



    </>










    return (
        <div className='hero shadow-2xl '>

            <div class="drawer ">


                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

                <div class="drawer-content flex flex-col ">

                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar shadow-lg flex justify-between xl:px-40 lg:px-12 px-1 fixed top-0 z-50 bg-white">

                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>




                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal flex">
                                {/* <!-- Navbar menu content here --> */}
                                {
                                    HeaderList
                                }
                            </ul>
                        </div>


                        <div class="flex-1 px-2 mx-2  lg:flex lg:justify-center items-center">

                            <img className='' width={250} src={logo} alt="" />
                        </div>


                        <div class="flex-none ">
                            <ul class="menu menu-horizontal items-center">
                                {
                                    sideList
                                }
                            </ul>
                        </div>


                    </div>


                    {/* <!-- Page content here --> */}
                    {/* Content */}

                    <div className='mt-[90px]'>
                        {
                            children
                        }
                    </div>



                </div>


                <div class="drawer-side">

                    <label for="my-drawer-3" class="drawer-overlay"></label>

                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}


                        {
                            HeaderList
                        }

                    </ul>

                </div>




            </div>

        </div>
    );
};

export default NavBar;