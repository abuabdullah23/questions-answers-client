import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePendingQuestion from './SinglePendingQuestion';
import EmptyContent from '../../../components/EmptyContent/EmptyContent';

const AllPendingQuestions = () => {
    const allQuestions = useLoaderData();

    return (
        <>{allQuestions && allQuestions.length > 0 ?

            <div className='mb-16 md:px-5 pb-5 pt-2'>
                <div className='font-sans border-b-2 pb-2'>
                    All Pending Questions : {allQuestions.length}
                </div>

                <div className='mt-3'>
                    {
                        allQuestions.map((questions, index) => <SinglePendingQuestion
                            key={questions._id}
                            questions={questions}
                            index={index}
                        />)
                    }
                </div>
            </div>
            :
            <>
                <EmptyContent emptyText={'আলহামদুলিল্লাহ! সকল প্রশ্নের উত্তর দেওয়া সম্পন্ন হয়েছে।'} />
            </>}

        </>
    );
};

export default AllPendingQuestions;