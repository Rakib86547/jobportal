import { Box, Dialog, DialogActions, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import StyleButton from '../../Components/Button/StyleButton';
import Spinner from '../../Components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { clearEditWork, editCompany, editDescription, editEndDate, editJobTitle, editStartDate } from '../../features/auth/workSlice';
import { useUpdateWorkMutation } from '../../features/auth/workApi';
import { toast } from 'react-hot-toast';

const EditWorkExperienceModal = ({ open, handleClose, id, work: workData }) => {
    const work = useSelector((state) => state.work.editWork);
    const [updateWork, { isLoading }] = useUpdateWorkMutation();
    const dispatch = useDispatch();
    const handleUpdateWork = () => {
        const data = {
            job_title: work.job_title,
            company: work.company,
            start_date: work.start_date,
            end_date: work.end_date,
            description: work.description,
            id: id
        }
        updateWork(data)
        toast.success('Update Success');
        dispatch(clearEditWork())
    }
    return (
        <Box className='edit-edcation'>
            <Dialog open={open}>
                <Box className='edit-education' sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #000',
                    padding: '0 24px'
                }}>
                    <Typography variant='h6'>Edit Your Work Experience</Typography>
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
                                        onChange={(e) => dispatch(editJobTitle(e.target.value))}
                                        className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> End of Date <br />
                                    <input
                                        name='end'
                                        type='date'
                                        onChange={(e) => dispatch(editEndDate(e.target.value))}
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
                                        onChange={(e) => dispatch(editStartDate(e.target.value))}
                                        className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> Company <br />
                                    <input
                                        name='institute'
                                        onChange={(e) => dispatch(editCompany(e.target.value))}
                                        className='input-box' />
                                </label>
                            </Stack>
                        </Box>

                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography variant='body1'>Description</Typography>
                        <textarea
                            name='description'
                            onChange={(e) => dispatch(editDescription(e.target.value))}
                            className='w-full input-box' rows="5" placeholder='Write About your Job.....' />
                    </Box>
                </DialogContent>
                <DialogActions
                    onClick={handleUpdateWork}
                >
                    <StyleButton
                        title={isLoading ? <Spinner /> : 'Save Changes'} className='duration-500 w-full bg-[#1DBF73] hover:bg-[#00D749] text-[#fff] py-[10px] px-[20px] rounded' />
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default EditWorkExperienceModal;