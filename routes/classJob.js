/*
 * @Author: your name
 * @Date: 2021-03-30 17:41:50
 * @LastEditTime: 2021-04-07 00:36:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \classAssistingServe\routes\classJob.js
 */
const router = require('koa-router')()
const ClassJob = require('../dbs/models/classjob')
const {uploadImg, uploadFile, deleteFile} = require('../libs/upload')

router.prefix('/classJob')

router.post('/addJob', async function (ctx) {
  const classJob  = new ClassJob ({
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
    await classJob.save()
    code = 0
  } catch (error) {
    code = -1
  }

  ctx.body = {
    code: code
  }
})

router.get('/getJobLists', async function (ctx) {
  const data = await ClassJob.find()
  ctx.body = {
    code: 0,
    data
  }
  // ctx.body = 'this is a users/bar response'
})

router.get('/getJob', async function (ctx) {
  let id = ctx.request.query.id
  const data = await ClassJob.findOne({_id: id})
  ctx.body = {
    code: 0,
    data
  }
  // ctx.body = 'this is a users/bar response'
})

router.post('/doneJob', async function (ctx) {
    await ClassJob.where({
      _id: ctx.request.body.id
    }).update({
      isDone: ctx.request.body.isDone
    })
    ctx.body = {code: 0}
})

router.post('/deleteJob', async function(ctx) {
  await ClassJob.where({
    _id: ctx.request.body.id
  }).remove()
  ctx.body = {
    code: 0
  }
})

router.post('/updateClassJob', async function(ctx) {
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
