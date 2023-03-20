import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../Components/Button/SectionTitle/SectionTitle';
import StyleButton from '../../../Components/Button/StyleButton';
import FeatureJobsDetails from './FeatureJobsDetails';

const FeatureJobs = () => {
    const features = [
        {
            "title": "Software Engineer",
            "company": "Walton",
            "location": "Dhaka, Bangladesh",
            "jobType": "Full Time",
            "img": "https://i.ibb.co/kxp8TwG/1.png"
        },
        {
            "title": "Software Engineer",
            "company": "Walton",
            "location": "Dhaka, Bangladesh",
            "jobType": "Full Time",
            "img": "https://i.ibb.co/DLm1zmZ/2.png"
        },
        {
            "title": "Software Engineer",
            "company": "Walton",
            "location": "Dhaka, Bangladesh",
            "jobType": "Full Time",
            "img": "https://i.ibb.co/nm05kZP/3.png"
        },
        {
            "title": "Software Engineer",
            "company": "Walton",
            "location": "Dhaka, Bangladesh",
            "jobType": "Full Time",
            "img": "https://i.ibb.co/LtWfkPk/4.png"
        },
        {
            "title": "Software Engineer",
            "company": "Walton",
            "location": "Dhaka, Bangladesh",
            "jobType": "Full Time",
            "img": "https://i.ibb.co/QmbWjVr/5.png"
        },
        {
            "title": "Software Engineer",
            "company": "Walton",
            "location": "Dhaka, Bangladesh",
            "jobType": "Full Time",
            "img": "https://i.ibb.co/syCNfv2/6.png"
        },
        {
            "title": "Software Engineer",
            "company": "Walton",
            "location": "Dhaka, Bangladesh",
            "jobType": "Full Time",
            "img": "https://i.ibb.co/b5Ghb6Y/7.png"
        },
        {
            "title": "Software Engineer",
            "company": "Walton",
            "location": "Dhaka, Bangladesh",
            "jobType": "Full Time",
            "img": "https://i.ibb.co/zbsQ9NV/8.png"
        },
        {
            "title": "Software Engineer",
            "company": "Walton",
            "location": "Dhaka, Bangladesh",
            "jobType": "Full Time",
            "img": "https://i.ibb.co/Xp0msN1/9.png"
        }
    ]
    return (
        <Box sx={{ padding: '60px 0' }}>
            <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
                <SectionTitle title='Feature Jobs' />
                <Typography >Know your worth and find the job that qualify your life</Typography>
            </Box>
            <Box>
                <Grid lg={12} item container spacing={3} justifyContent='center'>
                    {
                        features.map((job, index) =>
                            <Grid item lg={4} sm={6} xs={12} >
                                <FeatureJobsDetails key={index} job={job} />
                            </Grid>)
                    }
                </Grid>
            </Box>
            <Box sx={{textAlign: 'center', marginTop: '15px'}}>
                <StyleButton title='Load More' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />
            </Box>
        </Box>
    );
};

export default FeatureJobs;