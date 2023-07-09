import React from 'react';
import { Link } from 'react-router-dom'

const QACard = ({ qa }) => {
    const { _id, Number, question, answer, category, date } = qa;
    return (
        <>
            <Link to={`/qa/qa-details/${_id}`}>
                <div className='rounded-md border-2 border-neutral-200 hover:border-[#005492]'>
                    <div className='bg-neutral-200 rounded-t-md w-full h-36 flex items-center justify-center text-center py-2 px-4'>
                        <div>
                            <h4 className='font-bold text-2xl'>প্রশ্ন: <span className='font-sutonnyMJ text-3xl'>{Number.slice(11,)}</span></h4>
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