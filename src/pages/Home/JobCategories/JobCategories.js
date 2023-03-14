import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../Components/Button/SectionTitle/SectionTitle';
import JobCategoriesDetails from './JobCategoriesDetails';

const JobCategories = () => {
    const jobs = [
        {
            "title": "Accounting/Finance",
            "icon": "https://i.ibb.co/vCFnhwq/money.png",
            "position": '5 open positions'
        },
        {
            "title": "Marketing",
            "icon": "https://i.ibb.co/mCx9fGH/promotion.png",
            "position": '5 open positions'
        },
        {
            "title": "Design",
            "icon": "https://i.ibb.co/vX7q62m/vector.png",
            "position": '5 open positions'
        },
        {
            "title": "Health and Care",
            "icon": "https://i.ibb.co/W3pK963/first-aid-kit.png",
            "position": '5 open positions'
        },
        {
            "title": "Customer Service",
            "icon": "https://i.ibb.co/XJ78KJV/customer-service.png",
            "position": '5 open positions'
        },
        {
            "title": "Automotive Jobs",
            "icon": "https://i.ibb.co/nqycvtM/rocket.png",
            "position": '5 open positions'
        },
        {
            "title": "Development",
            "icon": "https://i.ibb.co/qgbsLQp/web-programming.png",
            "position": '5 open positions'
        },
        {
            "title": "Human Resource",
            "icon": "https://i.ibb.co/jL3XdYw/headhunting.png",
            "position": '5 open positions'
        }
    ]
    return (
        <Box>
            <Box sx={{ textAlign: 'center' }}>
                <SectionTitle title='Popular Job Categories' />
                <Typography sx={{ paddingBottom: '50px' }}>2020 jobs live - 293 added today.</Typography>
            </Box>
            <Box>
                <Grid container spacing={3} justifyContent='center' columns={{ xs: 4, md: 8, lg: 12 }}>
                    {
                        jobs.map((job, index) =>
                            <Grid item  sm={1} md={3} lg={3} >
                                <JobCategoriesDetails key={index} job={job} />
                            </Grid>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default JobCategories;