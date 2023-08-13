import { Box, Typography } from '@mui/material';
import React, {  } from 'react';
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux';
// import SkillsModal from './SkillsModal';
// import { useDeleteSkillMutation, useGetSkillsQuery } from '../../features/auth/skillsApi';
// import Loading from '../../Components/Loading/Loading';
// import SkillsDetails from './SkillsDetails';
// import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form'
import { addEmail, skillsAdd } from '../../features/auth/skillsSlice';
import { useGetSkillsQuery, usePostSkillsMutation } from '../../features/auth/skillsApi';
import SkillsDetails from './SkillsDetails';
const Skills = () => {    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({})
    const skill = useSelector((state) => state.skills);
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user);
    const [postData] = usePostSkillsMutation();
    const { data: skillData } = useGetSkillsQuery(user?.email);
    const handleSkill = (data) => {
        const email = user?.email
        dispatch(addEmail(email))
        const skillData = { email: email, skills: skill?.skills }
        postData(skillData)
        reset()
    }
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6'>Skills</Typography>
            </Box>
            <Box sx={{ padding: '20px 10px', border: '1px dashed #e3f8e2', borderRadius: '8px', margin: '10px 0px' }}>
                <Box className='skill'>
                    {
                        skillData?.data?.map(skill => <SkillsDetails key={skill._id} skill={skill} />)
                    }
                </Box>
            </Box>

            <Box sx={{
                maxWidth: '100%',
                textAlign: 'center'
            }}>
                <form
                    onSubmit={handleSubmit(handleSkill)}
                    className='flex items-center justify-center form'>
                    <input
                        type='text'
                        name='skill'
                        placeholder='add your skills required'
                        className=' border skill-input border-[#e3f8e2] rounded-[6px] px-[15px] py-[8px] min-w-[55%] mr-5 bg-[#e3f8e2] focus-visible:bg-white focus-visible:duration-300 focus-visible:outline-1 focus-visible:outline-[#1DBF73]'
                        {...register('skill', { required: 'add skill' })}
                    onChange={(e) => dispatch(skillsAdd(e.target.value))}
                    />

                    <button
                        className='duration-500 add-btn bg-[#1DBF73] hover:bg-[#00D749] text-[#fff] py-[8px] px-[25px] rounded'
                        type='submit'>Add</button>
                </form>
                {errors.skill && <p className='text-red-500 text-left'>{errors.skill?.message}</p>}
            </Box>
        </Box>
    );
};

export default Skills;