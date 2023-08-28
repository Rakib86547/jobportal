/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
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
import Pagination from './Pagination';



const ManageJobs = () => {
    const [page, setPage] = useState(1);
    const [totalData, setTotalData] = useState(0)
    const limit = 8;
    const user = useSelector((state) => state.auth.user)
    const email = user?.email
    const { data, isLoading } = useGetHRJobsQuery({ email, page, limit });
    const [deleteJob, { data: deleted }] = useDeleteJobMutation()

    useEffect(() => {
        setTotalData(data?.total)
    }, [data])


    if (isLoading) {
        return <Loading />
    }
    if (deleted?.data?.acknowledged) {
        toast.success(`Deleted Successfully`)
    }

    const handleDelete = (job) => {
        deleteJob(job?._id)
    }

    return (
        <Box>
            <TableContainer component={Paper} sx={{ padding: '0px 25px', paddingBottom: '20px' }}>
                <Box sx={{textAlign: 'center', padding: '25px 0px'}}>
                    <Typography variant='h4' sx={{ textAlign: 'center'}}>Your All Jobs!</Typography>
                    <Typography variant='body' sx={{ textAlign: 'center'}}>You Have {totalData} Jobs</Typography>
                </Box>
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
                        {data?.data?.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ display: 'flex', alignItems: 'center', }} component="th" scope="row">
                                    <Avatar className='avatar-title' sx={{ marginRight: '25px', }} alt="Cindy Baker" src={row.img} />
                                    <Box>
                                        <Typography sx={{ fontSize: '18px' }}>{row.position}</Typography>
                                        {
                                            row?.company_infortmation?.map(company => (
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
                    <Pagination activePage={page} totalData={totalData} setActivePage={setPage} />
                </Box>
                <Box>
                </Box>
            </TableContainer>
        </Box>
    );
};

export default ManageJobs;