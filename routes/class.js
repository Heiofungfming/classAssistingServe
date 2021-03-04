/*
 * @Author: your name
 * @Date: 2021-03-01 16:29:32
 * @LastEditTime: 2021-03-02 15:25:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-learn\routes\class.js
 */
const router = require('koa-router')()
const Class = require('../dbs/models/class')

router.prefix('/class')

router.post('/addClass', async function (ctx) {
 
  const myClass = new Class({
    school: ctx.request.body.school,
    academy: ctx.request.body.academy,
    grade: ctx.request.body.grade,
    major: ctx.request.body.major,
    class: ctx.request.body.class,
    key: ctx.request.body.key
  })

  let code
  try {
    await myClass.save()
    code = 0
  } catch (error) {
    code = -1
  }

  ctx.body = {
    code: code
  }
})

module.exports = router
