import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, Dialog, DialogActions, Tab } from '@mui/material';
import { useState } from 'react';
// import { TabContext, TabList, TabPanel } from '@mui/lab'
import { RxCrossCircled } from 'react-icons/rx'
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import '../../../App.css';



const LoginSignup = ({ open, handleClose }) => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box >
            <Dialog
                open={open}
                onClose={handleClose}
               
            >
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList 
                            onChange={handleChange} 
                            aria-label="lab API tabs example"
                            indicatorColor="secondary"
                             centered >
                                <Tab label="Login" value="1" />
                                <Tab label="Sign Up" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><Login /></TabPanel>
                        <TabPanel value="2"><Signup /></TabPanel>
                    </TabContext>
                </Box>
                <DialogActions>
                    <Button onClick={handleClose}><RxCrossCircled /></Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default LoginSignup;