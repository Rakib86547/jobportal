import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <Box>
            <Grid lg={12} item container spacing={3} justifyContent='center' sx={{background: '#e3f8e2'}}>
                <Grid item xs={12} sm={6} lg={3} sx={{ border: '1px solid black', width: '15%' }}>
                    <Link className='w-[120px]' to='/'><img src='http://localhost:3000/static/media/logo.9cbeb0483a4bcc841212.png' alt='' /></Link>
                    <Box sx={{marginTop: '20px'}}>
                        <Typography >Call Us</Typography>
                        <Typography>+8801776386547</Typography>
                        <Typography>329 Queensberry Street, North Melbourne VIC</Typography>
                        <Typography>3051, Australia.</Typography>
                        <a href='contact.antor.bd@gmai.com'>contact.antor.bd@gmai.com</a>
                    </Box>
                </Grid>


                <Grid item xs={12} sm={6} lg={3} sx={{ border: '1px solid black' }}>
                    <Typography variant='h6' sx={{fontSize: '18px'}}>For Employer</Typography>
                    <Stack spacing={2} sx={{marginTop: '20px'}}>
                        <Link><Typography>Brows Jobs</Typography></Link>
                        <Link><Typography>Brows Categories</Typography></Link>
                        <Link><Typography>Candidate Dashboard</Typography></Link>
                        <Link><Typography>Jobs Alert</Typography></Link>
                    </Stack>
                </Grid>


                <Grid item xs={12} sm={6} lg={3} sx={{ border: '1px solid black' }}>
                    <Typography variant='h6' sx={{fontSize: '18px'}}>For Candidate</Typography>
                    <Stack spacing={2} sx={{marginTop: '20px'}}>
                        <Link><Typography>Brows Jobs</Typography></Link>
                        <Link><Typography>Brows Categories</Typography></Link>
                        <Link><Typography>Candidate Dashboard</Typography></Link>
                        <Link><Typography>Jobs Alert</Typography></Link>
                    </Stack>
                </Grid>


                <Grid item xs={12} sm={6} lg={3} sx={{ border: '1px solid black' }}>
                    <Typography variant='h6' sx={{fontSize: '18px'}}>Help for Reasource</Typography>
                    <Stack spacing={2} sx={{marginTop: '20px'}}>
                        <Link><Typography>Brows Jobs</Typography></Link>
                        <Link><Typography>Brows Categories</Typography></Link>
                        <Link><Typography>Candidate Dashboard</Typography></Link>
                        <Link><Typography>Jobs Alert</Typography></Link>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;