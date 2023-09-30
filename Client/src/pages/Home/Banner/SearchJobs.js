import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetSearchJobsQuery } from '../../../features/auth/searchApi';
import SearchJobsDetails from './SearchJobsDetails';

const SearchJobs = () => {
    const locations = useLocation();
    const title = locations?.state?.title;
    const location = locations?.state?.location;
    const { data } = useGetSearchJobsQuery({ title, location });
    console.log(data);
    return (
        <Box sx={{ padding: '50px 0px' }}> 
        <Typography variant='h6' sx={{textAlign: 'center', padding: '20px 0'}}>{data?.data?.length} Jobs Found</Typography>          
            <Box>
                <Grid lg={12} item container spacing={3} justifyContent='center'>
                    {
                        data?.data?.map((job, index) =>
                            <Grid key={index} item lg={6} sm={6} xs={12} >
                                <SearchJobsDetails key={index} job={job} />
                            </Grid>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default SearchJobs;