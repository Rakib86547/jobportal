import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Main/Dashboard/Dashboard";
import Main from "../../Layout/Main/Main";
import Contact from "../../pages/Contact/Contact";
import FindJobs from "../../pages/FindJobs/FindJobs";
import Home from "../../pages/Home/Home/Home";
import Error from "../../pages/Share/Error/Error";
import Login from "../../pages/Share/Login/Login";
import Signup from "../../pages/Share/Signup/Signup";

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
    ],
},

{
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <Error />,
    children: [

    ]
}

]);
export default router;