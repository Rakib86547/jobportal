import { Box, Grid, Typography } from '@mui/material';
import React, {  } from 'react';
import { useParams } from 'react-router-dom';
import { useGetJobsQuery } from '../../features/auth/authApi';
import Loading from '../../Components/Loading/Loading';
import CategoriesJobsDetails from './CategoriesJobsDetails';
import SectionTitle from '../../Components/Button/SectionTitle/SectionTitle';

const CategoriesJobs = () => {
    const { id } = useParams();
    const { data: jobs, isLoading, isError } = useGetJobsQuery(id)


    if (isLoading) {
        return <Loading />
    }



    if (isError) {
        return <Typography variant='h5'>Something went wrong.....</Typography>
    }


    return (
        <Box sx={{ padding: '60px 0' }}>
            <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
                <SectionTitle title={`${jobs.length} Jobs Found`} />
            </Box>

            <Box>
                <Grid lg={12} item container spacing={3} justifyContent='center'>
                    {
                        jobs.map((job, index) =>
                            <Grid key={index} item lg={4} sm={6} xs={12} >
                                <CategoriesJobsDetails key={index} job={job} />
                            </Grid>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default CategoriesJobs;