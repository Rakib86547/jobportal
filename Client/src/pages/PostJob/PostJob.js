import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useForm, useFieldArray, } from "react-hook-form";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import '../../App.css'
import StyleButton from '../../Components/Button/StyleButton';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCompanyProfileInfoQuery } from '../../features/auth/companyProfileApi';
import { applicationDeadline, experience, jobDescription, jobSkills, jobTitle, jobType, job_description, keyResponsibilities, location, position, salary, skillExperience } from '../../features/auth/jobSlice';

const PostJob = () => {
    const { register, control, handleSubmit, reset, trigger, setError, watch, formState: { errors } } = useForm({});
    const user = useSelector((state) => state.auth.user);
    const email = user?.email
    const { data: companyInfo } = useGetCompanyProfileInfoQuery(email, { refetchOnMountOrArgChange: true });
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.job)
    // console.log('job>> ', jobs)
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

    // handle job post-------
    const handleJobPost = (data) => {
       const exp = data?.experience?.map(ex => dispatch(skillExperience(ex.value)));
        data?.responsibilities?.map(res => dispatch(keyResponsibilities(res.value)));
        data?.technology?.map(tech => dispatch(jobSkills(tech.value)));
        console.log(exp)
        const jobsData = {
            job_title: jobs?.job_title,
            img: jobs?.img,
            location: jobs?.location,
            experience: jobs?.experience,
            salary: jobs?.salary,
            position: jobs?.position,
            job_description: jobs?.job_description,
            key_responsibilities: jobs?.key_responsibilities,
            skill_experience: jobs?.skill_experience,
            job_skills: jobs?.job_skills,
            application_deadline: jobs?.application_deadline,
            job_type: jobs?.job_type,
            applicants: jobs?.applicants,
            queries: jobs?.queries,
            replies: jobs?.replies
        };

        console.log(jobsData)
    }

    return (
        <Box sx={{
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            background: '#fff',
            borderRadius: ' 8px',
            padding: '15px'
        }}>
            <Typography variant='h4' sx={{ textAlign: 'center', paddingBottom: '15px' }}>Post A New Job!</Typography>
            <form onSubmit={handleSubmit(handleJobPost)}>
                <Stack spacing={3}>

                    <Box>
                        <label htmlFor='name' label='title'> Job Title
                            <input
                                // value={company?.est_since}
                                type='text'
                                placeholder='Title'
                                name='est-since'
                                onChange={(e) => dispatch(position(e.target.value))}
                                className='input-box' />
                        </label>

                        <Box sx={{ width: '100%', marginTop: '30px' }}>
                            <Typography variant='body' sx={{ marginBottom: '10px' }}>Job Description</Typography>
                            <textarea onChange={(e) => dispatch(jobDescription(e.target.value))} placeholder='Write about your Job' className='w-full input-box' rows="10" />
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
                        <label htmlFor='name' label='category' className='label'> Category
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                onChange={(e) => dispatch(jobTitle(e.target.value))}
                                name='category'
                            >
                                <option>Select Category</option>
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

                        <label htmlFor='name' label='salary' className='label'> Salary Per Month
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                onChange={(e) => dispatch(salary(e.target.value))}
                                name='salary'
                            >
                                <option>Select Salary</option>
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
                        <label htmlFor='name' label='application-deadline' className='label'> Application Deadline
                            <input
                                // value={company?.est_since}
                                type='date'
                                name='application-deadline'
                                onChange={(e) => dispatch(applicationDeadline(e.target.value))}
                                className='input-box' />
                        </label>

                        <label htmlFor='name' label='location' className='label'> Location
                            <CountryDropdown
                                value={jobs?.location}
                                onChange={(e) => dispatch(location(e))}
                                className='input-box'
                            />
                        </label>
                    </Stack>

                    <Stack spacing={1} direction="row" sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}>
                        <label htmlFor='name' label='experience' className='label'> Experience
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                onChange={(e) => dispatch(experience(e.target.value))}
                                name='experience'
                            >
                                <option>Select Experience</option>
                                <option value='Fresher'>Fresher</option>
                                <option value='Banking'>Mid Level Experience</option>
                                <option value='digital & Creative'>Experienced</option>
                            </select>
                        </label>

                        <label htmlFor='name' label='job-type' className='label'> Job Type
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                onChange={(e) => dispatch(jobType(e.target.value))}
                                name='job-type'
                            >
                                <option>Select Job Type</option>
                                <option value='Full Time'>Full Time</option>
                                <option value='Part Time'>Part Time</option>
                                <option value='Hourly'>Hourly</option>
                            </select>
                        </label>
                    </Stack>

                    <Box>
                        <label htmlFor='name' label='responsibilities'> Responsibilities
                            <ul>
                                {responsibilitiesFields.map((item, index) => (
                                    <li key={item.id}>
                                        <input onChange={(e) => dispatch(keyResponsibilities(e.target.value))} placeholder='responsibilities' className='control-input-input mb-5' {...register(`responsibilities.${index}.value`, { required: 'Field is required' })} />
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

                        <label htmlFor='name' label='skill_experience'> Skill & Experience
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
                        <label htmlFor='name' label='technology_skills'> Technology Skills
                            <ul>
                                {technologyFields.map((item, index) => (
                                    <li key={item.id}>
                                        <input
                                            name='technology'
                                            placeholder='technology skill' className='control-input-input mb-5'
                                            {...register(`technology.${index}.value`, { required: 'Field is required' })} />
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
                                onClick={() => technologyAppend({ technology: 'technology' })}
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