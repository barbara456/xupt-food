<template>
  <div class="container">
    <input 
      class="loginUserName"
      v-model="userName"  
      placeholder="请输入用户名">
    <input 
      type="password" 
      class="loginPassword"
      maxlength="20" 
      v-model="password"  
      placeholder="请输入密码"
    >
    <button class="loginButton" @click="login()">登录</button>
  </div>
</template>

<script>
import {useUrl} from '../config/api_url';
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      userName:'',
      password:''
    };
  },
  methods: {
    login() {
      axios
        .post(`${useUrl}/login`, {
          userName: this.userName,
          password: this.password
        })
        .then(res => {
          const data = res.data;
          if(!!data) {
            this.$router.push('/home')
          } else {
            alert('用户名或密码错误');
          }
          
        })
        .catch(err => {
          alert('登录失败');
        });
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.container
  background: url('https://pic.pngbag.com/00/39/87/2e132f3ad7361ac2.jpg') no-repeat
  width:100%
  height:100%
  background-size:100% 100%
  position:absolute
  display flex
  flex-direction column
  justify-content center
  align-items center
  .loginUserName 
    background-color: transparent
    border 1px solid #ffffff
    padding 5px 10px
    border-radius 10px
    margin-bottom 10px
    color: #fff
  .loginPassword
    background-color: transparent
    border 1px solid #ffffff
    padding 5px 10px
    border-radius 10px
    margin-bottom 10px
    color: #fff
  .loginButton
    background: #ffffff
    border-radius: 32px
    border-color: #ffffff
    color: #000
    font-size: 14px
    height: auto
    padding: 8px 24px
</style>
