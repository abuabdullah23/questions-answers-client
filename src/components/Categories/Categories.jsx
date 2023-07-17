import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom'
import SingleCategory from './SingleCategory';

const Categories = () => {
    const { data: categories = [], refetch } = useQuery(['categories'], async () => {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/categories`)
        return res.data;
    })

    // for active category
    const [params, setParams] = useSearchParams()
    const selectedCategory = params.get('category')

    const selectAllQuestion = selectedCategory === 'সকল প্রশ্নোত্তর'

    return (
        <>
            <div className='text-center bg-[#003e6b] text-white text-xl pt-3 pb-2 hidden md:block sticky top-0 z-10'>ক্যাটাগরি</div>

            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            {/* md:fixed md:top-0 */}

            <ul className="menu w-48 border-r-4 text-neutral-600 border-neutral-300 mt-20 md:mt-0 bg-neutral-100 md:bg-none">
                {/* Sidebar content here */}

                <div className='w-full flex flex-col'>
                    <Link to='/' className='text-lg text-[#003e6b] hover:font-bold my-2 ps-4'>
                        হোম
                    </Link>
                    <hr className='border-t-2 border-neutral-300' />

                    <Link to='/qa/display-qa?category=সকল%20প্রশ্নোত্তর'
                        className={`hover:bg-[#003983] hover:text-white cursor-pointer py-2 ps-4 text-lg transition hover:scale-105
                    ${selectAllQuestion ? 'bg-[#003983] text-white' : 'text-neutral-500'}
                    `}
                    >সকল প্রশ্নত্তোর</Link>
                    {

                        categories.map(category => <SingleCategory
                            key={category._id}
                            category={category}
                            selected={selectedCategory === category.category}
                        >
                        </SingleCategory>)
                    }

                </div>
            </ul>
        </>
    );
};

export default Categories;