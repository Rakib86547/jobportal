import { Box, Dialog, DialogActions, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import StyleButton from '../../Components/Button/StyleButton';
import { useForm } from "react-hook-form";
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { degreeName, description, endDate, instituteName, startDate } from '../../features/auth/educationSlice';
import { usePostEducationMutation } from '../../features/auth/educationalApi';
import { toast } from 'react-hot-toast';
import Spinner from '../../Components/Spinner/Spinner';



const EducationalModal = ({ open, handleClose, setOpen }) => {
    const { register } = useForm();
    const dispatch = useDispatch();
    const education = useSelector((state) => state.education.educations);
    const user = useSelector((state) => state.auth.user);
    const [postEducation, { isLoading, isSuccess }] = usePostEducationMutation();
    const handlePostEducation = () => {
        const data = {
            degree_name: education.degree_name,
            start_date: education.start_date,
            end_date: education.end_date,
            institute_name: education.institute_name,
            description: education.description,
            email: user?.email
        };
        postEducation(data)       
    }
    if (isSuccess) {
        toast.success('Education Added Success');
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
                    <Typography variant='h6'>Education</Typography>
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
                                        {...register("degree", { required: true })}
                                        onChange={(e) => dispatch(degreeName(e.target.value))}
                                        className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> End of Date <br />
                                    <input
                                        name='end'
                                        type='date'
                                        // {...register("end")}
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
                                        {...register("start", { required: true })}
                                        onChange={(e) => dispatch(startDate(e.target.value))}
                                        className='input-box' />
                                </label>
                                <br />
                                <label htmlFor='name' label='full-name'> Name of Institute <br />
                                    <input
                                        name='institute'
                                        {...register("institute", { required: true })}
                                        onChange={(e) => dispatch(instituteName(e.target.value))}
                                        className='input-box' />
                                </label>
                            </Stack>
                        </Box>

                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography variant='body1'>Description</Typography>
                        <textarea
                            name='description'
                            {...register('description', { required: true })}
                            onChange={(e) => dispatch(description(e.target.value))}
                            className='w-full input-box' rows="5" placeholder='Write you Degree.....' />
                    </Box>
                    {/* <Typography>{errors ? <span className='text-red-400'>you have fil up the form</span> : undefined}</Typography> */}
                </DialogContent>
                <DialogActions
                onClick={handlePostEducation}
                >
                    <StyleButton
                       
                        title={isLoading ? <Spinner /> : 'Save Changes'} className='duration-500 w-full bg-[#1DBF73] hover:bg-[#00D749] text-[#fff] py-[10px] px-[20px] rounded' />
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default EducationalModal;