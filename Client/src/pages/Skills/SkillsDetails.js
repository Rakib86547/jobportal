import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useDeleteSkillMutation } from '../../features/auth/skillsApi';
import { toast } from 'react-hot-toast';
import '../../App.css';

const SkillsDetails = ({ skill }) => {
    const [deleteSkill, result] = useDeleteSkillMutation()
    const DeleteSkill = (deleteData) => {
        deleteSkill(deleteData?._id);
        if (result?.isUninitialized) {
            toast.success(`${deleteData?.skills} is Delete`)
        }
    }
    return (
        <Box>
            <Box>
                <Typography sx={{
                    border: '1px solid #1DBF73',
                    borderRadius: '30px',
                    background: '#e3f8e2',
                    padding: '4px 10px',
                    margin: '5px 10px',
                    // display: 'inline-block'
                }}>
                    {skill?.skills}                   
                    <span
                        onClick={() => DeleteSkill(skill)}
                        className='cursor-pointer hover:text-red-400 duration-300 ml-2'><CloseIcon /></span>
                </Typography>
            </Box>
        </Box>
    );
};

export default SkillsDetails;