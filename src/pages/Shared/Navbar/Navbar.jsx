import React from 'react';
import logo from '../../../assets/favicon.png'
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';

const Navbar = () => {

    const user = true;
    const isAdmin = true;

    const navOptions =
        <div className='md:flex items-center'>
            <li> <ActiveLink to="/">হোম</ActiveLink></li>
            {/* <li> <ActiveLink to="/activity">কার্যক্রম</ActiveLink></li>
            <li> <ActiveLink to="/media">মিডিয়া</ActiveLink></li>
            <li> <ActiveLink to="/publication">প্রকাশনা</ActiveLink></li> */}
            {/* <li>
                <details className="dropdown">
                    <summary>প্রশ্নোত্তর</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><ActiveLink to="/qa/ask-question">প্রশ্ন করুন</ActiveLink></li>
                        <li><ActiveLink to="/qa/display-qa">প্রশ্নের উত্তর দেখুন</ActiveLink></li>
                        <li><Link>প্রশ্নসমূহ</Link></li>
                    </ul>
                </details>
            </li> */}
            <li><ActiveLink to="/qa/ask-question">প্রশ্ন করুন</ActiveLink></li>
            <li> <ActiveLink to="/qa/display-qa">প্রশ্নের উত্তর দেখুন</ActiveLink></li>
            <li> <ActiveLink to="/aboutUs">আমাদের সম্পর্কে</ActiveLink></li>
            {/* <li> <ActiveLink to="/donate">দান করুন</ActiveLink></li>
            <li> <ActiveLink to="/communicate">যোগাযোগ</ActiveLink></li> */}
        </div>

    return (
        <div className='w-full fixed z-10 bg-[#ffffff] shadow-md'>
            <div className='pt-2 border-b[1px]'>
                <Container>
                    <div className='flex items-center justify-between text-neutral-600'>
                        <div className="navbar m-0 p-0 w-fit">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-56 sm:w-[860px] text-black">
                                    {navOptions}
                                </ul>
                            </div>
                            <Link to="/" className='w-12'>
                                <img src={logo} className='bg-white p-1 rounded-sm' alt="Logo Image" />
                            </Link>
                        </div>

                        <div className="navbar-center hidden lg:flex text-[#005492]">
                            <ul className="text-lg menu menu-horizontal font-semibold">
                                {navOptions}
                            </ul>
                        </div>

                        <div className="navbar-end md:flex gap-3 font-semibold">
                            {user ? <>
                                <div className='flex items-center gap-3 justify-end text-[#005492]'>
                                    {isAdmin ? <></> :
                                        <Link to='/dashboard'
                                            className='mr-4 pt-2 block sm:block md:hidden'>
                                        </Link>}
                                    {/* for night mode */}
                                    {/* <LightDarkSwap /> */}
                                    <button className='hover:bg-neutral-200 hover:text-black py-2 px-3 rounded-md'>Log Out</button>

                                    <Link to='/profile-page'>
                                        <img className='w-10 h-10 rounded-full border object-cover cursor-pointer' src={user?.photoURL ? user?.photoURL : ''} title={user?.displayName ? user?.displayName : user.email} alt={user?.displayName ? user?.displayName : user?.email} />
                                    </Link>
                                </div>
                            </>
                                :
                                <>
                                    <div className='flex items-center gap-3 text-[#005492]'>
                                        {/* <LightDarkSwap /> */}
                                        <ActiveLink className='hover:bg-neutral-200 hover:text-black py-2 px-3 rounded-md' to="/login">Login</ActiveLink>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;