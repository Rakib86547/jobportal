import { Box, Button, Card, CardContent, IconButton, List, ListItem, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
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
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SubdirectoryArrowRightOutlinedIcon from '@mui/icons-material/SubdirectoryArrowRightOutlined';
import StyleButton from '../../Components/Button/StyleButton';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import '../../App.css';
import { useGetQuestionsQuery, useGetRipleyQuery, useQuestionsMutation, useRipleyMutation } from '../../features/auth/jobApi';

const JobDetails = () => {
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentRipley, setCurrentRipley] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const user = useSelector((state) => state.auth.user);
    const { id } = useParams();
    const { data: jobData, isLoading, isError } = useGetJobDetailsQuery(id);
    const { data: allQuestion } = useGetQuestionsQuery(id, {pollingInterval: 5000});
    const { data: allRipley } = useGetRipleyQuery(id, {pollingInterval: 5000});
    const [query] = useQuestionsMutation();
    const [ripley] = useRipleyMutation()
    console.log(jobData) 
    if (isLoading) {
        return <Loading />
    };
    if (isError) {
        return <Typography variant='h5'>Something Went Wrong....</Typography>
    }

    const handleApply = () => {
        const id = jobData?.data?._id
        const applyData = {
            jobId: jobData?.data?._id,
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

    // --- handle question button ----
    const handleQuestion = (data) => {
        const questionData = {
            email: user?.email,
            jobId: id,
            userId: user?._id,
            questions: data.question,
            name: user?.name
        }
        query(questionData)
        setCurrentQuestion(data.question)
        reset()
    }

    // ---- handle ripley ----
    const handleRipley = (data) => {

        const ripleyData = {
            ripleyName: user?.name,
            ripleyEmail: user?.email,
            ripley: data.ripley,
            ripleyJobId: id
        }
        ripley(ripleyData)
        setCurrentRipley(data.ripley)
        reset()
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
                        <figure className='rounded-full w-[100px]'>
                            <img className='' src={jobData.data?.img} alt='' />
                        </figure>
                        <CardContent sx={{ marginLeft: { lg: '', md: '0' } }}>

                            <Typography
                                sx={{
                                    fontSize: '26px',
                                    fontWeight: 500,
                                }} gutterBottom variant="h5" component="div">
                                {jobData.data?.position}
                            </Typography>

                            <Box sx={{ display: 'flex', padding: '5px 0' }}>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
                                    <VscBriefcase className='w-[25px] h-[25px] mr-1' /> {jobData.data?.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CiLocationOn className='w-[25px] h-[25px]' /> {jobData.data?.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                                    <GiMoneyStack className='w-[25px] h-[25px] mr-2' /> {jobData.data?.salary}
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" >
                                {jobData.data?.jobType}
                            </Typography>
                        </CardContent>
                    </Box>
                    {user?.role ===  'Candidate' && <Box sx={{
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
                    </Box>}

                </Card>
            </Box>

            {/* -------- details ---------- */}
            <Box sx={{
                padding: '20px 0px',
                // display: 'flex',
                display: { xs: 'block', md: 'flex' },                

            }}>
                <Stack spacing={3} sx={{
                    // flex: 1,
                    paddingRight: '20px',
                    width: {lg: '70%'}
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
                                    <Typography>{jobData?.data?.company}</Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Stack>
                </Box>
            </Box>






            {/* ----------- general Q&A ------------- */}

            {/* ----- question section -----         */}
            {user?.role === 'Candidate' && (<form onSubmit={handleSubmit(handleQuestion)}>
                <Typography variant='h6'>General Q&A</Typography>
                <Box sx={{ position: 'relative' }}>
                    <Typography sx={{ fontSize: '13px' }}>{user?.name}</Typography>
                    <span className='text-[#e3f8e2]'><SubdirectoryArrowRightOutlinedIcon /></span>
                    <Typography sx={{ position: 'absolute', top: '23px', left: '30px' }}>{currentQuestion}</Typography>
                </Box>

                <Box sx={{ margin: '10px 0px' }}>
                    {
                        allRipley?.data?.map(queries => (
                            <Box sx={{ position: 'relative' }}>
                                <Typography sx={{ fontSize: '13px' }}>{queries.ripleyName} (HR)</Typography>
                                <span className='text-[#1DBF73]'><SubdirectoryArrowRightOutlinedIcon /></span>
                                <Typography sx={{ position: 'absolute', top: '23px', left: '30px' }}>{queries.ripley}</Typography>
                            </Box>
                        ))
                    }
                </Box>
                <input
                    className='question-input border border-1 border-[#e3f8e2] width-[40%] py-[10px] px-[15px rounded-[30px]'
                    type='text'
                    name='question'
                    placeholder='Ask you questions'
                    {...register("question")}
                />
                <button
                    className='p-[10px]'
                    type='submit'>
                    <IconButton
                        sx={{
                            border: '1px solid #1DBF73',
                            background: '#e3f8e2',
                            color: '#1DBF73',
                            '&:hover': {
                                background: '#1DBF73',
                                color: 'white',
                                transition: '.4s'
                            }
                        }}
                    >
                        <ArrowForwardOutlinedIcon className='' />
                    </IconButton>
                </button>
            </form>)}

            {/* ------ ripley section ------- */}

            {
                user?.role === 'Employer' && (
                    <form onSubmit={handleSubmit(handleRipley)}>
                        <Typography variant='h6'>General Q&A</Typography>
                        <Box sx={{ position: 'relative' }}>
                            <Typography sx={{ fontSize: '13px' }}>{user?.name}</Typography>
                            <span className='text-[#e3f8e2]'><SubdirectoryArrowRightOutlinedIcon /></span>
                            <Typography sx={{ position: 'absolute', top: '23px', left: '30px' }}>{currentRipley}</Typography>
                        </Box>
                        <Box sx={{ margin: '10px 0px' }}>
                            {
                                allQuestion?.data?.map(queries => (
                                    <Box sx={{ position: 'relative' }}>
                                        <Typography sx={{ fontSize: '13px' }}>{queries.name}</Typography>
                                        <span className='text-[#1DBF73]'><SubdirectoryArrowRightOutlinedIcon /></span>
                                        <Typography sx={{ position: 'absolute', top: '23px', left: '30px' }}>{queries.questions}</Typography>
                                    </Box>
                                ))
                            }
                        </Box>
                        <input
                            className='question-input border border-1 border-[#e3f8e2] width-[40%] py-[10px] px-[15px rounded-[30px]'
                            type='text'
                            name='ripley'
                            placeholder='write something...'
                            {...register("ripley")}
                        />
                        <button
                            className='p-3'
                            type='submit'>
                            <StyleButton title='Ripley' className='py-2 px-5 bg-[#e3f8e2] duration-300 text-[#1DBF73] hover:bg-[#1DBF73] hover:text-[white] border border-1 rounded-3xl' />
                        </button>
                    </form>
                )
            }
        </Box>
    );
};

export default JobDetails;