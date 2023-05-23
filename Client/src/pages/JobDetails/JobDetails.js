import { Box, Button, Card, CardContent, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetJobDetailsQuery } from '../../features/auth/authApi';
import Loading from '../../Components/Loading/Loading';
import { BsBookmarkPlus } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { VscBriefcase } from 'react-icons/vsc';
import { GiMoneyStack } from 'react-icons/gi'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import StyleButton from '../../Components/Button/StyleButton';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import '../../App.css';

const JobDetails = () => {
    const user = useSelector((state) => state.auth.user);
    const { id } = useParams();
    const { data, isLoading, isError } = useGetJobDetailsQuery(id);
    if (isLoading) {
        return <Loading />
    };
    if (isError) {
        return <Typography variant='h5'>Something Went Wrong....</Typography>
    }

    console.log('job details:>>', data)
    const handleApply = () => {
        const id = data?.data?._id
        const applyData = {
            jobId: data?.data?._id,
            userId: user?._id,
            email: user?.email
        }
        fetch(`${process.env.REACT_APP_URL}/jobs/apply/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            },
            body: JSON.stringify(applyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'Success') {
                    toast.success('Thank You For Applying This Job')
                }
                if (data.status === 'Fail') {
                    toast.error(data.message);
                }
            })
    }
    return (
        <Box sx={{ padding: '60px 0px' }}>
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
                        <figure className='rounded-full'>
                            <img className='' src={data.data?.img} alt='' />
                        </figure>
                        <CardContent sx={{ marginLeft: { lg: '', md: '0' } }}>

                            <Typography
                                sx={{
                                    fontSize: '26px',
                                    fontWeight: 500,
                                }} gutterBottom variant="h5" component="div">
                                {data.data?.job_title}
                            </Typography>

                            <Box sx={{ display: 'flex', padding: '5px 0' }}>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                                    <VscBriefcase className='w-[25px] h-[25px] mr-1' /> {data.data?.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CiLocationOn className='w-[25px] h-[25px]' /> {data.data?.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                                    <GiMoneyStack className='w-[25px] h-[25px] mr-2' /> {data.data?.salary}
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" >
                                {data.data?.jobType}
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{
                        display: 'flex'
                    }}>
                        <Button
                            onClick={handleApply}
                        >

                            <StyleButton title='Apply Now' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[70px] rounded search-btn text-white' />
                        </Button>

                        <IconButton sx={{
                            background: '#e3f8e2',
                            padding: '12px',
                            borderRadius: '10px',
                            marginLeft: '10px',
                            color: '#1DBF73',
                            '&:hover': { color: '#fff', background: '#1DBF73', transition: '.3s' }
                        }}>
                            <BsBookmarkPlus title='Save' />
                        </IconButton>
                    </Box>

                </Card>
            </Box>

            {/* -------- details ---------- */}
            <Box sx={{
                padding: '20px 0px',
                // display: 'flex',
                display: { xs: 'block', md: 'flex' }

            }}>
                <Stack spacing={3} sx={{
                    flex: 1,
                    paddingRight: '20px'
                }}>
                    <Box>
                        <Typography variant='h6'>Job Description</Typography>
                        <Typography>{data?.data?.job_description}</Typography>
                    </Box>

                    <Box>
                        <Typography variant='h6'>Key Responsibilities</Typography>
                        <List>
                            {
                                data?.data?.key_responsibilities.map(item => <ListItem>{item}</ListItem>)
                            }
                        </List>
                    </Box>

                    <Box>
                        <Typography variant='h6'>Skill & Experience</Typography>
                        <List>
                            {
                                data?.data?.skill_experience.map(item => <ListItem>{item}</ListItem>)
                            }
                        </List>
                    </Box>
                    <Box>
                        <Typography variant='h6'>Job Skills</Typography>
                        <Box>
                            {
                                data?.data?.job_skills.map(item => (
                                   <Box className='box' sx={{display: 'flex'}}>
                                     <Typography sx={{
                                        border: '1px solid #1DBF73',
                                        borderRadius: '30px',
                                        background: '#e3f8e2',
                                        padding: '4px 10px',
                                        margin: '0 10px'
                                     }}>{item}</Typography>
                                   </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Stack>

                <Box sx={{
                    width: { xs: '100%', md: '25%' },
                    background: '#e3f8e2',
                    borderRadius: '10px',
                    padding: '20px'
                }}>
                    <Typography variant='h6'>Job Overview</Typography>
                    <Stack spacing={3} sx={{marginTop: '15px'}}>
                        <Box sx={{marginTop: '15px'}}>
                            <Box sx={{ display: 'flex' }}>
                                <CalendarTodayOutlinedIcon sx={{marginTop: '8px', color: '#1DBF73'}} />
                                <Box sx={{marginLeft: '15px'}}>
                                    <Typography>Date Posted:</Typography>
                                    {/* <Typography>{data?.data?.updatedAt.slice(0, 10)}</Typography> */}
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginTop: '15px'}}>
                            <Box sx={{ display: 'flex' }}>
                                <PersonOutlinedIcon sx={{marginTop: '8px', color: '#1DBF73'}} />
                                <Box sx={{marginLeft: '15px'}}>
                                    <Typography>Job Title:</Typography>
                                    <Typography>{data?.data?.position}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginTop: '15px'}}>
                            <Box sx={{ display: 'flex' }}>
                                <MonetizationOnOutlinedIcon sx={{marginTop: '8px', color: '#1DBF73'}} />
                                <Box sx={{marginLeft: '15px'}}>
                                    <Typography>Salary:</Typography>
                                    <Typography>{data?.data?.salary}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginTop: '15px'}}>
                            <Box sx={{ display: 'flex' }}>
                                <LocationOnOutlinedIcon sx={{marginTop: '8px', color: '#1DBF73'}} />
                                <Box sx={{marginLeft: '15px'}}>
                                    <Typography>Location:</Typography>
                                    <Typography>{data?.data?.location}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{marginTop: '15px'}}>
                            <Box sx={{ display: 'flex' }}>
                                <AccountBalanceOutlinedIcon sx={{marginTop: '8px', color: '#1DBF73'}} />
                                <Box sx={{marginLeft: '15px'}}>
                                    <Typography>Company:</Typography>
                                    <Typography>{data?.data?.company}</Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default JobDetails;