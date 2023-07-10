import React from 'react';
import QASliderSection from '../QASliderSection/QASliderSection';
import { useSearchParams } from 'react-router-dom'

const CategoryHeader = () => {
     // for show selected category in the top of page
     const [params, setParams] = useSearchParams();
     const category = params.get('category');
     // console.log(category);

    return (
        <>
            {
                category
                    ? <div className='flex items-center justify-center w-full h-8 md:h-16 text-xl md:text-3xl bg-[#005492] text-white mb-3 pt-2 sticky top-[72px] z-10'><p>{category}</p></div>
                    :
                    <QASliderSection />
            }
        </>
    );
};

export default CategoryHeader;