import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StyleButton from '../../../Components/Button/StyleButton';
import Spinner from '../../../Components/Spinner/Spinner';
import { useSaveUserMutation } from '../../../features/auth/authApi';
import { githubSignIn, googleSignIn, loading, passwordReset, saveUsersInDB, signInUser } from '../../../features/auth/authSlice';

const Login = ({ handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState('');

    // const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const dispatch = useDispatch();
    const { isLoading, user, error: errorss } = useSelector(state => state.auth);

    const onSubmit = data => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        dispatch(signInUser({ email: data.email, password: data.password }))
        setTimeout(() => {
            handleClose()
        }, 4000);
        dispatch(saveUsersInDB(userInfo))
    };
    useEffect(() => {
        if (!user.email) {
            dispatch(loading())
        }
    }, [user])

    useEffect(() => {
        if (user.email) {
            toast.success('Login Success')
        }
    }, [user])

    const handleGoogleSign = () => {
        dispatch(googleSignIn())
        dispatch(loading())
        setTimeout(() => {
            handleClose()
        }, 2000);
    }
    const handleResetEmail = () => {
        if (resetEmail === '') {
            toast.error('Please Enter a Email');
            return;
        } else {
            dispatch(passwordReset(resetEmail))
            toast.success('Please Check Your Email & Reset With New Password')
        }
    }
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography varian='h4' sx={{
                    textAlign: 'center',
                    fontSize: '25px',
                    fontWeight: 500,
                    padding: '30px 0'
                }}>Login Your Account</Typography>
                <Stack spacing={2}
                    sx={{
                        '& .css-1kjo7z6-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { fontSize: '20px' },
                        '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': { fontWeight: 'bolder' },
                    }}
                >
                    <TextField
                        sx={{ width: '100%', margin: '' }}
                        {...register("email", { required: 'Email is Required' })}
                        id="outlined-basic" label="Email" variant="outlined"
                        onChange={(e) => setResetEmail(e.target.value)}
                    />

                    {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
                    {/* ------- password ---------- */}
                    <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            {...register('password', { required: 'Password is Required' })}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <FormGroup sx={{
                            '& .css-rlh8pc-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-rlh8pc-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate': { color: '#1DBF73' },
                        }} >
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                        </FormGroup>

                        <Link onClick={handleResetEmail}><Typography>Forgot Password?</Typography></Link>

                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <StyleButton title={isLoading ? <Spinner /> : 'Sign In'} className='duration-500 w-full bg-[#1DBF73] hover:bg-[#00D749] text-[#fff] py-[18px] px-[35px] rounded' />
                    </Box>
                    {/* <Typography sx={{textAlign: 'center'}}>Don`t have an account <Link to='/signup'>Signup</Link></Typography> */}
                    <Divider>or</Divider>
                    <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                        {/* <Button
                        // onClick={handleGithubSign}
                         sx={{
                            border: '1px solid #202124',
                            borderRadius: '8px',
                            width: '47%',
                            padding: '12px 0',
                            color: '#202124',
                            fontSize: '13px',
                            transition: '.3s',
                            '&:hover': { background: '#202124', color: 'white', transition: '.3s' }
                        }}><AiFillGithub className=' mr-1 text-[20px] flex items-center' /> Login With Github</Button> */}

                        <Button
                            onClick={handleGoogleSign}
                            sx={{
                                border: '1px solid #dc4d28',
                                borderRadius: '8px',
                                width: '100%',
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

export default Login;