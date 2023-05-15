import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../Components/Button/SectionTitle/SectionTitle';
import JobCategoriesDetails from './JobCategoriesDetails';
import { useGetCategoriesJobsQuery } from '../../../features/auth/authApi';
import Loading from '../../../Components/Loading/Loading';

const JobCategories = () => {
    
    const { data, isLoading, isError } = useGetCategoriesJobsQuery();
    // console.log('jobs',data.status, data.data)
    if (isLoading) {
        return  <Loading />
    }
    if(isError){
        return <Typography variant='h5'>Something went wrong...</Typography>
    }
    return (
        <Box sx={{ padding: '60px 0' }}>
            <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
                <SectionTitle title='Popular Job Categories' />
                <Typography>2020 jobs live - 293 added today.</Typography>
            </Box>
            <Box>
                <Grid lg={12} item container spacing={3} justifyContent='center'>
                    {
                        data.data?.map((job, i) =>
                            <Grid key={job._id} item lg={3} sm={6} xs={12} >
                                <JobCategoriesDetails key={job._id} job={job} />
                            </Grid>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default JobCategories;