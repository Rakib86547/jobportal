import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import '../../App.css';
import StyleButton from '../../Components/Button/StyleButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetUpdateUserQuery } from '../../features/auth/profileApi';

const MyProfile = () => {
    const user = useSelector((state) => state.auth.user);
    const { data } = useGetUpdateUserQuery(user?.email);
    const profile = useSelector((state) => state.profile)
    console.log('profile image', profile.image)
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
                        src={profile?.image}
                        sx={{ width: 150, height: 150, margin: 'auto' }}
                    />
                    <Typography variant='h5'>{data?.data?.name}</Typography>
                    <Typography variant=''>{user?.email}</Typography>
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
                                    <input value={data?.data?.name} readOnly className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> Phone Number <br />
                                    <input value={data?.data?.phone} readOnly className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> Website <br />
                                    <input value={data?.data?.website} readOnly className='input-box' />
                                </label>
                            </Stack>
                        </Box>

                        <Box sx={{
                            width: '50%',
                            marginLeft: '5px'
                        }}>
                            <Stack spacing={1}>
                                <label htmlFor='name' label='full-name'> Job Title <br />
                                    <input value={data?.data?.job_title} readOnly className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> Languages <br />
                                    <input value={data?.data?.language} readOnly className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'>  Age <br />
                                    <input value={data?.data?.age} readOnly className='input-box' />
                                </label>
                            </Stack>
                        </Box>

                    </Box>

                    <Box sx={{ width: '100%' }}>
                        <Typography variant='body1'>Description</Typography>
                        <textarea value={data?.data?.description} readOnly className='w-full input-box' rows="10" placeholder='text area' />
                    </Box>
                </Stack>
                <Box sx={{ padding: '20px 0' }}>
                    <Link to='/dashboard/edit-profile'>
                        <StyleButton title='Edit Profile' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default MyProfile;