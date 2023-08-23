import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetWorkQuery } from '../../features/auth/workApi';
import WorkExperienceDetails from '../WorkExperience/WorkExperienceDetails';
import { Box } from '@mui/material';

const WorkExperienceInfo = () => {
    const { email } = useParams();
    const { data: workInfo } = useGetWorkQuery(email);
    return (
        <Box>
            {
                workInfo?.data?.map(work => <WorkExperienceDetails key={work._id} work={work} />)
            }
        </Box>
    );
};

export default WorkExperienceInfo;