import { Avatar, Box, FormHelperText, InputLabel, Stack, Typography } from '@mui/material';
import React from 'react';
import '../../App.css';
import StyleButton from '../../Components/Button/StyleButton';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    return (
        <Box sx={{
            width: '100%',
            margin: 'auto',
            padding: '50px 0'
        }}>
            <Typography variant='h4' textAlign={'center'} padding={'20px 10px'}>My Profile!</Typography>
            <Box sx={{
                width: '100%',
                margin: 'auto',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                background: '#fff',
                borderRadius: '8px',
                padding: '15px'
            }}>
                <Box sx={{
                    textAlign: 'center',
                }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 150, height: 150, margin: 'auto' }}
                    />
                    <Typography variant='h5'>Abul Kana</Typography>
                    <Typography variant=''>abul@gmail.com</Typography>
                </Box>
                {/* ------ PROFILE FROM ------ */}
                <Stack>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '20px 10px'
                    }}>
                        <Box sx={{
                            width: '50%',
                            marginRight: '5px'
                        }}>
                            <Stack spacing={1}>
                                <label htmlFor='name' label='full-name'> Full Name <br />
                                    <input className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> Phone Number <br />
                                    <input className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> Website <br />
                                    <input className='input-box' />
                                </label>
                            </Stack>
                        </Box>

                        <Box sx={{
                            width: '50%',
                            marginLeft: '5px'
                        }}>
                            <Stack spacing={1}>
                                <label htmlFor='name' label='full-name'> Job Title <br />
                                    <input className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> Languages <br />
                                    <input className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'>  Age <br />
                                    <input className='input-box' />
                                </label>
                            </Stack>
                        </Box>

                    </Box>

                    <Box sx={{ width: '100%' }}>
                        <Typography variant='body1'>Description</Typography>
                        <textarea className='w-full input-box' rows="10" placeholder='text area' />
                    </Box>
                </Stack>
                <Box sx={{padding: '20px 0'}}>
                    <Link>
                        <StyleButton title='Edit Profile' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default MyProfile;