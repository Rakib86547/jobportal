import { Box, Hidden, IconButton, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assests/Logo/logo.png';
import StyleButton from '../../../Components/Button/StyleButton';
import { VscThreeBars } from 'react-icons/vsc'
import { RxCross1 } from 'react-icons/rx'
import LoginSignup from '../LoginSignup/LoginSignup';

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    let responseClassName;
    if (open) {
        responseClassName = 'left-[-100%] duration-500'
    } else {
        responseClassName = 'left-0 duration-500'
    }
    const handleClickOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };
    return (
        <Box>
            {/* -----------responsive navbar---------- */}
            <Hidden mdUp>
                <Box
                    className={responseClassName}
                    sx={{
                        position: 'absolute',
                        backgroundColor: 'primary.transparent',
                        height: '100vh',
                        width: '220px',
                        padding: '0 10px',
                        zIndex: '999'
                    }}>
                    <Stack spacing={2}>
                        <Box sx={{ width: '150px', padding: '10px 0', marginTop: '15px' }}>
                            <Link>
                                <img src={logo} alt='' />
                            </Link>
                        </Box >
                        <NavLink to='/'
                            className={({ isActive }) => isActive ? 'text-[#1DBF73]' : undefined}>
                            Home
                        </NavLink>

                        <NavLink to='/find-jobs'
                            className={({ isActive }) => isActive ? 'text-[#1DBF73]' : undefined}>
                            Find Jobs
                        </NavLink>

                        <NavLink to='/contact'
                            className={({ isActive }) => isActive ? 'text-[#1DBF73]' : undefined}>
                            Contact
                        </NavLink>
                        <NavLink>
                            <StyleButton title='Login / Register' className='bg-[#1DBF73] duration-500 hover:bg-[#1DBF73] py-2 px-5 rounded'></StyleButton>
                        </NavLink>
                    </Stack>
                </Box>
            </Hidden>
            <Box sx={{ display: 'flex', height: '70px', alignItems: 'center', justifyContent: 'space-between' }}>

                <Box sx={{ width: '200px' }}>
                    <Link>
                        <img src={logo} alt='' />
                    </Link>
                </Box >

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Hidden mdDown>
                        <Stack direction='row' spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <NavLink to='/'
                                className={({ isActive }) => isActive ? 'text-[#1DBF73]' : undefined}>
                                Home
                            </NavLink>

                            <NavLink to='/find-jobs'
                                className={({ isActive }) => isActive ? 'text-[#1DBF73]' : undefined}>
                                Find Jobs
                            </NavLink>

                            <NavLink to='/contact'
                                className={({ isActive }) => isActive ? 'text-[#1DBF73]' : undefined}>
                                Contact
                            </NavLink>
                            <NavLink onClick={handleClickOpen}>
                                <StyleButton title='Login / Register' className='bg-[#e3f8e2] duration-500 hover:bg-[#1DBF73] hover:text-[#fff] py-2 px-5 text-[#1DBF73] rounded'></StyleButton>
                            </NavLink>
                        </Stack>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton onClick={() => setOpen(!open)}>
                            {
                                open ? <VscThreeBars /> : <RxCross1 />
                            }

                        </IconButton>
                    </Hidden>
                </Box>
            </Box>
            {
                modalOpen && <LoginSignup open={modalOpen} handleClose={handleClose} setModalOpen={setModalOpen} />
            }
        </Box>
    );
};


export default Navbar;
