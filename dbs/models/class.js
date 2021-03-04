/*
 * @Author: your name
 * @Date: 2021-03-01 16:32:23
 * @LastEditTime: 2021-03-01 16:42:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-learn\dbs\models\class.js
 */
const mongoose = require('mongoose')

let classSchema = new mongoose.Schema({
  school: String,
  academy: String,
  grade: String,
  major: String,
  class: String,
  key: Number
})

module.exports = mongoose.model('class', classSchema)