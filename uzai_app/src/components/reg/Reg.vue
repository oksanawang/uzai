<template>
   <div class="reg_register">
        <div class="top">
            <a href="javascript:;">
                <img src="../../../public/images/reg_img/logo.png" />
            </a>
            <img src="../../../public/images/reg_img/telephone.png" /> 
        </div>
        <div class="middle">
            <div class="middle-body">
                <div class="middle-body-head1">
                    <dt>
                        <dd>1</dd>
                    </dt>
                    <p>填写手机号验证</p>
                </div>
                <div class="middle-body-head2">
                    <dt>
                        <dd>2</dd>
                    </dt>
                    <p>设置密码</p>
                </div>
                <div class="middle-body-head3">
                    <dt>
                        <dd>3</dd>
                    </dt>
                    <p>注册完成</p>
                </div>
                <div class="middle-body-body">
                    <div class="middle-body-body1">
                        <div class="body1-check">
                            <span>&nbsp;&nbsp;&nbsp;手机号码</span>
                            <input class="input1" type="text" placeholder="请输入手机号码" v-model="loginName" maxlength="11" @blur="regPhone">
                            <span class="body1-checktext1" ref="input111"></span>
                        </div>
                        <div class="body1-check">
                            <span>图形验证码</span>
                            <input class="input2" type="text" placeholder="请输入验证码" maxlength="2" v-model="loginNumber" @blur="regNumber">
                                <!-- <img src="../../../public/images/reg_img/code.jpeg" title="看不清，换一张" /> -->
                                <!-- <img src="../../../public/images/reg_img/code.jpeg" title="看不清，换一张" /> -->
                                <!-- <span> -->
                                    <!-- <img src="" alt=""> -->
                                    <num class="num" title="看不清，换一张"></num>
                                <!-- </span> -->
                                <span class="body1-check-text2" ref="input222"></span>
                        </div>
                        <div class="body1-check">
                            <span>手机验证码</span>
                            <input class="input3" type="text" placeholder="请输入验证码" maxlength="6" v-model="loginMsg" @blur="regMsg">
                            <button>获取验证码</button>
                            <span class="body1-check-text3" ref="input333"></span>
                        </div>
                        <div class="body1-agree">
                            <input type="checkbox">
                            <span class="check">我已阅读同意</span>
                            <a href="javascript:;">《用户使用协议》</a>
                        </div>
                        <button class="body1-next" @click="Login">下一步</button>
                    </div>
                    <div class="middle-body-body2">
                        <div>
                            <span>账号密码</span>
                            <input type="password" placeholder="6-16位字母/数字/符号,最少两类组成" maxlength="16">
                        </div>
                        <div class="getPass">
                            <span>弱</span>
                            <span>中</span>
                            <span>强</span>
                        </div>
                        <div>
                            <span>确认密码</span>
                            <input type="password" placeholder="请再次输入以上密码" maxlength="6">  
                        </div>
                        <button>提交</button>                 
                    </div>
                    <div class="middle-body-body3">
                        <div>
                            <img src="../../../public/images/reg_img/duihao.png" />
                        </div>
                        <div class="body3-text">
                            <p>注册成功!</p>
                            <p>恭喜成为悠哉网会员</p>
                            <p>
                                <span>您可以</span>
                                <a href="javascript:;" >登录首页</a>
                                <span>或2s后跳转首页</span>
                            </p>
                        </div>
                    </div>
                </div>
                <a class="middle-body-buttom" href="javascript:;"  @click="Login">立即登录</a>
            </div>

        </div>
        <div class="foot">
            <div class="foot_a">
                <a href="javascript:;">众信旅游</a>
                <a href="javascript:;">众信历程</a>
                <a href="javascript:;">众信品牌</a>
                <a href="javascript:;">营业网点</a>
                <a href="javascript:;">诚聘英才</a>
                <a href="javascript:;">商务合作</a>
            </div>
            <div class="foot_div">Copyright©2005-2018 Uzai.com&nbsp;&nbsp;&nbsp;&nbsp;许可证编号:L-TJ-CJ00059&nbsp;&nbsp;&nbsp;&nbsp;
             津ICP备18003064号&nbsp;&nbsp;&nbsp;&nbsp;悠哉呼叫中心来电显示号码为：10109898
            </div>    
        </div>
    </div> 
