import { Box, Divider, Hidden, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../assests/Banner/Banner.svg'
import StyleButton from '../../../Components/Button/StyleButton';
import { IoSearchOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import { Link } from 'react-router-dom';
import '../../../App.css';

const Banner = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // gap: '20px'
        }}>

            <Box sx={{
                width: { lg: '50%', md:'100%', sm:'100%'}
            }}>
                <Typography sx={{}} variant='h3'>Join us & Explore Thousands of Jobs</Typography>
                <Typography variant='h6' sx={{ fontSize: '14px', fontFamily: 'Jost', padding: '15px 0' }}>Find Jobs, Employment & Career Opportunities</Typography>
                <Box sx={{ marginTop: '15px' }}>
                    <form className='border search-box flex items-center justify-between p-5 relative w-[114%] bg-white'>
                        <Box sx={{width: {}}}>
                            <Typography variant='h6' sx={{ color: 'primary.main', fontSize: '18px', fontFamily: 'Jost' }}>What</Typography>
                            <Box sx={{ display: {lg:'flex', md: 'block'}, alignItems: 'center', justifyContent: 'space-between' }}>
                                <input type='text' placeholder='job title, keywords' className='focus-visible:outline-none' />
                                <span className='text-[30px]'><IoSearchOutline /></span>
                            </Box>
                        </Box>
                        <Divider orientation="vertical" flexItem>

                        </Divider>
                        <Box>
                            <Typography variant='h6' sx={{ color: 'primary.main', fontSize: '18px', fontFamily: 'Jost' }}>Where</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <input type='text' placeholder='city, country' className='focus-visible:outline-none' />
                                <span className='text-[30px]'><CiLocationOn /></span>
                            </Box>
                        </Box>
                        <Link>
                            <StyleButton title='Find Jobs' className='bg-[#1DBF73] hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded text-white' />
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