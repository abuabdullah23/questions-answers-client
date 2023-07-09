import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Container from '../components/Container/Container';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet, Link, useSearchParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SingleCategory from '../components/SingleCategory/SingleCategory';
import './SeeAnswer.css'
import QASliderSection from '../components/QASliderSection/QASliderSection';

const SeeAnswer = () => {

    // for show selected category in the top of page
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    console.log(category);

    const { data: categories = [], refetch } = useQuery(['categories'], async () => {
        const res = await axios.get('https://question-answer-server.vercel.app/categories')
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
                    {
                        category
                            ? <div className='flex items-center justify-center w-full h-32 md:h-56 text-3xl md:text-6xl bg-[#005492] text-white mb-3'><p>{category}</p></div>
                            :
                            <QASliderSection />
                    }

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