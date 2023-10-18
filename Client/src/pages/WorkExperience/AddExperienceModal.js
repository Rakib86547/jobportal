import { Box, Dialog, DialogActions, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import React from 'react';
import StyleButton from '../../Components/Button/StyleButton';
import { useDispatch, useSelector } from 'react-redux';
import { company, description, endDate, jobTitle, startDate } from '../../features/auth/workSlice';
import { usePostWorkMutation } from '../../features/auth/workApi';
import { toast } from 'react-hot-toast';
import Spinner from '../../Components/Spinner/Spinner';

const AddExperienceModal = ({ open, handleClose }) => {
    const user = useSelector((state) => state.auth.user)
    const work = useSelector((state) => state.work.addWork);
    const [postWork, { isSuccess, isLoading }] = usePostWorkMutation()
    const dispatch = useDispatch();
    const handleWorkExperience = () => {
        const data = {
            job_title: work.job_title,
            company: work.company,
            start_date: work.start_date,
            end_date: work.end_date,
            description: work.description,
            email: user?.email
        }
        postWork(data)
    };
    if(isSuccess){
        toast.success('Your Work Experience is Added');
        // dispatch(clearWork())
    }
    return (
        <Box>
            <Dialog open={open}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '2px dashed #e3f8e2',
                    padding: '0 24px'
                }}>
                    <Typography variant='h6'>Add Your Work Experience</Typography>
                    <IconButton onClick={handleClose} ><span><ClearOutlinedIcon /></span></IconButton>
                </Box>

                <DialogContent>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '20px 10px'
                    }}>
                        <Box sx={{
                            width: '50%',
                            marginRight: '5px'
                        }}>
                            <Stack spacing={1}>
                                <label htmlFor='name' label='full-name'> Job Title <br />
                                    <input
                                        name='degree'
                                        onChange={(e) => dispatch(jobTitle(e.target.value))}
                                        className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> End of Date <br />
                                    <input
                                        name='end'
                                        type='date'
                                        onChange={(e) => dispatch(endDate(e.target.value))}
                                        className='input-box' />
                                </label>
                            </Stack>
                        </Box>

                        <Box sx={{
                            width: '50%',
                            marginLeft: '5px'
                        }}>
                            <Stack spacing={1}>
                                <label htmlFor='name' label='full-name'> Start Date <br />
                                    <input
                                        name='start'
                                        type='date'
                                        onChange={(e) => dispatch(startDate(e.target.value))}
                                        className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> Company <br />
                                    <input
                                        name='institute'
                                        onChange={(e) => dispatch(company(e.target.value))}
                                        className='input-box' />
                                </label>
                            </Stack>
                        </Box>

                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography variant='body1'>Description</Typography>
                        <textarea
                            name='description'
                            onChange={(e) => dispatch(description(e.target.value))}
                            className='w-full input-box' rows="5" placeholder='Write you Degree.....' />
                    </Box>
                    {/* <Typography>{errors ? <span className='text-red-400'>you have fil up the form</span> : undefined}</Typography> */}
                </DialogContent>
                <DialogActions
                    onClick={handleWorkExperience}
                >
                    <StyleButton
                        title={isLoading ? <Spinner /> : 'Save Changes'} className='duration-500 w-full bg-[#1DBF73] hover:bg-[#00D749] text-[#fff] py-[10px] px-[20px] rounded' />
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AddExperienceModal;