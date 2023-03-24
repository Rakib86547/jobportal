import { Box, Button, Divider, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEyeOff } from 'react-icons/fi'
import { FiEye } from 'react-icons/fi'
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import StyleButton from '../../../Components/Button/StyleButton';
import '../../../App.css'

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickConfirmPassword = () => setConfirmPassword((show) => !show);
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        // setHelperText(' ');
        setError(false);
    };

    const onSubmit = data => {
        if (errorText === '' && value === '') {
            setErrorText('Please Confirm Your Type')
        }
        else {
            
            setErrorText('')
            const userInfo = {
                data,
                role: value
            }
            console.log(userInfo)
        }
    };
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography varian='h4' sx={{
                    textAlign: 'center',
                    fontSize: '25px',
                    fontWeight: 500,
                    padding: '30px 0'
                }}>Create a Free JobPortal Account</Typography>

                <FormControl sx={{ m: 3, display: 'flex', alignItems: 'center' }} error={error} variant="standard">
                    <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                        row
                        sx={{
                            '& .css-1hbvpl3-MuiSvgIcon-root': { color: '#1DBF73' },
                            '& .Mui-checked': { color: '#1DBF73' },
                            '& .css-ahj2mt-MuiTypography-root': { fontSize: '20px' }
                        }}
                    >
                        <FormControlLabel value="Candidate" control={<Radio />} label="Candidate" />
                        <FormControlLabel value="Employer" control={<Radio />} label="Employer" />
                    </RadioGroup>
                </FormControl>
                    {errorText ? <p className='bg-red-500'>{errorText}</p> : undefined}
                    {/* {errorText && <p className='bg-red-500'>{errorText}</p>} */}

                <Stack sx={{
                    '& .css-1kjo7z6-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { fontSize: '20px' },
                    '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': { fontWeight: 'bolder' },
                }} spacing={2}>
                    <TextField
                        sx={{ width: '100%', margin: '' }}
                        {...register("email", { required: 'Email Address is required' })}
                        id="outlined-basic" label="Email" variant="outlined" />
                    {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}

                    {/* ------- password ---------- */}
                    <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            {...register("password", { required: true })}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    {errors.password && <span className='text-red-500'>Password is Required</span>}

                    {/* --------- confirm password ---------- */}
                    <FormControl sx={{ m: 0, width: '100%' }} variant="outlined" >
                        <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            {...register("confirmPassword", { required: true })}
                            id="outlined-adornment-confirm-password"
                            type={confirmPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickConfirmPassword}
                                        edge="end"
                                    >
                                        {confirmPassword ? <FiEyeOff /> : <FiEye />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="confirmPassword"
                        />
                    </FormControl>
                    {errors.confirmPassword && <span className='text-red-500'>Password is Required</span>}

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