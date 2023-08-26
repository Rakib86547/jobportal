import React, { useState } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Link } from 'react-router-dom';
import { useDeleteApplierMutation } from '../../features/auth/jobApi';
import { toast } from 'react-hot-toast';

const AllApplicantsDetails = ({ allApplier }) => {
    // const [name, setName] = useState('')
    // const [deleteApplier, { data: deleteConfirm }] = useDeleteApplierMutation()
    // const handleDelete = (applier) => {
    //     console.log(applier)
    //     setName(applier?.name)
    //     const email = applier?.email;
    //     const id = applier?.jobId;
    //     deleteApplier({ email, id })
    // }
    // if (deleteConfirm?.data?.acknowledged) {
    //     toast.success(`${name} applier is deleted`)
    // }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, }} aria-label="simple table">
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {/* <TableCell align='center'>{0 + 1}</TableCell> */}
                            <TableCell align='center'>{allApplier?.name}</TableCell>
                            <TableCell align='center'>{allApplier?.email}</TableCell>
                            <TableCell align="center">
                                <Box>
                                    <span className='inline-block cursor-pointer bg-[#e3f8e2] text-[#1DBF73] rounded-[8px] text-[16px] hover:bg-[#1DBF73] duration-500 hover:text-[#fff] px-[20px] py-[8px]'>
                                        <Link to={`/dashboard/applier/${allApplier?.email}`}> <Typography>Details</Typography></Link>
                                    </span>
                                    {/* <span onClick={() => handleDelete(allApplier)} className='inline-block cursor-pointer bg-[#e3f8e2] text-[#1DBF73] w-[35px] h-[35px] rounded-[8px] hover:bg-[#1DBF73] duration-500 hover:text-[#fff] '><DeleteOutlinedIcon className='mt-[5px] ' /></span> */}
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
{/* <VisibilityOutlinedIcon className='mt-[5px]' /> */ }
export default AllApplicantsDetails;