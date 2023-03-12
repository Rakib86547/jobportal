import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Contact from "../../pages/Contact/Contact";
import FindJobs from "../../pages/FindJobs/FindJobs";
import Home from "../../pages/Home/Home/Home";
import Error from "../../pages/Share/Error/Error";

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
    ],
}]);
export default router;