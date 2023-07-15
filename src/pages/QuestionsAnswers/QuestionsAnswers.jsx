import React, { useState } from 'react';
import { IoGridOutline, IoList } from 'react-icons/io5';
import QACard from '../../components/QACard/QACard';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CategoryHeaderSmall from '../../components/CategoryHeader/CategoryHeaderSmall';

const QuestionsAnswers = () => {
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([]);
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    // console.log(category, params)

    // for handle toggle use to list and grid view
    const [toggle, setToggle] = useState(false)

    const [isActive, setActive] = useState('false')
    const toggleHandler = event => {
        setToggle(event.target.checked)
    }

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

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

                <>
                    <CategoryHeaderSmall />
                    <div className='mb-16 md:ps-5 pb-5 pt-2'>
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
                                <label
                                    htmlFor='Toggle3'
                                    className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
                                >
                                    <input
                                        onChange={toggleHandler}
                                        id='Toggle3'
                                        type='checkbox'
                                        className='hidden peer'
                                    />
                                    <span className='px-4 py-1 rounded-l bg-[#005492] peer-checked:bg-gray-300 text-white'>
                                        <IoGridOutline className='w-5 h-5' />
                                    </span>
                                    <span className='px-4 py-1 rounded-r bg-gray-300 peer-checked:bg-[#005492] text-white'>
                                        <IoList className='w-5 h-5' />
                                    </span>
                                </label>

                            </div>
                        </div>
                        <hr className='my-2 border-t-2 border-[#ececec]' />

                        <div className=
                            {
                                toggle
                                    ? 'grid grid-cols-1 gap-5'
                                    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'

                            }
                        >
                            {
                                questions.map((qa, index) => <QACard
                                    key={qa._id}
                                    qa={qa}
                                    index={index}
                                    toggle={toggle}
                                />)
                            }
                        </div>
                    </div >
                </>
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


