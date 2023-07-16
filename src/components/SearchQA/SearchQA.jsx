import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchQA = ({ placeholderText }) => {
    return (
        <div className='flex items-center justify-between mb-3'>
            <input type="text" className='py-3 px-4 w-full bg-neutral-200'
                placeholder={placeholderText} />
            <button className='text-white bg-[#005492] hover:bg-[#006fbe] py-3 px-4'>
                < FiSearch className='w-6 h-full' />
            </button>
        </div>
    );
};

export default SearchQA;