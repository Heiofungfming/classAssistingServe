/*
 * @Author: your name
 * @Date: 2021-03-03 23:05:56
 * @LastEditTime: 2021-03-03 23:16:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \classAssistingServer\dbs\models\job.js
 */

const mongoose = require('mongoose')

let jobSchema = new mongoose.Schema({
  course: String,
  title: String,
  detail: String,
  remark: String,
  endTime: String,
  image: String,
  doc: String,
  isRemind: Boolean,
  isCollect: Boolean
})

module.exports = mongoose.model('job', jobSchema)