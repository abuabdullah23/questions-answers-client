import React, { useRef, useState } from 'react';
import OutletContainer from '../../../components/Container/OutletContainer';
import { useLoaderData, useNavigate } from 'react-router-dom';
import BackButton from '../../../components/Buttons/BackButton';
import JoditEditor from 'jodit-react';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CategoryOption from '../../QA/AskQuestionForm/CategoryOption';
import { getAllAnswers, saveAnswer } from '../../../components/api/answers';
import Swal from 'sweetalert2';
import { deleteSingleQuestion } from '../../../components/api/questions';


const WriteAnswer = () => {
    const singleQuestion = useLoaderData();
    const { _id, question, name, date, email, usersCategory } = singleQuestion;
    const [uploadButtonText, setUploadButtonText] = useState('উত্তর সাবমিট করুন')
    const navigate = useNavigate();

    // Load categories 
    const { data: categories = [], refetch } = useQuery([''], async () => {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/categories`)
        return res.data;
    })

    // for jodit form for question and answer
    const editor = useRef(null);
    const [userQuestion, setUserQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    console.log(userQuestion)
    // handle answer submit
    const handleSubmitAnswer = (event) => {
        setUploadButtonText('উত্তর পাঠানো হচ্ছে...')
        event.preventDefault();

        // get all answers length
        getAllAnswers()
            .then(data => {
                const qLength = parseInt(data.length);
                const form = event.target;
                const category = form.category.value;

                const answerData = {
                    number: qLength + 1,
                    email,
                    name,
                    question: userQuestion,
                    answer,
                    category,
                    date: new Date()
                }
                // console.log(answerData)
                saveAnswer(answerData)
                    .then(data => {
                        deleteSingleQuestion(_id)
                            .then(data => {
                                navigate('/give-answer/see-all-questions')
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Alhamdulillah...',
                                    text: 'Answer has been sent.',
                                })
                            })
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Sorry...',
                            text: `${error.message}, Try again.`,
                        })
                    })
            })
    }

    return (
        <>
            <OutletContainer>

                <div className='border-b-2 pb-2 md:flex justify-between items-center gap-5'>
                    <div className='md:-mb-3'> <BackButton /> </div>

                    <div className='font-sans'> {moment(date).format("MMMM D, YYYY, h:mm A")} </div>

                    <div className='md:border-l-2 border-[#005492] md:ps-2'><span className='text-[#005492]'>প্রশ্নকারী:</span> {name}</div>

                    <div className='md:border-l-2 border-[#005492] md:ps-2'><span className='text-[#005492]'>প্রশ্নকারীর ইমেইল:</span> {email}</div>

                    <div className='md:border-l-2 border-[#005492] md:ps-2'><span className='text-[#005492] font-semibold'>ক্যাটাগরি:</span> {usersCategory}</div>
                </div>

                {/* Question Section */}
                <h2 className='text-4xl mt-8 mb-2 text-center text-[#005492]'>প্রশ্ন </h2>

                {/* Question Editor */}
                <JoditEditor
                    ref={editor}
                    value={question}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setUserQuestion(newContent)}
                    onChange={newContent => setUserQuestion(newContent)}
                />

                {/* Write Answer Section */}
                <h2 className='text-4xl mt-16 mb-2 text-center text-[#005492]'>উত্তর লিখুন </h2>
                {/* Answers Editor */}
                <JoditEditor
                    ref={editor}
                    value={answer}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setAnswer(newContent)}
                    onChange={newContent => setAnswer(newContent)}
                />

                <form onSubmit={handleSubmitAnswer}>
                    <div className='mt-5'>
                        ক্যাটাগরি নির্বাচন করুন <span className='text-red-500'>*</span>
                    </div>
                    <select
                        className='py-2 px-4 bg-neutral-200 w-full cursor-pointer'
                        required
                        defaultValue={usersCategory}
                        type="text"
                        name="category"
                    >
                        {categories.slice(1,).map((category) => <CategoryOption
                            key={category._id}
                            category={category}
                            className='text-black bg-white'
                        />)}
                    </select>
                    <button
                        type='submit'
                        disabled={answer.length < 20}
                        className='py-2 px-4 mt-5 bg-[#005492] hover:bg-[#006fbe] text-white'
                    >{uploadButtonText}</button>
                </form>

            </OutletContainer>
        </>
    );
};

export default WriteAnswer;