import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CategoryOption from './CategoryOption';
import { askQuestion } from '../../../components/api/questions';
import Swal from 'sweetalert2';

const AskQuestionForm = () => {
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('প্রেরণ করুন')

    // Load categories 
    const { data: categories = [], refetch } = useQuery([''], async () => {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/categories`)
        return res.data;
    })

    // for jodit form
    const editor = useRef(null);
    const [content, setContent] = useState('');
    // const config = {
    //     placeholder: 'আপনার প্রশ্নটি লিখুন...'
    // }

    const handleSendQuestion = event => {
        event.preventDefault();
        setLoading(true)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const mobileNumber = form.mobileNumber.value;
        const category = form.category.value;
        const qData = {
            name,
            email,
            mobileNumber,
            question: content,
            usersCategory: category,
            date: new Date()
        };

        setUploadButtonText(`পাঠানো হচ্ছে...`)

        askQuestion(qData)
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Alhamdulillah...',
                    text: 'Your question has been sent. We will try to answer quickly Insha-Allah!',
                })
                setLoading(false)
                setUploadButtonText('পাঠানো হয়েছে, নতুন প্রশ্ন করুন।')
                event.target.reset('');
                setContent('')
                // setUploadButtonText('প্রেরণ করুন')
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry...',
                    text: `${error.message}`,
                })
                setLoading(false)
                setUploadButtonText('কোনো সমস্যা হয়েছে, আবার চেষ্টা করুন।')
            })
    }

    return (
        <>
            <div className='text-center w-full bg-[#005492] text-white text-xl pt-3 pb-2'>
                অনুগ্রহ পূর্বক নিচের ফর্মটি পূরণ করুন
            </div>
            <div className='mb-16 md:ps-5 pb-5 pt-2 mt-8'>
                <form onSubmit={handleSendQuestion}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-lg'>
                        <label>
                            নাম ‍<span className='text-red-500'>*</span> <br />
                            <input required
                                name='name'
                                type="text"
                                placeholder='সম্পূর্ণ নাম'
                                className='py-2 px-4 bg-neutral-100 w-full' />
                        </label>

                        <label>
                            ইমেইল ‍<span className='text-red-500'>*</span> <br />
                            <input required
                                name='email'
                                type="email"
                                placeholder='Your valid email ID'
                                className='py-2 px-4 bg-neutral-100 w-full font-sans' />
                        </label>

                        <label>
                            মোবাইল নাম্বার ‍<span className='text-neutral-400'>(optional)</span> <br />
                            <input
                                name='mobileNumber'
                                type="number"
                                placeholder='+880'
                                className='py-2 px-4 bg-neutral-100 w-full font-sans' />
                        </label>
                    </div>
                    <div className='mt-5'>
                        <p className='mb-2'>
                            অনুগ্রহ পূর্বক প্রশ্নটি বাংলায় অথবা ইংরেজিতে লিখুন। ‍
                            <span className='text-red-500'>Banglish-এ লিখবেন না।</span> জাযাকাল্লাহু খাইরান!
                            <br />
                            আপনার প্রশ্নটি লিখুন
                            <span className='text-red-500'>* </span> </p>

                        <JoditEditor
                            ref={editor}
                            value={content}
                            // config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => setContent(newContent)}
                            onChange={newContent => setContent(newContent)}
                        />
                    </div>

                    <div className='mt-5'>
                        ক্যাটাগরি পছন্দ করুন <span className='text-red-500'>*</span>
                    </div>
                    <select
                        className='py-2 px-4 bg-neutral-200 w-full cursor-pointer'
                        required
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
                        disabled={content.length < 20}
                        type='submit'
                        className='py-2 px-4 mt-5 bg-[#005492] hover:bg-[#006fbe] text-white'
                    >{uploadButtonText}</button>
                </form>
            </div>
        </>
    );
};

export default AskQuestionForm;