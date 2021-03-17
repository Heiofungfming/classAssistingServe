/*
 * @Author: your name
 * @Date: 2021-02-23 20:21:05
 * @LastEditTime: 2021-03-17 13:42:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-learn\app.js
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koaBody = require('koa-body')

app.use(koaBody({
  multipart: true, // 允许上传多个文件
  formidable: {
    maxFieldsSize: 200 * 1024 * 1024,
    keepExtensions: true
  }
}))
// 引入mongoose
const mongoose = require('mongoose')
const dbConfig = require('./dbs/config')

const index = require('./routes/index')
const users = require('./routes/users')
const myClass = require('./routes/class')
const job = require('./routes/job')

// 解决跨域CORS
const cors = require('./libs/koa-cors')
// const cors = require('koa2-cors'); //跨域处理

// error handler
onerror(app)


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(cors)

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(myClass.routes(), myClass.allowedMethods())
app.use(job.routes(), myClass.allowedMethods())


// 配置mongoose数据库
mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})



// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
