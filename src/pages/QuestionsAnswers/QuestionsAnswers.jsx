import React, { useState } from 'react';
import { IoGridOutline, IoList } from 'react-icons/io5';
import QACard from '../../components/QACard/QACard';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const QuestionsAnswers = () => {
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([]);
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    // console.log(category, params)

    const { data: questionsAnswers = [], isLoading, isError } = useQuery(['questionsAnswers', category], async () => {
        setLoading(true);
        // console.log(questionsAnswers)
        try {
            const response = await fetch('https://question-answer-server.vercel.app/questions-answers');
            const data = await response.json();

            if (category === 'সকল প্রশ্নোত্তর') {
                setQuestions(data)
            } else if (category) {
                const filtered = data.filter(qa => qa.category === category);
                setQuestions(filtered)
            } else {
                setQuestions(data)
            }

            return data;

        } catch (error) {
            console.error(error);
            throw new Error('Error occurred while fetching data');
        } finally {
            setLoading(false);
        }
    });


    if (loading) {
        return <Loader />
    }

    return (
        <>
            {questions && questions.length > 0 ?

                <div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p>{category && category}
                                {category === 'সকল প্রশ্নোত্তর'
                                    ? <><span className='font-sutonnyMJ'> {': '}{questionsAnswers.length}</span></>
                                    : category ?
                                    <><span className='font-sutonnyMJ'> {': '}{questionsAnswers.filter(qa => qa.category === category).length}</span></>
                                    :
                                    <></>
                                }
                            </p>
                        </div>
                        <div className='flex items-center justify-end gap-4 pe-3'>
                            <IoList className='w-6 h-6' />
                            <IoGridOutline className='w-5 h-5' />
                        </div>
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












// const { data: questionsAnswers = [], refetch } = useQuery(['qa'], async () => {
//     const res = await axios.get('https://question-answer-server.vercel.app/questions-answers');
//     setQuestions(questionsAnswers)
//     return res.data;
// })

// const {data} = useQuery({
//     queryKey: ['todos', user, category],
//     queryFn: () => {
// fetch().....
// },
//   })

// fetch data with useEffect
// useEffect(() => {
//     setLoading(true)
//     fetch('https://question-answer-server.vercel.app/questions-answers')
//         .then(res => res.json())
//         .then(data => {
//             if (category === 'সকল প্রশ্নোত্তর') {
//                 setQuestions(data)
//             } else if (category) {
//                 const filtered = data.filter(qa => qa.category === category)
//                 setQuestions(filtered);
//             } else {
//                 setQuestions(data)
//             }
//             setLoading(false);
//         })
// }, [category])

// Old Code fetching data with useQuery
 // const { data: questionsAnswers =[] } = useQuery({
    //     queryKey: ['questionsAnswers', category],
    //     queryFn: () => {
    //         setLoading(true);
    //         fetch('https://question-answer-server.vercel.app/questions-answers')
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (category === 'সকল প্রশ্নোত্তর') {
    //                     setQuestions(data)
    //                 } else if (category) {
    //                     const filtered = data.filter(qa => qa.category === category)
    //                     setQuestions(filtered);
    //                 } else {
    //                     setQuestions(data)
    //                 }
    //                 setLoading(false);
    //             })
    //     }
    // })


