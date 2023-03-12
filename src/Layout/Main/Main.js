import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Share/Footer/Footer';
import Navbar from '../../pages/Share/Navbar/Navbar';

const Main = () => {
    return (
        <Box>
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    );
};

export default Main;