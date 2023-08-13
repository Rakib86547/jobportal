import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { VscBriefcase } from 'react-icons/vsc';
import { GiMoneyStack } from 'react-icons/gi'
import StyleButton from '../../Components/Button/StyleButton';
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({ jobs }) => {
    const {img, job_title, company, location, salary, jobType, updatedAt, _id} = jobs;
    return (
        <Box sx={{ padding: '10px 0px' }}>
            <Box sx={{
                border: '1px solid #e3f8e2',
            }}>
                <Card sx={{
                    padding: '32px 20px',
                    display: 'flex',
                    flexDirection: { sm: 'row', lg: 'row', md: 'row', xs: 'column' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'none',
                }} className='job-card'>

                    <Box sx={{
                        display: "flex"
                    }}>
                        <figure className='rounded-full w-[100px] h-[100px]'>
                            <img className='w-full' src={img} alt='applied' />
                        </figure>
                        <CardContent sx={{ marginLeft: { lg: '', md: '0' } }}>

                            <Typography
                                sx={{
                                    fontSize: '26px',
                                    fontWeight: 500,
                                }} gutterBottom variant="h5" component="div">
                                {job_title}
                            </Typography>

                            <Box sx={{ display: 'flex', padding: '5px 0' }}>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                                    <VscBriefcase className='w-[25px] h-[25px] mr-1' /> {company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CiLocationOn className='w-[25px] h-[25px]' /> {location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                                    <GiMoneyStack className='w-[25px] h-[25px] mr-2' /> {salary}
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" >
                                {jobType}
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{
                        display: 'flex'
                    }}>
                        <Link to={`/api/v1/jobs/job-details/${_id}`}
                            
                        >

                            <StyleButton title='Details' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[70px] rounded search-btn text-white' />
                        </Link>

                        <Box sx={{
                            background: '#e3f8e2',
                            padding: '2px 24px',
                            borderRadius: '10px',
                            marginLeft: '10px',
                            color: '#1DBF73',
                            // '&:hover': { color: '#fff', background: '#1DBF73', transition: '.3s' }
                        }}>
                            <Typography>Apply Date</Typography>
                            <Typography>{updatedAt.slice(0, 10)}</Typography>
                        </Box>
                    </Box>

                </Card>
            </Box>
        </Box>
    );
};

export default AppliedJobsDetails;