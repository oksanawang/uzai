<template>
  <div class="login">
    <div class="login-top">
      <router-link to="/">
        <img src="../../../public/images/reg_img/logo.png" />
      </router-link>
      <img src="../../../public/images/reg_img/telephone.png" />
    </div>
    <div class="login-body">
      <div class="login-body-top">
        <div class="login-span">
          <span class="active">普通登录</span>
          <span>|</span>
          <span>动态密码登录</span>
        </div>
        <div class="login-middle">
          <div class="login-left">
            <div>
              <input ref="uname"  placeholder="请输入登录名/手机号/邮箱" type="text" v-model="loginName" maxlength="32" />
            </div>
            <div>
              <input placeholder="请输入密码" type="password" v-model="upwd" maxlength="18" />
            </div>
            <div>
              <input placeholder="图形验证码" type="text" maxlength="2" v-model="ureg" @blur="Regreg"/>
              <num class="num" title="看不清，换一张"></num>
            </div>
            <div class="login-rember">
              <span class="login-rember-span">记住我</span>
              <router-link to="javascript:;" class="login-rember-a">忘记密码？</router-link>
            </div>
            <button class="login-btn-login" @click="Login1">登录</button>
            <p class="tishi" ref="tishi">{{uperr}}</p>
          </div>
          <div class="login-right">
            <p>还没众信悠哉网账号？</p>
            <!-- <a href="#/reg">立即注册-></a> -->
            <router-link to="/reg">立即注册-></router-link>
            <p>使用社交账号登录</p>
          </div>
        </div>
        <div class="login-middle-dongtai">
          <!-- <div class="login-dongtai-left">
            <div>
              <input placeholder="请输入登录名/手机号/邮箱" type="text" maxlength="11" v-model="loginName" />
            </div>
            <div class="login-dongtai-input">
              <input placeholder="图形验证码" type="text" maxlength="2" v-model="ureg" />
              <num class="num" title="看不清，换一张"></num>
            </div>
            <div class="login-dongtai-input">
              <input placeholder="请输入验证码" type="text" maxlength="6" v-model="umsg" />
              <button class="getYan">获取验证码</button>
            </div>
            <button class="login-button-login" @click="Login2">登录</button>
            <p class="tishi" ref="tishi"></p>
          </div> -->
          <div class="login-dongtai-right">
            <p>还没众信悠哉网账号？</p>
            <router-link to="/reg">立即注册-></router-link>
            <p>使用社交账号登录</p>
          </div>
        </div>
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
export default {
  components: {
    num: Numberdx
  },
  data() {
    return {
      loginName: "",
      upwd: "",
      umsg: "", //短信验证码
      ureg: "", //图形验证码
      uperr: ""
    };
  },
  methods: {
    Regreg(){
      var number = this.ureg;
      var regNumber = /^[0-9]{2}$/;
      if (!regNumber.test(number)||number==7||number==12) {
        this.uperr="验证码错误";
        return;
      } else {
        this.uperr="";
      }
    },
    Login1() {
      var loginName = this.loginName;
      var pwd = this.upwd;
      var reg = this.ureg;
      console.log(loginName, pwd, reg);
      var regName = /^[a-z0-9]{0,32}$/;
      var regMsg = /^[\w]{6,19}$/;
      if (!regName.test(loginName)) {
        this.uperr = "登录名/手机号/邮箱格式不正确!";
        return;
      }
      if (!regMsg.test(pwd)) {
        console.log(pwd)
        this.uperr = "密码不是不正确!";
        return;
      }
      if (reg == "") {
        this.uperr = "请输入验证码";
        return;
      }
      var obj = {
        uname: loginName,
        upwd: pwd
      };
      // console.log(obj)
      this.axios.get("user/login", { params: obj }).then(res => {
        // console.log(res.data)
        if (res.data == 1) {
          // console.log(333);
          this.$router.push("/");
        } else {
          this.uperr = "用户名或密码错误";
        }
      });
    },
    Login2() {
    }
  }
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
.login {
  /* background: yellow; */
  width: 1400px;
  height: 1000px;
  margin-top: 0px;
  display: contents;
}
.login-top {
  width: 1200px;
  height: 126px;
  /* background: yellowgreen; */
  margin: 0px auto;
  padding: 40px 0;
}
.login-top > img {
  float: right;
}
.login-body {
  background: url(../../../public/images/reg_img/main.jpg) no-repeat center;
  height: 548px;
  padding: 120px 0;
  position: relative;
}
.login-body-top {
  background: #fff;
  width: 492px;
  padding: 25px 0 10px 32px;
  position: absolute;
  left: 53%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}
.login-span {
  box-sizing: border-box;
  position: relative;
  font-size: 14px;
}
.login-span span:nth-child(1) {
  position: absolute;
  background: url(../../../public/images/reg_img/1.png) no-repeat center;
  font-size: 14px;
  width: 72px;
  height: 34px;
  text-align: center;
}
.login-span span:nth-child(2) {
  font-size: 14px;
  margin: 0 20px;
  height: 34px;
  position: absolute;
  left: 72px;
}
.login-span span:nth-child(1):hover,
.login-span span:nth-child(1):active {
  position: absolute;
  background: url(../../../public/images/reg_img/1.png) no-repeat center;
  font-size: 18px;
  width: 100px;
  height: 34px;
  text-align: center;
}
.login-span span:nth-child(3) {
  background: url(../../../public/images/reg_img/2.png) no-repeat center;
  font-size: 14px;
  position: absolute;
  left: 130px;
  height: 34px;
  text-align: center;
}
.login-span span:nth-child(3):hover,
.login-span span:nth-child(3):active {
  background: url(../../../public/images/reg_img/2.png) no-repeat center;
  position: absolute;
  left: 110px;
  font-size: 18px;
  height: 34px;
  text-align: center;
}
.login-middle {
  display: block;
  /* display: none; */
}
.login-middle-dongtai {
  display: none;
  /* display: block; */
}
.login-left,
.login-dongtai-left {
  float: left;
  padding-right: 34px;
  margin-top: 34px;
}
/* .login-middle:active{

}
.login-middle-dongtai:active{
    display: block;
} */
.login-left input,
.login-dongtai-left input {
  border: 1px solid #e5e5e5;
  width: 248px;
  height: 30px;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
}

.login-left div:nth-child(3) input {
  width: 105px;
}

.login-dongtai-input input {
  width: 105px;
}

.login-dongtai-input .getYan {
  width: 110px;
  line-height: 25px;
  margin-left: 10px;
  color: #666;
  font-size: 12px;
  background: #f1f1f1;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  border: 0;
}
.login-rember {
  font-size: 12px;
  position: relative;
  color: #666;
  margin-top: 10px;
}
.login-rember-a {
  position: absolute;
  color: #666;
  right: 0;
}
.login-rember-a:hover {
  color: #1f9bf9;
}
.tishi {
  height: 13px;
  margin: 0;
  padding: 0;
  color: #fb284b;
  /* background: yellowgreen; */
  text-align: center;
  font-size: 12px;
}
.login-btn-login {
  color: #fff;
  width: 250px;
  line-height: 36px;
  font-size: 14px;
  text-align: center;
  background: #fb284b;
  margin-top: 10px;
  border-radius: 18px;
  cursor: pointer;
  margin-bottom: 7px;
  border: 0;
}
.login-button-login {
  color: #fff;
  width: 250px;
  line-height: 36px;
  font-size: 14px;
  text-align: center;
  background: #fb284b;
  margin-top: 15px;
  border-radius: 18px;
  cursor: pointer;
  margin-bottom: 7px;
  border: 0;
}
.login-left .num {
  /* float: right; */
  height: 28px;
  width: 110px;
  margin-left: 10px;
  vertical-align: middle;
  cursor: pointer;
  position: absolute;
  right: 26px;
  top: 10px;
}
.login-dongtai-input {
  position: relative;
}
.login-left div {
  position: relative;
}
.login-dongtai-left .num {
  float: right;
  height: 28px;
  width: 110px;
  margin-left: 10px;
  vertical-align: middle;
  cursor: pointer;
  background: yellow;
  position: absolute;
  right: 26px;
  top: 10px;
}
.login-right,
.login-dongtai-right {
  border-left: 1px solid #e5e5e5;
  float: left;
  color: #666;
  font-size: 12px;
  width: 150px;
  height: 180px;
  /* background: yellow; */
  padding-left: 29px;
  padding-top: 48px;
  padding-bottom: 14px;
  margin-top: 10px;
}
.login-right a,
.login-dongtai-right a {
  font-size: 14px;
  color: #1f9bf9;
}
.login-right a:hover,
.login-dongtai-right a:hover {
  color: #fb284b;
}
.login-right p,
.login-dongtai-right p {
  margin: 0 0 10px 0;
}
.login-right p:last-child,
.login-dongtai-right p:last-child {
  margin-top: 60px;
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