import React from 'react';
import FormattedText from '../../../components/FormattedText/FormattedText';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

const SinglePendingQuestion = ({ questions, index }) => {
    const { _id, question, name, email, date, category } = questions;

    return (
        <>
            <div className='mb-5 rounded-md border-2 border-neutral-200 hover:border-[#005492] bg-neutral-50 text-neutral-600'>
                <div className='bg-neutral-200 rounded-t-md w-full h-fit flex items-center text-justify py-2 px-4'>
                    <div className='py-2'>
                        {/* Number.slice(11,) */}
                        <div className='flex justify-start w-fit py-1 px-4 bg-[#005492] text-white rounded-md'>
                            <h4 className='font-bold text-xl'>প্রশ্ন: <span className='text-3xl font-sutonnyMJ'>{index + 1}</span></h4>
                        </div>

                        <div className='mt-2 text-lg text-justify'>
                            <FormattedText htmlContent={question} />
                        </div>
                    </div>
                </div>

                <div className='mt-1 pb-1 px-2 flex justify-between items-center gap-5'>

                    <div className='md:flex justify-between items-center gap-5'>
                        <div className='font-sans'>
                            {moment(date).format("MMMM D, YYYY, dddd, h:mm:ss A")}
                        </div>
                        <div className='md:border-l-2 border-[#005492] md:ps-2'>প্রশ্নকারী: {name}</div>
                        <div className='md:border-l-2 border-[#005492] md:ps-2'>প্রশ্নকারীর ইমেইল: {email}</div>
                    </div>

                    <div className='my-2'>
                        <Link
                            to={`/give-answer/write-answer/${_id}`}
                            className='py-2 px-4 rounded-md border-l-2 border-[#005492] bg-neutral-200 hover:bg-[#005492] hover:text-white'>
                            উত্তর দিন
                        </Link>
                    </div>

                </div>
            </div>
        </>


    );
};

export default SinglePendingQuestion;