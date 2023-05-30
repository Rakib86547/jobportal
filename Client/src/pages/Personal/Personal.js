import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetPersonalInfoQuery } from '../../features/auth/peronalApi';
import Loading from '../../Components/Loading/Loading';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Personal = () => {
    const user = useSelector((state) => state.auth.user);
    const email = user?.email
    const { data: personalInfo, isLoading } = useGetPersonalInfoQuery(email);


    useEffect(() => {
        setTimeout(() => {
            if (isLoading) {
                return <Loading />
            }
        }, 5000);
    }, [isLoading, personalInfo])
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6'>Personal</Typography>
                <Link to='/dashboard/edit-personal'>
                    <span className='text-[#1DBF73]'><BorderColorOutlinedIcon /> </span>
                </Link>
            </Box>

            {/* ----- details section ------ */}
            <Box sx={{ display: { md: 'flex', xs: 'block' } }}>
                <Stack spacing={3} sx={{ width: { xs: '100%', md: '50%' } }}>
                    <Box>
                        <Typography variant='body' sx={{ fontWeight: 'bold' }}>Fist Name</Typography>
                        <Typography>{personalInfo?.data?.first_name}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body' sx={{ fontWeight: 'bold' }}>Country</Typography>
                        <Typography>{personalInfo?.data?.country}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body' sx={{ fontWeight: 'bold' }}>Street Address</Typography>
                        <Typography>{personalInfo?.data?.street_address}</Typography>
                    </Box>
                </Stack>

                <Stack spacing={3} sx={{ width: { xs: '100%', md: '50%' } }}>
                    <Box>
                        <Typography variant='body' sx={{ fontWeight: 'bold' }}>Last Name</Typography>
                        <Typography>{personalInfo?.data?.last_name}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body' sx={{ fontWeight: 'bold' }}>City</Typography>
                        <Typography>{personalInfo?.data?.city}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body' sx={{ fontWeight: 'bold' }}>Phone Number</Typography>
                        <Typography>{personalInfo?.data?.phone}</Typography>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default Personal;