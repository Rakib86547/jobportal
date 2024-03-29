import React, { } from 'react';
import Box from '@mui/material/Box';
import StyleButton from '../../Components/Button/StyleButton';
import { IconButton, Link, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDeleteFileMutation, useFileUploadMutation, useGetFileQuery } from '../../features/auth/fileApi';
import { useSelector } from 'react-redux';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import '../../App.css';

const CVManager = () => {
    const user = useSelector((state) => state.auth.user);
    const email = user?.email
    const [filesUpload] = useFileUploadMutation();
    const [deleteFile] = useDeleteFileMutation();
    const { currentData } = useGetFileQuery(email);
    const handleFileUpload = (e) => {
        e.preventDefault()
        const file = e.target.file.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('email', email)
        filesUpload(formData)
        e.target.reset()
    }
    // ---- handle delete file -----
    const handleDeleteFIle = () => {
        const id = currentData?.data?._id
        deleteFile(id)
    }
    const openLinkInNewTab = (pdf) => {
        const newTab = window.open(pdf, '_blank', 'noopener,noreferrer');
        if (newTab) newTab.opener = null;
    }
    return (
        <Box sx={{}}>
            <Typography variant='h4' textAlign={'center'} padding={'20px 10px'}>CV Manager!</Typography>
            <Box sx={{
                width: '100%',
                margin: 'auto',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                background: '#fff',
                borderRadius: '8px',
                padding: '15px'
            }}>
                <Box sx={{
                    border: '2px dashed #e3f8e2',
                    padding: '85px 10px',
                    borderRadius: '8px',
                    '&:hover': { border: '2px dashed #1DBF73', borderRadius: '8px' }
                }}>
                    <form
                        className='text-center'
                        onSubmit={handleFileUpload}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-8 text-gray-500 dark:text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                        <Typography>Upload your pdf file only</Typography>
                        <input
                            className='pl-[85px] mt-[28px] text-sm text-gray-600 bg-white file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 focus:outline-none'
                            name='file'
                            type='file'
                        />
                        <StyleButton title='Upload' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[12px] px-[70px] mt-7 rounded search-btn text-white' />
                        {/* <button type='submit' value='Upload'>Upload</button> */}
                    </form>
                </Box>
                {currentData?.data?._id && <Box sx={{
                    padding: '15px',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    border: '1px dashed #1DBF73',
                    borderRadius: '8px',
                    maxWidth: '250px',
                    minHeight: '150px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '30px 0px',
                    position: 'relative',
                    background: '#e3f8e2',
                }}>
                    <Typography>{currentData?.data?.filename}</Typography>
                    <IconButton
                        onClick={handleDeleteFIle}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                        }}>
                        <DeleteOutlineOutlinedIcon sx={{ color: 'red' }} title='Delete' />
                    </IconButton>

                    {/* <IconButton sx={{
                        position: 'absolute',
                        top: -8,
                        right: 30,
                    }}>
                        <Link onClick={() => openLinkInNewTab(`${currentData?.data?.path}`)}><VisibilityOutlinedIcon className='cursor-pointer' title='See' /></Link>
                    </IconButton> */}
                </Box>}
            </Box>

            {/* -------- pdf file here ------- */}

        </Box>
    );
};

export default CVManager;