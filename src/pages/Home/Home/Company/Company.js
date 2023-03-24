import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import SectionTitle from '../../../../Components/Button/SectionTitle/SectionTitle';
import company1 from '../../../../assests/Company/company-1.png';
import company2 from '../../../../assests/Company/company-2.png';
import company3 from '../../../../assests/Company/company-3.png';
import company4 from '../../../../assests/Company/company-4.png';
import company5 from '../../../../assests/Company/company-5.png';
import company6 from '../../../../assests/Company/company-6.png';
import { Link } from 'react-router-dom';
import StyleButton from '../../../../Components/Button/StyleButton';
import { CiLocationOn } from 'react-icons/ci'

const companies = [
    {
        "image": company1,
        "name": "Drop box",
        "location": "london"
    },
    {
        "image": company2,
        "name": "Drop box",
        "location": "london"
    },
    {
        "image": company3,
        "name": "Drop box",
        "location": "london"
    },
    {
        "image": company4,
        "name": "Drop box",
        "location": "london"
    },
    {
        "image": company5,
        "name": "Drop box",
        "location": "london"
    },
    {
        "image": company6,
        "name": "Drop box",
        "location": "london"
    },
]

const Company = () => {
    const settings = {
        dots: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Box sx={{ padding: '60px 0' }}>
            <Box sx={{ textAlign: 'center', margin: '50px 0px' }}>
                <SectionTitle title='Top Company' />
                <Typography >Some of the companies we have helped recruit excellent applicants over the years.</Typography>
            </Box>

            {/* ------------slider ----------*/}
            <Slider {...settings}>
                {
                    companies.map((company, i) =>
                        <Box key={i} >
                            <Card sx={{
                                // maxWidth: 345, 
                                textAlign: 'center',
                                padding: '30px',
                                boxShadow: 'none',
                                border: '1px solid #e3f8e2',
                                // '&:hover': { boxShadow: '0 6px 15px rgba(64,79,104,.05)' }
                            }} className=''>
                                <figure className='w-[90px] h-[90px] m-auto rounded-full'>
                                    <img className='' src={company.image} alt='' />
                                </figure>
                                <CardContent>
                                    <Link>
                                        <Typography
                                            sx={{
                                                fontSize: '18px',
                                                fontWeight: 500,
                                                '&:hover': { color: 'primary.base', transition: '.3s' }
                                            }} gutterBottom variant="h5" component="div">
                                            {company.name}
                                        </Typography>
                                    </Link>
                                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <CiLocationOn />
                                        <Typography variant="body2" color="text.secondary">
                                            {company.location}
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <StyleButton title='15 open position' className='bg-[#e3f8e2] duration-500 max-w-[300px] w-full hover:bg-[#1DBF73] hover:text-[#fff] py-[18px] px-[35px] text-[#1DBF73] rounded' />
                            </Card>
                        </Box>)
                }
            </Slider>
        </Box>
    );
};

export default Company;