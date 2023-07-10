import React from 'react';
import { useSearchParams } from 'react-router-dom'

const CategoryHeaderSmall = () => {

    // for show selected category in the top of page
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    // console.log(category);

    return (
        <div className='text-center w-full bg-[#005492] text-white text-2xl py-2'>
            {
                category ? `প্রশ্নোত্তর/${category}` : 'প্রশ্নোত্তর'
            }
        </div>

    );
};

export default CategoryHeaderSmall;