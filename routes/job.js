/*
 * @Author: your name
 * @Date: 2021-03-03 23:21:31
 * @LastEditTime: 2021-03-03 23:53:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \classAssistingServer\routes\job.js
 */

const router = require('koa-router')()
const Job = require('../dbs/models/job')

router.prefix('/job')

router.post('/addJob', async function (ctx) {
  console.log(ctx.request.body)
  const job = new Job({
    course: ctx.request.body.course,
    title: ctx.request.body.title,
    detail: ctx.request.body.detail,
    remark: ctx.request.body.remark,
    endTime: ctx.request.body.endTime,
    image: ctx.request.body.image,
    doc: ctx.request.body.doc,
    isRemind: ctx.request.body.isRemind,
    isCollect: ctx.request.body.isCollect
  })

  let code
  try {
    await job.save()
    code = 0
  } catch (error) {
    code = -1
  }

  ctx.body = {
    code: code
  }
})

module.exports = router

