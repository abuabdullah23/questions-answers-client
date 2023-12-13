import React from 'react';
import slider1 from '../../assets/images/bg/slider1.jpg'
import allQA from '../../assets/images/bg/qa1.jpg'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from 'react';
import { getAllAnswers } from '../api/answers';
import { useState } from 'react';
import FormattedText from '../FormattedText/FormattedText';


const QASliderSection = () => {
    const [qa, setQa] = useState([]);

    useEffect(() => {
        getAllAnswers().then(res => {
            setQa(res)
        })
    }, [])

    const latestQa = qa.slice(0, 6);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 my-3'>
            <div className='col-span-2 bg-[#005492] mb-3 md:mb-0'>
                <Carousel
                    autoPlay={true}
                    infinite={true}
                    arrows={true}
                    showDots={true}
                    responsive={responsive}
                >
                    {
                        latestQa?.map((qa, i) => <Link className='w-full h-48 sm:h-72 md:h-96 flex items-center justify-center' key={i} to={`/display-answer/details/${qa?._id}`}>
                            <div className='flex flex-col items-center gap-2 text-white '>
                                <h2 className='text-xl'>প্রশ্ন: <span className='font-sutonnyMJ'>{qa?.number}</span></h2>
                                <p className='text-2xl font-medium'><FormattedText htmlContent={qa?.question} /></p>
                            </div>
                        </Link>)
                    }
                </Carousel>
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