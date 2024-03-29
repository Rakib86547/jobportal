import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsBookmarkPlus } from 'react-icons/bs'
import { VscBriefcase } from 'react-icons/vsc'
import { CiLocationOn } from 'react-icons/ci'

const FeatureJobsDetails = ({ job }) => {
    const { position, jobType, location, img, company_infortmation, _id} = job;   
    return (
        <Box>
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
                <figure className='w-[65px] mt-[-30px] h-[65px] rounded-full'>
                    <img className='' src={img} alt='' />
                </figure>
                <CardContent sx={{ marginLeft: { lg: '-30px', md: '0' } }}>
                    <Link to={`/api/v1/jobs/job-details/${_id}`}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 500,
                                '&:hover': { color: 'primary.base', transition: '.3s' },
                                marginLeft: '25px'
                            }} gutterBottom variant="h5" component="div">
                            {position}
                        </Typography>
                    </Link>
                    <Box sx={{ display: 'flex', padding: '5px 0' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                            {
                                company_infortmation?.map(company => <><VscBriefcase className='w-[25px] h-[25px] mr-1' /> {company?.company_name}</>)
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
        </Box>
    );
};

export default FeatureJobsDetails;