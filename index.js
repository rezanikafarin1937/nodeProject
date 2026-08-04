const express = require('express')
const app = express()
const pagesRoute = require('./router/PagesRoutes')

app.use(express.static('public'))

app.use("/",pagesRoute)


app.listen(8000)



