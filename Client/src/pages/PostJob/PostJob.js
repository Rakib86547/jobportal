import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useForm, useFieldArray, } from "react-hook-form";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import '../../App.css'
import StyleButton from '../../Components/Button/StyleButton';

const PostJob = () => {
    const { register, control, handleSubmit, reset, trigger, setError, formState: { errors } } = useForm({
        // defaultValues: {}; you can populate the fields by this attribute 
    });
    const { 
        fields: responsibilitiesFields, 
        append: responsibilitiesAppend, 
        remove: responsibilitiesRemove
     } = useFieldArray({
        control,
        name: "responsibilities"
    });
    const { 
       fields: skillExperienceFields, 
       append: skillExperienceAppend, 
       remove: skillExperienceRemove } = useFieldArray({
        control,
        name: "experience"
    });
    const { 
       fields: technologyFields, 
       append: technologyAppend, 
       remove: technologyRemove } = useFieldArray({
        control,
        name: "technology"
    });
  
    return (
        <Box sx={{
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            background: '#fff',
            borderRadius: ' 8px',
            padding: '15px'
        }}>
            <Typography variant='h4' sx={{ textAlign: 'center', paddingBottom: '15px' }}>Post A New Job!</Typography>
            <form>
                <Stack spacing={3}>

                    <Box>
                        <label htmlFor='name' label='est-since'> Job Title
                            <input
                                // value={company?.est_since}
                                type='text'
                                placeholder='Title'
                                name='est-since'
                                // onChange={(e) => dispatch(estSince(e.target.value))}
                                className='input-box' />
                        </label>

                        <Box sx={{ width: '100%', marginTop: '30px' }}>
                            <Typography variant='body' sx={{ marginBottom: '10px' }}>Job Description</Typography>
                            <textarea placeholder='Write about your Job' className='w-full input-box' rows="10" />
                        </Box>
                    </Box>

                    <Box>
                        <label htmlFor="image">Image</label>

                        <input
                            type="file"
                            name='image'
                            accept='image/*'
                            // onChange={(e) => setImage(e.target.files[0])}
                            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                    </Box>

                    <Stack spacing={1} direction="row" sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}>
                        <label htmlFor='name' label='full-name' className='label'> Category
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                // onChange={(e) => dispatch(companyType(e.target.value))}
                                name='company-type'
                            >
                                <option value='Design'>Design</option>
                                <option value='Resource'>Resource</option>
                                <option value='Finance'>Finance</option>
                                <option value='Automotive'>Automotive</option>
                                <option value='SEO'>SEO</option>
                                <option value='Development'>Development</option>
                                <option value='Marketing'>Marketing</option>
                                <option value='Health'>Health</option>
                            </select>
                        </label>

                        <label htmlFor='name' label='full-name' className='label'> Salary Per Month
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                // onChange={(e) => dispatch(companyType(e.target.value))}
                                name='company-type'
                            >
                                <option value='$250'>$250</option>
                                <option value='$300'>$300</option>
                                <option value='$400'>$400</option>
                                <option value='$500'>$500</option>
                                <option value='$700'>$700</option>
                                <option value='$1000'>$1000</option>
                            </select>
                        </label>
                    </Stack>

                    <Stack spacing={1} direction="row" sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}>
                        <label htmlFor='name' label='est-since' className='label'> Application Deadline
                            <input
                                // value={company?.est_since}
                                type='date'
                                name='est-since'
                                // onChange={(e) => dispatch(estSince(e.target.value))}
                                className='input-box' />
                        </label>

                        <label htmlFor='name' label='country' className='label'> Location
                            <CountryDropdown
                                // value={company?.country}
                                // onChange={(e) => dispatch(country(e))}
                                className='input-box'
                            />
                        </label>
                    </Stack>

                    <Stack spacing={1} direction="row" sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}>
                        <label htmlFor='name' label='complete-address' className='label'> Experience
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                // onChange={(e) => dispatch(companyType(e.target.value))}
                                name='company-type'
                            >
                                <option>Fresher</option>
                                <option value='Banking'>Mid Level Experience</option>
                                <option value='digital & Creative'>Experienced</option>
                            </select>
                        </label>

                        <label htmlFor='name' label='complete-address' className='label'> Apply Deadline
                            <input
                                // value={company?.address}
                                name='complete-address'
                                // onChange={(e) => dispatch(completeAddress(e.target.value))}
                                className='input-box' />
                        </label>
                    </Stack>

                    <Box>
                        <label htmlFor='name' label='est-since'> Responsibilities
                            <ul>
                                {responsibilitiesFields.map((item, index) => (
                                    <li key={item.id}>
                                        <input placeholder='responsibilities' className='control-input-input mb-5' {...register(`responsibilities.${index}.value`, { required: 'Field is required' })} />
                                        <button
                                            className='border border-[#e3f8e2] rounded-full p-[5px] bg-red-400'
                                            type="button"
                                            onClick={() => responsibilitiesRemove(index)}><span><DeleteOutlinedIcon /></span></button>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className='add-button border rounded-full p-[5px] px-4 mt-1'
                                type="button"
                                onClick={() => responsibilitiesAppend({ responsibilities: 'responsibilities' })}
                            >
                                <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Responsibilities</span>
                            </button>
                        </label>
<br /> <br />
                        <label htmlFor='name' label='est-since'> Skill & Experience
                            <ul>
                                {skillExperienceFields.map((item, index) => (
                                    <li key={item.id}>
                                        <input placeholder='skill & experience' className='control-input-input mb-5' {...register(`experience.${index}.value`, { required: 'Field is required' })} />
                                        <button
                                            className='border border-[#e3f8e2] rounded-full p-[5px] bg-red-400'
                                            type="button"
                                            onClick={() => skillExperienceRemove(index)}><span><DeleteOutlinedIcon /></span></button>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className='add-button border rounded-full p-[5px] px-4 mt-1'
                                type="button"
                                onClick={() => skillExperienceAppend({ experience: 'experience' })}
                            >
                                <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Skill & Experience</span>
                            </button>
                        </label>
<br /> <br />
                        <label htmlFor='name' label='est-since'> Technology Skills
                            <ul>
                                {technologyFields.map((item, index) => (
                                    <li key={item.id}>
                                        <input placeholder='technology skill' className='control-input-input mb-5' {...register(`experience.${index}.value`, { required: 'Field is required' })} />
                                        <button
                                            className='border border-[#e3f8e2] rounded-full p-[5px] bg-red-400'
                                            type="button"
                                            onClick={() => technologyRemove(index)}><span><DeleteOutlinedIcon /></span></button>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className='add-button border rounded-full p-[5px] px-4 mt-1'
                                type="button"
                                onClick={() => technologyAppend({ experience: 'technology' })}
                            >
                                <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Technology Skills</span>
                            </button>
                        </label>
                    </Box>
                </Stack>
                <Box sx={{
                    marginTop: '25px',
                    textAlign: 'center'
                }}>
                    <StyleButton title='Post' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />
                </Box>
            </form>
        </Box>
    );
};

export default PostJob;