import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import StyleButton from '../../Components/Button/StyleButton';
import { Link, useNavigate } from 'react-router-dom';
import { editAge, editDescription, editJobTitle, editLanguage, editName, editPhone, editWebsite } from '../../features/auth/profileSlice';
import { useUpdateProfileMutation } from '../../features/auth/profileApi';
import Spinner from '../../Components/Spinner/Spinner';
import '../../App.css';



const EditProfile = () => {
    const data = useSelector((state) => state.profile);
    const user = useSelector((state) => state.auth.user)
    const [updateProfile, { isSuccess, isLoading }] = useUpdateProfileMutation();
    const [image, setImage] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate()
    if (isSuccess) {
        toast.success('Update is Success');
        navigate('/dashboard/profile')
    }


    const handleUpdateProfile = () => {
        const allEditData = {
            email: user?.email,
            name: data?.name,
            job_title: data?.job_title,
            website: data?.website,
            language: data?.language,
            phone: data?.phone,
            age: data?.age,
            description: data?.description
        }
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_HOSTING_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((imageData) => {
                if (imageData.success) {
                    const img = imageData?.data?.url;
                    const updateData = { ...allEditData, img };
                    updateProfile(updateData);
                }
            })
    }
    return (
        <Box>
            <Typography variant='h4' textAlign={'center'} padding={'20px 10px'}>Edit Profile!</Typography>
            <Stack sx={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                background: '#fff',
                borderRadius: ' 8px',
                padding: '15px'
            }
            }>
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
                            <label htmlFor='name' label='full-name'> Full Name <br />
                                <input
                                    name='name'
                                    onChange={(e) => dispatch(editName(e.target.value))}
                                    // value={user?.name}
                                    className='input-box' />
                            </label>
                            <br />
                            <label htmlFor='name' label='full-name'> Phone Number <br />
                                <input
                                    onChange={(e) => dispatch(editPhone(e.target.value))}
                                    className='input-box' />
                            </label>
                            <br />
                            <label htmlFor='name' label='full-name'> Website <br />
                                <input
                                    onChange={(e) => dispatch(editWebsite(e.target.value))}
                                    className='input-box' />
                            </label>
                        </Stack>
                    </Box>

                    <Box sx={{
                        width: '50%',
                        marginLeft: '5px'
                    }}>
                        <Stack spacing={1}>
                            <label htmlFor='name' label='full-name'> Job Title <br />
                                <input
                                    onChange={(e) => dispatch(editJobTitle(e.target.value))}
                                    className='input-box' />
                            </label>
                            <br />
                            <label htmlFor='name' label='full-name'> Languages <br />
                                <input
                                    onChange={(e) => dispatch(editLanguage(e.target.value))}
                                    className='input-box' />
                            </label>
                            <br />
                            <label htmlFor='name' label='full-name'>  Age <br />
                                <input
                                    onChange={(e) => dispatch(editAge(e.target.value))}
                                    className='input-box' />
                            </label>
                        </Stack>
                    </Box>

                </Box>

                <Box>
                    <label htmlFor="image">Image</label>

                    <input
                        type="file"
                        name='image'
                        accept='image/*'
                        onChange={(e) => setImage(e.target.files[0])}
                        className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                </Box>


                <Box sx={{ width: '100%' }}>
                    <Typography variant='body1'>Description</Typography>
                    <textarea
                        onChange={(e) => dispatch(editDescription(e.target.value))}
                        className='w-full input-box' rows="10" placeholder='text area' />
                </Box>

                <Box sx={{ padding: '20px 0', textAlign: 'center' }}>
                    <Box sx={{display: 'inline-block'}}>
                        <Link
                            // onClick={() => updateProfile(data)}
                            onClick={handleUpdateProfile}
                        >
                            <StyleButton title={isLoading ? <Spinner /> : 'Save'} className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />
                        </Link>
                    </Box>

                </Box>
            </Stack>
        </Box>
    );
};

export default EditProfile;