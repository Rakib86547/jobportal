import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const Skills = () => {
    return (
        <Box>
             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6'>Skills</Typography>
                <Link>
                    <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Skills</span>
                </Link>
            </Box>
            <Box>
                <Typography sx={{
                    position: 'relative',
                    display: 'inline-block',
                    padding: '8px 20px',
                    borderRadius: '30px',
                    marginRight: '10px',
                    background: '#e3f8e2',
                    color: '#1DBF73'
                }}>Node.js <Link><span className='cursor-pointer text-red-400'><ClearOutlinedIcon /></span></Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Skills;