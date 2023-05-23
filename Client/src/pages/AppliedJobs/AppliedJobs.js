import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetAppliedJobsQuery } from '../../features/auth/jobApi';
import AppliedJobsDetails from './AppliedJobsDetails';

const AppliedJobs = () => {
    const user = useSelector((state) => state.auth.user);
    const { data } = useGetAppliedJobsQuery(user?.email)
    // console.log('applied job>>>', data)
    return (
        <Box>
            <Typography variant='h4' textAlign={'center'} padding={'20px 10px'}>My Applied Jobs!</Typography>

            <Box>
                {
                    data?.data?.map(appliedJobs => <AppliedJobsDetails jobs={appliedJobs} key={appliedJobs._id} />)
                }
            </Box>
        </Box>
    );
};

export default AppliedJobs;