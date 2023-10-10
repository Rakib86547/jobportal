import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FeatureJobsDetails from './FeatureJobsDetails';
import { useGetAllJobsQuery } from '../../../features/auth/jobApi';
import Pagination from '../../ManageJobs/Pagination';
import Loading from '../../../Components/Loading/Loading';


const MoreFeatureJobs = () => {
    const [page, setPage] = useState(1);
    const [totalData, setTotalData] = useState(0)
    const limit = 12;
    const { data, isLoading } = useGetAllJobsQuery({ page, limit });
    useEffect(() => {
        setTotalData(data?.total);
    }, [data])

    if (isLoading) {
        return <Loading />
    }
    return (
        <Box>
            <Typography variant='h6' sx={{ textAlign: 'center', paddingTop: '20px' }}>All Jobs</Typography>
            <Box sx={{ padding: '50px 0' }}>
                <Grid lg={12} item container spacing={3} justifyContent='center'>
                    {
                        data?.data?.map((job) =>
                            <Grid key={job._id} item lg={4} sm={6} xs={12} >
                                <FeatureJobsDetails key={job._id} job={job} />
                            </Grid>)
                    }
                </Grid>
            </Box>
            {/* ------- PAGINATION AREA --------- */}
            <Box>
                <Pagination activePage={page} totalData={totalData} setActivePage={setPage} />
            </Box>
        </Box>
    );
};

export default MoreFeatureJobs;