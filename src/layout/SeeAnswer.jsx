import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Container from '../components/Container/Container';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
const SeeAnswer = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-24 text-white text-center font-bold text-3xl py-10 bg-blue-700'>
                <h2>প্রশ্নোত্তর</h2>
            </div>

            <Container>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-3'>
                        <div className='col-span-2 bg-blue-400 w-full h-80'>
                            <h3>Slider Here</h3>
                        </div>
                        <div>
                            <div className='h-48 w-full bg-blue-900 text-white'>
                                <h3>এক নজরে সকল প্রশ্নোত্তর</h3>
                            </div>
                            <h3>এক নজরে সকল প্রশ্নোত্তর</h3>
                            <button>বিস্তারিত</button>
                            <h3>Important Links Here</h3>
                        </div>
                    </div>

                    <div className='flex items-center justify-between mb-3'>
                        <input type="text" className='py-3 px-4 w-full bg-neutral-200' placeholder='প্রশ্নোত্তর খুঁজুন' />
                        <div className='text-white bg-blue-700 py-3 px-4'>
                            <FaSearch className='w-6 h-full'></FaSearch>
                        </div>
                    </div>


                    <div className="drawer md:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col justify-start">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="md:m-4 btn btn-circle btn-ghost fixed z-10 bg-neutral-200 md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current md:hidden"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>

                            <div className='md:py-10 md:ps-10 py-5'>
                                <Outlet />
                            </div>
                        </div>

                        <div className="drawer-side h-screen">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            {/* md:fixed md:top-0 */}
                            <ul style={{ fontSize: '16px' }} className="menu p-4 w-64 md:h-full border-r-4 text-neutral-600 border-neutral-300 bg-neutral-100 pt-10 mt-20 md:mt-0">
                                {/* Sidebar content here */}
                                {/* {navItem} */}
                            </ul>
                        </div>
                    </div>

                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default SeeAnswer;