import Main from "../layout/Main";
import QALayout from "../layout/QALayout";
import Home from "../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import QuestionsAnswers from "../pages/QuestionsAnswers/QuestionsAnswers";
import ErrorPage from "../layout/ErrorPage";
import QADetails from "../pages/QA/QADetails/QADetails";
import AskQuestion from "../pages/QA/AskQuestion/AskQuestion";
import DisplayAnswerLayout from "../layout/DisplayAnswerLayout";

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

    // QALayout
    {
        path: "qa/",
        element: <QALayout />,
        children: [
            {
                path: 'display-qa',
                element: <QuestionsAnswers />
            },
            {
                path: 'ask-question',
                element: <AskQuestion />
            },

        ]
    },

    // DisplayAnswerLayout
    {
        path: 'display-answer/',
        element: <DisplayAnswerLayout />,
        children: [
            {
                path: 'details/:id',
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