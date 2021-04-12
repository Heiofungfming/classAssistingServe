/*
 * @Author: your name
 * @Date: 2021-03-03 23:21:31
 * @LastEditTime: 2021-04-07 00:33:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \classAssistingServer\routes\job.js
 */

const router = require('koa-router')()
const Job = require('../dbs/models/job')
const {uploadImg, uploadFile, deleteFile} = require('../libs/upload')

router.prefix('/job')

router.post('/addJob', async function (ctx) {
  const job = new Job({
    course: ctx.request.body.course,
    title: ctx.request.body.title,
    detail: ctx.request.body.detail,
    remark: ctx.request.body.remark,
    endTime: ctx.request.body.endTime,
    image: ctx.request.body.image,
    doc: ctx.request.body.doc,
    done: ctx.request.body.done,
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

router.get('/getJobLists', async function (ctx) {
  const data = await Job.find()
  ctx.body = {
    code: 0,
    data
  }
  // ctx.body = 'this is a users/bar response'
})

router.get('/getJob', async function (ctx) {
  let id = ctx.request.query.id
  const data = await Job.findOne({_id: id})
  ctx.body = {
    code: 0,
    data
  }
  // ctx.body = 'this is a users/bar response'
})

router.post('/doneJob', async function (ctx) {
    await Job.where({
      _id: ctx.request.body.id
    }).update({
      isDone: ctx.request.body.isDone
    })
    ctx.body = {code: 0}
})

router.post('/deleteJob', async function(ctx) {
  await Job.where({
    _id: ctx.request.body.id
  }).remove()
  ctx.body = {
    code: 0
  }
})

router.post('/updateJob', async function(ctx) {
  await Job.findByIdAndUpdate(
    ctx.request.body._id, 
    {
      course: ctx.request.body.course,
      title: ctx.request.body.title,
      detail: ctx.request.body.detail,
      remark: ctx.request.body.remark,
      endTime: ctx.request.body.endTime,
      image: ctx.request.body.image,
      doc: ctx.request.body.doc,
      done: ctx.request.body.done,
      isRemind: ctx.request.body.isRemind,
      isCollect: ctx.request.body.isCollect
    })
  ctx.body = {
    code: 0
  }
})

router.post('/uploadImg', uploadImg)
router.post('/uploadFile', uploadFile)
router.post('/deleteFile', deleteFile)

module.exports = router

