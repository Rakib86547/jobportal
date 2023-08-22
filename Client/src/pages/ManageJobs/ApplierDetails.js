import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUpdateUserQuery } from '../../features/auth/profileApi';
import { useGetPersonalInfoQuery } from '../../features/auth/peronalApi';
import { useGetEducationQuery } from '../../features/auth/educationalApi';
import { useGetWorkQuery } from '../../features/auth/workApi';
import { useGetSkillsQuery } from '../../features/auth/skillsApi';

const ApplierDetails = () => {
    const {email} = useParams();
    const { data: profileInfo } = useGetUpdateUserQuery(email);
    const { data: personalInfo } = useGetPersonalInfoQuery(email);
    const { data: educationInfo } = useGetEducationQuery(email);
    const { data: workInfo } = useGetWorkQuery(email);
    const { data: skillData } = useGetSkillsQuery(email);
    console.log('info', profileInfo, personalInfo, educationInfo, workInfo, skillData)
    return (
        <div>
            applier details
        </div>
    );
};

export default ApplierDetails;