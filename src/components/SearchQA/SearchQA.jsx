import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchQA = () => {
    return (
        <div className='flex items-center justify-between mb-3'>
            <input type="text" className='py-3 px-4 w-full bg-neutral-200' placeholder='প্রশ্নোত্তর খুঁজুন...' />
            <div className='text-white bg-[#005492] py-3 px-4'>
                <FaSearch className='w-5 h-full'></FaSearch>
            </div>
        </div>
    );
};

export default SearchQA;