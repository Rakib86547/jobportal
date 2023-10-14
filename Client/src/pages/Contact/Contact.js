import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import '../../App.css'

const Contact = () => {
    return (
        <Box sx={{
            padding: '50px 0px'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',

            }}>
                <Box>
                    <span><LocationOnOutlinedIcon className='text-[#1DBF73] text-[40px]' /></span>
                    <Typography variant='h6'>Address</Typography>
                    <Typography>329 Queensberry Street, <br /> North Melbourne VIC 3051, Australia.</Typography>
                </Box>

                <Box>
                    <span><PhoneAndroidOutlinedIcon className='text-[#1DBF73] text-[40px]' /></span>
                    <Typography variant='h6'>Call Us</Typography>
                    <Typography >123 456 7890</Typography>
                </Box>

                <Box>
                    <span ><EmailOutlinedIcon className='text-[#1DBF73] text-[40px]' /></span>
                    <Typography variant='h6'>Email</Typography>
                    <Typography>contact.london@example.com</Typography>
                </Box>
            </Box>

            <Box sx={{ marginTop: '50px' }}>
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md border border-[#ddd]">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <Box>
                                <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
                                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md input-box" />
                            </Box>

                            <Box>
                                <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md input-box" />
                            </Box>
                        </div>
                        <Box>
                            <label className="text-gray-700 dark:text-gray-200" for="subject">Subject</label>
                            <input id="subject" type="text" className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md input-box" />
                        </Box>

                        <Box sx={{ width: '100%', marginTop: '30px' }}>
                            <Typography variant='body' sx={{ marginBottom: '10px' }}>Your Message</Typography>
                            <textarea
                                name="description"
                                placeholder='Write your message...' className='w-full input-box' rows="10"
                            // {...register('description', {required: 'please insert your job details'})}
                            // onChange={(e) => dispatch(jobDescription(e.target.value))}
                            />
                        </Box>


                        <div className="flex justify-end mt-6">
                            <button className="leading-5 bg-[#1DBF73] search-btn hover:bg-[#00D749] duration-500 w-full py-[15px] px-[34px] rounded search-btn text-white">Send Message</button>
                        </div>
                    </form>
                </section>
            </Box>
        </Box>
    );
};

export default Contact;