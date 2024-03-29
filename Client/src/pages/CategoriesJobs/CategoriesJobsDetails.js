import React from 'react';
import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { VscBriefcase } from 'react-icons/vsc';
import { CiLocationOn } from 'react-icons/ci';
import { BsBookmarkPlus } from 'react-icons/bs';

const CategoriesJobsDetails = ({ job }) => {
    const { jobType, location, img, _id, position, company_infortmation } = job;
    return (
        <Box sx={{
            border: '1px solid #e3f8e2',
        }}>
            <Card sx={{
                padding: '32px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: 'none',
            }} className='job-card'>
                <figure className='w-[50px] h-[50px] mt-[-55px] rounded-full'>
                    <img className='' src={img} alt='' />
                </figure>
                <CardContent sx={{ marginLeft: { lg: '0px', md: '0' } }}>
                    <>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 500,
                            }} gutterBottom variant="h5" component="div">
                            {position}
                        </Typography>
                    </>
                    <Box sx={{ display: 'flex', padding: '5px 0' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                            {
                                company_infortmation.map(company => <Typography><VscBriefcase className='w-[25px] h-[25px] mr-1' /> {company?.company_name}</Typography>)
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                            <CiLocationOn className='w-[25px] h-[25px]' /> {location}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" >
                        {jobType}
                    </Typography>
                </CardContent>
                <Box>
                    <IconButton>
                        <BsBookmarkPlus title='Save' />
                    </IconButton>
                </Box>

            </Card>
            <Box sx={{ textAlign: 'right' }}>
                <Link to={`/api/v1/jobs/job-details/${_id}`}><Button sx={{
                    color: '#1DBF73',
                    '&:hover': { color: '#202124', transition: '.3s', background: 'transparent' },

                }}>View Details</Button></Link>
            </Box>
        </Box>
    );
};

export default CategoriesJobsDetails;