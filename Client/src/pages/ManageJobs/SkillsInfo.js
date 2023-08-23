import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSkillsQuery } from '../../features/auth/skillsApi';
import SkillsDetails from '../Skills/SkillsDetails';
import { Box } from '@mui/material';

const SkillsInfo = () => {
    const { email } = useParams();
    const { data: skillInfo } = useGetSkillsQuery(email);
    return (
        <Box>
            {
                skillInfo?.data?.map(skill => <SkillsDetails key={skill._id} skill={skill} />)
            }
        </Box>
    );
};

export default SkillsInfo;