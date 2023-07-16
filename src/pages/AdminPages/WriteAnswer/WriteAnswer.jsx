import React, { useRef, useState } from 'react';
import OutletContainer from '../../../components/Container/OutletContainer';
import { useLoaderData } from 'react-router-dom';
import BackButton from '../../../components/Buttons/BackButton';
import JoditEditor from 'jodit-react';
import moment from 'moment';


const WriteAnswer = () => {
    const singleQuestion = useLoaderData();
    const { _id, question, name, date, email } = singleQuestion;

    // for jodit form for question and answer
    const editor = useRef(null);
    const [userQuestion, setUserQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    return (
        <>
            <OutletContainer>

                <div className='border-b-2 pb-2 md:flex justify-between items-center gap-5'>
                    <div className='-mb-3'>
                        <BackButton />
                    </div>
                    
                    <div className='font-sans'>
                        {moment(date).format("MMMM D, YYYY, dddd, h:mm:ss A")}
                    </div>
                    <div className='md:border-l-2 border-[#005492] md:ps-2'>প্রশ্নকারী: {name}</div>
                    <div className='md:border-l-2 border-[#005492] md:ps-2'>প্রশ্নকারীর ইমেইল: {email}</div>
                </div>

                {/* Question Section */}
                <h2 className='text-4xl mt-8 mb-2 text-center text-[#005492]'>প্রশ্ন </h2>

                {/* Question Editor */}
                <JoditEditor
                    ref={editor}
                    value={question}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setUserQuestion(newContent)}
                // onChange={newContent => setUserQuestion(newContent)}
                />

                {/* Write Answer Section */}
                <h2 className='text-4xl mt-16 mb-2 text-center text-[#005492]'>উত্তর লিখুন </h2>
                {/* Question Editor */}
                <JoditEditor
                    ref={editor}
                    value={answer}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setAnswer(newContent)}
                // onChange={newContent => setAnswer(newContent)}
                />

                WriteAnswer : {singleQuestion._id}

            </OutletContainer>
        </>
    );
};

export default WriteAnswer;