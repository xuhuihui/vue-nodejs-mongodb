<template>
  <div class="login">
    <div id="CSStransforms" class="login-header">
      <div class="square el">Wellcome the world!</div>
    </div>
    <el-form class="login-pannel" label-width="80px" :rules="rules" ref="ruleForm" :model="ruleForm">
      <el-form-item label="用户名:" prop="name">
        <el-input placeholder="用户名" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" @keyup.enter.native="login('ruleForm')" placeholder="登录密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-panel__submit" size="large" type="primary" @click="login('ruleForm')">登录</el-button>
        <el-button class="login-panel__submit" size="large" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import anime from 'animejs'
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            account: this.ruleForm.name,
            password: this.ruleForm.pass
          }
          this.$http.get('/api/login/getAccount', params)
            .then((response) => {
              let result = response.body
              if (result === true) {
                this.$message({
                  message: '登录成功',
                  type: 'success'
                })
                sessionStorage.setItem('user', JSON.stringify(this.ruleForm.name))
                this.$router.push({path: '/home'})
              } else {
                this.$message.error('登录失败')
              }
            })
            .catch((reject) => {
              console.log(reject)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    register () {
      let params = {
        account: this.ruleForm.name,
        password: this.ruleForm.pass
      }
      this.$http.post('/api/login/createAccount', params)
        .then((response) => {
          this.$message({
            message: '注册成功',
            type: 'success'
          })
        })
        .catch((reject) => {
          this.$message.error('注册失败')
        })
    },
    drawTitle () {
      anime({
        targets: '#CSStransforms .el',
        scale: 4, // Animate all divs scale to 2
        rotate: '1turn' // Animate all divs rotation to 1 turn
      })
    }
  },
  mounted () {
    this.drawTitle()
  }
}
</script>
<style lang="scss" scoped>
.login {
  &-header {

    div {
      // font-size: 30px;
      color: #20DECE;
      // background:red;
    }
    margin: 200px 0;
  }
  &-pannel {
    width: 25%;
    margin: 0 auto;
  }
}
</style>
