import React from 'react';
import slider1 from '../../assets/images/bg/slider1.jpg'
import allQA from '../../assets/images/bg/qa1.jpg'
import { Link } from 'react-router-dom'


const QASliderSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 my-3'>
            <div className='col-span-2 bg-[#005492] mb-3 md:mb-0'>
                <img className='w-full h-48 sm:h-72 md:h-96 object-contain' src={slider1} alt="" />
            </div>
            <div className='w-full'>
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
    );
};

export default QASliderSection;