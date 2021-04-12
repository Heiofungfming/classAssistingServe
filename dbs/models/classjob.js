/*
 * @Author: your name
 * @Date: 2021-03-30 17:32:58
 * @LastEditTime: 2021-03-30 18:15:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \classAssistingServe\dbs\models\classjob.js
 */
const mongoose = require('mongoose')

let classJobSchema = new mongoose.Schema({
  course: String,
  title: String,
  detail: String,
  remark: String,
  endTime: String,
  image: [],
  doc: [],
  // isDone: Boolean,
  isRemind: Boolean,
  isCollect: Boolean
})

module.exports = mongoose.model('classJob', classJobSchema)