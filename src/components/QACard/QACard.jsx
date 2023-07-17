import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom'
import FormattedText from '../FormattedText/FormattedText';

const QACard = ({ qa, index, toggle }) => {
    const { _id, number, question, answer, category, date } = qa;

    const formattedQuestion = question.replace(/<\/?[^>]+(>|$)/g, '');
    const formattedAnswer = answer.replace(/<\/?[^>]+(>|$)/g, '');

    return (
        <>
            <Link to={`/display-answer/details/${_id}`}>
                <div className='rounded-md border-2 border-neutral-200 hover:border-[#005492] bg-neutral-50 text-neutral-600'>
                    <div className='bg-neutral-200 rounded-t-md w-full h-fit flex items-center justify-center text-center py-2 px-4'>
                        <div className='py-2'>
                            {/* Number.slice(11,) */}
                            <h4 className='font-bold text-2xl'>প্রশ্ন: <span className='text-3xl font-sutonnyMJ'>{number}</span></h4>
                            <span className='mt-2 text-lg'
                                title={formattedQuestion}
                            >
                                <FormattedText htmlContent={toggle ? `${question.slice(0, 100)}...` : `${question.slice(0, 45)}...`} />
                            </span>
                        </div>
                    </div>
                    <div className='mt-1 px-2 pb-1'>
                        <p> <span className='font-sans'>
                            {moment(date).format("MMMM D, YYYY")}
                        </span></p>
                        <span className='text-justify'
                            title={formattedAnswer}
                        >
                            <FormattedText htmlContent={toggle ? `${answer.slice(0, 200)}...` : `${answer.slice(0, 65)}...`} />
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default QACard;