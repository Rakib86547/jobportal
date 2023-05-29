import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import '../../App.css';
import Education from '../Education/Education';
import WorkExperience from '../WorkExperience/WorkExperience';
import Skills from '../Skills/Skills';
import Personal from '../Personal/Personal';

const MyResume = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{height: '100vh'}}>
            <Typography variant='h4' textAlign={'center'} padding={'20px 10px'}>My Resume!</Typography>

            {/* ---- resume ------ */}
            <Box sx={{
                width: '100%',
                margin: 'auto',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                background: '#fff',
                borderRadius: '8px',
                padding: '15px'
            }}>
                <Box sx={{ width: '100%' }}>
                    <TabContext value={value}

                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="secondary tabs example"
                            centered={true}
                        >
                            <Tab value="1" label='Personal' />
                            <Tab value="2" label='Education' />
                            <Tab value="3" label='Work Experience' />
                            <Tab value="4" label='Skills' />
                        </Tabs>
                        <TabPanel value="1"><Personal /></TabPanel>
                        <TabPanel value="2"><Education /></TabPanel>
                        <TabPanel value="3"><WorkExperience /></TabPanel>
                        <TabPanel value="4"><Skills /></TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </Box>
    );
};

export default MyResume;