import React from 'react';
import { useGetEducationQuery } from '../../features/auth/educationalApi';
import { useParams } from 'react-router-dom';
import EducationDetails from '../Education/EducationDetails';
import { Box } from '@mui/material';

const EducationInfo = () => {
    const { email } = useParams();
    const { data: educationInfo } = useGetEducationQuery(email);
    return (
        <Box>
            {
                educationInfo?.data?.map(education => <EducationDetails key={education._id} education={education} />)
            }
        </Box>
    );
};

export default EducationInfo;