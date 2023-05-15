import { Box, Grid, Typography } from '@mui/material';
import React, {  } from 'react';
import { useParams } from 'react-router-dom';
import { useGetJobsQuery } from '../../features/auth/authApi';
import Loading from '../../Components/Loading/Loading';
import CategoriesJobsDetails from './CategoriesJobsDetails';
import SectionTitle from '../../Components/Button/SectionTitle/SectionTitle';

const CategoriesJobs = () => {        
    const { category } = useParams();    
    const { data, isLoading, isError } = useGetJobsQuery(category)    

    if (isLoading) {
        return <Loading />
    }



    if (isError) {
        return <Typography variant='h5'>Something went wrong.....</Typography>
    }


    return (
        <Box sx={{ padding: '60px 0' }}>
            <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
                <SectionTitle title={`${data.data.length} Jobs Found`} />
            </Box>

            <Box>
                <Grid lg={12} item container spacing={3} justifyContent='center'>
                    {
                        data.data?.map((job, index) =>
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