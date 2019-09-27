<template>
  <div class="reg_register">
    <div class="top">
      <router-link to="/">
        <img src="../../../public/images/reg_img/logo.png" />
      </router-link>
      <img src="../../../public/images/reg_img/telephone.png" />
    </div>
    <div class="middle">
      <div class="middle-body">
        <div class="middle-body-head1">
          <dd>1</dd>
          <p class="active">填写手机号验证</p>
        </div>
        <div class="middle-body-head2">
          <dd>2</dd>

          <p :class="page<2?'':'active'">设置密码</p>
        </div>
        <div class="middle-body-head3">
          <dd>3</dd>

          <p :class="page<3?'':'active'">注册完成</p>
        </div>
        <div class="middle-body-body">
          <div class="middle-body-body1" v-if="page==1">
            <div class="body1-check">
              <span>&nbsp;&nbsp;&nbsp;手机号码</span>
              <input
                class="input1"
                type="text"
                placeholder="请输入手机号码"
                v-model="loginName"
                maxlength="11"
                @blur="regPhone"
              />
              <span class="body1-checktext1" ref="input111"></span>
            </div>
            <div class="body1-check">
              <span>图形验证码</span>
              <input
                class="input2"
                type="text"
                placeholder="请输入验证码"
                maxlength="2"
                v-model="loginNumber"
                @blur="regNumber"
              />
              <num class="num" title="看不清，换一张"></num>
              <span class="body1-check-text2" ref="input222"></span>
            </div>
            <div class="body1-check">
              <span>手机验证码</span>
              <input
                class="input3"
                type="text"
                placeholder="请输入验证码"
                maxlength="6"
                v-model="loginMsg"
                @blur="regMsg"
              />
              <button>获取验证码</button>
              <span class="body1-check-text3" ref="input333"></span>
            </div>
            <div class="body1-agree">
              <input type="checkbox" id="checkboxbtn" v-model="ischecked" :checked="ischecked" />
              <label for="checkboxbtn"></label>
              <span class="check">我已阅读同意</span>
              <!-- <a href="#/" target="_block">《用户使用协议》</a> -->
              <router-link to="/UserAgreement">《用户使用协议》</router-link>
            </div>
            <button class="body1-next" @click="nextPage">下一步</button>
          </div>
          <div class="middle-body-body2" v-if="page==2">
            <div class="u">
              <span>账号密码</span>
              <input type="password" placeholder="6-16位字母/数字/符号,最少两类组成" minlength="6" maxlength="16" v-model="password" @blur="regP" />
              <span v-show="ushow" class="errmsg">{{uerrmsg}}</span>
            </div>
            <div class="getPass">
              <span :class="password.length>0&&password.length<9?'active':''">弱</span>
              <span :class="password.length>8&&password.length<13?'active':''">中</span>
              <span :class="password.length>12?'active':''">强</span>
            </div>
            <div class="p">
              <span>确认密码</span>
              <input type="password" placeholder="请再次输入以上密码" minlength="6" maxlength="16" v-model="checkPassword" @blur="checkP" />
              <span  class="errmsg">{{perrmsg}}</span>
            </div>
            <button @click="Login">提交</button>
          </div>
          <div class="middle-body-body3" v-if="page==3">
            <div>
              <img src="../../../public/images/reg_img/duihao.png" />
            </div>
            <div class="body3-text">
              <p>注册成功!</p>
              <p>恭喜成为悠哉网会员</p>
              <p>
                <span>您可以</span>
                <router-link to="/">登录首页</router-link>
                <span>或{{goLogin}}s后跳转首页</span>
              </p>
            </div>
          </div>
        </div>
        <router-link class="middle-body-buttom" @click="Login" to="javascript:;">立即登录</router-link>
      </div>
    </div>
    <div class="foot">
      <div class="foot_a">
        <router-link to="javascript:;">众信旅游</router-link>
        <router-link to="javascript:;">众信历程</router-link>
        <router-link to="javascript:;">众信品牌</router-link>
        <router-link to="javascript:;">营业网点</router-link>
        <router-link to="javascript:;">诚聘英才</router-link>
        <router-link to="javascript:;">商务合作</router-link>
      </div>
      <div class="foot_div">
        Copyright©2005-2018 Uzai.com&nbsp;&nbsp;&nbsp;&nbsp;许可证编号:L-TJ-CJ00059&nbsp;&nbsp;&nbsp;&nbsp;
        津ICP备18003064号&nbsp;&nbsp;&nbsp;&nbsp;悠哉呼叫中心来电显示号码为：10109898
      </div>
    </div>
  </div>
