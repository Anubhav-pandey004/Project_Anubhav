


const backendDomin = "http://localhost:8080"

const SummaryApi={
    signup:{
        url: `${backendDomin}/signup`,
        method: "POST"
    },
    login:{
        url: `${backendDomin}/login`,
        method: "POST"
    },
    userDetails:{
        url: `${backendDomin}/userDetails`,
        method: "GET"
    },
    newPost:{
        url: `${backendDomin}/new-post`,
        method: "POST"
    },
    question:{
        url: `${backendDomin}/question`,
        method: "POST"
    },
    addcomment:{
        url: `${backendDomin}/addcomment`,
        method: "POST"
    },
    getCommentDetails:{
        url: `${backendDomin}/getCommentDetails`,
        method: "POST"
    },
    newAnswer:{
        url: `${backendDomin}/new-answer`,
        method : "POST"
    }
}
export default SummaryApi