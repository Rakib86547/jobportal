/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Divider, Grid, Hidden, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import banner from '../../../assests/Banner/Banner.svg'
import StyleButton from '../../../Components/Button/StyleButton';
import { IoSearchOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearCountry, clearTitle, searchCountry, searchTitle } from '../../../features/auth/searchSlice';
import { useGetSearchJobsQuery } from '../../../features/auth/searchApi';
import SearchJobsDetails from './SearchJobs';
import CategoriesJobsDetails from '../../CategoriesJobs/CategoriesJobsDetails';
import { toast } from 'react-hot-toast';
// import SearchJobsDetails from './SearchJobsDetails';

const Banner = () => {
    // const [keywords, setKeywords] = useState('')  
    // const [searchItems, setSearchItems] = useState({})
    // const title = searchItems?.title;
    // const location = searchItems?.location;
    // console.log(searchItems)

    const searchValue = useSelector((state) => state.search);
    const searchKeywords = { title: searchValue?.title, location: searchValue?.country }
    // console.log('search value', searchValue)
    // const { data } = useGetSearchJobsQuery({ title, location })
    // const searches = { title, location }
    // console.log('searches', searches)
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    // const handleJobsSearch = () => {               
    //     // const searchKeywords = {
    //     //     title: searchValue?.title,
    //     //     location: searchValue?.country
    //     // };
    //     // if (locations.pathname !== '/search') {
    //     //     navigate('/search', { state: searchKeywords})
    //     // }
    //     // Only set searchItems if either title or location is provided
    //     // if (searchKeywords.title || searchKeywords.location) {
    //     //     setSearchItems(searchKeywords);
    //     //     if (data?.status === 'Success') {
    //     //         clearCountry();
    //     //         clearTitle()
    //     //     }
    //     // } else {
    //     //     // If neither title nor location is provided, clear searchItems
    //     //     setSearchItems({});
    //     // }
    // }

    const handleJobsSearch = (e) => {
        e.preventDefault()
        if (searchValue?.title === '' && searchValue?.country === '') {
            return toast.error('please write search value')
        }
        if (location.pathname !== '/search-jobs') {
            navigate('/search-jobs', { state: searchKeywords });
        }
        if (!searchValue?.title === '' || searchValue?.country === '') {
            setTimeout(() => {
                dispatch(clearCountry());
                dispatch(clearTitle())
            }, 3000);
        }
    }
    return (
        <Box>
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
                                        name='job title'
                                        placeholder='job title'
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
                                        placeholder='country'
                                        className='focus-visible:outline-none'
                                        onChange={(e) => dispatch(searchCountry(e.target.value))}
                                    />
                                    <span className='text-[30px]'><CiLocationOn /></span>
                                </Box>
                            </Box>
                            <Box onClick={handleJobsSearch} className='btn'>
                                <StyleButton title='Find Jobs' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />

                            </Box>
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
        </Box>
    );
};

export default Banner;