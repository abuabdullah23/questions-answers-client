import React from 'react';
import './QuestionsAnswersBanner.css'

const QuestionsAnswersBanner = ({ bannerText }) => {
    return (
        <div className='md:pt-24 text-white text-center font-bold text-3xl qa-bg h-16 md:h-full'>
            <h2 className='p-3 md:pb-8'>{bannerText}</h2>
        </div>
    );
};

export default QuestionsAnswersBanner;