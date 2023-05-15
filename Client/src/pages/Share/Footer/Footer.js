import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'


const Footer = () => {
    return (
        <Box className='footer-box' sx={{ background: '#e3f8e2' }}>
            <Grid lg={12} item container spacing={3} justifyContent='center'
                sx={{
                    background: '#e3f8e2',
                    padding: { lg: '60px 0', md: '60px 40px', sm: '60px 40px', xs: '60px 40px' },
                    textAlign: 'center'
                }}>
                <Grid item xs={12} sm={6} lg={3} sx={{}}>
                    <Link className='w-[170px] inline-block' to='/'><img src='http://localhost:3000/static/media/logo.9cbeb0483a4bcc841212.png' alt='' /></Link>
                    <Box sx={{ marginTop: '20px' }}>
                        <Typography variant='h6' sx={{ color: '#1DBF73', fontSize: '20px' }}>Call Us</Typography>
                        <Typography>+8801776386547</Typography>
                        <Typography sx={{ marginTop: '30px' }}>329 Queensberry Street, North Melbourne VIC</Typography>
                        <Typography>3051, Australia.</Typography>
                        <a href='contact.antor.bd@gmai.com'>contact.antor.bd@gmai.com</a>
                    </Box>
                </Grid>


                <Grid item xs={12} sm={6} lg={3} sx={{}}>
                    <Typography variant='h6' sx={{ fontSize: '18px' }}>For Employer</Typography>
                    <Stack spacing={1} sx={{ marginTop: '30px' }}>
                        <Link><Typography>Brows Jobs</Typography></Link>
                        <Link><Typography>Brows Categories</Typography></Link>
                        <Link><Typography>Candidate Dashboard</Typography></Link>
                        <Link><Typography>Jobs Alert</Typography></Link>
                    </Stack>
                </Grid>


                <Grid item xs={12} sm={6} lg={3} sx={{}}>
                    <Typography variant='h6' sx={{ fontSize: '18px' }}>For Candidate</Typography>
                    <Stack spacing={1} sx={{ marginTop: '30px' }}>
                        <Link><Typography>Brows Jobs</Typography></Link>
                        <Link><Typography>Brows Categories</Typography></Link>
                        <Link><Typography>Candidate Dashboard</Typography></Link>
                        <Link><Typography>Jobs Alert</Typography></Link>
                    </Stack>
                </Grid>


                <Grid item xs={12} sm={6} lg={3} sx={{}}>
                    <Typography variant='h6' sx={{ fontSize: '18px' }}>Help for Reasource</Typography>
                    <Stack spacing={1} sx={{ marginTop: '30px' }}>
                        <Link><Typography>Brows Jobs</Typography></Link>
                        <Link><Typography>Brows Categories</Typography></Link>
                        <Link><Typography>Candidate Dashboard</Typography></Link>
                        <Link><Typography>Jobs Alert</Typography></Link>
                    </Stack>
                </Grid>
            </Grid>
            <Box sx={{marginLeft: '-25px', background: '#e3f8e2',
            
        }}>
                <Divider />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '30px',                    
                }}
                className='footer'>
                    <Typography sx={{fontSize: '15px'}}>© 2023 JobPortal by Rakib Khan. All Right Reserved.</Typography>
                    <Box sx={{display: 'flex', width: '140px', justifyContent: 'space-between'}} className='footer-icon'>
                        <a href='https://www.linkedin.com/in/rakib-khan-66623a221/' target='blank'><RiLinkedinFill /></a>
                        <a href='https://twitter.com/' target='blank'><AiOutlineTwitter /></a>
                        <a href='https://www.facebook.com/ ' target='blank'><BsFacebook /></a>
                        <a href='https://github.com/Rakib86547'><AiFillGithub /></a>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;