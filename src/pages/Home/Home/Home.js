import React from 'react';
import Banner from '../Banner/Banner';
import Branding from '../Branding/Branding';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import JobCategories from '../JobCategories/JobCategories';
import Testimonials from '../Testimonials/Testimonials';
import Company from './Company/Company';

const Home = () => {
    return (
        <>
            <Banner />
            <Branding />
            <JobCategories />
            <FeatureJobs />
            <Testimonials />
            <Company />
        </>
    );
};

export default Home;