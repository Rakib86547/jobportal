import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ title, className, sx}) => {
    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant='h2' sx={{ ...sx, paddingBottom: '5px', fontSize: { lg: '30px', md: '30px', sm: '26px' }, fontWeight: '500' }} className={className}>{title}</Typography>            
        </Box>
    );
};

export default SectionTitle;