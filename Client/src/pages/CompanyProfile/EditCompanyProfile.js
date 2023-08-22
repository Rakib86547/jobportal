import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import PhoneInput from 'react-phone-input-2';
import StyleButton from '../../Components/Button/StyleButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { city, companyAbout, companyType, companyWebsite, completeAddress, country, editCompanyName, email, estSince, phone, teamSize } from '../../features/auth/companyProfileSlice';
import { usePostCompanyProfileMutation } from '../../features/auth/companyProfileApi';
import Spinner from '../../Components/Spinner/Spinner';
import { toast } from 'react-hot-toast';
// import Spinner from '../../Components/Spinner/Spinner';

const EditCompanyProfile = () => {
    const dispatch = useDispatch();
    const company = useSelector((state) => state.company);
    const user = useSelector((state) => state.auth.user);
    const [postData, { isLoading, isSuccess }] = usePostCompanyProfileMutation();
    const navigate = useNavigate()

    const handleCompanyInfo = () => {
        const data = {
            user_email: user?.email,
            email: company.email,
            company_name: company?.company_name,
            company_type: company?.company_type,
            company_email: company?.email,
            company_website: company?.company_website,
            est_since: company?.est_since,
            phone: company?.phone,
            team_size: company?.team_size,
            country: company?.country,
            city: company?.city,
            address: company?.complete_address,
            company_about: company?.company_about
        };
        postData(data)
    };

    useEffect(() => {
        setTimeout(() => {
            if (isSuccess) {
                toast.success('Update Success');
                navigate('/dashboard/company-profile')
            }
        }, 2000);
    }, [isSuccess, navigate])
    return (
        <Box>
            <Typography variant='h4' textAlign={'center'} padding={'20px 10px'}>Edit Company Information!</Typography>
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
                            <label htmlFor='name' label='full-name'> Company Name <br />
                                <input
                                    name='company-name'
                                    value={company?.company_name}
                                    onChange={(e) => dispatch(editCompanyName(e.target.value))}
                                    className='input-box' />
                            </label>
                            <br />
                            <label htmlFor='name' label='phone'> Phone <br />
                                <PhoneInput
                                    country={'bd'}
                                    value={company?.phone}
                                    onChange={(value) => dispatch(phone(value))}
                                    className='input-box h-[55px]'
                                />
                            </label>
                            <br />
                            <label htmlFor='name' label='est-since'> Est. Since <br />
                                <input
                                    value={company?.est_since}
                                    type='date'
                                    name='est-since'
                                    onChange={(e) => dispatch(estSince(e.target.value))}
                                    className='input-box' />
                            </label>
                            <br />
                            <label htmlFor='name' label='country'> Country <br />
                                <CountryDropdown
                                    value={company?.country}
                                    onChange={(e) => dispatch(country(e))}
                                    className='input-box'
                                />
                            </label>
                            <br />
                            <label htmlFor='name' label='complete-address'> Complete Address <br />
                                <input
                                    value={company?.address}
                                    name='complete-address'
                                    onChange={(e) => dispatch(completeAddress(e.target.value))}
                                    className='input-box' />
                            </label>
                        </Stack>
                    </Box>

                    <Box sx={{
                        width: '50%',
                        marginLeft: '5px'
                    }}>
                        <Stack spacing={1}>
                            <label htmlFor='name' label='email'> Email Address <br />
                                <input
                                    name='email'
                                    type='email'
                                    value={company?.email}
                                    onChange={(e) => dispatch(email(e.target.value))}
                                    className='input-box' />
                            </label>
                            <br />
                            <label htmlFor='name' label='website'>Company Website <br />
                                <input
                                    type='url'
                                    name='website'
                                    value={company?.company_website}
                                    onChange={(e) => dispatch(companyWebsite(e.target.value))}
                                    className='input-box' />
                            </label>
                            <br />
                            <label htmlFor='name' label='team-size'> Team Size <br />
                                <select
                                    className='input-box'
                                    value={company?.team_size}
                                    onChange={(e) => dispatch(teamSize(e.target.value))}
                                    name='team-size'
                                >
                                    <option value='50-100'>50-100</option>
                                    <option value='100-1500'>100-150</option>
                                    <option value='200-250'>200-250</option>
                                    <option value='300-350'>300-350</option>
                                    <option value='400-450'>400-450</option>
                                </select>
                            </label>
                            <br />
                            <label htmlFor='name' label='city'> City <br />
                                <RegionDropdown
                                    country={company?.country}
                                    value={company?.city}
                                    onChange={(value) => dispatch(city(value))}
                                    className='input-box'
                                />
                            </label>
                            <br />
                            <label htmlFor='name' label='company-type'> Company Type <br />
                                <select
                                    className='input-box'
                                    value={company?.company_type}
                                    onChange={(e) => dispatch(companyType(e.target.value))}
                                    name='company-type'
                                >
                                    <option>Select Company Type</option>
                                    <option value='Banking'>Banking</option>
                                    <option value='digital & Creative'>Digital & Creative</option>
                                    <option value='Retail'>Retail</option>
                                    <option value='Human Resources'>Human Resources</option>
                                    <option value='Management'>Management</option>
                                    <option value='Accounting & Finance'>Accounting & Finance</option>
                                    <option value='Digital'>Digital</option>
                                    <option value='Creative Art'>Creative Art</option>
                                </select>
                            </label>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', marginTop: '30px' }}>
                    <Typography variant='body' sx={{ marginBottom: '10px' }}>About Company</Typography>
                    <textarea value={company?.company_about} onChange={(e) => dispatch(companyAbout(e.target.value))} placeholder='Write about your Company' className='w-full input-box-box' rows="10" />
                </Box>
                <Box sx={{ padding: '20px 0', textAlign: 'center', display: 'inline-block' }}>
                    <Box sx={{ display: 'inline-block' }}>
                        <Link
                            onClick={handleCompanyInfo}
                        >
                            <StyleButton title={isLoading ? <Spinner /> : 'Save'} className='bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 py-[15px] px-[34px] rounded search-btn text-white' />
                        </Link>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default EditCompanyProfile;