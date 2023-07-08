import Main from "../layout/Main";
import SeeAnswer from "../layout/SeeAnswer";
import Home from "../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import QuestionsAnswers from "../pages/QuestionsAnswers/QuestionsAnswers";
import ErrorPage from "../layout/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: "qa/",
        element: <SeeAnswer />,
        children: [
            {
                path: 'see-answer',
                element: <QuestionsAnswers />
            }
        ]
    }, 
    {
        path: '*',
        element: <ErrorPage/>
    }
]);

export default router;