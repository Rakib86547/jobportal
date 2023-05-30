import { Box, Dialog, DialogActions, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import StyleButton from '../../Components/Button/StyleButton';
import Spinner from '../../Components/Spinner/Spinner';
import { editDegreeName, editDescription, editEndDate, editInstitute, editStartDate } from '../../features/auth/educationSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { useUpdateEducationMutation } from '../../features/auth/educationalApi';
import { toast } from 'react-hot-toast';

const EditEducationModal = ({ open, handleClose, id }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user)
    const education = useSelector((state) => state.education.editEducation);
    const [updateEducation, { isLoading, isSuccess }] = useUpdateEducationMutation()
    

    // ----- handle education update --------
    const handleUpdateEducation = () => {
        const data = {
            degree_name: education.edit_degree_name,
            start_date: education.edit_start_date,
            end_date: education.edit_end_date,
            institute_name: education.edit_institute_name,
            description: education.edit_description,
            email: user?.email,
            id: id
        }
        updateEducation(data)
    }
    if(isSuccess){
        toast.success('Successfully Update')
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
                    <Typography variant='h6'>Edit Your Education</Typography>
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
                                <label htmlFor='name' label='full-name'> Name of Degree <br />
                                    <input
                                        name='degree'
                                        onChange={(e) => dispatch(editDegreeName(e.target.value))}
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
                                <label htmlFor='name' label='full-name'> Name of Institute <br />
                                    <input
                                        name='institute'
                                        onChange={(e) => dispatch(editInstitute(e.target.value))}
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
                            className='w-full input-box' rows="5" placeholder='Write you Degree.....' />
                    </Box>
                    {/* <Typography>{errors ? <span className='text-red-400'>you have fil up the form</span> : undefined}</Typography> */}
                </DialogContent>
                <DialogActions
                    onClick={handleUpdateEducation}
                >
                    <StyleButton

                        title={isLoading ? <Spinner /> : 'Save Changes'} className='duration-500 w-full bg-[#1DBF73] hover:bg-[#00D749] text-[#fff] py-[10px] px-[20px] rounded' />
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default EditEducationModal;