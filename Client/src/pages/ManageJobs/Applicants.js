import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDeleteApplierMutation, useGetManageJobQuery } from '../../features/auth/jobApi';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { toast } from 'react-hot-toast';

const Applicants = () => {
    const { id } = useParams();
    const [name, setName] = useState()
    const { data } = useGetManageJobQuery(id, { refetchOnMountOrArgChange: true });
    const [deleteApplier, { data: deleteConfirm }] = useDeleteApplierMutation()

    const handleDelete = (applier) => {
        setName(applier?.name)
        const email = applier?.email;
        const id = applier?.jobId;
        deleteApplier({ email, id })
    }
    if (deleteConfirm?.data?.acknowledged) {
        toast.success(`${name} applier is deleted`)
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ background: '#1DBF73', padding: '0 15px' }}>
                        <TableCell align='center' sx={{ fontSize: '16px' }}>No.</TableCell>
                        <TableCell align="center" sx={{ fontSize: '16px' }}>Name</TableCell>
                        <TableCell align="center" sx={{ fontSize: '16px' }}>Email</TableCell>
                        <TableCell align="center" sx={{ fontSize: '16px' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.data?.applicants?.map((applier, index) => (
                        <TableRow
                            key={applier._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='center'>{index + 1}</TableCell>
                            <TableCell align='center'>{applier?.name}</TableCell>
                            <TableCell align='center'>{applier?.email}</TableCell>
                            <TableCell align="center">
                                <Box>
                                    <span className='inline-block cursor-pointer bg-[#e3f8e2] text-[#1DBF73] w-[35px] h-[35px] rounded-[8px] text-[16px] hover:bg-[#1DBF73] duration-500 hover:text-[#fff] mr-[8px]'>
                                        <Link to={`/dashboard/applier/${applier.email}`}><VisibilityOutlinedIcon className='mt-[5px]' /></Link>
                                    </span>
                                    <span onClick={() => handleDelete(applier)} className='inline-block cursor-pointer bg-[#e3f8e2] text-[#1DBF73] w-[35px] h-[35px] rounded-[8px] hover:bg-[#1DBF73] duration-500 hover:text-[#fff] '><DeleteOutlinedIcon className='mt-[5px] ' /></span>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Applicants;