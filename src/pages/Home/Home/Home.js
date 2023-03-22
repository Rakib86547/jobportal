import React from 'react';
// import LoginSignup from '../../Share/LoginSignup/LoginSignup';
import Banner from '../Banner/Banner';
import Branding from '../Branding/Branding';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import JobCategories from '../JobCategories/JobCategories';
import PricePackage from '../PricePackege/PricePackage';
import Testimonials from '../Testimonials/Testimonials';
import Company from './Company/Company';

const Home = () => {
    return (
        <>
            {/* <LoginSignup /> */}
            <Banner />
            <Branding />
            <JobCategories />
            <FeatureJobs />
            <Testimonials />
            <Company />
            <PricePackage />
        </>
    );
};

export default Home;