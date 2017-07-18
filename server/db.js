// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose')
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/xuhuihui')

// 为这次连接绑定事件
const db = mongoose.connection
db.once('error', () => console.log('Mongo connection error'))
db.once('open', () => console.log('Mongo connection successed'))
const loginSchema = mongoose.Schema({
  account: String,
  password: String
})
const Models = {
  Login: mongoose.model('users', loginSchema)
}
module.exports = Models

// var mongoose = require('mongoose')
// var db = mongoose.connect('mongodb://localhost/xuhuihui')
// var Schema = mongoose.Schema
// var userScheMa = new Schema({
//   account: String,
//   password: String
// }) //  定义了一个新的模型，但是此模式还未和users集合有关联
// exports.user = db.model('users', userScheMa)
