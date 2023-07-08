import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Container from '../components/Container/Container';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom'
const SeeAnswer = () => {
    return (
        <div>
            <Navbar />
            <Container>  <div className="pt-24 pb-20">
                <Outlet />
            </div> </Container>
            <Footer />
        </div>
    );
};

export default SeeAnswer;