/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Typography } from '@mui/material';
import '../../App.css'
import { useDeleteJobMutation, useGetHRJobsQuery } from '../../features/auth/jobApi';
import { useSelector } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { VscBriefcase } from 'react-icons/vsc';
import { CiLocationOn } from 'react-icons/ci';
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom';

const ManageJobs = () => {
    const user = useSelector((state) => state.auth.user)
    const email = user?.email
    const { data, isLoading } = useGetHRJobsQuery(email);
    const [deleteJob, { data: deleted }] = useDeleteJobMutation()

    if (isLoading) {
        return <Loading />
    }
    if (deleted?.data?.acknowledged) {
        toast.success(`Deleted Successfully`)
    }

    const handleDelete = (job) => {
        deleteJob(job?._id)
    }
console.log('manage jobs', data?.data)
    return (
        <Box>
            <TableContainer component={Paper} sx={{ padding: '0px 25px', paddingBottom: '20px' }}>
                <Typography variant='h4' sx={{ textAlign: 'center', padding: '25px' }}>Your All Jobs!</Typography>
                <Table sx={{ minWidth: 650, border: '1px solid #e2e8f0' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ background: '#1DBF73', padding: '0 15px' }}>
                            <TableCell sx={{ fontSize: '16px' }}>Title</TableCell>
                            <TableCell align="center" sx={{ fontSize: '16px' }}>Applications</TableCell>
                            <TableCell align="center" sx={{ fontSize: '16px' }}>Created & Expired</TableCell>
                            <TableCell align="center" sx={{ fontSize: '16px' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ display: 'flex', alignItems: 'center', }} component="th" scope="row">
                                    <Avatar className='avatar-title' sx={{ marginRight: '25px', }} alt="Cindy Baker" src={row.img} />
                                    <Box>
                                        <Typography sx={{ fontSize: '18px' }}>{row.position}</Typography>
                                        {
                                            row?.company_infortmation.map(company => (
                                                <Box sx={{ marginTop: '8px' }}>
                                                    <span className='flex'><VscBriefcase className='w-[20px] h-[20px] mr-1' />  <Typography>{company?.company_name}</Typography></span>
                                                    <span className='flex'>  <CiLocationOn className='w-[20px] h-[20px] d' />  <Typography>{company?.location}</Typography></span>
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                </TableCell>
                                <TableCell align="center"><Link to={`/dashboard/applicants/${row._id}`} className='text-blue-500'>{row.applicants.length} applicants</Link></TableCell>
                                <TableCell align="center">{row.createdAt.slice(0, 10)} & <br /> {row.application_deadline.slice(0, 10)}</TableCell>
                                <TableCell align="center">
                                    <Box>
                                        <span className='inline-block cursor-pointer bg-[#e3f8e2] text-[#1DBF73] w-[35px] h-[35px] rounded-[8px] text-[16px] hover:bg-[#1DBF73] duration-500 hover:text-[#fff] mr-[8px]'>
                                            <Link to={`/dashboard/manage-jobs/${row._id}`}><VisibilityOutlinedIcon className='mt-[5px]' /></Link>
                                        </span>
                                        <span onClick={() => handleDelete(row)} className='inline-block cursor-pointer bg-[#e3f8e2] text-[#1DBF73] w-[35px] h-[35px] rounded-[8px] hover:bg-[#1DBF73] duration-500 hover:text-[#fff] '><DeleteOutlinedIcon className='mt-[5px] ' /></span>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                  {/* ------- PAGINATION AREA --------- */}
            <Box>
                <div className="flex justify-end p-5">
                    <a href="#" className="px-4 py-2 mx-1 text-gray-500 capitalize bg-[#e3f8e2] rounded-md dark:bg-gray-800 dark:text-gray-600 hover:bg-[#1DBF73] hover:text-white">
                        <div className="flex items-center -mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>

                            <span className="mx-1">
                                previous
                            </span>
                        </div>
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-[#e3f8e2] rounded-md sm:inline hover:bg-[#1DBF73] hover:text-white">
                        1
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-[#e3f8e2] rounded-md sm:inline hover:bg-[#1DBF73] hover:text-white">
                        2
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-[#e3f8e2] rounded-md sm:inline hover:bg-[#1DBF73] hover:text-white">
                        3
                    </a>

                    <a href="#" alt="" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-[#e3f8e2] rounded-md hover:bg-[#1DBF73] hover:text-white">
                        <div className="flex items-center -mx-1">
                            <span className="mx-1">
                                Next
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </a>
                </div>
            </Box>
            </TableContainer>        
        </Box>
    );
};

export default ManageJobs;