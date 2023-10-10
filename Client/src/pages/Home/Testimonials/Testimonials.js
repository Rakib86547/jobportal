import { Box, Hidden, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../../../Components/Button/SectionTitle/SectionTitle';
import image1 from '../../../assests/Testimonials/testimonial-left.png';
import image2 from '../../../assests/Testimonials/testimonial-right.png';
import image3 from '../../../assests/Testimonials/1.png';
import image4 from '../../../assests/Testimonials/2.png';
import image5 from '../../../assests/Testimonials/3.png';
import '../../../App.css';

const Testimonials = () => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        cssEase: "linear"
    };
    return (
        <Box sx={{ padding: '60px 0', marginBottom: '40px' }}>
            <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
                <SectionTitle title='Our Customers Feedback' />
                <Typography >Know your worth and find the job that qualify your life</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Hidden lgDown>
                    <Box sx={{ width: '25%' }}>
                        <img src={image1} alt='' />
                    </Box>
                </Hidden>

                <Box sx={{ width: { lg: '50%', md: '100%', sm: '100%', xs: '100%' }, textAlign: 'center', }}>
                    <Slider {...settings}>
                        <Box>
                            <img src={image3} className='w-[120px] h-[120px] brand-img text-center m-auto' alt='' />
                            <Box sx={{ marginTop: '50px' }}>
                                <Typography>Professionally procrastinate emerging growth strategies vis-a-vis team building infomediaries. Phosfluorescently e-enable functionalized opportunities rather than maintainable web-readiness. Collaboratively iterate stand-alone.</Typography>
                                <Typography variant='h6' sx={{ marginTop: '40px' }}>Jhone Khan</Typography>
                                <Typography variant='body1'>Web Developer</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <img src={image4} className='w-[120px] h-[120px] brand-img text-center m-auto' alt='' />
                            <Box sx={{ marginTop: '50px' }}>
                                <Typography>Professionally procrastinate emerging growth strategies vis-a-vis team building infomediaries. Phosfluorescently e-enable functionalized opportunities rather than maintainable web-readiness. Collaboratively iterate stand-alone.</Typography>
                                <Typography variant='h6' sx={{ marginTop: '40px' }}>Jhone Khan</Typography>
                                <Typography variant='body1'>Web Developer</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <img src={image5} className='w-[120px] h-[120px] brand-img text-center m-auto' alt='' />
                            <Box sx={{ marginTop: '50px' }}>
                                <Typography>Professionally procrastinate emerging growth strategies vis-a-vis team building infomediaries. Phosfluorescently e-enable functionalized opportunities rather than maintainable web-readiness. Collaboratively iterate stand-alone.</Typography>
                                <Typography variant='h6' sx={{ marginTop: '40px' }}>Jhone Khan</Typography>
                                <Typography variant='body1'>Web Developer</Typography>
                            </Box>
                        </Box>
                    </Slider>
                </Box>

                <Hidden lgDown>
                    <Box sx={{ width: '25%' }}>
                        <img src={image2} alt='' />
                    </Box>
                </Hidden>
            </Box>

            <>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Hidden lgDown>
                    <Box sx={{ width: '25%' }}>
                        <img src={image1} alt='' />
                    </Box>
                </Hidden>

                <Box sx={{ width: { lg: '50%', md: '100%', sm: '100%' }, textAlign: 'center', }}>
                    <Slider {...settings}>                       
                        <Box>
                            <img src={image3} className='w-[120px] h-[120px] brand-img text-center m-auto' alt='' />
                            <Box sx={{ marginTop: '50px' }}>
                                <Typography>Professionally procrastinate emerging growth strategies vis-a-vis team building infomediaries. Phosfluorescently e-enable functionalized opportunities rather than maintainable web-readiness. Collaboratively iterate stand-alone.</Typography>
                                <Typography variant='h6' sx={{ marginTop: '40px' }}>Jhone Khan</Typography>
                                <Typography variant='body1'>Web Developer</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <img src={image3} className='w-[120px] h-[120px] brand-img text-center m-auto' alt='' />
                            <Box sx={{ marginTop: '50px' }}>
                                <Typography>Professionally procrastinate emerging growth strategies vis-a-vis team building infomediaries. Phosfluorescently e-enable functionalized opportunities rather than maintainable web-readiness. Collaboratively iterate stand-alone.</Typography>
                                <Typography variant='h6' sx={{ marginTop: '40px' }}>Jhone Khan</Typography>
                                <Typography variant='body1'>Web Developer</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <img src={image3} className='w-[120px] h-[120px] brand-img text-center m-auto' alt='' />
                            <Box sx={{ marginTop: '50px' }}>
                                <Typography>Professionally procrastinate emerging growth strategies vis-a-vis team building infomediaries. Phosfluorescently e-enable functionalized opportunities rather than maintainable web-readiness. Collaboratively iterate stand-alone.</Typography>
                                <Typography variant='h6' sx={{ marginTop: '40px' }}>Jhone Khan</Typography>
                                <Typography variant='body1'>Web Developer</Typography>
                            </Box>
                        </Box>
                    </Slider>                    
                </Box>

                <Hidden lgDown>
                    <Box sx={{ width: '25%' }}>
                        <img src={image2} alt='' />
                    </Box>
                </Hidden>
            </Box> */}
            </>
        </Box>
    );
};

export default Testimonials;