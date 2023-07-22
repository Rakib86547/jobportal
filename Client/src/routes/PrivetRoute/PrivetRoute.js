import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useSelector((state) => state.auth);
    const location = useLocation()
    // console.log('privet route: ', user, isLoading)
    if (isLoading) {
        return <Loading />
    };
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivetRoute;