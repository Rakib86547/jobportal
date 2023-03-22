import { Box, Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEyeOff } from 'react-icons/fi'
import { FiEye } from 'react-icons/fi'
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai'
import StyleButton from '../../../Components/Button/StyleButton';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickConfirmPassword = () => setConfirmPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                    <Button sx={{
                       background: '#e3f8e2',
                        borderRadius: '8px',
                        width: '47%',
                        padding: '12px 0',
                        color: '#1DBF73',
                        fontSize: '13px',
                        transition: '.3s',
                        '&:hover': { background: '#1DBF73', color: 'white', transition: '.3s' },
                        '&:active': {background: '#34a853'}
                    }}><AiFillGithub className=' mr-1 text-[20px] flex items-center' /> Candidate</Button>

                    <Button sx={{
                        background: '#e3f8e2',
                        borderRadius: '8px',
                        width: '47%',
                        padding: '12px 0',
                        color: '#1DBF73',
                        fontSize: '13px',
                        transition: '.3s',
                        '&:hover': { background: '#1DBF73', color: 'white', transition: '.3s' },
                        '&:active': {background: '#34a853'}
                    }}><AiOutlineGoogle className=' mr-1 text-[20px] flex items-center' /> Employer</Button>
                </Box>
                <Typography varian='h4' sx={{
                    textAlign: 'center',
                    fontSize: '25px',
                    fontWeight: 500,
                    padding: '30px 0'
                }}>Create an Account</Typography>
                <Stack spacing={2}>
                    <TextField
                        sx={{ width: '100%', margin: '' }}
                        {...register("email")}
                        id="outlined-basic" label="Email" variant="outlined" />
                    {/* <br /> */}
                    {/* ------- password ---------- */}
                    <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    {/* --------- confirm password ---------- */}
                    <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={confirmPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {confirmPassword ? <FiEyeOff /> : <FiEye />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>


                    <Box sx={{ width: '100%' }}>
                        <StyleButton title='Sign Up' className='duration-500 w-full bg-[#1DBF73] hover:bg-[#00D749] text-[#fff] py-[18px] px-[35px] rounded' />
                    </Box>
                    <Divider>or</Divider>
                    <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                        <Button sx={{
                            border: '1px solid #202124',
                            borderRadius: '8px',
                            width: '47%',
                            padding: '12px 0',
                            color: '#202124',
                            fontSize: '13px',
                            transition: '.3s',
                            '&:hover': { background: '#202124', color: 'white', transition: '.3s' }
                        }}><AiFillGithub className=' mr-1 text-[20px] flex items-center' /> Login With Github</Button>

                        <Button sx={{
                            border: '1px solid #dc4d28',
                            borderRadius: '8px',
                            width: '47%',
                            padding: '12px 0',
                            color: '#dc4d28',
                            fontSize: '13px',
                            transition: '.3s',
                            '&:hover': { background: '#dc4d28', color: 'white', transition: '.3s' }
                        }}><AiOutlineGoogle className=' mr-1 text-[20px] flex items-center' /> Login With Google</Button>
                    </Box>
                </Stack>
            </form>
        </Box>
    );
};

export default Signup;