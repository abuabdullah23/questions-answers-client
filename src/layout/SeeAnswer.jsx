import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Container from '../components/Container/Container';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet, Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SingleCategory from '../components/SingleCategory/SingleCategory';
import './SeeAnswer.css'
import slider1 from '../assets/images/bg/slider1.jpg'
import allQA from '../assets/images/bg/qa1.jpg'

const SeeAnswer = () => {

    const { data: categories = [], refetch } = useQuery(['categories'], async () => {
        const res = await axios.get('http://localhost:5000/categories')
        return res.data;
    })

    return (
        <div className='font-kalpurush'>
            <div className='hidden md:block'>
                <Navbar />
            </div>
            <div className='md:pt-24 text-white text-center font-bold text-3xl qa-bg h-16 md:h-full'>
                <h2 className='p-3 md:pb-8'>প্রশ্নোত্তর</h2>
            </div>

            <Container>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-3'>
                        <div className='col-span-2 bg-[#005492]'>
                            <img className='w-full h-48 sm:h-72 md:h-96 object-contain' src={slider1} alt="" />
                        </div>
                        <div>
                            <Link to='/qa/see-answer'>
                                <div className='bg-[#005492] text-white mb-2'>
                                    <img className='h-44 w-full object-contain' src={allQA} alt="" />
                                </div>
                            </Link>
                            <Link to='/qa/see-answer'>
                                <h3 className='text-xl font-bold'>এক নজরে সকল প্রশ্নোত্তর</h3>
                            </Link>
                            <p>আমার প্রশ্ন হচ্ছে নামায এ আমরা সেজদাই যে দুয়া গুলো পরি, আমি কি সে দুয়া গুলর পাশাপাশি নিজের মত করে বাংলাতে দুয়া করতে পারব।</p>

                            <button className='text-lg font-semibold py-2 px-5 mt-3 bg-[#005492] text-white w-1/2 order-1'>বিস্তারিত...</button>
                            <div className='flex justify-end'>
                                <button className='text-lg font-semibold py-2 px-5 bg-[#005492] text-white w-1/2 order-last'>প্রশ্নোত্তর</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-between mb-3'>
                        <input type="text" className='py-3 px-4 w-full bg-neutral-200' placeholder='প্রশ্নোত্তর খুঁজুন' />
                        <div className='text-white bg-[#005492] py-3 px-4'>
                            <FaSearch className='w-6 h-full'></FaSearch>
                        </div>
                    </div>


                    {/* Content Here */}
                    <div className="drawer md:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                        <div className="drawer-content flex flex-col justify-start relative">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden md:m-4 md:hidden absolute mt-2 left-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current md:hidden"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>


                            <div className='text-center w-full bg-[#005492] text-white text-2xl py-2'>প্রশ্নোত্তর</div>
                            <div className='md:ps-5 pb-5 pt-2'>
                                <Outlet />
                            </div>
                        </div>

                        <div className="drawer-side h-screen p-0 m-0">
                            <div className='text-center bg-[#003e6b] text-white text-xl pt-3 pb-2 hidden md:block'>ক্যাটাগরি</div>

                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            {/* md:fixed md:top-0 */}

                            <ul className="menu w-48 border-r-4 text-neutral-600 border-neutral-300 mt-20 md:mt-0 bg-neutral-100 md:bg-none">
                                {/* Sidebar content here */}

                                <div className='w-full flex flex-col'>
                                    <Link to='/' className='text-lg my-2 ps-4'>
                                        হোম
                                    </Link>
                                    {
                                        categories.map(category => <SingleCategory
                                            key={category._id}
                                            category={category}
                                        >
                                        </SingleCategory>)
                                    }

                                </div>
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