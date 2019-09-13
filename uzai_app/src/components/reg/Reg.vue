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
                <div class="middle-body-head">
                    <dt>
                        <dd>1</dd>
                    </dt>
                    <p>填写手机号验证</p>
                </div>
                <div class="middle-body-head">
                    <dt>
                        <dd>2</dd>
                    </dt>
                    <p>设置密码</p>
                </div>
                <div class="middle-body-head">
                    <dt>
                        <dd>3</dd>
                    </dt>
                    <p>注册完成</p>
                </div>
                <div class="middle-body-body">
                    <div>
                        <div class="middle-body-body1">
                            <div class="body1-check">
                                <span>手机号码</span>
                                <input type="text" placeholder="请输入手机号码">
                            </div>
                            <div class="body1-check">
                                <span>图形验证码</span>
                                <input type="text" placeholder="请输入验证码">
                                <span>
                                    <img src="" alt="">
                                </span>
                            </div>
                            <div class="body1-check">
                                <span>手机验证码</span>
                                <input type="text" placeholder="请输入验证码">
                                <button>获取验证码</button>
                            </div>
                            <div class="body1-agree">
                                <span></span>
                                <span class="check">我已阅读同意</span>
                                <a href="javascript:;">《用户使用协议》</a>
                            </div>
                            <div class="body1-next">
                                <button class="body1-next">下一步</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
  created() {
      console.log("注册成功")
  }  
}
</script>
<style scoped>
*{
    box-sizing: border-box;
    font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
}
.reg_register{
    background: yellow;
    width:1400px;
    height:1000px;
    margin-top:0px;
    /* margin:0 auto */
    /* display: flex; */
    display: contents;

}
.top{

    width:1200px;
    height: 126px;
    background: yellowgreen;
    margin:0px auto;
    padding:40px 0;
}
.top>img{
    float: right;
}
.middle{
    background-image: url(../../../public/images/reg_img/main1.jpg);
    height: 546px;
    display: flex;
}
.middle-body{
    width:780px;
    height: 400px;
    background: red;
    padding:30px 39px 0 39px;
    margin:0 auto;
    border-radius: 10px;

}
.middle-body-head{
    float: left;
    width: 234px;
    height: 60px;
    background: blueviolet;
        /* overflow: hidden; */
    white-space: nowrap;
}
.middle-body-head dt{
    width:24px;
    height: 24px;
    border-radius:50%;
    /* background:#1f9bf9; */
    background:#d1d1d1;
    margin:0 auto;
    position: relative;
    margin-bottom: 10px;
}
.middle-body-head dd{
    color:#fff;
    width:10px;
    position: absolute;
    margin-left:0px;
    top:3px;
    left:6px;
    background: red;
    text-align: center;
}
.middle-body-head p{
    text-align: center;
    font-size: 14px;
    margin:0;
    padding: 11px 0 0 0;  
    /* border-top:1px solid #1f9bf9; */
    border-top:1px solid #d1d1d1;
}
.middle-body-body{
    clear: both;
    width: 100%;
    height: 252px;
    background: #fff;

}
.middle-body-body1{
    width:290px;
    height: 212px;
    text-align: left;
    font-size:12px;
    margin:0 auto;
    padding-top:40px;


}
.body1-check{
    width:320px;
    height:30px;
}
.body1-check span:nth-child(1){
    /* display: inline; */
    font-size: 14px;
    text-align: center;
    width:35%;
    height: 30px;
    /* line-height: 30px; */
    background: #ccc;
}
.body1-check input{
    border-radius: 4px;
    height: 30px;

    outline: 0;
    margin-left:10px;
    border: 1px solid #e5e5e5;
    text-indent: 10px;
    /* border:0; */
}
.body1-check button{
    height: 30px;
    color:#666;
    background:#f0f0f0;
    border-radius: 4px;
}
.body1-agree{
    height:30px;
    text-align: center;
    /* display: inline; */
    /* vertical-align: middle; */
    /* padding:auto 0; */
    margin:auto 0;
    padding:auto 0;
}
.body1-next{
    border-radius: 30px;
    background: #fa164b;
    color: #FFF;
    font-size: 14px;
    width: 150px;
    height: 37px;
    text-align: center;
    margin:0 auto;
}
</style>