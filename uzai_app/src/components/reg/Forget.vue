<template>
  <div class="reg_register">
    <div class="top">
      <router-link to="javascript:;">
        <img src="../../../public/images/reg_img/logo.png" />
      </router-link>
      <img src="../../../public/images/reg_img/telephone.png" />
    </div>
    <div class="forget">
      <div class="forget-body">
        <div class="forget-body-head1">
          <dl class="active">
            <dd >1</dd>
          </dl>
          <p>验证身份</p>
        </div>
        <div class="forget-body-head2 active">
          <dl class="active">
            <dd>2</dd>
          </dl>
          <p class="active">重置密码</p>
        </div>
        <div class="forget-body-head3">
          <dl class="active"> 
            <dd >3</dd>
          </dl>
          <p class="active">完成</p>
        </div>
        <div class="forget-find">
            <span class="input1">
                <input  type="checkbox" >
                <span v-model="findNum"  :class="cha?findNum:''" >手机找回</span>
                <!-- <span class="findNum"  >手机找回</span> -->
            </span>
            
            <span class="input2" >
                <input  type="checkbox" >
                <span v-model!="findNum" :class="cha?findNum:''">邮箱找回</span>
                <!-- <span class="findNum"  >邮箱找回</span> -->
            </span>
        </div>
        <div class="forget-body-body1">
                        <div class="body1-check">
                            <span>&nbsp;&nbsp;&nbsp;手机号码</span>
                            <input class="input1" type="text" placeholder="请输入手机号码" v-model="loginName" maxlength="11" @blur="regPhone">
                            <span class="body1-checktext1" ></span>
                        </div>
                        <div class="body1-check">
                            <span>图形验证码</span>
                            <input class="input2" type="text" placeholder="请输入验证码" maxlength="2" v-model="loginNumber" @blur="regNumber">
                                <num class="num" title="看不清，换一张"></num>
                                <span class="body1-check-text2" ></span>
                        </div>
                        <div class="body1-check">
                            <span>手机验证码</span>
                            <input class="input3" type="text" placeholder="请输入验证码" maxlength="6" v-model="loginMsg" @blur="regMsg">
                            <button>获取验证码</button>
                            <span class="body1-check-text3" ></span>
                        </div>
                        <button class="body1-next" @click="Login">下一步</button>
                    </div>
        <div class="forget-bottom">
            <router-link class="" @click="Login" to="/Reg">我要注册</router-link>
            <span>|</span>
            <router-link class="" @click="Login" to="/Login">我要登录</router-link>
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
      loginNumber: "",
      loginMsg: "",
    //   findNum:ture,
    };
    console.log(loginName, loginNumber, loginMsg);
  },
  methods: {
    regMsg() {
      var msg = this.loginMsg;
      var regMsg = /^[0-9]\d{6}$/;
      if (msg == "") {
        this.$refs.input333.innerHTML = "请输入您的短信验证码!";
        return;
      }
      if (!regMsg.test(msg)) {
        this.$refs.input333.innerHTML = "请输入正确的短信验证码!";
        return;
      }
    },
    regNumber() {
      var number = this.loginNumber;
      var regNumber = /^[0-9]\d{2}$/;

      if (number == "") {
        this.$refs.input222.innerHTML = "请输入您的图形验证码";
        return;
      }
      if (number == "") {
        this.$refs.input222.innerHTML = "图形验证码错误!";
        return;
      }
    },
    regPhone() {
      var uname = this.loginName;
      var regUname = /^1[3-9]\d{9}$/;
      if (uname == "") {
        this.$refs.input111.innerHTML = "请输入您的手机号码";
        return;
      }
      if (!regUname.test(uname)) {
        this.$refs.input111.innerHTML = "用户名格式不正确";
        return;
      }
    },
    Login() {}
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
.forget {
  background: url(../../../public/images/reg_img/main1.jpg) no-repeat center;
  width: 100%;
  height: 550px;
  padding: 75px 0;
}
.forget-body {
  width: 780px;
  height: 400px;
  background: #fff;
  padding: 30px 39px 0 39px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  text-align: center;
}
.forget-body-head1,
.forget-body-head2,
.forget-body-head3 {
  float: left;
  width: 234px;
  height: 60px;
  white-space: nowrap;
  /* background: blueviolet; */
  /* overflow: hidden; */
}
.forget-body-head1 dl,
.forget-body-head2 dl,
.forget-body-head3 dl{
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #d1d1d1;
  margin: 0 auto;
  position: relative;
  margin-bottom: 10px;
}
.forget-body-head1 dd,
.forget-body-head2 dd,
.forget-body-head3 dd{
  color: #fff;
  width: 10px;
  position: absolute;
  margin-left: 0px;
  top: 3px;
  left: 7px;
  /* background: red; */
  text-align: center;
}
.forget-body-head1 p,
.forget-body-head2 p,
.forget-body-head3 p {
  text-align: center;
  font-size: 14px;
  margin: 0;
  padding: 11px 0 0 0;
  border-top: 1px solid #d1d1d1;
}
.forget-body-head1 p {
  border-top: 3px solid #1f9bf9;
}
.forget-body-head1 dl.active,
.forget-body-head2 dl.active,
.forget-body-head3 dl.active{
  background: #1f9bf9;
}
.forget-body-head2 .active,
.forget-body-head3 .active{
  border-top: 3px solid #1f9bf9;
}
.forget-body-body {
  clear: both;
  width: 100%;
  height: 252px;
  /* background: #fff; */
}
.forget-find{
    box-sizing: border-box;
    position: absolute;
    top:120px;
    width:780px;
    height: 30px;
    color: #666;

}
.forget-find .input1{
    position: absolute;
    left: 120px;

}
.forget-find .input2{
    position: absolute;
    right: 180px;
}
input[type="checkbox"]{
    width:12px;
    height:12px;
    line-height: 10px;
    display: inline-block;
    text-align: center;
    vertical-align: middle; 
    position: relative;
    margin-right: 10px;
    margin-top:-2px;
    }
input[type="checkbox"]::before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    border: 1px solid #d9d9d9;
    margin-top:-2px;
    }
