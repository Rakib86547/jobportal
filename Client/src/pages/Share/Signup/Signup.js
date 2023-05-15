import { Box, Button, Divider, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEyeOff } from 'react-icons/fi'
import { FiEye } from 'react-icons/fi'
import { AiOutlineGoogle } from 'react-icons/ai';
import StyleButton from '../../../Components/Button/StyleButton';
import '../../../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { createUser, googleSignIn, loading, saveUsersInDB, } from '../../../features/auth/authSlice';
import Spinner from '../../../Components/Spinner/Spinner';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = ({ handleClose, handleClickOpen, setOpen }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickConfirmPassword = () => setConfirmPassword((show) => !show);
    const [value, setValue] = useState('');
    const [radioError, setRadioError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const dispatch = useDispatch();
    const { isLoading, isError, error } = useSelector(state => state.auth);
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    // checking validate
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState("");

    const handlePassword = (value) => {
        setIsShowPassword(value);
        const lower = new RegExp("(?=.*[a-z])");
        const upper = new RegExp("(?=.*[A-Z])");
        const number = new RegExp("(?=.*[0-9])");
        const special = new RegExp("(?=.*[!@#$%^&*])");
        const length = new RegExp("(?=.{6,})");


        if (lower.test(value)) {
            setLowerValidated(true);
        } else {
            setLowerValidated(false);
        }
        if (upper.test(value)) {
            setUpperValidated(true);
        } else {
            setUpperValidated(false);
        }
        if (number.test(value)) {
            setNumberValidated(true);
        } else {
            setNumberValidated(false);
        }
        if (special.test(value)) {
            setSpecialValidated(true);
        } else {
            setSpecialValidated(false);
        }
        if (length.test(value)) {
            setLengthValidated(true);
        } else {
            setLengthValidated(false);
        }
    };

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setRadioError(false);
    };


    const onSubmit = data => {
        if (errorText === '' && value === '') {
            setErrorText('Please Confirm Your Role')
        }

        else {
            setErrorText('')
            const userInfo = {
                email: data.email,
                password: data.password,
                role: value,
                name: data.name
            }
            dispatch(createUser({ email: data.email, password: data.password }));
            setTimeout(() => {
                handleClose()
            }, 5000);
            dispatch(saveUsersInDB(userInfo))
        }
        navigate('/login')
    };

    useEffect(() => {
        if (isError) {
            toast.error(error)
        }
    }, [isError, error])

    const handleGoogleSign = () => {
        dispatch(googleSignIn())
        dispatch(loading())
        setTimeout(() => {
            handleClose()
        }, 2000);
    }
    // const handleGithubSign = () => {
    //     dispatch(githubSignIn())
    //     dispatch(loading())
    //     setTimeout(() => {
    //         handleClose()
    //     }, 2000);
    // }
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
                {errorText ? <p className='text-red-500 text-center -mt-4 pb-9'>{errorText}</p> : undefined}


                <Stack sx={{
                    '& .css-1kjo7z6-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { fontSize: '20px' },
                    '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': { fontWeight: 'bolder' },
                }} spacing={2}>

                    {/* ------- Name -------- */}
                    <TextField
                        sx={{ width: '100%', margin: '' }}
                        {...register("name", { required: 'Name is required' })}
                        id="outlined-basic" label="Name" variant="outlined" />
                    {errors.name && <span className='text-red-500'>{errors.name?.message}</span>}

                    {/* ------- Email -------- */}
                    <TextField
                        sx={{ width: '100%', margin: '' }}
                        {...register("email", { required: 'Email Address is required' })}
                        id="outlined-basic" label="Email" variant="outlined" />
                    {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}

                    {/* ------- password ---------- */}
                    <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            {...register("password", {
                                required: 'Password is Required',
                                minLength: {
                                    value: 6,
                                    message: "Password Must be 6 Character",
                                },
                                pattern: {
                                    value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
                                    // message:
                                    //   "Password Should be a-z, A-Z, number and special character",
                                },
                            })}
                            onChange={(e) => handlePassword(e.target.value)}
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
                    {isShowPassword && (
                        <p className="">
                            <></>
                            <span
                                className={
                                    lowerValidated ? "text-green-500" : "text-red-500"
                                }
                            >
                                Lowercase,
                            </span>{" "}
                            <></>
                            <span
                                className={
                                    upperValidated ? "text-green-500" : "text-red-500"
                                }
                            >
                                Uppercase,
                            </span>{" "}
                            <></>
                            <span
                                className={
                                    numberValidated ? "text-green-500" : "text-red-500"
                                }
                            >
                                Number,
                            </span>{" "}
                            <></>
                            <span
                                className={
                                    specialValidated ? "text-green-500" : "text-red-500"
                                }
                            >
                                Special Character,
                            </span>{" "}
                            <></>
                            <span
                                className={
                                    lengthValidated ? "text-green-500" : "text-red-500"
                                }
                            >
                                6 Character,
                            </span>{" "}
                            <></>
                        </p>
                    )}
                    {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}

                    {/* --------- confirm password ---------- */}
                    <FormControl sx={{ m: 0, width: '100%' }} variant="outlined" >
                        <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            {...register("confirmPassword", {
                                required: 'Confirm Password is Required',
                                validate: (value) => {
                                    if (watch("password") !== value) {
                                        return "Your Password Did Not Match";
                                    }
                                },
                            })}
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
                    {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword?.message}</span>}

                    {isError && <p className='text-red-500'>{error}</p>}
                    <Box sx={{ width: '100%' }}>
                        <StyleButton title={isLoading ? <Spinner /> : 'Sign Up'} className='duration-500 w-full bg-[#1DBF73] hover:bg-[#00D749] text-[#fff] py-[18px] px-[35px] rounded' />
                    </Box>
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

export default Signup;