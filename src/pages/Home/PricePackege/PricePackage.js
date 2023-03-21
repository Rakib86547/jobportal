import { Box, Button, Card, CardActions, CardContent, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../Components/Button/SectionTitle/SectionTitle';
import { VscCheck } from 'react-icons/vsc'
import StyleButton from '../../../Components/Button/StyleButton';


const packages = [
    {
        "category": "Basic",
        "price": "$ 199",
        "month": "month",
        "list": [
            {
                "icon": <VscCheck />,
                "list1": "30 job posting",
                "list2": "3 featured job",
                "list3": "Job displayed for 15 days",
                "list4": "Premium Support 24/7",
            }
        ]
    },
    {
        "category": "Standard",
        "price": "$ 499",
        "month": "month",
        "list": [
            {
                "icon": VscCheck,
                "list1": "30 job posting",
                "list2": "3 featured job",
                "list3": "Job displayed for 15 days",
                "list4": "Premium Support 24/7",
            }
        ]
    },
    {
        "category": "Extended",
        "price": "$ 799",
        "month": "month",
        "list": [
            {
                "icon": VscCheck,
                "list1": "30 job posting",
                "list2": "3 featured job",
                "list3": "Job displayed for 15 days",
                "list4": "Premium Support 24/7",
            }
        ]
    },
]

const PricePackage = () => {

    return (
        <Box sx={{ padding: '60px 0' }}>
            <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
                <SectionTitle title='Pricing Packages' />
                <Typography >Know your worth and find the job that qualify your life</Typography>
            </Box>


            <Box>
                <Card sx={{
                    // minWidth: 275,
                    padding: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'none',
                    flexDirection: {lg: 'row', md: 'column', sm: 'column', xs: 'column'},                    
                }}>
                    <CardContent sx={{
                        border: '1px solid #e3f8e2',
                        width: { lg: '30%', md: '50%', xs: '100%' },
                        borderRadius: '8px',
                        padding: '40px',
                        transition: '.4s',
                        '&:hover': { border: '1px solid #1DBF73', transition: '.4s' },
                        marginTop: {md: '10px', sm: '10px', xs: '10px'}
                    }}>
                        <Typography sx={{ fontSize: 18, color: '#1DBF73' }} color="text.secondary" gutterBottom>
                            Basic
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h4'>$199</Typography> /  <Typography>monthly</Typography>
                        </Box>
                        <Box
                            sx={{
                                '& .css-cveggr-MuiListItemIcon-root': { minWidth: '35px' },
                                padding: '35px 0'
                            }}
                        >
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="30 job posting" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="3 featured job" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="Job displayed for 15 days" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="Premium Support 24/7" />
                            </ListItem>
                        </Box>
                        <CardActions sx={{
                            justifyContent: 'center',
                            width: '100%'
                        }}>
                            <Box sx={{ width: '100%' }}>
                                <StyleButton title='Add to Cart' className='bg-[#e3f8e2] duration-500 w-full hover:bg-[#1DBF73] hover:text-[#fff] py-[18px] px-[35px] text-[#1DBF73] rounded' />
                            </Box>
                        </CardActions>
                    </CardContent>

                    <CardContent sx={{
                        border: '1px solid #1DBF73',
                        width: { lg: '30%', md: '50%', xs: '100%' },
                        borderRadius: '8px',
                        padding: '40px',
                        marginTop: {md: '10px', sm: '10px', xs: '10px'}
                    }}>
                        <Typography sx={{ fontSize: 18, color: '#1DBF73' }} color="text.secondary" gutterBottom>
                            Basic
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h4'>$199</Typography> /  <Typography>monthly</Typography>
                        </Box>
                        <Box
                            sx={{
                                '& .css-cveggr-MuiListItemIcon-root': { minWidth: '35px' },
                                padding: '35px 0'
                            }}
                        >
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="30 job posting" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="3 featured job" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="Job displayed for 15 days" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="Premium Support 24/7" />
                            </ListItem>
                        </Box>
                        <CardActions sx={{
                            justifyContent: 'center',
                            width: '100%'
                        }}>
                            <Box sx={{ width: '100%' }}>
                                <StyleButton title='Add to Cart' className='bg-[#e3f8e2] duration-500 w-full hover:bg-[#1DBF73] hover:text-[#fff] py-[18px] px-[35px] text-[#1DBF73] rounded' />
                            </Box>
                        </CardActions>
                    </CardContent>

                    <CardContent sx={{
                        border: '1px solid #e3f8e2',
                        width: { lg: '30%', md: '50%', xs: '100%' },
                        borderRadius: '8px',
                        padding: '40px',
                        transition: '.4s',
                        '&:hover': { border: '1px solid #1DBF73', transition: '.4s' },
                        marginTop: {md: '10px', sm: '10px', xs: '10px'}
                    }}>
                        <Typography sx={{ fontSize: 18, color: '#1DBF73' }} color="text.secondary" gutterBottom>
                            Basic
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h4'>$199</Typography> /  <Typography>monthly</Typography>
                        </Box>
                        <Box
                            sx={{
                                '& .css-cveggr-MuiListItemIcon-root': { minWidth: '35px' },
                                padding: '35px 0'
                            }}
                        >
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="30 job posting" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="3 featured job" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="Job displayed for 15 days" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <VscCheck />
                                </ListItemIcon>
                                <ListItemText primary="Premium Support 24/7" />
                            </ListItem>
                        </Box>
                        <CardActions sx={{
                            justifyContent: 'center',
                            width: '100%'
                        }}>
                            <Box sx={{ width: '100%' }}>
                                <StyleButton title='Add to Cart' className='bg-[#e3f8e2] duration-500 w-full hover:bg-[#1DBF73] hover:text-[#fff] py-[18px] px-[35px] text-[#1DBF73] rounded' />
                            </Box>
                        </CardActions>
                    </CardContent>

                </Card>
            </Box>
        </Box>
    );
};

export default PricePackage;