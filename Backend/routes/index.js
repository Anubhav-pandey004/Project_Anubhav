const express = require('express')
const router =express.Router()
const wrapAsync = require('../utils/wrapAsync')
const signup = require('../controller/signup')
const login = require('../controller/login')
const authToken = require('../middleware/authtoken')
const userDetails = require('../controller/userDetails')
const createPost = require('../controller/createPost')
const getQuestionDetails = require('../controller/getQuestionDetails')
const addcomment  = require('../controller/addcomment')
const addAnswer = require('../controller/addAnswer')

router
    .route("/signup")
    .post(signup)

router
    .route("/login")
    .post(wrapAsync(login))    

router
    .route("/userDetails")
    .get(authToken, wrapAsync(userDetails.userDetails))

router
    .route("/new-post")
    .post(authToken, wrapAsync(createPost))   
    
router
    .route("/question")
    .post((getQuestionDetails))   
    
router
    .route("/addcomment")
    .post(authToken, wrapAsync(addcomment))
   
router
    .route("/new-answer")
    .post(authToken,wrapAsync(addAnswer))

module.exports=router 