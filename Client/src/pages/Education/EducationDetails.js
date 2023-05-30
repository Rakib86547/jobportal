import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditEducationModal from './EditEducationModal';
import { useDeleteEducationMutation } from '../../features/auth/educationalApi';
import { toast } from 'react-hot-toast';

const EducationDetails = ({ education }) => {
    const [editOpen, setEditOpen] = useState(false);
    const [deleteEducation] = useDeleteEducationMutation();


    const handleEditModalOpen = () => (setEditOpen(true));
    const handleClose = () => { setEditOpen(false) };


    // ----- handle delete education -----
    const handleDeleteEducation = () => {
        deleteEducation(education?._id);
        toast.error(`${education?.degree_name} is Deleted`);
    }
    return (
        <Box>
            <Box sx={{ padding: '20px 10px', border: '1px dashed #e3f8e2', borderRadius: '8px', margin: '10px 0px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                    <Typography variant='h6' >{education.degree_name}</Typography>
                    <Typography sx={{
                        marginLeft: '15px',
                        padding: '3px 20px',
                        color: '#1DBF73',
                        borderRadius: '30px',
                        background: '#e3f8e2'
                    }}>{education.start_date} to {education.end_date}</Typography>
                    <Link onClick={handleEditModalOpen} ><span className='ml-[15px] text-[#1DBF73] rounded-[8px] px-[5px] py-[7px] bg-[#e3f8e2]'><BorderColorOutlinedIcon /></span></Link>
                    <Link onClick={handleDeleteEducation}><span className='ml-[15px] text-red-400 rounded-[8px] px-[5px] py-[7px] bg-[#e3f8e2]'><DeleteOutlinedIcon /></span></Link>
                </Box>
                <Typography sx={{
                    marginLeft: '15px',
                    color: '#1DBF73'
                }}>{education.institute_name}</Typography>
                <Typography sx={{ marginLeft: '15px' }}>{education.description}</Typography>
            </Box>
            {
                editOpen && <EditEducationModal open={editOpen} handleClose={handleClose} id={education?._id} />
            }
        </Box>
    );
};

export default EducationDetails;