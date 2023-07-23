import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useForm, useFieldArray, } from "react-hook-form";
import '../../App.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Skills = () => {
    const { register, control, handleSubmit, reset, trigger, setError, formState: { errors } } = useForm({
        // defaultValues: {}; you can populate the fields by this attribute 
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "skills"
    });

    const handleSkill = (data) => {
        console.log('data', data)
        data.skills.map(i => console.log(i.value))
    }
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6'>Skills</Typography>
                {/* <Link>
                    <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Skills</span>
                </Link> */}
            </Box>
            {/* <Box>
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
            </Box> */}

            <form onSubmit={handleSubmit(handleSkill)}>
                <ul>
                    {fields.map((item, index) => (
                        <li key={item.id}>
                            <input name='skills' className='control-input mb-5' {...register(`skills.${index}.value`, { required: 'Field is required' })} />
                            <button 
                            className='border border-[#e3f8e2] rounded-full p-[5px] bg-red-400' 
                            type="button" 
                            onClick={() => remove(index)}><span><DeleteOutlinedIcon /></span></button>
                        </li>
                    ))}
                </ul>
                <button
                className='add-button border rounded-full p-[5px] px-4'
                    type="button"
                    onClick={() => append({ skills: 'skills' })}
                >
                    <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Skills</span>
                </button>
                <button type='submit'> add</button>
            </form>
        </Box>
    );
};

export default Skills;