input[type="checkbox"]:checked::before{
    content: "\2713";
    width:100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #fa164b;
    color:#fa164b;
    font-size: 20px;
    font-weight: bold;
    margin-top:-2px;
    }
    .findNum{
        color:#000;
    }
    .input2{
        color:#000;
    }
/* 第一步 */
.forget-body-body1{
    position: absolute;
    top:150px;
    /* left:center; */
    width:290px;
    height: 212px;
    text-align: left;
    font-size:12px;
    margin:0 23%;
    padding-top:20px;
    /* display: none; */
}
.forget-body-body1:nth-last-of-type(button){
    text-align: center;
    /* background: yellow; */
    border:0;
}
.body1-check{
    box-sizing:border-box;
    width:450px;
    height:30px;
    margin-bottom: 15px;
    background: yellow;
    position: relative;
}
.body1-checktext1{
    background:green;
    display: inline;
    margin:0 0 0 20px;
    color:#fa164b;
}
.body1-check-text2{
    position: absolute;
    top:10px;
    right: 10px;
    background:green;
    display: inline;
    margin:0 0 0 20px;
    color:#fa164b;
}
.body1-check-text3{
    background:green;
    display: inline;
    margin:0 0 0 55px;
    color:#fa164b;
}
.body1-check span:nth-child(1){
    font-size: 14px;
    text-align: right;
    width:70px;
    height: 30px;
    /* background: #ccc; */
}
.body1-check img{
    height: 28px;
    width: 110px;
    margin-left: 10px;
    vertical-align: middle;
    cursor: pointer;
}


.body1-check .num{
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
    top:0;
}




.body1-check input{
    border-radius: 4px;
    height: 30px;
    outline: 0;
    margin-left:10px;
    border: 1px solid #e5e5e5;
    text-indent: 10px;
}
.body1-check .input1{
    /* background: #999; */
    width:222px;
}
.body1-check .input2,
.body1-check .input3{
    /* background: #999; */
    width:100px;
}
.body1-check button{
    height: 30px;
    color:#666;
    /* background:#f0f0f0; */
    border-radius: 4px;
    margin-left: 10px;
    cursor: pointer;
    border:0;
}


.body1-next{
    border-radius: 30px;
    background: #fa164b;
    color: #FFF;
    font-size: 14px;
    width: 150px;
    height: 37px;
    margin:5px 100px;
    cursor: pointer;
    border:0;
}
/* 第二步 */

/* 第三步*/

.forget-bottom{
    position: absolute;
    bottom: 30px;
    right:40px;
    color:#d1d1d1;
    font-size: 14px;

}
.forget-bottom a{
    width: 80px;
    height: 34px;
    color:#999;
    font-size: 14px;
    margin:0 10px;
}
.forget-bottom:hover a{
    cursor: pointer;
    /* color: #fa164b; */
}

/* 尾部 */
.foot{
    width:780px;
    /* background:turquoise; */
    margin:0 auto;
    margin-top: 30px;
    text-align: center;
}
.foot_a{
    padding:0 auto;
}
.foot_a a{
    color:#333;
    font-size:14px;
    margin:0 10px;
}
.foot_div{
    height: 25px;
    color:#666;
    font-size:12px;
    margin-top:10px;
}
</style>