import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllApplierQuery } from '../../features/auth/jobApi';
import AllApplicantsDetails from './AllApplicantsDetails';
import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Loading from '../../Components/Loading/Loading';
import Pagination from '../ManageJobs/Pagination';


const AllApplicants = () => {
    const [page, setPage] = useState(1);
    const [totalData, setTotalData] = useState(0)
    const limit = 8;
    const user = useSelector((state) => state.auth.user);
    const email = user?.email
    const { data, isLoading } = useGetAllApplierQuery({ email, page, limit });
    useEffect(() => {
        setTotalData(data?.total)
    }, [data])
    if (isLoading) {
        return <Loading />
    }
    console.log('all applicants', data)
    return (
        <Box>
            <TableContainer component={Paper} sx={{ padding: '0px 25px', paddingBottom: '20px' }}>
                <Typography variant='h4' sx={{ textAlign: 'center', padding: '25px' }}>All Applicants!</Typography>
                <Table sx={{ minWidth: 650, border: '1px solid #e2e8f0' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ background: '#1DBF73', padding: '0 15px' }}>
                            {/* <TableCell align='left' sx={{ fontSize: '16px' }}>No.</TableCell> */}
                            <TableCell align="center" sx={{ fontSize: '16px' }}>Name</TableCell>
                            <TableCell align="center" sx={{ fontSize: '16px' }}>Email</TableCell>
                            <TableCell align="center" sx={{ fontSize: '16px' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            {
                data?.data?.map(applier => (
                    <Box sx={{ textAlign: 'center' }} key={applier._id}>
                        {
                            applier?.map((allApplier) => <AllApplicantsDetails key={allApplier._id} allApplier={allApplier} />)
                        }
                    </Box>
                ))
            }
            {/* ------- PAGINATION AREA --------- */}
            <Box>
                <Pagination activePage={page} totalData={totalData} setActivePage={setPage} />
            </Box>
        </Box>
    );
};

export default AllApplicants;