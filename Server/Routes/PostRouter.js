const express = require('express')
const router = express.Router()
const PostController = require('../Controllers/PostController')
const {AuthMiddleware} = require('../Middlewares/AuthMiddleware')

router.post('/',AuthMiddleware,PostController.AddPost)
router.post('/',AuthMiddleware,PostController.GetAllPost)

module.exports = router