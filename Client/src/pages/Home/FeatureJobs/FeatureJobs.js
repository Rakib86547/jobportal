import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../Components/Button/SectionTitle/SectionTitle';
import StyleButton from '../../../Components/Button/StyleButton';
import FeatureJobsDetails from './FeatureJobsDetails';
import { useGetFeatureJobsQuery } from '../../../features/auth/featureJobsApi';
import Loading from '../../../Components/Loading/Loading';
import { Link } from 'react-router-dom';

const FeatureJobs = () => {
    const { data, isLoading } = useGetFeatureJobsQuery();
    if (isLoading) {
        return <Loading />
    }
    return (
        <Box sx={{ padding: '60px 0' }}>
            <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
                <SectionTitle title='Feature Jobs' />
                <Typography >Know your worth and find the job that qualify your life</Typography>
            </Box>
            <Box>
                <Grid lg={12} item container spacing={3} justifyContent='center'>
                    {
                        data?.data?.map((job) =>
                            <Grid key={job._id} item lg={4} sm={6} xs={12} >
                                <FeatureJobsDetails key={job._id} job={job} />
                            </Grid>)
                    }
                </Grid>
            </Box>
            <Box sx={{textAlign: 'center'}}>
                <Box sx={{ textAlign: 'center', marginTop: '15px', display: 'inline-block' }}>
                    <Link to='/all-jobs'>
                        <StyleButton title='Load More' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default FeatureJobs;