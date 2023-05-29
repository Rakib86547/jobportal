import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import StyleButton from '../../Components/Button/StyleButton';
import { useDispatch, useSelector } from 'react-redux';
import { editCity, editCountry, editFirstName, editLastName, editPhone, editStreetAddress } from '../../features/auth/personalInfoSlice';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Spinner from '../../Components/Spinner/Spinner';
import '../../App.css';
import { usePostPersonalInfoMutation } from '../../features/auth/peronalApi';
import { toast } from 'react-hot-toast'

const EditPersonalInformation = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const personal = useSelector((state) => state.personal);

    const [postData, { isLoading, isSuccess }] = usePostPersonalInfoMutation();
    console.log('info', postData.data)

    if (isSuccess) {
        toast.success('Update Success!')
    }

    // --- handle personal information to database ------
    const handlePersonal = () => {
        const userEmail = user?.email
        const data = {
            email: userEmail,
            first_name: personal.first_name,
            last_name: personal.last_name,
            country: personal.country,
            phone: personal.phone,
            city: personal.city,
            street_address: personal.street_address,
        };
        postData(data)
    }


    return (
        <Box>
            <Typography variant='h4' textAlign={'center'} padding={'20px 10px'}>Edit Personal Information!</Typography>
            <Stack sx={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                background: '#fff',
                borderRadius: ' 8px',
                padding: '15px'
            }
            }>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px 10px'
                }}>
                    <Box sx={{
                        width: '50%',
                        marginRight: '5px'
                    }}>
                        <Stack spacing={1}>
                            <label htmlFor='name' label='full-name'> First Name <br />
                                <input
                                    name='first_name'
                                    value={personal?.first_name}
                                    onChange={(e) => dispatch(editFirstName(e.target.value))}
                                    // value={user?.name}
                                    className='input-box' />
                            </label>
                            <br />
                            <label htmlFor='name' label='full-name'> Country <br />
                                <CountryDropdown
                                    value={personal?.country}
                                    onChange={(e) => dispatch(editCountry(e))}
                                    className='input-box'
                                />
                            </label>
                            <br />
                            <label htmlFor='name' label='street address'> Street Address <br />
                                <input
                                    value={personal?.street_address}
                                    name='street_address'
                                    onChange={(e) => dispatch(editStreetAddress(e.target.value))}
                                    className='input-box' />
                            </label>
                        </Stack>
                    </Box>

                    <Box sx={{
                        width: '50%',
                        marginLeft: '5px'
                    }}>
                        <Stack spacing={1}>
                            <label htmlFor='name' label='last name'> Last Name <br />
                                <input
                                    name='last_name'
                                    value={personal?.last_name}
                                    onChange={(e) => dispatch(editLastName(e.target.value))}
                                    className='input-box' />
                            </label>
                            <br />
                            <label htmlFor='name' label='city'> City <br />
                                <RegionDropdown
                                    country={personal?.country}
                                    value={personal?.city}
                                    onChange={(value) => dispatch(editCity(value))}
                                    className='input-box'
                                />
                            </label>
                            <br />
                            <label htmlFor='name' label='phone'> Phone <br />
                                <PhoneInput
                                    country={'bd'}
                                    value={personal?.phone}
                                    onChange={(value) => dispatch(editPhone(value))}
                                    className='input-box'
                                />
                            </label>
                        </Stack>
                    </Box>

                </Box>

                <Box sx={{ padding: '20px 0', textAlign: 'center' }}>
                    <Link
                        onClick={handlePersonal}
                    >
                        <StyleButton title={isLoading ? <Spinner /> : 'Save'} className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />
                    </Link>
                </Box>
            </Stack>
        </Box>
    );
};

export default EditPersonalInformation;