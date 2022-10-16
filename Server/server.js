const express = require('express')
const app = express()
const UserRouter = require('./Routes/UserRouter')
const PostRouter = require('./Routes/PostRouter')
const fileUpload = require('express-fileUpload')


const { ConnectDB } = require('./Config/ConnectDB')
require('dotenv').config()
app.use(express.json({limit:'50mb'}))

app.use(fileUpload({
    useTepFiles : true,
}));


app.use('/api/users', UserRouter)
app.use('/api/post', PostRouter)

ConnectDB()

const PORT = process.env.PORT || 7000

app.listen(PORT,err=> err? console.log(err) : console.log(`the server is running on ${PORT}`))