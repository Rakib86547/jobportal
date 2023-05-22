import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Contact from "../../pages/Contact/Contact";
import FindJobs from "../../pages/FindJobs/FindJobs";
import Home from "../../pages/Home/Home/Home";
import Error from "../../pages/Share/Error/Error";
import Login from "../../pages/Share/Login/Login";
import Signup from "../../pages/Share/Signup/Signup";
import CategoriesJobs from "../../pages/CategoriesJobs/CategoriesJobs";
import JobDetails from "../../pages/JobDetails/JobDetails";
import MyProfile from "../../pages/MyProfile/MyProfile";
import MyResume from "../../pages/MyResume/MyResume";
import AppliedJobs from "../../pages/AppliedJobs/AppliedJobs";
import CVManager from "../../pages/CVManager/CVManager";
import CompanyProfile from "../../pages/CompanyProfile/CompanyProfile";
import PostJob from "../../pages/PostJob/PostJob";
import ManageJobs from "../../pages/ManageJobs/ManageJobs";
import AllApplicants from "../../pages/AllApplicants/AllApplicants";
import DashboardLayout from "../../Layout/Main/Dashboard/DashboardLayout";
import Welcome from "../../pages/Welcome/Welcome";
import EditProfile from "../../pages/EditProfile/EditProfile";


const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/find-jobs',
            element: <FindJobs />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Signup />
        },
        {
            path: 'api/v1/jobs/:category',
            element: <CategoriesJobs />
        },
        {
            path: 'api/v1/jobs/job-details/:id',
            element: <JobDetails />,
        },
    ],
},

{
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
        {
            path: '/dashboard',
            element: <Welcome />
        },
        {
            path: '/dashboard/profile',
            element: <MyProfile />
        },
        {
            path: '/dashboard/resume',
            element: <MyResume />
        },
        {
            path: '/dashboard/applied-job',
            element: <AppliedJobs />
        },
        {
            path: '/dashboard/cv-manager',
            element: <CVManager />
        },
        {
            path: '/dashboard/company-profile',
            element: <CompanyProfile />
        },
        {
            path: '/dashboard/post-job',
            element: <PostJob />
        },
        {
            path: '/dashboard/manage-jobs',
            element: <ManageJobs />
        },
        {
            path: '/dashboard/all-applicants',
            element: <AllApplicants />
        },
        {
            path: '/dashboard/profile',
            element: <MyProfile />
        },
        {
            path: '/dashboard/edit-profile',
            element: <EditProfile />
        }
    ]
},
]);
export default router;