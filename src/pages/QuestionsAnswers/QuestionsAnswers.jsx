import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { IoGridOutline, IoList } from 'react-icons/io5';
import QACard from '../../components/QACard/QACard';

const QuestionsAnswers = () => {

    const [questions, setQuestions] = useState([]);

    const { data: questionsAnswers = [], refetch } = useQuery(['qa'], async () => {
        const res = await axios.get('http://localhost:5000/questions-answers');
        setQuestions(questionsAnswers)
        return res.data;
    })
    
    return (
        <>
            {questions && questions.length > 0 ?

                < div >
                    <div className='flex items-center justify-end gap-4 pe-3'>
                        <IoList className='w-6 h-6' />
                        <IoGridOutline className='w-5 h-5' />
                    </div>
                    <hr className='my-2 border-t-2 border-[#ececec]' />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            questions.map(qa => <QACard
                                key={qa._id}
                                qa={qa}
                            ></QACard>)
                        }
                    </div>
                </div >
                :
                <div className='my-24 flex items-center justify-center'>
                    <div>
                        <h2>দুঃখিত! এই ক্যাটাগরির কোনো প্রশ্ন পাওয়া যায়নি।</h2>
                        <p>দয়া করে অন্য ক্যাটাগরি সিলেক্ট করুন। ধন্যবাদ!</p>
                    </div>
                </div>
            }
        </>
    );
};

export default QuestionsAnswers;