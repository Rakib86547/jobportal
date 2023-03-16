import React from 'react';
import Banner from '../Banner/Banner';
import Branding from '../Branding/Branding';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import JobCategories from '../JobCategories/JobCategories';

const Home = () => {
    return (
        <>
            <Banner />
            <Branding />
            <JobCategories />
            <FeatureJobs />
        </>
    );
};

export default Home;