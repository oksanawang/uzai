<template>
    <div>
        <div class="common_sidebar">
        <div class="common_sidebar_m">
            <a href="javascript:;" onclick="_index_online_service(this)" class="li">
                <i class="iconfont icon-161019kefuicon">&#xe600;</i>
                <div class="common_sidebar_m_li">
                    <i class="iconfont icon-yuandian">&#xe66b;</i> 在线客服</div>
            </a>
            <a class="li">
                <i class="iconfont icon-lianxiwomen">&#xe631;</i>
                <div class="common_sidebar_m_li"><i class="iconfont icon-yuandian">&#xe66b;</i> 1010-9898</div>
            </a>
            <a class="app li">
                <i class="iconfont icon-APP">&#xe6fd;</i>
                <div class="common_sidebar_m_li ewm">
                    <img src="//r.uzaicdn.com/content/store/images/common/phoneapp.png">
                </div>
            </a>
            <a class="wecat li">
                <i class="iconfont icon-weixin">&#xe654;</i>
                <div class="common_sidebar_m_li ewm">
                    <img src="//r.uzaicdn.com/content/store/images/common/wecat.png">
                </div>
            </a>
            <a target="_blank" href="https://dingzhi.uzai.com/" class="li youdingz">
                <i class="iconfont icon-Udingzhilogo">&#xe68c;</i>
                <div class="common_sidebar_m_li">
                    <i class="iconfont icon-yuandian">&#xe66b;</i> 优定制
                    <p class="siren">企业/私人定制服务</p>
                </div>
            </a>
            <a href="javascript:;" onclick="_index_my_order('//u.uzai.com/reg/login')" class="mart50 li">
                <i class="iconfont icon-dingdan">&#xe614;</i>
                <div class="common_sidebar_m_li">
                    <i class="iconfont icon-yuandian">&#xe66b;</i>
                    <span>我的订单</span>
                </div>
            </a>
            <a href="javascript:;" onclick="_index_my_trace('//www.uzai.com/home/browsinghistory')" class="li">
                <i class="iconfont icon-jiaoyinzujifangke">&#xe699;</i>
                <div class="common_sidebar_m_li">
                    <i class="iconfont icon-yuandian">&#xe66b;</i> 
                    <span>我的足迹</span>
                </div>
            </a>

            <div class="return_top li">
                <i class="iconfont icon-backtop">&#xe603;</i>
            </div>
        </div>  
    </div> 


    <div class="duqGkC" v-if="show" @click="changeshow">
        <div style="box-sizing: border-box; padding: 15px; width:100%; height:100%;">
            <div class="kmdKOE"></div>
        </div>
    </div> 
    <div class="xr" v-else>
        <d-xr :show="show" @changeshow="changeshow"></d-xr>
    </div>  
        
    </div>
</template>
<script>
import dXr from "./xr.vue";
export default {
    data(){
        return{
            show:true
        }
    },
    methods:{
        changeshow(){
            if(this.show==true){
                this.show=false;
                return;
            }
            if(this.show==false){
                this.show=true;
                return;
            }
        }
    },
    components:{
        dXr
    }
}
</script>
<style scoped>
.common_sidebar {
    position: fixed;
    width: 40px;
    top: 0;
    right: 0;
    z-index: 99;
    bottom: 0;
    background: #333;
}
.common_sidebar_m {
    position: absolute;
    top: 20%;
    width: 40px;
}
.common_sidebar_m .li {
    display: block;
    position: relative;
    text-align: center;
    line-height: 33px;
    margin-top: 15px;
}
.common_sidebar_m .li i {
    color: #e6e6e6;
    font-size: 20px;
}
.common_sidebar_m_li {
    position: absolute;
    line-height: 33px;
    background: #333;
    color: #fff;
    border-radius: 16px 0 0 16px;
    left: 0;
    top: 0;
    text-align: left;
    -webkit-transition: all .5s;
    transition: all .5s;
    width: 1px;
    overflow: hidden;
    white-space: nowrap;
}
.common_sidebar_m .common_sidebar_m_li i {
    font-size: 22px;
    color: #ea1a56;
    font-weight: 700;
    float: left;
    margin-top: 8px;
    margin-left: 10px;
}

.common_sidebar_m .li i {
    color: #e6e6e6;
    font-size: 20px;
}
.common_sidebar_m .li {
    display: block;
    position: relative;
    text-align: center;
    line-height: 33px;
    margin-top: 15px;
}
.common_sidebar_m .li:hover .common_sidebar_m_li {
    left: -110px;
    color: #fff;
    width: 120px;
    font-size: 14px;
}
.common_sidebar_m .li:hover i{
    color: #ea1a56;
    font-size: 20px;
}
.common_sidebar_m .li:hover .common_sidebar_m_li i {
    color: #ea1a56;
    font-size: 20px;
}

.common_sidebar_m_li {
    position: absolute;
    line-height: 33px;
    background: #333;
    color: #fff;
    border-radius: 16px 0 0 16px;
    left: 0;
    top: 0;
    text-align: left;
    -webkit-transition: all .5s;
    transition: all .5s;
    width: 1px;
    overflow: hidden;
    white-space: nowrap;
}
.common_sidebar_m .ewm {
    background: 0 0;
    top: -50px;
}

.app .common_sidebar_m_li, .wecat .common_sidebar_m_li {
    background: 0 0;
}
.common_sidebar_m_li img {
    width: 96px;
    height: 171px;
}
.common_sidebar_m .li.mart50 {
    margin-top: 150px;
}

.xr{
    
    overflow-x: visible;
    overflow-y: visible;
    overflow-wrap: normal;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
    position: fixed;
    z-index: 9999999;
    bottom: 0px;
    right: 60px;
    display: block !important;
    width: 320px !important;
    height: 480px !important;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    margin: 0px;
    padding: 0px;
    border-radius: 8px;
}
.duqGkC {
    width:150px;
    height:180px;
    overflow-x: visible;
    overflow-y: visible;
    overflow-wrap: normal;

    position: fixed;
    top:200px;
    right:30px;
    z-index: 9999999;
    text-align: center;

    box-sizing: border-box;
    display: block !important;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    margin: 0px;
    padding: 0px;
}

.cvcfHR {
    bottom: 335px;
    background-color: transparent;
    right: -15px;
    height: 200px !important;
    width: 166px !important;
}
.kmdKOE {
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
    cursor: pointer;
    background: url(https://s3-qcloud.meiqia.com/pics.meiqia.bucket/654b669bb145ac60) 0% 0% / cover no-repeat;
}

</style>