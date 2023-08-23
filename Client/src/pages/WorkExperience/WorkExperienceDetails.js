import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';
import EditWorkExperienceModal from './EditWorkExperienceModal';
import { useDeleteWorkMutation } from '../../features/auth/workApi';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const WorkExperienceDetails = ({ work }) => {
    const user = useSelector((state) => state.auth.user);
    const { job_title, company, start_date, end_date, description, _id: id } = work;
    const [workModalOpen, setWorkModalOpen] = useState(false);
    const [deleteWork] = useDeleteWorkMutation()
    const handleWorkModalOpen = () => (setWorkModalOpen(true));
    const handleClose = () => { setWorkModalOpen(false) };

    const handleDeleteWork = () => {
        deleteWork(id)
        toast.error(`${job_title} is Deleted`);
    };
    return (
        <Box>
            <Box sx={{ padding: '20px 10px', border: '1px dashed #e3f8e2', borderRadius: '8px', margin: '10px 0px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                    <Typography variant='h6' >{job_title}</Typography>
                    <Typography sx={{
                        marginLeft: '15px',
                        padding: '3px 20px',
                        color: '#1DBF73',
                        borderRadius: '30px',
                        background: '#e3f8e2'
                    }}>{start_date} to {end_date}</Typography>
                    {user?.role === 'Candidate' && <Link onClick={handleWorkModalOpen} ><span className='ml-[15px] text-[#1DBF73] rounded-[8px] px-[5px] py-[7px] bg-[#e3f8e2]'><BorderColorOutlinedIcon /></span></Link>}
                    {user?.role === 'Candidate' && <Link onClick={handleDeleteWork}><span className='ml-[15px] text-red-400 rounded-[8px] px-[5px] py-[7px] bg-[#e3f8e2]'><DeleteOutlinedIcon /></span></Link>}
                </Box>
                <Typography sx={{
                    marginLeft: '15px',
                    color: '#1DBF73'
                }}>{company}</Typography>
                <Typography sx={{ marginLeft: '15px' }}>{description}</Typography>
            </Box>
            {
                workModalOpen && <EditWorkExperienceModal open={workModalOpen} handleClose={handleClose} id={id} work={work} />
            }
        </Box>
    );
};

export default WorkExperienceDetails;