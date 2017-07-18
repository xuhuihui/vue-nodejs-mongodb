'use strict'
const models = require('./db')
const express = require('express')
const router = express.Router()
  // 创建账号接口
router.post('/api/login/createAccount', (req, res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newAccount = new models.Login({
    account: req.body.account,
    password: req.body.password
  })
  // 保存数据newAccount数据进mongoDB
  newAccount.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('createAccount successed')
    }
  })
})
// 获取已有账号接口
router.get('/api/login/getAccount', (req, res) => {
  let whereStr = { 'account': req.body.account }
  // 通过模型去查找数据库
  models.Login.find(whereStr).find((err, data) => {
    if (err) {
      res.send(err)
      console.log(1)
    } else {
      if (data.password === req.body.password) {
        res.send(true)
      } else {
        res.send(false)
      }
    }
  })
})
module.exports = router
