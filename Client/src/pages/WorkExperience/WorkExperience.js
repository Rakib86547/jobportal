import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AddExperienceModal from './AddExperienceModal';
import { useGetWorkQuery } from '../../features/auth/workApi';
import { useSelector } from 'react-redux';
import WorkExperienceDetails from './WorkExperienceDetails';

const WorkExperience = () => {
    const [open, setOpen] = useState(false);
    const user = useSelector((state) => state.auth.user)
    const { data } = useGetWorkQuery(user?.email);
    console.log('data', data)
    const handleOpen = () => setOpen(true);
    const handleClose = () => { setOpen(false) };
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6'>Work Experience</Typography>
                <Link onClick={handleOpen}>
                    <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Work</span>
                </Link>
            </Box>
            <Box>
                {
                    data?.data?.map(work => (<WorkExperienceDetails work={work} key={work._id} />))
                }               
            </Box>
            {
                open && <AddExperienceModal open={open} handleClose={handleClose} />
            }
        </Box>
    );
};

export default WorkExperience;