</template>
<script>
import Numberdx from "./Numberdx.vue";
import UserAgreement from "./UserAgreement.vue";
export default {
  components: {
    num: Numberdx
    // "user":UserAgreement,
  },
  data() {
    return {
      loginName: "",
      loginNumber: "",
      loginMsg: "",
      page: 1,
      ischecked: true,
      // 判断是否都是正确
      isok: { u: false, p: false, m: false },
      // 第二个模块
      password: "",
      checkPassword: "",
      uerrmsg:"",
      perrmsg:"",
      ushow:false,
      pshow:false,
      goLogin:5
      
    };
    console.log(loginName, loginNumber, loginMsg);
  },
  methods: {
    regMsg() {
      var msg = this.loginMsg;
      var regMsg = /^[0-9]{6}$/;

      if (!regMsg.test(msg)) {
        this.$refs.input333.innerHTML = "请输入短信验证码!";
        this.isok.m = false;
        return;
      } else {
        this.isok.m = true;
      }
      this.$refs.input333.innerHTML = "";
    },
    regNumber() {
      var number = this.loginNumber;
      var regNumber = /^[0-9]{2}$/;
      if (!regNumber.test(number)||number==7||number==12) {
        this.$refs.input222.innerHTML = "图形验证码错误!";
        this.isok.p = false;
        return;
      } else {
        this.isok.p = true;
      }
      this.$refs.input222.innerHTML = "";
    },
    regPhone() {
      var uname = this.loginName;
      var regUname = /^1[3-9]\d{9}$/;
      if (!regUname.test(uname)) {
        this.$refs.input111.innerHTML = "用户名格式不正确";
        this.isok.u = false;
        return;
      } else {
        this.isok.u = true;
      }
      this.$refs.input111.innerHTML = "";
    },
    Login() {
      // this.page++;
      console.log(this.password.length,this.checkPassword);
      var phone = this.loginName;
      var upwd = this.password;
      var obj = {
        phone,
        upwd
      }
      // this.page=3;
      this.axios.get("user/reg",{params:obj}).then(res=>{
        
        if(res.data==1){
          this.page=3
        }else{
          alert("发生未知错误，请重新注册");
        }
      })

    },
    nextPage() {
      // console.log(this.ischecked)
      // 判断是否正确
      // this.page++
      if (this.isok.u && this.isok.p && this.isok.m) {
        this.page++;
      } else {
        return;
      }

      // console.log(this.page)
    },
  
    // 设置密码验证函数
    regP(){
      var pReg = /^\d{6,16}$/;
      var pRegCode = /^[a-zA-Z]{6,16}$/
      var num = isNaN(Number(this.password))

      if(pReg.test(this.password)||pRegCode.test(this.password) || !num){
        // console.log(this.passwo
        this.ushow=true;
        this.uerrmsg="请输入正确的密码格式"
        // console.log(333)
        return;
      }
      this.show=false;
      this.uerrmsg="";
      // console.log(444)
    },
    checkP(){
      if(this.checkPassword!==this.password){
        this.perrmsg="两次输入的密码不同"
        // console.log(112)
        return;
      }
      this.perrmsg=""
      // console.log(223)
      
    }
  },
  beforeUpdate() {
    if(this.page==3){
      clearInterval(glogin)
      clearInterval(this.glogin)
      var  glogin = setInterval(()=>{
        console.log(1)
        if(this.goLogin>0){
          this.goLogin--
          clearInterval(glogin)
          clearInterval(this.glogin)
        }else{

          this.goLogin=5;
          this.$router.push("/login");
        }

        
      },1000)
    }
  },
  mounted() {
    this.page=1;
    this.goLogin=5;
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
}
a {
  text-decoration: none;
}
.reg_register {
  background: #fff;
  width: 1400px;
  height: 1000px;
  margin-top: 0px;
  display: contents;
}
.top {
  width: 1200px;
  height: 126px;
  /* background: yellowgreen; */
  margin: 0px auto;
  padding: 40px 0;
}
.top > img {
  float: right;
}
.middle {
  background: url(../../../public/images/reg_img/main1.jpg) no-repeat center;
  width: 100%;
  height: 550px;
  padding: 75px 0;
}
.middle-body {
  width: 780px;
  height: 400px;
  background: #fff;
  padding: 30px 39px 0 39px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}
.middle-body-head1,
.middle-body-head2,
.middle-body-head3 {
  float: left;
  width: 234px;
  height: 60px;
  white-space: nowrap;
}
.middle-body-head1 dt,
.middle-body-head2 dt,
.middle-body-head3 dt {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #d1d1d1;
  margin: 0 auto;
  position: relative;
  margin-bottom: 10px;
}
.middle-body-head1 dt {
  background: #1f9bf9;
}
.middle-body-head1 dd,
.middle-body-head2 dd,
.middle-body-head3 dd {
  color: #fff;
  width: 10px;
  position: absolute;
  margin-left: 0px;
  top: 3px;
  left: 6px;
  /* background: red; */
  text-align: center;
}
.middle-body-head1 p,
.middle-body-head2 p,
.middle-body-head3 p {
  text-align: center;
  font-size: 14px;
  margin: 0;
  padding: 11px 0 15px 0;
  border-bottom: 1px solid #d1d1d1;
}
.middle-body-head1 .active,
.middle-body-head2 .active,
.middle-body-head3 .active {
  border-bottom: 3px solid #1f9bf9;
}

.middle-body-body {
  clear: both;
  width: 100%;
  height: 252px;
  /* background: #fff; */
}
/* 第一步 */
.middle-body-body1 {
  width: 290px;
  height: 212px;
  text-align: left;
  font-size: 12px;
  margin: 0 auto;
  padding-top: 40px;
  /* display: none; */
}
.middle-body-body1:nth-last-of-type(button) {
  text-align: center;
  /* background: yellow; */
  border: 0;
}
.body1-check {
  box-sizing: border-box;
  width: 450px;
  height: 30px;
  margin-bottom: 15px;
  /* background: yellow; */
  position: relative;
}
.body1-checktext1 {
  /* background:green; */
  display: inline;
  margin: 0 0 0 20px;
  color: #fa164b;
}
.body1-check-text2 {
  position: absolute;
  top: 10px;
  right: 10px;
  /* background:green; */
  display: inline;
  margin: 0 0 0 20px;
  color: #fa164b;
}
.body1-check-text3 {
  /* background:green; */
  display: inline;
  margin: 0 0 0 55px;
  color: #fa164b;
}
.body1-check span:nth-child(1) {
  font-size: 14px;
  text-align: right;
  width: 70px;
  height: 30px;
  /* background: #ccc; */
}
.body1-check img {
  height: 28px;
  width: 110px;
  margin-left: 10px;
  vertical-align: middle;
  cursor: pointer;
}

.body1-check .num {
  /* display: inline; */
  float: right;
  height: 28px;
  width: 110px;
  margin-left: 10px;
  vertical-align: middle;
  cursor: pointer;
  /* background: #fa164b; */
  position: absolute;
  right: 150px;
  top: 0;
}

.body1-check input {
  border-radius: 4px;
  height: 30px;
  outline: 0;
  margin-left: 10px;
  border: 1px solid #e5e5e5;
  text-indent: 10px;
}
.body1-check .input1 {
  /* background: #999; */
  width: 222px;
}
.body1-check .input2,
.body1-check .input3 {
  /* background: #999; */
  width: 100px;
}
.body1-check button {
  height: 30px;
  color: #666;
  /* background:#f0f0f0; */
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  border: 0;
}
.body1-agree {
  height: 30px;
  text-align: center;
  margin-bottom: 10px;
  padding: 6px 0 6px 50px;
}
input[type="checkbox"] {
  width: 12px;
  height: 12px;
  line-height: 10px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  position: relative;
  margin-right: 10px;
  margin-top: -2px;
}
input[type="checkbox"]::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  border: 1px solid #d9d9d9;
  margin-top: -2px;
}
input[type="checkbox"]:checked::before {
  content: "\2713";
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #1f9bf9;
  color: #1f9bf9;
  font-size: 20px;
  font-weight: bold;
  margin-top: -2px;
}

