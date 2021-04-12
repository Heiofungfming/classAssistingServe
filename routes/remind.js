/*
 * @Author: your name
 * @Date: 2021-04-06 18:06:16
 * @LastEditTime: 2021-04-06 18:18:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \classAssistingServe\routes\remind.js
 */
const router = require('koa-router')()
const Remind = require('../dbs/models/remind')
const {uploadImg, uploadFile, deleteFile} = require('../libs/upload')

router.prefix('/remind')

router.post('/addRemind', async function (ctx) {
  const remind  = new Remind ({
    tag: ctx.request.body.tag,
    title: ctx.request.body.title,
    detail: ctx.request.body.detail,
    endTime: ctx.request.body.endTime,
    image: ctx.request.body.image,
    doc: ctx.request.body.doc,
    isRemind: ctx.request.body.isRemind
  })

  let code
  try {
    await remind.save()
    code = 0
  } catch (error) {
    code = -1
  }

  ctx.body = {
    code: code
  }
})

router.get('/getRemindLists', async function (ctx) {
  const data = await Remind.find()
  ctx.body = {
    code: 0,
    data
  }
  // ctx.body = 'this is a users/bar response'
})

router.get('/getRemind', async function (ctx) {
  let id = ctx.request.query.id
  const data = await Remind.findOne({_id: id})
  ctx.body = {
    code: 0,
    data
  }
  // ctx.body = 'this is a users/bar response'
})

// router.post('/doneJob', async function (ctx) {
//     await Remind.where({
//       _id: ctx.request.body.id
//     }).update({
//       isDone: ctx.request.body.isDone
//     })
//     ctx.body = {code: 0}
// })

router.post('/deleteRemind', async function(ctx) {
  await Remind.where({
    _id: ctx.request.body.id
  }).remove()
  ctx.body = {
    code: 0
  }
})

router.post('/uploadImg', uploadImg)
router.post('/uploadFile', uploadFile)
router.post('/deleteFile', deleteFile)

module.exports = router
