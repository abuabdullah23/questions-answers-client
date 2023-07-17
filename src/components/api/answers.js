// save answer in server
export const saveAnswer = async answerData => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/questions-answers`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(answerData),
    })

    const data = await response.json()
    return data;
}

// get all Answers
export const getAllAnswers = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/questions-answers`)
    const data = await response.json();
    return data;
}