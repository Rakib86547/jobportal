import React, { useState } from 'react';
import Box from '@mui/material/Box';
import StyleButton from '../../Components/Button/StyleButton';
import { Typography } from '@mui/material';
import { useFileUploadMutation } from '../../features/auth/fileApi';

const CVManager = () => {

    const [fileUpload] = useFileUploadMutation()
    const handleFileUpload = (e) => {
        e.preventDefault()
        console.log(e.target.file.files[0])
        const file = e.target.file.files[0];
        const formData = new FormData();
        formData.append('file', file);
        fileUpload(formData)
        console.log("formData", formData)
    }
    return (
        <Box sx={{ height: '85vh' }}>
            <Typography variant='h4' textAlign={'center'} padding={'20px 10px'}>CV Manager!</Typography>
            <Box sx={{
                width: '100%',
                margin: 'auto',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                background: '#fff',
                borderRadius: '8px',
                padding: '15px'
            }}>
                <form onSubmit={handleFileUpload}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    <input
                        name='file'
                        type='file'
                        // {...register("file")}
                        // onChange={(e) => setSelectFile(e.target.files[0])}
                    />
                <button type='submit' value='Upload'>Upload</button>
                </form>
            </Box>
        </Box>
    );
};

export default CVManager;