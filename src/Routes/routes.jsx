import Main from "../layout/Main";
import QALayout from "../layout/QALayout";
import Home from "../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import QuestionsAnswers from "../pages/QuestionsAnswers/QuestionsAnswers";
import ErrorPage from "../layout/ErrorPage";
import QADetails from "../pages/QA/QADetails/QADetails";
import DisplayAnswerLayout from "../layout/DisplayAnswerLayout";
import AskQuestionLayout from "../layout/AskQuestionLayout";
import AskQuestionForm from "../pages/QA/AskQuestionForm/AskQuestionForm";

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
    // Ask Question Layout
    {
        path: 'ask-question/',
        element: <AskQuestionLayout />,
        children: [
            {
                path: 'question-form',
                element: <AskQuestionForm/>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;