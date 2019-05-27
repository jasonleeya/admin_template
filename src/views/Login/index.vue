<template>
   <div class="login">
      <p class="title">登录</p>
      <el-input class="input-user-name"
                placeholder="请输入内容"
                v-model="userName"
                clearable>
      </el-input>
      <el-input class="input-password" placeholder="请输入密码"
                v-model="password"
                show-password>
      </el-input>
      <el-checkbox v-model="isRememberPwd">
         记住密码
      </el-checkbox>
      <el-input v-model="captcha" class="input-captcha">
         <div slot="append">
            <captcha  :content-height="34"
                      :content-width="120"
            ></captcha>
         </div>
      </el-input>


   </div>
</template>

<script>
    import Captcha from './Captcha'

    export default {
        name: "Login",
        components: {
            Captcha
        },
        data() {
            return {
                userName: '',
                password: '',
                isRememberPwd: false,
                captcha:'1234'
            }
        },
    }
</script>
<style lang="scss">
 .login {
 .el-input-group__append, .el-input-group__prepend {
    padding: 0 0!important;
    margin: 0!important;
 }
    .input-captcha input {
      letter-spacing: 4px;
    }
 }
</style>
<style scoped lang="scss">
   .login {
      position: absolute;
      width: 200px;
      margin: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .title {
         text-align: center;
         margin-bottom: 20px;
      }

      .input-user-name {
         margin-bottom: 20px;
      }

   }
</style>
