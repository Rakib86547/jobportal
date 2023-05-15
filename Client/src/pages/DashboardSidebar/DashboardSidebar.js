import React from 'react';
import { useSelector } from 'react-redux';
import CandidateSidebar from '../CandidateSidbar/CandidateSidebar';
import EmployerSidebar from '../EmployerSidebar/EmployerSidebar';
import { Box } from '@mui/material';

const DashboardSidebar = () => {
    const {user} = useSelector((state) => state.auth)
    return (
        <Box>
            {user?.role === "Candidate" ? <CandidateSidebar /> : undefined}  
            {user?.role === "Employer" ? <EmployerSidebar /> : undefined}  
        </Box>
    );
};

export default DashboardSidebar;