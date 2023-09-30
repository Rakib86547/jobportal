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
import EditPersonalInformation from "../../pages/Personal/EditPersonalInformation";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import EditCompanyProfile from "../../pages/CompanyProfile/EditCompanyProfile";
import ManageJobDetails from "../../pages/ManageJobs/ManageJobDetails";
import Applicants from "../../pages/ManageJobs/Applicants";
import ApplierDetails from "../../pages/ManageJobs/ApplierDetails";
import SearchJobs from "../../pages/Home/Banner/SearchJobs";



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
        {
            path: '/search-jobs',
            element: <SearchJobs />
        }
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
            element: <PrivetRoute><MyProfile /></PrivetRoute>
        },
        {
            path: '/dashboard/edit-profile',
            element: <EditProfile />
        },
        {
            path: '/dashboard/edit-personal',
            element: <PrivetRoute ><EditPersonalInformation /></PrivetRoute>
        },
        {
            path: '/dashboard/edit-company-information',
            element: <PrivetRoute ><EditCompanyProfile /></PrivetRoute>
        },
        {
            path: '/dashboard/manage-jobs/:id',
            element: <PrivetRoute><ManageJobDetails /></PrivetRoute>,
        },
        {
            path: '/dashboard/applicants/:id',
            element: <PrivetRoute><Applicants /></PrivetRoute>,
        },
        {
            path: '/dashboard/applier/:email',
            element: <PrivetRoute><ApplierDetails /></PrivetRoute>,
        },
    ]
}
]);
export default router;