import React from 'react';
import DashboardNavbar from '../../../pages/DashboardNavber/DashboardNavbar';
import DashboardSidebar from '../../../pages/DashboardSidebar/DashboardSidebar';
import { Box, Hidden } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../../App.css';

const DashboardLayout = () => {
    const value = useSelector((state) => state.open.value)
    let className;
    if (!value) {
        className = 'left-[-100%] duration-500'
    }
    else {
        className = 'left-0 duration-500'
    }
    return (
        <div>
            <DashboardNavbar />
            <Box sx={{ display: 'flex' }}>
                <Hidden>
                    <Box
                        className={className}
                        sx={{
                            // background: '#fff',
                            height: '100vh',
                            width: '255px',
                            position: 'fixed',
                            textAlign: 'center',
                            padding: '10px 0',
                            paddingRight: '10px',
                            top: '12%',
                            // borderRight: '1px solid #bfbfbf'
                        }}><DashboardSidebar /></Box>
                        <Box className='side-bar' sx={{
                            // background: '#fff',
                            display: {xs: 'none', md: 'block'},
                            height: '100vh',
                            width: '255px',
                            position: 'fixed',
                            textAlign: 'center',
                            padding: '10px 0',
                            paddingRight: '10px',
                            top: '11%',
                            left: '1%',
                            // borderRight: '1px solid #bfbfbf'
                            }}>
                            <DashboardSidebar />
                        </Box>

                </Hidden>

                <Box
                className='outlet'
                 sx={{
                    background: '#e3f8e2', 
                    flex: 1,
                    marginLeft: '225px',
                    padding: '10px 20px',
                    marginTop: '65px',
                    marginRight: '-33px',
                    // height: '100vh'
                }}><Outlet /></Box>
            </Box>
        </div>
    );
};

export default DashboardLayout;