.body1-agree a {
  color: #1e9cf9;
}
.body1-next {
  border-radius: 30px;
  background: #fa164b;
  color: #fff;
  font-size: 14px;
  width: 150px;
  height: 37px;
  margin: 0 70px;
  cursor: pointer;
  border: 0;
}
.middle-body-buttom {
  color: #999;
  font-size: 14px;
  text-align: right;
  display: inline-block;
  /* margin-left:640px; */
  position: absolute;
  right: 30px;
}
/* 第二步 */
.middle-body-body2 {
  /* display: none; */
  width: 320px;
  height: 107px;
  text-align: left;
  font-size: 12px;
  margin: 0 auto;
  padding-top: 40px;
  /* background: yellowgreen; */
}
.middle-body-body2 input {
  width: 240px;
  height: 30px;
  line-height: 30px;
  margin-left: 15px;
  padding: 4px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 12px;
}
.middle-body-body2 .errmsg{
  position: absolute;
  color:rgb(251, 40, 75);
  font-size:12px;
  top: 139px;
  right: 120px;
  width: 100px;
  transition: all .2s linear ;
}
.middle-body-body2 .p .errmsg{
  top: 206px;
}
.middle-body-body2 span {
  width: 70px;
  font-size: 14px;
}
.getPass {
  display: flex;
  justify-content: space-around;
  margin: 10px 9px 15px 71px;
  text-align: center;
}
.getPass span {
  font-size: 12px;
  background: #d1d1d1;
  width: 100%;
}
.getPass .active{
  background: #1f9bf9;
}
.middle-body-body2 button {
  width: 150px;
  line-height: 34px;
  background: #fa164b;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  border-radius: 30px;
  margin: 20px 0 0 100px;
  border: 0;
}

/* 第三步 */
.middle-body-body3 {
  width: 400px;
  height: 100%;
  /* background: #fa164b; */
  margin: 0 auto;
  padding: 50px 0;
}
.middle-body-body3 img {
  float: left;
  width: 100px;
  height: 100px;
  margin: auto 0;
  padding-top: 15px;
}
.body3-text {
  float: left;
  margin-left: 10px;
  /* background: #fff; */
}
.body3-text p {
  padding: 0;
  margin: 15px 0;
}
.body3-text p:first-child {
  color: #1e9cf9;
  font-size: 24px;
}
.body3-text p:nth-child(2) {
  /* color: #333; */
  font-size: 20px;
}
.body3-text p:nth-child(3) {
  color: #333;
  font-size: 16px;
}
.body3-text a {
  color: #fa164b;
}
.foot {
  width: 780px;
  /* background:turquoise; */
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
}
.foot_a {
  padding: 0 auto;
}
.foot_a a {
  color: #333;
  font-size: 14px;
  margin: 0 10px;
}
.foot_div {
  height: 25px;
  color: #666;
  font-size: 12px;
  margin-top: 10px;
}
</style>