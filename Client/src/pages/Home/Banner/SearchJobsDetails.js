import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import React from 'react';
import { BsBookmarkPlus } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { VscBriefcase } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { GiMoneyStack } from 'react-icons/gi'

const SearchJobsDetails = ({ job }) => {
    const { img, position, location, job_type, company_infortmation, salary, _id } = job;
    console.log(job)
    return (
        <Box>
            <Box sx={{

            }}>
                <Card sx={{
                    // maxWidth: 345, 
                    // textAlign: 'center',
                    padding: '32px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'none',
                    border: '1px solid #e3f8e2',
                    '&:hover': { boxShadow: '0 6px 15px rgba(64,79,104,.05)' }
                }} className='job-card'>
                    <figure className='w-[70px] mt-[-15px] h-[70px] rounded-[10px]'>
                        <img className='' src={img} alt='' />
                    </figure>
                    <CardContent sx={{ marginLeft: { lg: '-120px', md: '0' } }}>
                        <Link to={`/api/v1/jobs/job-details/${_id}`}>
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    '&:hover': { color: 'primary.base', transition: '.3s' }
                                }} gutterBottom variant="h5" component="div">
                                {position}
                            </Typography>
                        </Link>
                        <Box sx={{ display: 'flex', padding: '5px 0' }}>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                                {
                                    company_infortmation?.map(company_info => <><VscBriefcase className='w-[25px] h-[25px] mr-1' /> {company_info?.industry}</>)
                                }
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                <CiLocationOn className='w-[25px] h-[25px]' /> {location}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                                <GiMoneyStack className='w-[25px] h-[25px] mr-2' /> {salary}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary"
                            sx={{
                                background: '#1DBF73',
                                display: 'inline-block',
                                padding: '4px 20px',
                                borderRadius: '50px',
                                color: '#e3f8e2'
                            }}>
                            {job_type}
                        </Typography>
                    </CardContent>
                    <Box>
                        <IconButton>
                            <BsBookmarkPlus title='Save' />
                        </IconButton>
                    </Box>
                </Card>
                {/* <Box sx={{ textAlign: 'right' }}>
                    <Link to={`/api/v1/jobs/job-details/${_id}`}><Button sx={{
                        color: '#1DBF73',
                        '&:hover': { color: '#202124', transition: '.3s', background: 'transparent' },

                    }}>View Details</Button></Link>
                </Box> */}
            </Box>
        </Box>
    );
};

export default SearchJobsDetails;