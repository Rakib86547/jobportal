import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/swiper.min.css';
import '../../../App.css';
import img1 from '../../../assests/Brand/1.png';
import img2 from '../../../assests/Brand/2.png';
import img3 from '../../../assests/Brand/3.png';
import img4 from '../../../assests/Brand/4.png';
import img5 from '../../../assests/Brand/5.png';
import { Box, Hidden } from '@mui/material';


const Branding = () => {
    return (
        <Box sx={{
            margin: '50px 0',
            padding: '20px 0'
        }}>
            <Hidden lgDown>
                <Swiper
                    loop={true}
                    slidesPerView={5}
                    centeredSlides={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src={img1} className='w-[115px] brand-img text-center m-auto cursor-pointer duration-300 grayscale hover:grayscale-0' alt='' /> </SwiperSlide>
                    <SwiperSlide><img src={img2} className='w-[115px] brand-img text-center m-auto cursor-pointer duration-300 grayscale hover:grayscale-0' alt='' /></SwiperSlide>
                    <SwiperSlide><img src={img3} className='w-[115px] brand-img text-center m-auto cursor-pointer duration-300 grayscale hover:grayscale-0' alt='' /></SwiperSlide>
                    <SwiperSlide><img src={img4} className='w-[115px] brand-img text-center m-auto cursor-pointer duration-300 grayscale hover:grayscale-0' alt='' /></SwiperSlide>
                    <SwiperSlide><img src={img5} className='w-[115px] brand-img text-center m-auto cursor-pointer duration-300 grayscale hover:grayscale-0' alt='' /></SwiperSlide>
                    <SwiperSlide><img src={img5} className='w-[115px] brand-img text-center m-auto cursor-pointer duration-300 grayscale hover:grayscale-0' alt='' /></SwiperSlide>
                    <SwiperSlide><img src={img5} className='w-[115px] brand-img text-center m-auto cursor-pointer duration-300 grayscale hover:grayscale-0' alt='' /></SwiperSlide>
                    <SwiperSlide><img src={img5} className='w-[115px] brand-img text-center m-auto cursor-pointer duration-300 grayscale hover:grayscale-0' alt='' /></SwiperSlide>
                </Swiper>
            </Hidden>
        </Box>
    );
};

export default Branding;