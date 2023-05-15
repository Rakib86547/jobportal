import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetJobDetailsQuery } from '../../features/auth/authApi';
import Loading from '../../Components/Loading/Loading';
import { BsBookmarkPlus } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { VscBriefcase } from 'react-icons/vsc';
import { GiMoneyStack } from 'react-icons/gi'
import StyleButton from '../../Components/Button/StyleButton';

const JobDetails = () => {
    const { id } = useParams();    
    console.log(id)
    const { data, isLoading, isError } = useGetJobDetailsQuery(id);
    console.log(data)
    if (isLoading) {
        return <Loading />
    };
    if (isError) {
        return <Typography variant='h5'>Something Went Wrong....</Typography>
    }
    return (
        <Box sx={{ padding: '60px 0px' }}>
            <Box sx={{
                border: '1px solid #e3f8e2',
            }}>
                <Card sx={{
                    padding: '32px 20px',
                    display: 'flex',
                    flexDirection: {sm: 'row', lg: 'row', md: 'row', xs: 'column'},
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'none',
                }} className='job-card'>

                    <Box sx={{
                        display: "flex"
                    }}>
                        <figure className='rounded-full'>
                            <img className='' src={data.data?.img} alt='' />
                        </figure>
                        <CardContent sx={{ marginLeft: { lg: '', md: '0' } }}>

                            <Typography
                                sx={{
                                    fontSize: '26px',
                                    fontWeight: 500,
                                }} gutterBottom variant="h5" component="div">
                                {data.data?.job_title}
                            </Typography>

                            <Box sx={{ display: 'flex', padding: '5px 0' }}>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                                    <VscBriefcase className='w-[25px] h-[25px] mr-1' /> {data.data?.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CiLocationOn className='w-[25px] h-[25px]' /> {data.data?.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                                    <GiMoneyStack className='w-[25px] h-[25px] mr-2' /> {data.data?.salary}
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" >
                                {data.data?.jobType}
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{
                        display: 'flex'
                    }}>
                       <Link><StyleButton title='Apply Now' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[70px] rounded search-btn text-white' /></Link>
                        <IconButton sx={{
                            background: '#e3f8e2',
                            padding: '12px',
                            borderRadius: '10px',
                            marginLeft: '10px',
                            color: '#1DBF73',
                            '&:hover': {color: '#fff', background: '#1DBF73', transition: '.3s'}
                        }}>
                            <BsBookmarkPlus title='Save' />
                        </IconButton>
                    </Box>

                </Card>
            </Box>
        </Box>        
    );
};

export default JobDetails;