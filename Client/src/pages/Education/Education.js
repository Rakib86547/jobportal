import { Box, Typography } from '@mui/material';
import React, { } from 'react';
import { Link } from 'react-router-dom';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import EducationalModal from './EducationalModal';
import { useGetEducationQuery } from '../../features/auth/educationalApi';
import { useSelector } from 'react-redux';
import EducationDetails from './EducationDetails';

const Education = () => {
    const [open, setOpen] = React.useState(false);
    const user = useSelector((state) => state.auth.user);
    const email = user?.email
    const { data } = useGetEducationQuery(email)
    const handleOpen = () => setOpen(true);
    const handleClose = () => { setOpen(false) };

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6'>Education</Typography>
                <Link
                    onClick={handleOpen}
                >
                    <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Education</span>
                </Link>
            </Box>
            <Box>
                {
                    data?.data?.map(education => (<EducationDetails key={education._id} education={education} />))
                }
            </Box>
            <Box>
                {
                    open && <EducationalModal open={open} handleClose={handleClose} setOpen={setOpen} />
                }
            </Box>
        </Box>
    );
};

export default Education;