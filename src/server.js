
// Server
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}= require('./pages')

//nunjucks settings
const nunjucks = require('nunjucks')
nunjucks.configure('src/views' , {
    express: server,
    noCache: true,
})


server
// statics archives settings
.use(express.static("public"))

// receive datas from req.body
.use(express.urlencoded({ extended: true }))
// rotes of the application
.get("/index", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

