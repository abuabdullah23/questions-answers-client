import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BackButton from '../../../components/Buttons/BackButton';

const QADetails = () => {
    const qADetails = useLoaderData();
    const { _id, Number, question, answer } = qADetails;
    return (
        <div className='mb-16'>
            <BackButton />

            {/* Question Section */}
            <h2 className='text-4xl text-center text-[#005492]'>প্রশ্ন <span className='font-sutonnyMJ'>( {Number.slice(11,)} )</span></h2>
            <div className='text-center flex justify-center mb-4'>
                <hr className='border-t-2 border-neutral-400 w-48 text-center' />
            </div>

            <div className='text-[#005492]'>
                <p className='text-lg'>{question}</p>
            </div>


            {/* Answers Section */}
            <h2 className='text-4xl text-center mt-10 text-neutral-700'>উত্তর</h2>
            <div className='text-center flex justify-center mb-4'>
                <hr className='border-t-2 border-neutral-400 md:w-40 text-center' />
            </div>
            <div className='text-neutral-600'>
                <p className='text-lg'>{answer.slice(7,)}</p>
            </div>


            {/* Shared Option */}
            <div className='mt-8'>
                <hr className='border-t-2 border-neutral-300' />
            </div>


            <div className='mt-28 relative text-center'>
                <hr className='border-t-2 border-neutral-300' />
                <Link><button className='text-xl py-2 px-6 rounded-full absolute -top-6 bg-neutral-400 hover:bg-neutral-200'>প্রশ্ন করুন</button></Link>
            </div>

        </div>
    );
};

export default QADetails;