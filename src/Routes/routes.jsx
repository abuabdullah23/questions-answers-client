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
import AllPendingQuestions from "../pages/AdminPages/AllPendingQuestions/AllPendingQuestions";
import GiveAnswerLayout from "../layout/GiveAnswerLayout";
import { getAllQuestions, getSingleQuestion } from "../components/api/questions";
import WriteAnswer from "../pages/AdminPages/WriteAnswer/WriteAnswer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                index: true
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
                loader: ({ params }) => fetch(`${import.meta.env.VITE_BASE_URL_API}/qa-details/${params.id}`)
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
                element: <AskQuestionForm />
            },
        ]
    },

    // Give Answer Layout
    {
        path: 'give-answer/',
        element: <GiveAnswerLayout />,
        children: [
            {
                path: 'see-all-questions',
                element: <AllPendingQuestions />,
                loader: () => getAllQuestions(),
            },
            {
                path: ':id',
                element: <WriteAnswer />,
                loader: ({ params }) => getSingleQuestion(params.id)
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;