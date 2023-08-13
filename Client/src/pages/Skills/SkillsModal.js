// import { Box, Dialog, DialogActions, DialogContent, IconButton, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import StyleButton from '../../Components/Button/StyleButton';
// import { useFieldArray, useForm } from 'react-hook-form';
// import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
// import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import '../../App.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { removeSkill, skills } from '../../features/auth/skillsSlice';
// import { usePostSkillsMutation } from '../../features/auth/skillsApi';
// import { toast } from 'react-hot-toast'
// const SkillsModal = ({ open, handleClose, setOpen }) => {
//     const { control, handleSubmit, reset, } = useForm({
//         // defaultValues: {}; you can populate the fields by this attribute 
//     });
//     const { fields, append, remove } = useFieldArray({
//         control,
//         name: "skills"
//     });

//     const dispatch = useDispatch();
//     const skillsData = useSelector((state) => state.skills);
//     const user = useSelector(((state) => state.auth.user));
//     const [postSkills, { data: skillResult }] = usePostSkillsMutation()

//     console.log('data > ', skillResult?.data?.acknowledged)

//     const handleSkill = (data) => {
//         const skillData = {
//             email: user?.email,
//             skills: skillsData?.skills
//         };
//         postSkills(skillData);
//         // reset()
//     }
//     if (skillResult?.data?.acknowledged) {
//         return toast.success('Your Skills Added Successfully')
//     }

//     if (skillResult?.data?.acknowledged) {
//         return dispatch(removeSkill())
//     }

//     return (
//         <Box>
//             <Dialog open={open}>
//                 <Box sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     borderBottom: '2px dashed #e3f8e2',
//                     padding: '0 24px'
//                 }}>
//                     <Typography variant='h6'>Education</Typography>
//                     <IconButton onClick={handleClose} ><span><ClearOutlinedIcon /></span></IconButton>
//                 </Box>

//                 <DialogContent>

//                     <form onSubmit={handleSubmit(handleSkill)}>
//                         <ul>
//                             {fields.map((item, index) => (
//                                 <li key={item.id}>
//                                     <input name='skills' required placeholder='your skills' className='control-input control-input-23 mb-5'
//                                         onBlur={(e) => dispatch(skills(e.target.value))}
//                                     />
//                                     <button
//                                         className='border border-[#e3f8e2] rounded-full p-[5px] bg-red-400'
//                                         type="button"
//                                         onClick={() => remove(index)}><span><DeleteOutlinedIcon /></span></button>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button
//                             className='add-button border rounded-full p-[5px] px-4 hover:bg-[#1DBF73] hover:text-[#fff] duration-200'
//                             type="button"
//                             onClick={() => append({ skills: 'skills' })}
//                         >
//                             <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Skills</span>
//                         </button>

//                     </form>
//                 </DialogContent>
//                 <DialogActions
//                     onClick={handleSkill}
//                 >
//                     <StyleButton

//                         title='Add Skills' className='duration-500 w-full bg-[#1DBF73] hover:bg-[#00D749] text-[#fff] py-[10px] px-[20px] rounded' />
//                 </DialogActions>
//             </Dialog>
//         </Box>
//     );
// };

// export default SkillsModal;