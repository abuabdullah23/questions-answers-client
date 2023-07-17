import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BackButton from '../../../components/Buttons/BackButton';
import moment from 'moment';
import FormattedText from '../../../components/FormattedText/FormattedText';

const QADetails = () => {
    const qADetails = useLoaderData();
    const { _id, number, question, answer, category, date } = qADetails;

    return (
        <>
            <div className='text-center w-full bg-[#005492] text-white text-2xl py-2 sticky top-[72px]'>
                {
                    category ? `প্রশ্নোত্তর/${category}` : 'প্রশ্নোত্তর'
                }
            </div>
            <div className='mb-16 md:px-5 pb-5 pt-2'>

                <BackButton />

                {/* Question Section */}
                <h2 className='text-4xl text-center text-[#005492]'>প্রশ্ন : <span className='font-sutonnyMJ'> {number && number} </span></h2>
                <div className='text-center flex justify-center mb-4'>
                    <hr className='border-t-2 border-neutral-400 w-48 text-center' />
                </div>

                <div className='text-[#005492]'>
                    <div className='text-xl text-justify'>
                        <FormattedText htmlContent={question && question} />
                    </div>
                    <p className='border-t-2 border-neutral-100 text-neutral-400 mt-5 w-fit'> <span className='font-sans'>
                        {moment(date).format("MMMM D, YYYY")}
                    </span> ঈসায়ী</p>
                </div>


                {/* Answers Section */}
                <h2 className='text-4xl text-center mt-10 text-neutral-700'>উত্তর</h2>
                <div className='text-center flex justify-center mb-4'>
                    <hr className='border-t-2 border-neutral-400 w-40 text-center' />
                </div>
                <div className='text-neutral-500 text-xl text-justify'>
                    <FormattedText htmlContent={answer && answer} />
                </div>


                {/* Shared Option */}
                <div className='mt-8'>
                    <hr className='border-t-2 border-neutral-300' />
                </div>


                <div className='mt-28 relative text-center'>
                    <hr className='border-t-2 border-neutral-300' />
                    <Link to='/ask-question/question-form'><button className='text-xl py-2 px-6 rounded-full absolute -top-6 -ms-14 bg-neutral-200 hover:bg-neutral-300'>প্রশ্ন করুন</button></Link>
                </div>

            </div>
        </>
    );
};

export default QADetails;