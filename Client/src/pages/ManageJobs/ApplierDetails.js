import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetUpdateUserQuery } from '../../features/auth/profileApi';
import { TabContext, TabPanel } from '@mui/lab';
import EducationInfo from './EducationInfo';
import WorkExperienceInfo from './WorkExperienceInfo';
import SkillsInfo from './SkillsInfo';
import StyleButton from '../../Components/Button/StyleButton';
import '../../App.css'

const ApplierDetails = () => {
    const { email } = useParams();
    const { data: profileInfo } = useGetUpdateUserQuery(email);
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
            background: '#fff',
            padding: '15px',
            borderRadius: '8px',
            margin: 'auto'
        }}>
            <Box className='grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1'>
                <Box>
                    <figure className='lg:w-[70%] md:w-full sm:w-full h-full'><img className='h-full' src={profileInfo?.data?.img} alt={profileInfo?.data?.name} /></figure>
                </Box>

                <Box className='lg:ml-[-25%] md:ml-0 sm:ml-0 profile'>
                    <Box className='message' sx={{ 
                        borderBottom: '1px solid #e2e8f0', 
                        paddingBottom: '15px', 
                        display: 'flex',
                        justifyContent: 'space-between',                                             
                        }}                        
                        >
                        <Box>
                            <Typography variant='h4'>{profileInfo?.data?.name}</Typography>
                            <Typography>Expert: {profileInfo?.data?.job_title}</Typography>
                            <Typography>Email: {profileInfo?.data?.email}</Typography>
                            <Typography>Phone: {profileInfo?.data?.phone}</Typography>
                        </Box>

                        <Box className='message2'                    
                        >

                            <StyleButton title='Message Now' className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[40px] rounded search-btn text-white' />
                        </Box>
                    </Box>

                    <Box sx={{ marginTop: '15px' }}>
                        <Typography variant='h6'>About</Typography>
                        <Typography>{profileInfo?.data?.description}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ borderTop: '1px solid #e2e8f0', marginTop: '15px', padding: '10px 0px' }}>
                <Box sx={{ width: '100%' }}>
                    <TabContext value={value}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="secondary tabs example"
                            centered={true}
                        >
                            <Tab value="1" label='Education' />
                            <Tab value="2" label='Work Experience' />
                            <Tab value="3" label='Skills' />
                        </Tabs>
                        <TabPanel value="1"><EducationInfo /></TabPanel>
                        <TabPanel value="2"><WorkExperienceInfo /></TabPanel>
                        <TabPanel value="3"><SkillsInfo /></TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </Box>
    );
};

export default ApplierDetails;