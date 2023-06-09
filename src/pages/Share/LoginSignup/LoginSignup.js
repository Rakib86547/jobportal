import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, Dialog, DialogActions, Tab } from '@mui/material';
import { useState } from 'react';
// import { TabContext, TabList, TabPanel } from '@mui/lab'
import { RxCross1 } from 'react-icons/rx'
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import '../../../App.css';



const LoginSignup = ({ open, handleClose, handleClickOpen, setOpen }) => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box >
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    '& .css-11yukd5-MuiTabs-indicator': {backgroundColor: '#1DBF73'}
                }}
            >
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value} >
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
                        <TabPanel value="1"><Login handleClose={handleClose} setOpen={setOpen}  handleClickOpen={handleClickOpen} /></TabPanel>
                        <TabPanel value="2"><Signup handleClose={handleClose} setOpen={setOpen} handleClickOpen={handleClickOpen} /></TabPanel>
                    </TabContext>
                </Box>
                <DialogActions >
                    <Button sx={{
                        position: 'absolute',
                        top: '5px',
                        fontSize: '20px',
                        background: '#e3f8e2',
                        '&:hover': {background: '#1DBF73', color: 'white'}                                              
                    }}  
                    onClick={handleClose}><RxCross1 /></Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default LoginSignup;