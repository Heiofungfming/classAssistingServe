/*
 * @Author: your name
 * @Date: 2021-04-06 18:03:41
 * @LastEditTime: 2021-04-06 18:05:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \classAssistingServe\dbs\models\remind.js
 */

const mongoose = require('mongoose')

let remindSchema = new mongoose.Schema({
  tag: String,
  title: String,
  detail: String,
  remark: String,
  endTime: String,
  image: [],
  doc: [],
  isRemind: Boolean
})

module.exports = mongoose.model('remind', remindSchema)