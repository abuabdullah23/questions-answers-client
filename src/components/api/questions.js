// save a question from user
export const askQuestion = async qData => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/questions`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(qData),
    })

    const data = await response.json()
    return data;
}

// get all Questions
export const getAllQuestions = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/questions`)
    const data = await response.json();
    return data;
}

// get single Question
export const getSingleQuestion = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/question/${id}`)
    const data = await response.json();
    return data;
}

// delete question after send answer successfully
export const deleteSingleQuestion = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/question/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const data = await response.json();
    return data;
}