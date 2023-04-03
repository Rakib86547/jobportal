import { Box } from '@mui/material';
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <RotatingLines
                strokeColor="green"
                strokeWidth="3"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </Box>
    );
};

export default Loading;