</template>
<script>
import Number from "./Number.vue"
export default {
        components:{
        "num":Number
    },
    data(){
        return{
            loginName:"",
            loginNumber:"",
            loginMsg:"",
        }
            console.log(loginName,loginNumber,loginMsg)
    },
    methods:{
        regMsg(){
            var msg=this.loginMsg;
            var regMsg=/^[0-9]\d{6}$/;
            if(msg==""){
                this.$refs.input333.innerHTML="请输入您的短信验证码!";
                return;
            }
            if(!regMsg.test(msg)){
                this.$refs.input333.innerHTML="请输入正确的短信验证码!";
                return;
            }
        },
        regNumber(){
            var number=this.loginNumber;
            var regNumber=/^[0-9]\d{2}$/;

            if(number==""){
                this.$refs.input222.innerHTML="请输入您的图形验证码";
                return;
            }
            if(number==""){
                this.$refs.input222.innerHTML="图形验证码错误!";
                return;
            }
        },
        regPhone(){
            var uname=this.loginName;
            var regUname=/^1[3-9]\d{9}$/;
            if(uname==""){
                this.$refs.input111.innerHTML="请输入您的手机号码"
                return;
            }
            if(!regUname.test(uname)){
                this.$refs.input111.innerHTML="用户名格式不正确"
                return;
            }
        },
        Login(){
        },
    },
}
</script>
<style scoped>
*{
    box-sizing: border-box;
    font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
}
a{
    text-decoration:none;
}
.reg_register{
    background: #fff;
    width:1400px;
    height:1000px;
    margin-top:0px;
    display: contents;

}
.top{
    width:1200px;
    height: 126px;
    /* background: yellowgreen; */
    margin:0px auto;
    padding:40px 0;
}
.top>img{
    float: right;
}
.middle{
    background: url(../../../public/images/reg_img/main1.jpg) no-repeat center;
    width:100%;
    height: 550px;
    padding:75px 0;
}
.middle-body{
    width:780px;
    height: 400px;
    background: #fff;
    padding:30px 39px 0 39px;
    margin:0 auto;
    border-radius: 10px;
    position: relative;
    box-shadow:  0 0 10px rgba(0,0,0,.25);

}
.middle-body-head1,
.middle-body-head2,
.middle-body-head3{
    float: left;
    width: 234px;
    height: 60px;
    white-space: nowrap;
    /* background: blueviolet; */
    /* overflow: hidden; */
}
.middle-body-head1 dt,
.middle-body-head2 dt,
.middle-body-head3 dt{
    width:24px;
    height: 24px;
    border-radius:50%;
    background:#d1d1d1;
    margin:0 auto;
    position: relative;
    margin-bottom: 10px;
}
.middle-body-head1 dt{
    background:#1f9bf9;

}
.middle-body-head1 dd,
.middle-body-head2 dd,
.middle-body-head3 dd{
    color:#fff;
    width:10px;
    position: absolute;
    margin-left:0px;
    top:3px;
    left:6px;
    /* background: red; */
    text-align: center;
}
.middle-body-head1 p,
.middle-body-head2 p,
.middle-body-head3 p{
    text-align: center;
    font-size: 14px;
    margin:0;
    padding: 11px 0 0 0;  
    border-top:1px solid #d1d1d1;
}
.middle-body-head1 p{
    border-top:3px solid #1f9bf9;

}
.middle-body-body{
    clear: both;
    width: 100%;
    height: 252px;
    /* background: #fff; */

}
/* 第一步 */
.middle-body-body1{
    width:290px;
    height: 212px;
    text-align: left;
    font-size:12px;
    margin:0 auto;
    padding-top:40px;
    /* display: none; */
}
.middle-body-body1:nth-last-of-type(button){
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
.body1-checktext1,
.body1-check-text2{
    background:green;
    display: inline;
    margin:0 0 0 20px;
}
.body1-check-text3{
    background:green;
    display: inline;
    margin:0 0 0 55px;
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
/* input[type="checkbox"]{
    font-size: 20px;
    color:#1e9cf9;
    background: #1e9cf9;
    vertical-align: middle;
    margin-right:5px;
    visibility: hidden;
} */

.body1-agree{
    height:30px;
    text-align: center;
    margin-bottom: 10px;
    padding:6px 0;
}
.body1-next{
    border-radius: 30px;
    background: #fa164b;
    color: #FFF;
    font-size: 14px;
    width: 150px;
    height: 37px;
    margin:0 70px;
    cursor: pointer;
    border:0;
}
.middle-body-buttom{
    color:#999;
    font-size: 14px;
    text-align: right;
    display: inline-block;
    /* margin-left:640px; */
    position: absolute;
    right: 30px;

}
/* 第二步 */
.middle-body-body2{
    display: none;
    width:320px;
    height: 107px;
    text-align: left;
    font-size:12px;
    margin:0 auto;
    padding-top:40px;
    /* background: yellowgreen; */
}
.middle-body-body2 input{
    width:240px;
    height: 30px;
    line-height: 30px;
    margin-left: 15px;
    padding: 4px 10px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    font-size: 12px;
}
.middle-body-body2 span{
    width:70px; 
    font-size: 14px;
}
.getPass{
    display: flex;
    justify-content: space-around;
    margin:10px 9px 15px 71px;
    text-align: center;
}
.getPass span{
    font-size:12px;
    background: #d1d1d1;
    width:100%;
}

.middle-body-body2 button{
    width: 150px;
    line-height: 34px;
    background: #fa164b;
    text-align: center;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    border-radius: 30px;
    margin:20px 0 0 100px;
    border:0;
}

/* 第三步 */
.middle-body-body3{
    width:400px;
    height: 100%;
    /* background: #fa164b; */
    margin:0 auto;
    padding:50px 0;
    display:none;
}
.middle-body-body3 img{
    float:left;
    width:100px;
    height: 100px;
    margin:auto 0;
    padding-top:15px;
}
.body3-text{
    float:left;
    margin-left:10px;
    /* background: #fff; */
}
.body3-text p{
    padding:0;
    margin:15px 0;
}
.body3-text p:first-child{
  color: #1e9cf9;
  font-size:24px;
}
.body3-text p:nth-child(2){
  /* color: #333; */
  font-size:20px;
}
.body3-text p:nth-child(3){
  color: #333;
  font-size:16px;
}
.body3-text a{
    color:#fa164b;
}
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