import { Box } from '@mui/material';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';
import { signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const EmployerSidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(logOut())
                navigate('/')
            })
    }
    return (
        <Box>
            <NavLink
                to='/dashboard/company-profile'
                className={({ isActive }) =>
                    isActive ? "bg-[#e3f8e2] text-[#1DBF73] py-2 pl-5 rounded-md flex items-center justify-start text-[16px] mb-2" : "flex duration-300 items-center text-[16px] hover:bg-[#e3f8e2] hover:text-[#1DBF73] py-2 pl-5 rounded-md mb-2"
                }
            >
                <Person2OutlinedIcon className='mr-3 text-[28px]' /> Company Profile
            </NavLink>

            <NavLink
                to='/dashboard/post-job'
                className={({ isActive }) =>
                    isActive ? "bg-[#e3f8e2] text-[#1DBF73] py-2 pl-5 rounded-md flex items-center justify-start text-[16px] mb-2" : "flex duration-300 items-center text-[16px] hover:bg-[#e3f8e2] hover:text-[#1DBF73] py-2 pl-5 rounded-md mb-2"
                }
            >
                <SendOutlinedIcon className='mr-3 text-[28px]' /> Post A New Job
            </NavLink>

            <NavLink
                to='/dashboard/manage-jobs'
                className={({ isActive }) =>
                    isActive ? "bg-[#e3f8e2] text-[#1DBF73] py-2 pl-5 rounded-md flex items-center justify-start text-[16px] mb-2" : "flex duration-300 items-center text-[16px] hover:bg-[#e3f8e2] hover:text-[#1DBF73] py-2 pl-5 rounded-md mb-2"
                }
            >
                <MedicalServicesOutlinedIcon className='mr-3 text-[28px]' /> Manage Jobs
            </NavLink>

            <NavLink
                to='/dashboard/all-applicants'
                className={({ isActive }) =>
                    isActive ? "bg-[#e3f8e2] text-[#1DBF73] py-2 pl-5 rounded-md flex items-center justify-start text-[16px] mb-2" : "flex duration-300 items-center text-[16px] hover:bg-[#e3f8e2] hover:text-[#1DBF73] py-2 pl-5 rounded-md mb-2"
                }
            >
                <TextSnippetOutlinedIcon className='mr-3 text-[28px]' /> All Applicants
            </NavLink>

             <NavLink
            onClick={handleSignOut}
            className='relative top-[290px] py-2 pl-5 rounded-md items-center justify-start text-[16px] flex duration-300 hover:text-[#1DBF73] mb-2  border border-dashed border-[#1DBF73]'
            >
                <LogoutOutlinedIcon className='mr-3 text-[28px]' /> Logout
            </NavLink>          

        </Box>
    );
};

export default EmployerSidebar;