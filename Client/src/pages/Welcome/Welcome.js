import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
const Welcome = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '85vh'
        }}>
            <Box sx={{textAlign: 'center'}}>
                <Typography sx={{display: 'flex', alignItems: 'center'}} variant='h4'>Welc<div className='w-6 h-6 rounded-full animate-spin border-4 border-dashed border-green-500'></div>me to Your Dashb<div className='w-6 h-6 rounded-full animate-spin border-4 border-dashed border-green-500'></div>ard</Typography>
                <Typography variant='h5'>{user?.name}</Typography>
                {/* <div className='w-8 h-8 rounded-full animate-spin border-4 border-dashed border-green-500'></div> */}
            </Box>
        </Box>
    );
};

export default Welcome;