import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast'
import '../../App.css'

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleSendMessage = (data) => {
        const details = {
            name: data?.name,
            email: data?.email,
            subject: data?.subject,
            message: data?.message
        }
        setTimeout(() => {
            setLoading(true)
        }, 3000);  
        reset()      
    }
    if (loading === true) {
        toast.success('Thank your for your message');
    }
    return (
        <Box sx={{
            padding: '50px 0px'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '70%',
                margin: 'auto'

            }} className='contact-area'>
                <Box>
                    <span><LocationOnOutlinedIcon className='text-[#1DBF73] text-[80px] mb-2' /></span>
                    <Typography variant='h6'>Address</Typography>
                    <Typography>329 Queensberry Street, <br /> North Melbourne VIC 3051, Australia.</Typography>
                </Box>

                <Box>
                    <span><PhoneAndroidOutlinedIcon className='text-[#1DBF73] text-[80px] mb-2' /></span>
                    <Typography variant='h6'>Call Us</Typography>
                    <Typography >123 456 7890</Typography>
                </Box>

                <Box>
                    <span ><EmailOutlinedIcon className='text-[#1DBF73] text-[80px] mb-2' /></span>
                    <Typography variant='h6'>Email</Typography>
                    <Typography>contact.london@example.com</Typography>
                </Box>
            </Box>



            <Box sx={{ marginTop: '50px' }}>
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md border border-[#ddd]">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Leave A Message</h2>

                    <form onSubmit={handleSubmit(handleSendMessage)}>
                        <div className="grid form-area grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <Box>
                                <label className="text-gray-700 dark:text-gray-200" for="username">Your Name</label>
                                <input
                                    id="username"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md input-box"
                                    {...register("name", { required: true })}
                                />
                                <span className='text-red-400'>{errors.name && <span>This field is required</span>}</span>
                            </Box>

                            <Box>
                                <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Your Email</label>
                                <input
                                    id="emailAddress"
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md input-box"
                                    {...register("email", { required: true })}
                                />
                                <span className='text-red-400'>{errors.email && <span>This field is required</span>}</span>
                            </Box>
                        </div>
                        <Box sx={{ marginTop: '30px' }}>
                            <label className="text-gray-700 dark:text-gray-200" for="subject">Subject</label>
                            <input id="subject" type="text" className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md input-box" />
                        </Box>

                        <Box sx={{ width: '100%', marginTop: '30px' }}>
                            <Typography variant='body' sx={{ marginBottom: '10px' }}>Your Message</Typography>
                            <textarea
                                name="message"
                                placeholder='Write your message...' className='w-full input-box' rows="10"
                                {...register('message', { required: true })}
                            />
                        </Box>
                        <span className='text-red-400'>{errors.message && <span>This field is required</span>}</span>

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