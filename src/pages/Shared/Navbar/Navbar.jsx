import logo from '../../../assets/favicon.png'
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { GrList } from 'react-icons/gr';
import { useState } from 'react';
import { adminNav, allNav } from './NavItems';

const Navbar = () => {
    const [show, setShow] = useState(false);

    // TODO: have to dynamic
    const user = false;
    const isAdmin = false;


    return (
        <div className='w-full py-2 fixed z-10 bg-[#ffffff] shadow-md'>
            <div className='pt-2 border-b[1px]'>
                <Container>
                    <div className='flex items-center justify-between relative'>
                        <Link to={'/'} className='hidden lg:block'>
                            <img className='h-7' src={logo} alt="logo image" />
                        </Link>

                        <div onClick={() => setShow(!show)} className='lg:hidden p-1 rounded bg-gray-100 hover:bg-slate-200 cursor-pointer'>
                            <GrList className='text-xl' />
                        </div>

                        <Link to={'/'} className='block lg:hidden'>
                            <img className='h-7' src={logo} alt="logo image" />
                        </Link>


                        {/* show only from medium device */}
                        <div className={`${show ? 'absolute bg-white z-20 w-3/4 h-screen -top-4 -left-5 p-8' : 'hidden'} lg:hidden`}>
                            <ul className='flex flex-col items-start gap-2 font-semibold'>
                                {
                                    allNav?.map((nav, i) => <li key={i} onClick={() => setShow(false)}>
                                        <ActiveLink to={nav.path}>
                                            {nav.title}
                                        </ActiveLink>
                                    </li>)
                                }

                                {
                                    isAdmin && adminNav.map((item, i) => (
                                        <ActiveLink
                                            key={i}
                                            to={item.path}
                                            onClick={() => {
                                                setShow(false)
                                            }}
                                            className='py-1 px-3 rounded-md hover:bg-rose-500 hover:text-white'
                                        >
                                            {item.title}
                                        </ActiveLink>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* show in large device */}
                        <div className='hidden lg:block'>
                            <ul className='lg:flex items-center gap-5 font-semibold'>
                                {
                                    allNav?.map((nav, i) => <li key={i} onClick={() => setShow(false)}>
                                        <ActiveLink to={nav.path}>
                                            {nav.title}
                                        </ActiveLink>
                                    </li>)
                                }

                                {
                                    isAdmin && adminNav.map((item, i) => (
                                        <ActiveLink
                                            key={i}
                                            to={item.path}
                                            onClick={() => {
                                                setShow(false)
                                            }}
                                            className='py-1 px-3 rounded-md hover:bg-rose-500 hover:text-white'
                                        >
                                            {item.title}
                                        </ActiveLink>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='flex items-center gap-3'>
                            {
                                user ? <>
                                    <div className='flex items-center gap-3'>
                                        <img title={user?.displayName} className='h-8 w-8 rounded-full' src={user?.photoURL} alt="user image" />
                                        <button className='text-gray-600 hover:text-red-500 font-semibold'>Log Out</button>
                                    </div>
                                </> : <>
                                    <Link className='text-gray-600 hover:text-cyan-500 font-semibold' to={'/login'}>Log In</Link>
                                </>
                            }
                        </div>
                    </div>
                </Container>
                <div onClick={() => setShow(false)} className={`fixed duration-200 ${!show ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10 lg:hidden`}></div>
            </div>
        </div>
    );
};

export default Navbar;