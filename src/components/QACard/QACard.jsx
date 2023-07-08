import React from 'react';

const QACard = ({ qa }) => {
    const { _id, Link, question, answer, category, date } = qa;
    return (
        <div className='cursor-pointer rounded-md border-2 border-neutral-100 hover:border-[#005492]'>
            <div className='bg-neutral-200 rounded-t-md w-full h-36 flex items-center justify-center text-center py-2 px-4'>
                <div>
                    <h4 className='font-bold text-2xl'>প্রশ্ন: {Link.slice(3,)}</h4>
                    <p className='mt-2 text-lg'>প্রশ্ন: {question.slice(0, 50)}...</p>
                </div>
            </div>
            <div className='mt-1 px-2 pb-1'>
                <p>{date}</p>
                <p className='mt-1'>{answer.slice(0, 70)}...</p>
            </div>
        </div>
    );
};

export default QACard;