import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const WorkExperience = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6'>Work Experience</Typography>
                <Link>
                    <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Work</span>
                </Link>
            </Box>
            <Box>
                <Box sx={{ padding: '20px 0px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                        <Typography variant='h6' >Product Designer</Typography>
                        <Typography sx={{
                            marginLeft: '15px',
                            padding: '3px 20px',
                            color: '#1DBF73',
                            borderRadius: '30px',
                            background: '#e3f8e2'
                        }}>2012-2014</Typography>
                        <Link ><span className='ml-[15px] text-[#1DBF73] rounded-[8px] px-[5px] py-[7px] bg-[#e3f8e2]'><BorderColorOutlinedIcon /></span></Link>
                        <Link><span className='ml-[15px] text-red-400 rounded-[8px] px-[5px] py-[7px] bg-[#e3f8e2]'><DeleteOutlinedIcon /></span></Link>
                    </Box>
                    <Typography sx={{
                        marginLeft: '15px',
                        color: '#1DBF73'
                    }}>Spotify Inc.</Typography>
                    <Typography sx={{ marginLeft: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante
                        ipsum primis in faucibus.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default WorkExperience;