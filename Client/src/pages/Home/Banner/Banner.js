/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Divider, Hidden, Typography } from '@mui/material';
import React, { useState } from 'react';
import banner from '../../../assests/Banner/Banner.svg'
import StyleButton from '../../../Components/Button/StyleButton';
import { IoSearchOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import { Link } from 'react-router-dom';
import '../../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountry, searchTitle } from '../../../features/auth/searchSlice';
import { useGetSearchJobsQuery } from '../../../features/auth/searchApi';

const Banner = () => {
    // const [keywords, setKeywords] = useState('')
    // const [country, setCountry] = useState('');

    const searchValue = useSelector((state) => state.search);
    const {data, isLoading} = useGetSearchJobsQuery()
    const dispatch = useDispatch();

    console.log('search value', searchValue)
    const handleJobsSearch = () => {
        const title = searchValue?.title;
        const location = searchValue?.country        
        console.log(title, location)
    }
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // gap: '20px'
        }}>

            <Box sx={{
                width: { lg: '50%', md: '100%', sm: '100%' }
            }}>
                <Typography variant='h3' sx={{ fontFamily: 'Jost' }}>Join us & Explore Thousands of Jobs</Typography>
                <Typography variant='h6' sx={{ fontSize: '14px', fontFamily: 'Jost', padding: '15px 0' }}>Find Jobs, Employment & Career Opportunities</Typography>
                <Box sx={{ marginTop: '15px' }}>
                    <form className='border search-box flex items-center justify-between p-5 relative w-[114%] bg-white'>
                        <Box className='input1'>
                            <Typography variant='h6' sx={{ color: 'primary.main', fontSize: '18px', fontFamily: 'Jost' }}>What</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <input
                                    type='text'
                                    name='job title keywords'
                                    placeholder='job title, keywords'
                                    className='focus-visible:outline-none'
                                    onChange={(e) => dispatch(searchTitle(e.target.value))}
                                />
                                <span className='text-[30px]'><IoSearchOutline /></span>
                            </Box>
                        </Box>
                        <Divider orientation="vertical" flexItem>

                        </Divider>
                        <Box className='input1'>
                            <Typography variant='h6' sx={{ color: 'primary.main', fontSize: '18px', fontFamily: 'Jost' }}>Where</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <input
                                    type='text'
                                    placeholder='city, country'
                                    className='focus-visible:outline-none'
                                    onChange={(e) => dispatch(searchCountry(e.target.value))}
                                />
                                <span className='text-[30px]'><CiLocationOn /></span>
                            </Box>
                        </Box>
                        <Link onClick={handleJobsSearch} className='btn'>
                            <StyleButton title='Find Jobs' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />

                        </Link>
                    </form>
                </Box>
            </Box>



            {/* image section */}
            <Hidden mdDown>
                <Box sx={{
                    width: '50%'
                }}>
                    <img src={banner} alt='banner' />
                </Box>
            </Hidden>
        </Box>
    );
};

export default Banner;