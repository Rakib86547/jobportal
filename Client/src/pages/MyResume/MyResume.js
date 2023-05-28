import { Box, Typography } from '@mui/material';
import React from 'react';

const MyResume = () => {
    return (
        <Box>
            <Typography variant='h4' textAlign={'center'} padding={'20px 10px'}>My Resume!</Typography>

            {/* ---- resume ------ */}
            <Box sx={{
                width: '100%',
                margin: 'auto',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                background: '#fff',
                borderRadius: '8px',
                padding: '15px'
            }}>
                <Box sx={{ width: '100%' }}>
                    <Typography variant='body1'>Description</Typography>
                    <textarea value='your description' readOnly className='w-full input-box' rows="10" placeholder='text area' />
                </Box>
            </Box>
        </Box>
    );
};

export default MyResume;