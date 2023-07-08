import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Container from '../components/Container/Container';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='font-kalpurush'>
            <Navbar />
            <Container> <div className="pt-24 pb-20">
                <Outlet />
            </div> </Container>
            <Footer />
        </div>
    );
};

export default Main;