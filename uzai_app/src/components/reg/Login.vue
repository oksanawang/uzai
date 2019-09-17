<template>
   <div class="login">
        <div class="login-top">
            <a href="javascript:;">
                <img src="../../../public/images/reg_img/logo.png" />
            </a>
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
                            <input placeholder="请输入登录名/手机号/邮箱" type="text" v-model="loginName" maxlength="11">
                        </div>
                        <div>
                            <input placeholder="请输入密码" type="password" v-model="upwd" maxlength="16">
                        </div>
                        <div>
                            <input placeholder="图形验证码" type="text" maxlength="2">
                            <img src="../../../public/images/reg_img/code.jpeg" title="看不清，换一张"/>
                        </div>
                        <div class="login-rember">
                            <span class="login-rember-span">记住我</span>
                            <a class="login-rember-a" href="javascript:;">忘记密码？</a>
                        </div>
                        <button class="login-btn-login" @click="Login">登录</button>
                        <!-- <p>1111</p> -->
                    </div>
                    <div class="login-right">
                        <p>还没众信悠哉网账号？</p>
                        <a href="javascript:;">立即注册-></a>
                        <p>使用社交账号登录</p>
                    </div>
                </div>
                <div class="login-middle-dongtai">
                    <div class="login-dongtai-left">
                        <div>
                            <input placeholder="请输入登录名/手机号/邮箱" type="text" maxlength="11">
                        </div>
                        <div class="login-dongtai-input">
                            <input placeholder="图形验证码" type="text" maxlength="2">
                            <img src="../../../public/images/reg_img/code.jpeg" title="看不清，换一张"/>
                        </div>
                        <div class="login-dongtai-input">
                            <input placeholder="请输入验证码" type="text" maxlength="6">
                            <button class="getYan">获取验证码</button> 
                        </div>
                        <button class="login-button-login" @click="Login">登录</button>
                        <!-- <span>1111111</span> -->
                        <!-- <p>111111</p> -->
                    </div>
                    <div class="login-dongtai-right">
                        <p>还没众信悠哉网账号？</p>
                        <a href="javascript:;">立即注册-></a>
                        <p>使用社交账号登录</p>
                    </div>
                </div>
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
export default {
    data(){
        return{
            loginName:"",
            upwd:"",
        }
            // console.log(loginName,upwd)
    },
    methods:{
        Login(){
            var loginName=this.loginName;
            var upwd=this.upwd;
            console.log(loginName,upwd);
            var reg=/^1[3-9]\d{9}&/;
            if(loginName==""){

            }
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
.login{
    /* background: yellow; */
    width:1400px;
    height:1000px;
    margin-top:0px;
    display: contents;

}
.login-top{
    width:1200px;
    height: 126px;
    /* background: yellowgreen; */
    margin:0px auto;
    padding:40px 0;
}
.login-top>img{
    float: right;
}
.login-body{
    background: url(../../../public/images/reg_img/main.jpg) no-repeat center;
    height: 548px;
    padding:120px 0;
    position: relative;

}
.login-body-top{
    background:#fff;
    width: 492px;
    /* height: 303px; */
    padding:25px 0 10px 32px;
    position:absolute;
    left:53%;
    border-radius: 10px;
    box-shadow:  0 0 10px rgba(0,0,0,.25);
}
.login-span{
    font-size: 14px;
    height: 34px;
}
.login-span span:nth-child(2){
    margin:0 20px;
}
.login-middle{
    display: block;
    display: none;
}
.login-middle-dongtai{
    display: none;
    display: block;
}
.login-left,
.login-dongtai-left{
    float: left;
    padding-right:34px;
    margin-top:10px;
}
.login-left input,
.login-dongtai-left input{
    border: 1px solid #e5e5e5;
    width:248px;
    height: 30px;
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 12px;
}

.login-left div:nth-child(3) input{
    width:105px;
    /* background: #333; */
}
.login-left div:nth-child(3) img{
    width:105px;
    /* background: #333; */
    vertical-align:middle;
    height: 28px;
    margin-left:10px;
}
.login-dongtai-input input{
    width:105px;
}
.login-dongtai-input img{
    vertical-align:middle;
    width:110px;
    height: 28px;
    margin-left:10px;
    /* background: #fb284b; */
}
.login-dongtai-input .getYan{
    width: 110px;
    line-height: 25px;
    margin-left:10px;
    color: #666;
    font-size: 12px;
    background: #f1f1f1;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    border:0;
}
.login-rember{
    font-size: 12px;
    position: relative;
    color:#666;
    margin-top:10px;
}
.login-rember-a{
    position: absolute;
    color:#666;
    right: 0;

}
.login-btn-login{
    color: #fff;
    width:250px;
    line-height: 36px;
    font-size: 14px;
    text-align: center;
    background: #fb284b;
    margin-top: 10px;
    border-radius: 18px;
    cursor: pointer;
    margin-bottom: 26px;
    border:0;
}
.login-button-login{
    color: #fff;
    width:250px;
    line-height: 36px;
    font-size: 14px;
    text-align: center;
    background: #fb284b;
    margin-top: 15px;
    border-radius: 18px;
    cursor: pointer;
    margin-bottom: 26px;
    border:0;
}
.login-right,
.login-dongtai-right{
    border-left: 1px solid #e5e5e5;
    float: left;
    color:#666;
    font-size:12px;
    width:150px;
    height:180px;
    /* background: yellow; */
    padding-left: 29px;
    padding-top: 48px;
    padding-bottom: 14px;
}
.login-right a,
.login-dongtai-right a{
    font-size: 14px;
}
.login-right p,
.login-dongtai-right p{
    margin:0 0 10px 0;
}
.login-right p:last-child,
.login-dongtai-right p:last-child{
    margin-top:60px;
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