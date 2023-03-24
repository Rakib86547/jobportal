import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../Components/Button/SectionTitle/SectionTitle';
import JobCategoriesDetails from './JobCategoriesDetails';

const JobCategories = () => {
    const jobs = [
        {
            "_id": "1",
            "title": "Accounting/Finance",
            "icon": "https://i.ibb.co/vCFnhwq/money.png",
            "position": '5 open positions'
        },
        {
            "_id": "2",
            "title": "Marketing",
            "icon": "https://i.ibb.co/mCx9fGH/promotion.png",
            "position": '5 open positions'
        },
        {
            "_id": "3",
            "title": "Design",
            "icon": "https://i.ibb.co/vX7q62m/vector.png",
            "position": '5 open positions'
        },
        {
            "_id": "4",
            "title": "Health and Care",
            "icon": "https://i.ibb.co/W3pK963/first-aid-kit.png",
            "position": '5 open positions'
        },
        {
            "_id": "5",
            "title": "Customer Service",
            "icon": "https://i.ibb.co/XJ78KJV/customer-service.png",
            "position": '5 open positions'
        },
        {
            "_id": "6",
            "title": "Automotive Jobs",
            "icon": "https://i.ibb.co/nqycvtM/rocket.png",
            "position": '5 open positions'
        },
        {
            "_id": "7",
            "title": "Development",
            "icon": "https://i.ibb.co/qgbsLQp/web-programming.png",
            "position": '5 open positions'
        },
        {
            "_id": "8",
            "title": "Human Resource",
            "icon": "https://i.ibb.co/jL3XdYw/headhunting.png",
            "position": '5 open positions'
        }
    ]
    return (
        <Box sx={{padding: '60px 0'}}>
            <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
                <SectionTitle title='Popular Job Categories' />
                <Typography>2020 jobs live - 293 added today.</Typography>
            </Box>
            <Box>
                <Grid lg={12}item container spacing={3} justifyContent='center'>
                    {
                        jobs.map((job, i) =>
                            <Grid key={job._id} item  lg={3} sm={6} xs={12} >
                                <JobCategoriesDetails key={job._id} job={job} />
                            </Grid>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default JobCategories;