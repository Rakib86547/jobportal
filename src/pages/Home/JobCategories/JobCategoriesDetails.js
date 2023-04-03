import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';


const JobCategoriesDetails = ({ job }) => {
    const { title, icon, position, categories_id } = job
    return (
        <Box>
            <Card sx={{
                // maxWidth: 345, 
                textAlign: 'center',
                padding: '40px 20px',
                boxShadow: 'none',
                border: '1px solid #e3f8e2',
                '&:hover': { boxShadow: '0 6px 15px rgba(64,79,104,.05)' }
                // '&:hover': { boxShadow: '0 6px 15px rgba(64,79,104,.05)' }
            }} className='job-card'>
                <figure className='w-[70px] h-[70px] icon m-auto rounded-full p-[15px]  bg-[#e3f8e2]'>
                    <img className='grayscale hover:grayscale-0' src={icon} alt='' />
                </figure>
                <CardContent>
                    <Link to={`/jobs/${categories_id}`}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 500,
                                '&:hover': { color: 'primary.base', transition: '.3s' }
                            }} gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                    </Link>
                    <Typography variant="body2" color="text.secondary">
                        {position}
                    </Typography>
                </CardContent>
            </Card>

        </Box>
    );
};

export default JobCategoriesDetails;