import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePendingQuestion from './SinglePendingQuestion';
import EmptyContent from '../../../components/EmptyContent/EmptyContent';
import { getAllQuestions } from '../../../components/api/questions';

const AllPendingQuestions = () => {
    const allQuestions = useLoaderData();

    const [questions, setQuestions] = useState(allQuestions);

    const fetchQuestions = () => {
        getAllQuestions()
            .then(data => {
                setQuestions(data)
            })
    }
    useEffect(() => {
        fetchQuestions()
    }, [allQuestions])

    return (
        <>{allQuestions && allQuestions.length > 0 ?

            <div className='mb-16 md:px-5 pb-5 pt-2'>
                <div className='font-sans border-b-2 pb-2'>
                    All Pending Questions : {questions.length}
                </div>

                <div className='mt-3'>
                    {
                        questions.map((pendingQuestion, index) => <SinglePendingQuestion
                            key={pendingQuestion._id}
                            pendingQuestion={pendingQuestion}
                            fetchQuestions={fetchQuestions}
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