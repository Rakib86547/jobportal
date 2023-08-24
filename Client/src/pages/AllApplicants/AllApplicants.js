import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllApplierQuery } from '../../features/auth/jobApi';

const AllApplicants = () => {    
    const user = useSelector((state) => state.auth.user);
    const email = user?.email
    const { data, isLoading } = useGetAllApplierQuery(email);
    console.log(data)
    return (
        <div>
            <h1>All Applicants </h1>            
        </div>
    );
};

export default AllApplicants;