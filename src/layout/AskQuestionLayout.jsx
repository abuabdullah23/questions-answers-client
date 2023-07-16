import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Container from '../components/Container/Container';
import SearchQA from '../components/SearchQA/SearchQA';
import QuestionsAnswersBanner from '../components/ProshnottorBanner/QuestionsAnswersBanner';
import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories/Categories';


const AskQuestionLayout = () => {
    return (
        <div className='font-kalpurush'>
            <Navbar />
            <QuestionsAnswersBanner bannerText={'প্রশ্ন করুন'} />
            <Container>
                <div className='mt-3'>
                    <SearchQA placeholderText={'আপনি যে প্রশ্নটি করতে চাচ্ছেন সেটার উত্তর দেয়া হয়েছে কি না, সার্চ করে দেখে নিন।'} />
                </div>

                {/* Content Here */}
                <div className="drawer md:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                    <div className="drawer-content flex flex-col justify-start relative">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden md:m-4 md:hidden absolute mt-3 left-2 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current md:hidden"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>

                        <Outlet />

                    </div>

                    <div className="drawer-side h-screen">
                        <Categories />
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default AskQuestionLayout;