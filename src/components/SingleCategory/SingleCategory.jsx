import React from 'react';
import { Link } from 'react-router-dom'

const SingleCategory = ({ category }) => {
    return (
        <>
            <div className='hover:bg-[#003983] hover:text-white cursor-pointer py-2 ps-4'>
                <Link>{category.category}</Link>
            </div>
        </>
    );
};

export default SingleCategory;