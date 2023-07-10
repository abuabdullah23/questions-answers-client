import React from 'react';
import { Link } from 'react-router-dom'

const QACard = ({ qa, index }) => {
    const { _id, Number, question, answer, category, date } = qa;
    return (
        <>
            <Link to={`/display-answer/details/${_id}`}>
                <div className='rounded-md border-2 border-neutral-200 hover:border-[#005492] bg-neutral-50 text-neutral-600'>
                    <div className='bg-neutral-200 rounded-t-md w-full h-36 flex items-center justify-center text-center py-2 px-4'>
                        <div>
                            {/* Number.slice(11,) */}
                            <h4 className='font-bold text-2xl'>প্রশ্ন: <span className='text-3xl font-sutonnyMJ'>{Number.slice(11,)}</span></h4>
                            <p className='mt-2 text-lg'>প্রশ্ন: {question.slice(0, 50)}...</p>
                        </div>
                    </div>
                    <div className='mt-1 px-2 pb-1'>
                        <p> ‍<span className='font-sutonnyMJ'>{date}</span> ঈসায়ী</p>
                        <p className='mt-1'>{answer.slice(0, 70)}...</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default QACard;