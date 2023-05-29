import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetPersonalInfoQuery } from '../../features/auth/peronalApi';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Personal = () => {
    const user = useSelector((state) => state.auth.user);
    const email = user?.email
    const {data: personalInfo} = useGetPersonalInfoQuery(email);
    console.log('get info', personalInfo)
   
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6'>Personal</Typography>
                <Link to='/dashboard/edit-personal'>
                    <span className='text-[#1DBF73]'><BorderColorOutlinedIcon /> </span>
                </Link>
            </Box>

            {/* ----- details section ------ */}
            <Box sx={{display: {md: 'flex', xs: 'block'}}}>
                <Stack spacing={3} sx={{width: {xs: '100%', md: '50%'}}}>
                    <Box>
                        <Typography variant='body' sx={{fontWeight: 'bold'}}>Fist Name</Typography>
                        <Typography>Abul</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body' sx={{fontWeight: 'bold'}}>Country</Typography>
                        <Typography>Bangladesh</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body' sx={{fontWeight: 'bold'}}>Street Address</Typography>
                        <Typography>Bangladesh</Typography>
                    </Box>
                </Stack>

                <Stack spacing={3} sx={{width: {xs: '100%', md: '50%'}}}>
                    <Box>
                        <Typography variant='body' sx={{fontWeight: 'bold'}}>Last Name</Typography>
                        <Typography>Kana</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body' sx={{fontWeight: 'bold'}}>City</Typography>
                        <Typography>Rajshahi</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body' sx={{fontWeight: 'bold'}}>Phone Number</Typography>
                        <Typography>Rajshahi</Typography>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default Personal;