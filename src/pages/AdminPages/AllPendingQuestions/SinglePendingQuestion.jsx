import React from 'react';
import FormattedText from '../../../components/FormattedText/FormattedText';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { deleteSingleQuestion } from '../../../components/api/questions';

const SinglePendingQuestion = ({ pendingQuestion, index, fetchQuestions }) => {
    const { _id, question, name, email, date, category } = pendingQuestion;

    // handle delete
    const handleDeleteQuestion = (id) => {
        Swal.fire({
            title: 'Are you sure to Delete this Question?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete this Question!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSingleQuestion(id)
                    .then(res => {
                        // console.log(res)
                        if (res.deletedCount > 0) {
                            fetchQuestions();
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Successfully Deleted',
                                showConfirmButton: false,
                                timer: 1000
                            })
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: `Don't Deleted`,
                            })
                        }
                    })
            }
        })
    }

    return (
        <>
            <div className='mb-5 rounded-md border-2 border-neutral-200 hover:border-[#005492] bg-neutral-50 text-neutral-600 relative'>

                <div
                    onClick={() => handleDeleteQuestion(_id)}
                    className='absolute top-2 right-2 flex items-center gap-2 bg-red-600 hover:bg-red-500 rounded-md py-1 px-3 text-white cursor-pointer'>
                    <FaTrashAlt />
                    <p>মুছুন</p>
                </div>

                <div className='bg-neutral-200 rounded-t-md w-full h-fit flex items-center text-justify py-2 px-4'>
                    <div className='py-2'>
                        <div className='flex justify-start w-fit py-1 px-4 bg-[#005492] text-white rounded-md'>
                            <h4 className='font-bold text-xl'>প্রশ্ন: <span className='text-3xl font-sutonnyMJ'>{index + 1}</span></h4>
                        </div>

                        <div className='mt-2 text-lg text-justify'>
                            <FormattedText htmlContent={question} />
                        </div>
                    </div>
                </div>

                <div className='mt-1 pb-1 px-2 md:flex justify-between items-center gap-5'>

                    <div className='md:flex justify-between items-center gap-5'>
                        <div className='font-sans'>
                            {moment(date).format("MMMM D, YYYY, dddd, h:mm:ss A")}
                        </div>
                        <div className='md:border-l-2 border-[#005492] md:ps-2'>প্রশ্নকারী: {name}</div>
                        <div className='md:border-l-2 border-[#005492] md:ps-2'>প্রশ্নকারীর ইমেইল: {email}</div>
                    </div>

                    <div className='my-2'>
                        <Link
                            to={`/give-answer/write-answer/${_id}`}
                            className='py-2 px-4 rounded-md border-l-2 border-[#005492] bg-neutral-200 hover:bg-[#005492] hover:text-white'>
                            উত্তর দিন
                        </Link>
                    </div>

                </div>
            </div>
        </>


    );
};

export default SinglePendingQuestion;