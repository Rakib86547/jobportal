import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useForm, useFieldArray, } from "react-hook-form";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import '../../App.css'
import StyleButton from '../../Components/Button/StyleButton';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCompanyProfileInfoQuery } from '../../features/auth/companyProfileApi';
import { applicationDeadline, experience, img, jobDescription, jobImg, jobSkills, jobTitle, jobType, keyResponsibilities, location, position, removeImage, removeJob, removeKey, removeSkill, salary, skillExperience } from '../../features/auth/jobSlice';
import { usePostJobMutation } from '../../features/auth/jobApi';
import Spinner from '../../Components/Spinner/Spinner';
import { toast } from 'react-hot-toast';

const PostJob = () => {
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm({

    });
    const user = useSelector((state) => state.auth.user);
    const email = user?.email
    const { data: companyInfo } = useGetCompanyProfileInfoQuery(email, { refetchOnMountOrArgChange: true });
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.job);
    const [image, setImage] = useState('');
    const [postJob, { isLoading }] = usePostJobMutation()

console.log(companyInfo)
    const {
        fields: responsibilitiesFields,
        append: responsibilitiesAppend,
        remove: responsibilitiesRemove
    } = useFieldArray({ control, name: "responsibilities" });
    const {
        fields: skillExperienceFields,
        append: skillExperienceAppend,
        remove: skillExperienceRemove
    } = useFieldArray({ control, name: "experience" });
    const {
        fields: technologyFields,
        append: technologyAppend,
        remove: technologyRemove
    } = useFieldArray({ control, name: "technology" });


    // handle job post-------
    const handleJobPost = (data) => {
        const jobsData = {
            email: user?.email,
            job_title: jobs?.job_title,
            // img: jobs?.img,
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
            replies: jobs?.replies,
            company_details: companyInfo?.data?.company_about,
            company_infortmation: [{
                industry: companyInfo?.data?.company_type,
                employer: companyInfo?.data?.team_size,
                found_in: companyInfo?.data?.est_since,
                email: companyInfo?.data?.email,
                website: companyInfo?.data?.company_website,
                location: companyInfo?.data?.country,
                company_name: companyInfo?.data?.company_name
            }]

        };

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_HOSTING_KEY2}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    dispatch(jobImg(data?.data?.url))
                    const img = data?.data?.url
                    const allJobs = {...jobsData, img};
                    postJob(allJobs)
                    // postJob(jobsData);
                    toast.success('Your Job Post Success');
                    reset()
                    setTimeout(() => {
                        dispatch(removeJob());
                        dispatch(removeKey());
                        dispatch(removeSkill());
                        // dispatch(removeImage())
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log(error.message);
                console.log(error)
            })
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
                                name='title'
                                {...register('title', {required: 'please insert your job title'})}
                                onChange={(e) => dispatch(position(e.target.value))}
                                className='input-box' />
                        </label>
                         {errors.title && <p className='text-red-500'>{errors.title?.message}</p>}
                        <Box sx={{ width: '100%', marginTop: '30px' }}>
                            <Typography variant='body' sx={{ marginBottom: '10px' }}>Job Description</Typography>
                            <textarea 
                            name="description"
                            placeholder='Write about your Job' className='w-full input-box' rows="10" 
                            {...register('description', {required: 'please insert your job details'})}
                            onChange={(e) => dispatch(jobDescription(e.target.value))}
                             />
                        </Box>
                        {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}
                    </Box>

                    <Box>
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            name='image'
                            accept='image/*'
                            {...register('image', {required: 'please choose an image'})}
                            onChange={(e) => setImage(e.target.files[0])}

                            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                            {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                    </Box>

                    <Stack spacing={1} direction="row" sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}>
                        <label htmlFor='name' label='category' className='label'> Category
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                name='category'
                                id='category'
                                defaultValue=''
                                {...register('category', {required: 'please select your category'})}
                                onChange={(e) => dispatch(jobTitle(e.target.value))}
                            >
                                <option value=''>Select Category</option>
                                <option value='Design'>Design</option>
                                <option value='Resource'>Resource</option>
                                <option value='Finance'>Finance</option>
                                <option value='Automotive'>Automotive</option>
                                <option value='SEO'>SEO</option>
                                <option value='Development'>Development</option>
                                <option value='Marketing'>Marketing</option>
                                <option value='Health'>Health</option>
                            </select>
                        {errors.category && <p className='text-red-500'>{errors.category?.message}</p>}
                        </label>

                        <label htmlFor='name' label='salary' className='label'> Salary Per Month
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                name='salary'
                                id='salary'
                                defaultValue=''
                                {...register('salary', {required: 'please select your salary'})}
                                onChange={(e) => dispatch(salary(e.target.value))}
                            >
                                <option value=''>Select Salary</option>
                                <option value='$200 - $300'>$200 - $300</option>
                                <option value='$300 - $400'>$300 - $400</option>
                                <option value='$400 - $500'>$400 - $500</option>
                                <option value='$500 - $600'>$500 - $600</option>
                                <option value='$700 - 800'>$700 - 800</option>
                                <option value='$1000 - $1200'>$1000 - $1200</option>
                            </select>
                        {errors.salary && <p className='text-red-500'>{errors.salary?.message}</p>}
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
                                name='applicationDeadline'
                                {...register('applicationDeadline', {required: 'please insert your deadline'})}
                                onChange={(e) => dispatch(applicationDeadline(e.target.value))}
                                className='input-box' />
                        {errors.applicationDeadline && <p className='text-red-500'>{errors.applicationDeadline?.message}</p>}
                        </label> 
                        {/* <br /> */}
                        
                        
                        <label htmlFor='name' label='location' className='label'> Location
                            <CountryDropdown
                                value={jobs?.location}
                                onChange={(e) => dispatch(location(e))}
                                className='input-box'
                                name='country'
                            />
                    {/* {errors.country && <p className='text-red-500'>{errors.country?.message}</p>} */}
                        </label>
                       {/* <br /> */}
                   
                    </Stack>
                    <Stack spacing={1} direction="row" sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}>
                        <label htmlFor='name' label='experience' className='label'> Experience
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                name='experiences'                                
                                defaultValue=''
                                {...register('experiences', {required: 'please select experience'})}
                                onChange={(e) => dispatch(experience(e.target.value))}
                            >
                                <option value=''>Select Experience</option>
                                <option value='Fresher'>Fresher</option>
                                <option value='Mid Level Experience'>Mid Level Experience</option>
                                <option value='Experienced'>Experienced</option>
                            </select>
                        {errors.experiences && <p className='text-red-500'>{errors.experiences?.message}</p>}
                        </label>

                        <label htmlFor='name' label='job-type' className='label'> Job Type
                            <select
                                className='input-box'
                                // value={company?.company_type}
                                name='type'
                                id='type'
                                defaultValue=''
                                {...register('type', {required: 'please select job type'})}
                                onChange={(e) => dispatch(jobType(e.target.value))}
                            >
                                <option value=''>Select Job Type</option>
                                <option value='Full Time'>Full Time</option>
                                <option value='Part Time'>Part Time</option>
                                <option value='Hourly'>Hourly</option>
                            </select>
                        {errors.type && <p className='text-red-500'>{errors.type?.message}</p>}
                        </label>
                    </Stack>

                    <Box>
                        <label htmlFor='name' label='responsibilities'> Responsibilities
                            <ul>
                                {responsibilitiesFields.map((item, index) => (
                                    <li key={item.id}>
                                        <input
                                            id='responsibilities'
                                            onBlur={(e) => dispatch(keyResponsibilities(e.target.value))}
                                            placeholder='responsibilities'
                                            className='control-input-input mb-5'                                            
                                        />
                                        <button
                                            className='border border-[#e3f8e2] rounded-full p-[5px] bg-red-400 hover:bg-red-600'
                                            type="button"
                                            onClick={() => responsibilitiesRemove(index)}><span><DeleteOutlinedIcon /></span></button>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className='add-button border rounded-full p-[5px] px-4 mt-1 hover:bg-[#1DBF73] hover:text-[#fff] duration-200'
                                type="button"
                                onClick={() => responsibilitiesAppend({ responsibilities: 'responsibilities' })}
                            >
                                <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Responsibilities</span>
                            </button>
                        </label>
                        {errors.responsibilities && <p className='text-red-500'>{errors.responsibilities?.message}</p>}
                        <br /> <br />

                        <label htmlFor='name' label='skill_experience'> Skill & Experience
                            <ul>
                                {skillExperienceFields.map((item, index) => (
                                    <li key={item.id}>
                                        <input
                                            id='experience'
                                            placeholder='skill & experience'
                                            className='control-input-input mb-5'
                                            onBlur={(e) => dispatch(skillExperience(e.target.value))}
                                            // name='skillExperience'
                                            // {...register('skillExperience', {required: 'please insert skill & experience'})}
                                        // {...register(`experience.${index}.value`, { required: 'Field is required' })} 
                                        />
                                        <button
                                            className='border border-[#e3f8e2] rounded-full p-[5px] bg-red-400 hover:bg-red-600'
                                            type="button"
                                            onClick={() => skillExperienceRemove(index)}><span><DeleteOutlinedIcon /></span></button>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className='add-button border rounded-full p-[5px] px-4 mt-1 hover:bg-[#1DBF73] hover:text-[#fff] duration-200'
                                type="button"
                                onClick={() => skillExperienceAppend({ experience: 'experience' })}
                            >
                                <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Skill & Experience</span>
                            </button>
                        </label>
                        {errors.skillExperience && <p className='text-red-500'>{errors.skillExperience?.message}</p>}

                        <br /> <br />
                        <label htmlFor='name' label='technology_skills'> Technology Skills
                            <ul>
                                {technologyFields.map((item, index) => (
                                    <li key={item.id}>
                                        <input
                                            id='technology'
                                            placeholder='technology skill' className='control-input-input mb-5'
                                            onBlur={(e) => dispatch(jobSkills(e.target.value))}
                                            // {...register('technology', {required: 'please insert job skills'})}
                                        // {...register(`technology.${index}.value`, { required: 'Field is required' })} 
                                        />
                                        <button
                                            className='border border-[#e3f8e2] rounded-full p-[5px] bg-red-400 hover:bg-red-600'
                                            type="button"
                                            onClick={() => technologyRemove(index)}><span><DeleteOutlinedIcon /></span></button>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className='add-button border rounded-full p-[5px] px-4 mt-1 hover:bg-[#1DBF73] hover:text-[#fff] duration-200'
                                type="button"
                                onClick={() => technologyAppend({ technology: 'technology' })}
                            >
                                <span><AddCircleOutlinedIcon className='text-[#e3f8e2]' /> Add Technology Skills</span>
                            </button>
                        </label>
                        {errors.technology && <p className='text-red-500'>{errors.technology?.message}</p>}
                    </Box>
                </Stack>
                <Box sx={{
                    marginTop: '25px',
                    textAlign: 'center'
                }}>
                    <StyleButton title={isLoading ? <Spinner /> : 'Post'} className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />
                </Box>
            </form>

        </Box>
    );
};

export default PostJob;