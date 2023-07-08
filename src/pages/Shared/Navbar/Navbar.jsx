import React from 'react';
import logo from '../../../assets/favicon.png'
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';

const Navbar = () => {

    const user = true;
    const isAdmin = true;

    const navOptions =
        <div className='md:flex items-center'>
            <li> <Link to="/">হোম</Link></li>
            <li> <Link to="/activity">কার্যক্রম</Link></li>
            <li> <Link to="/media">মিডিয়া</Link></li>
            <li> <Link to="/publication">প্রকাশনা</Link></li>
            <li> <Link to="/askQuestion">প্রশ্ন করুন</Link></li>
            <li> <Link to="qa/see-answer">প্রশ্নের উত্তর দেখুন</Link></li>
            <li> <Link to="/aboutUs">আমাদের সম্পর্কে</Link></li>
            <li> <Link to="/donate">দান করুন</Link></li>
            <li> <Link to="/communicate">যোগাযোগ</Link></li>
        </div>

    return (
        <div className='w-full fixed z-10 bg-white shadow-md'>
            <div className='pt-2 border-b[1px]'>
                <Container>
                    <div className='flex items-center justify-between text-neutral-600'>
                        <div className="navbar-start">
                            <Link to="/" className='hidden md:block m-0'>
                                <img src={logo} className='h-10 w-fit' alt="Logo Image" />
                            </Link>
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden m-0 p-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content shadow bg-neutral-300 rounded-box w-52">
                                    {navOptions}
                                </ul>
                            </div>
                        </div>

                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal font-semibold">
                                {navOptions}
                            </ul>
                        </div>

                        <div className="navbar-end md:flex gap-3 font-semibold">
                            {user ? <>
                                <div className='flex items-center gap-3 justify-end'>
                                    {isAdmin ? <></> :
                                        <Link to='/dashboard/my-selected-classes'
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
                                    <div className='flex items-center gap-3'>
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