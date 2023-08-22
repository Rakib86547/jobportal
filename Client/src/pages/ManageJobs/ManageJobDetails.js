import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetManageJobQuery } from '../../features/auth/jobApi';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { Box, Card, CardContent, List, ListItem, Stack, Typography } from '@mui/material';
import { GiMoneyStack } from 'react-icons/gi';
import { CiLocationOn } from 'react-icons/ci';
import { VscBriefcase } from 'react-icons/vsc';

const ManageJobDetails = () => {
    const { id } = useParams();
    const { data: jobData } = useGetManageJobQuery(id);
    return (
        <div>
            <Box sx={{
                border: '1px solid #e3f8e2',
            }}>
                <Card sx={{
                    padding: '32px 20px',
                    display: 'flex',
                    flexDirection: { sm: 'row', lg: 'row', md: 'row', xs: 'column' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'none',
                }} className='job-card'>

                    <Box sx={{
                        display: "flex"
                    }}>
                        <figure className='rounded-full w-[100px]'>
                            <img className='' src={jobData?.data?.img} alt='' />
                        </figure>
                        <CardContent sx={{ marginLeft: { lg: '', md: '0' } }}>

                            <Typography
                                sx={{
                                    fontSize: '26px',
                                    fontWeight: 500,
                                }} gutterBottom variant="h5" component="div">
                                {jobData?.data?.position}
                            </Typography>

                            <Box sx={{ display: 'flex', padding: '5px 0' }}>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                                    <VscBriefcase className='w-[25px] h-[25px] mr-1' /> {jobData?.data?.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CiLocationOn className='w-[25px] h-[25px]' /> {jobData?.data?.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                                    <GiMoneyStack className='w-[25px] h-[25px] mr-2' /> {jobData?.data?.salary}
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" >
                                {jobData?.data?.jobType}
                            </Typography>
                        </CardContent>
                    </Box>                   
                </Card>
            </Box>

            {/* -------- details ---------- */}
            <Box sx={{
                padding: '20px 0px',
                // display: 'flex',
                display: { xs: 'block', md: 'flex' },
                background: '#fff',
                paddingLeft: '10px'

            }}>
                <Stack spacing={3} sx={{
                    // flex: 1,
                    paddingRight: '20px',
                    width: { lg: '70%' }
                }}>
                    <Box>
                        <Typography variant='h6'>Job Description</Typography>
                        <Typography>{jobData?.data?.job_description}</Typography>
                    </Box>

                    <Box>
                        <Typography variant='h6'>Key Responsibilities</Typography>
                        <List>
                            {
                                jobData?.data?.key_responsibilities.map(item => <ListItem>{item}</ListItem>)
                            }
                        </List>
                    </Box>

                    <Box>
                        <Typography variant='h6'>Skill & Experience</Typography>
                        <List>
                            {
                                jobData?.data?.skill_experience.map(item => <ListItem>{item}</ListItem>)
                            }
                        </List>
                    </Box>
                    <Box>
                        <Typography variant='h6'>Job Skills</Typography>
                        <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
                            {
                                jobData?.data?.job_skills.map(item => (
                                    <Box>
                                        <Typography sx={{
                                            border: '1px solid #1DBF73',
                                            borderRadius: '30px',
                                            background: '#e3f8e2',
                                            padding: '4px 10px',
                                            margin: '5px 10px',
                                            display: 'inline-block'
                                        }}>{item}</Typography>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Stack>


                {/* job Overview------------- */}
                <Box sx={{
                    width: { xs: '100%', md: '25%', },
                    background: '#e3f8e2',
                    borderRadius: '10px',
                    padding: '20px'
                }}>
                    <Typography variant='h6'>Job Overview</Typography>
                    <Stack spacing={3} sx={{ marginTop: '15px' }}>
                        <Box sx={{ marginTop: '15px' }}>
                            <Box sx={{ display: 'flex' }}>
                                <CalendarTodayOutlinedIcon sx={{ marginTop: '8px', color: '#1DBF73' }} />
                                <Box sx={{ marginLeft: '15px' }}>
                                    <Typography>Date Posted:</Typography>
                                    <Typography>{jobData?.data?.updatedAt.slice(0, 10)}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: '15px' }}>
                            <Box sx={{ display: 'flex' }}>
                                <PersonOutlinedIcon sx={{ marginTop: '8px', color: '#1DBF73' }} />
                                <Box sx={{ marginLeft: '15px' }}>
                                    <Typography>Job Title:</Typography>
                                    <Typography>{jobData?.data?.position}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: '15px' }}>
                            <Box sx={{ display: 'flex' }}>
                                <MonetizationOnOutlinedIcon sx={{ marginTop: '8px', color: '#1DBF73' }} />
                                <Box sx={{ marginLeft: '15px' }}>
                                    <Typography>Salary:</Typography>
                                    <Typography>{jobData?.data?.salary}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: '15px' }}>
                            <Box sx={{ display: 'flex' }}>
                                <LocationOnOutlinedIcon sx={{ marginTop: '8px', color: '#1DBF73' }} />
                                <Box sx={{ marginLeft: '15px' }}>
                                    <Typography>Location:</Typography>
                                    <Typography>{jobData?.data?.location}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: '15px' }}>
                            <Box sx={{ display: 'flex' }}>
                                <AccountBalanceOutlinedIcon sx={{ marginTop: '8px', color: '#1DBF73' }} />
                                <Box sx={{ marginLeft: '15px' }}>
                                    <Typography>Company:</Typography>
                                    <Typography>
                                        {
                                            jobData?.data?.company_infortmation.map(info => (<Typography>{info.company_name}</Typography>))
                                        }
                                        </Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Stack>
                </Box>
            </Box>
        </div>
    );
};

export default ManageJobDetails;