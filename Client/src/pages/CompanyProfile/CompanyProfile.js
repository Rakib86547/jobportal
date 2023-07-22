import React, {  } from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../App.css'
import { useSelector } from 'react-redux';
import { useGetCompanyProfileInfoQuery } from '../../features/auth/companyProfileApi';
const CompanyProfile = () => {
    const user = useSelector((state) => state.auth.user);
    const email = user?.email
    const { data: companyInfo } = useGetCompanyProfileInfoQuery(email, {refetchOnMountOrArgChange: true});

    return (
        <div>
            <Box sx={{
                width: '100%',
                margin: 'auto',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                background: '#fff',
                borderRadius: '8px',
                padding: '15px'
            }}>
                <Typography variant='h4' sx={{ textAlign: 'center' }}>Company Information!</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='h6'> </Typography>
                    <Link to='/dashboard/edit-company-information'>
                        <span className='text-[#1DBF73]'><BorderColorOutlinedIcon /> </span>
                    </Link>
                </Box>

                {/* ----- details section ------ */}
                <Box sx={{ display: { md: 'flex', xs: 'block' }, marginTop: '20px' }}>
                    <Stack spacing={3} sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Box>
                            <Typography variant='body' sx={{ fontWeight: 'bold' }}>Company Name</Typography>
                            <Typography>{companyInfo?.data?.company_name}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body' sx={{ fontWeight: 'bold' }}>Phone</Typography>
                            <Typography>{companyInfo?.data?.phone}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body' sx={{ fontWeight: 'bold' }}>Est. Since</Typography>
                            <Typography>{companyInfo?.data?.est_since}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body' sx={{ fontWeight: 'bold' }}>Country</Typography>
                            <Typography>{companyInfo?.data?.country}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body' sx={{ fontWeight: 'bold' }}>Complete Address</Typography>
                            <Typography>{companyInfo?.data?.address}</Typography>
                        </Box>
                    </Stack>

                    <Stack spacing={3} sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Box>
                            <Typography variant='body' sx={{ fontWeight: 'bold' }}>Email Address</Typography>
                            <Typography>{companyInfo?.data?.email}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body' sx={{ fontWeight: 'bold' }}>Website</Typography>
                            <Typography>{companyInfo?.data?.company_website}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body' sx={{ fontWeight: 'bold' }}>Team Size</Typography>
                            <Typography>{companyInfo?.data?.team_size}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body' sx={{ fontWeight: 'bold' }}>City</Typography>
                            <Typography>{companyInfo?.data?.city}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body' sx={{ fontWeight: 'bold' }}>Company Type</Typography>
                            <Typography>{companyInfo?.data?.company_type}</Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{ width: '100%', marginTop: '30px' }}>
                    <Typography variant='body' sx={{ fontWeight: 'bold', marginBottom: '10px' }}>About Company</Typography>
                    <textarea value={companyInfo?.data?.company_about} readOnly className='w-full input-box-box' rows="10" />
                </Box>
            </Box>
        </div>
    );
};

export default CompanyProfile;