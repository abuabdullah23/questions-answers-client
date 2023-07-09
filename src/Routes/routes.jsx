import Main from "../layout/Main";
import SeeAnswer from "../layout/SeeAnswer";
import Home from "../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import QuestionsAnswers from "../pages/QuestionsAnswers/QuestionsAnswers";
import ErrorPage from "../layout/ErrorPage";
import QADetails from "../pages/QA/QADetails/QADetails";
import AskQuestion from "../pages/QA/AskQuestion/AskQuestion";

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
            },
            {
                path: 'ask-question',
                element: <AskQuestion />
            },
            {
                path: 'qa-details/:id',
                element: <QADetails />,
                loader: ({ params }) => fetch(`https://question-answer-server.vercel.app/qa-details/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;