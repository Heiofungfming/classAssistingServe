/*
 * @Author: your name
 * @Date: 2021-02-23 20:35:09
 * @LastEditTime: 2021-02-24 16:09:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-learn\dbs\models\person.js
 */
const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({
  name: String,
  age: Number
})

module.exports =  mongoose.model('Person', personSchema)