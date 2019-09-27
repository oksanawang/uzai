<template>
<div>
  <nheader></nheader>
  <div class="MyCenterWrap">
    <div class="main clear">
      <div class="sidebar">
        <dl class="grouping-item">
          <dt>
            <router-link to>
              <i class="iconfont icon-shouyeshouye"></i>
              <b class="f16 vm color">我的悠哉</b>
            </router-link>
          </dt>
          <dt>
            <i class="iconfont icon-yonghu"></i>
            <b class="f16 vm">个人中心</b>
          </dt>
          <dd v-for="(item,index) of myzx" :key="index" @click="tab(index)">
            <router-link to>{{item}}</router-link>
          </dd>
          <dt>
            <i class="iconfont icon-gouwu"></i>
            <b class="f16 vm">我的资产</b>
          </dt>
          <dd v-for="(item,index) of myzc" :key="index+5" @click="tab(index+5)">
            <router-link to>{{item}}</router-link>
          </dd>
          <dt>
            <i class="iconfont icon-guanli"></i>
            <b class="f16 vm">账号管理</b>
          </dt>
          <dd v-for="(item,index) of zhgl" :key="index+9" @click="tab(index+9)">
            <router-link to>{{item}}</router-link>
          </dd>
        </dl>
      </div>
      <div class="individual-wrap">
        <ul class="nav">
          <order-nav
            v-for="(item,index) of zhongji"
            :key="index"
            :item="item"
            :style="index==i?{'display':'block'}:{'display':'none'}"
            class
          ></order-nav>
        </ul>
        <div class="Acti_v clear">
          <ul class="clear Acti_v_nav">
            <li class="fl on">全部订单(1)</li>
            <li class="fl">待付款(1)</li>
            <li class="fl">待出行(0)</li>
          </ul>
          <div class="order_style">
            <label class="add_info-hd add_r fl">订单类型 :</label>
            <div class="add_item add_name-bar">
              <select name id="orderType" class>
                <option value="全部">请选择</option>
                <option value="度假线路">度假线路</option>
                <option value="签证">签证</option>
                <option value="门票">门票</option>
                <option value="机票">机票</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <ul class="order_list" style="display:block;" id="order_list">
            <li class="list_th clear">
              <span class="th01">产品信息</span>
              <span class="th02">出发日期</span>
              <span class="th03">订单金额</span>
              <span class="th04">
                订单状态
                <i class="iconfont icon-question">
                  <div class="order_type">
                    <div class="jiantou"></div>
                    <p>
                      <em>处理中：</em>
                      <b class>您的订单已提交成功，我们正在处理中，请耐心等待客服与您联系。</b>
                    </p>
                    <p>
                      <em>待付款：</em>
                      <b>已为您保留位置,请尽快完成付款。</b>
                    </p>
                    <p>
                      <em>已付订金：</em>
                      <b>您的订单已支付订金，请尽快支付全款，以免影响您的出游。</b>
                    </p>
                    <p>
                      <em>已付全款：</em>
                      <b>您已经完成该订单的支付，请耐心等待出团通知书。</b>
                    </p>
                    <p>
                      <em>订单取消：</em>
                      <b>该订单已被您或客服取消。</b>
                    </p>
                  </div>
                </i>
              </span>
              <span class="th05">操作</span>
            </li>
            <li>
              <div class="notime clear">
                <span>订单编号：{{oid}}</span>
                <span class="time">下单时间：2019-09-28</span>
              </div>
              <table class="list_detail">
                <tbody>
                  <tr>
                    <td class="th01">
                      <div class="fl">
                        <img
                          onerror="nofind()"
                          :src="imgurl"
                          width="60"
                          height="45"
                        />
                      </div>
                      <div class="fl title">
                        <em>
                          <a
                            href="00012816.html"
                            target="_blank"
                          >&lt;{{imgtitle}}</a>
                        </em>
                      </div>
                    </td>
                    <td class="th02">{{gdata}}</td>
                    <td class="th03">{{money}}</td>

                    <td class="th04">
                      订单取消
                      <br />
                      <div class="sendding">
                        <a href="#">订单跟踪</a>
                        <dl class="sendding_info">
                          <dt>
                            <div class="arr"></div>
                            <div class="arr2"></div>
                          </dt>

                          <dd class="clear">
                            <em class="dateYMD">
                              2019-09-19
                              <br />09:58:55
                            </em>
                            <em>您的订单提交成功，我们将在1个工作日内与您联系，请保持电话畅通</em>
                          </dd>
                          <dd class="clear">
                            <em class="dateYMD">
                              2019-09-19
                              <br />09:59:49
                            </em>
                            <em>您的订单已取消</em>
                          </dd>
                        </dl>
                      </div>
                    </td>
                    <td class="th05" servicetype="外采">
                      <a class="channel" href>代付款</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="order_fz hidden">
                <div class="arr3"></div>
                <div class="arr4"></div>
                <table class="order_fz_table" cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <th class="t01">子订单编号</th>
                      <th class="t02">金额</th>
                      <th class="t03">支付状态</th>
                      <th class="t04">款项类型</th>
                      <th class="t05">操作</th>
                      <th class="t06"></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        <div class="page">
          <a id="firstPage">首页</a>
          <a id="prePage">上一页</a>
          <a class="active">1</a>
          <a id="nextPage">下一页</a>
          <a id="lastPage">尾页</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import order_navVue from "./order_nav.vue";
import nheader from "../index/header.vue"
export default {
  components: {
    "order-nav": order_navVue,
    nheader
    
  },
  data() {
    return {
      myzx: [
        "我的订单",
        "积分兑换订单",
        "我的收藏",
        "常用旅客信息",
        "我的会员活动"
      ],
      myzc: ["我的积分", "我的优惠券", "我的心动卡", "我的钱包"],
      zhgl: ["个人资料", "账户安全"],
      zhongji: [],
      i: 0,
      is_show: false,
      oid:"",
      imgurl:"",
      imgtitle:"",
      gdata:"",
      money:"",

    };
  },
  created() {
    this.zhongji = this.myzx.concat(this.myzc, this.zhgl);
    console.log(this.zhongji);
    this.bus.$on('pay_info',(data)=>{
      console.log("从上个页面传递过来的值"+data)
    })
  },
  beforeDestroy() {
    this.bus.$off('pay_info')
  },
  methods: {
    tab(n) {
      this.i = n;
      console.log(this.i);
    }
  },
  mounted() {
    this.axios.get("order/lorder").then(res=>{
      var sj = res.data[res.data.length-1]
      console.log(sj)
      this.oid=sj.oid;
      this.imgurl=sj.gimg;
      this.imgtitle=sj.gimg_title;
      this.gdata=sj.go_data;
      this.money=sj.total_price;

    })
    this.axios.get("user/test").then(res=>{
      console.log(res.data)
      if(res.data==-100){
        this.$router.push("login")
      }
    })
  },
};
</script>
<style scoped>
.jiantou {
  width: 0px;
  position: relative;
  top: -36px;
  left: 145px;
  height: 0px;
  border: 8px solid #fff;
  border-bottom-color: #fff;
  -webkit-transform: rotate(90deg);
  transform: rotate(-135deg);
  -webkit-box-shadow: 3px 3px;
  box-shadow: 2px 2px 3px -2px;
}
li {
  list-style: none;
}
.iconfont {
  font-size: 26px;
}
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
input,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: 400;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  line-height: 1;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-gouwu,
.icon-guanli,
.icon-yonghu,
.icon-shouyeshouye {
  color: #ea1a56;
  font-size: 20px !important;
  vertical-align: middle;
  margin-right: 5px;
}
.MyCenterWrap {
  background: #f7f7f7;
  padding-top: 20px;
  padding-bottom: 30px;
}
.clear,
.clearfix {
  clear: both;
}
.clear:after,
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  *zoom: 1;
}
.MyCenterWrap .main {
  width: 1140px;
  margin: auto;
}
.sidebar {
  background: #fff;
  border-radius: 5px;
  float: left;
  width: 180px;
  padding-top: 10px;
}
.grouping-item {
  padding-bottom: 10px;
  font-size: 14px;
}
.vm {
  vertical-align: middle;
}
.f16 {
  font-size: 16px;
}
.grouping-item dt .color {
  color: #ea1a56;
}
.grouping-item dt {
  cursor: default;
  margin: 0 20px;
  padding: 20px 0 10px 5px;
  position: relative;
}
a {
  text-decoration: none;
  color: #000;
}
.sidebar .grouping-item dd a {
  color: #666;
  display: block;
  margin-top: 1px;
  padding: 10px 25px 10px 53px;
  position: relative;
  cursor: pointer;
}
.sidebar .grouping-item .active a,
.sidebar .grouping-item dd a:hover {
  color: #fff;
  background: #ea1a56;
}
.individual-wrap {
  width: 858px;
  padding: 20px 40px;
  border-radius: 6px;
  margin-left: 20px;
  float: left;
  min-height: 700px;
  background: #fff;
}
.nav {
  padding-bottom: 8px;
  border-bottom: 1px solid #e5e5e5;
}
.nav li {
  display: inline-block;
  font-size: 16px;
  padding: 8px 0;
  margin-right: 10px;
  border-radius: 3px;
  cursor: pointer;
}
.Acti_v {
  padding: 20px 0 10px;
  position: relative;
}
.fl,
.left {
  float: left;
}
.Acti_v_nav li {
  padding: 6px 10px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
}
.Acti_v_nav li.on {
  background: #ea1a56;
  border-radius: 5px;
  color: #fff;
}
.order_style {
  position: absolute;
  right: 0;
  width: 210px;
  top: 20px;
}
.add_r {
  text-align: right;
  color: #333;
}
.add_info-hd {
  display: block;
  white-space: nowrap;
  width: 100px;
  height: 36px;
  line-height: 32px;
  padding-right: 10px;
  font-size: 14px;
}
.add_name-bar {
  float: left;
}
select {
  margin-right: 4px;
  color: #666;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding-left: 10px;
  outline: 0;
  background: #fafafa url(../../../public/images/order_img/select_sj.png)
    no-repeat 94% center;
  padding-right: 0\9;
}
.add_name-bar select {
  padding: 5px 0;
  padding-left: 6px;
  font-size: 14px;
  width: 90px;
}
.order_list li {
  border: 1px solid #eaeaea;
  font-size: 14px;
  margin-bottom: 10px;
}
.order_list .list_th {
  background: #f6f6f6;
  font-size: 14px;
}
.order_list span {
  text-align: center;
  border-right: 1px solid #f6f6f6;
  float: left;
  line-height: 30px;
}
.order_list .th01 {
  width: 380px;
}
.order_list .th02 {
  width: 100px;
}
.order_list .th03 {
  width: 100px;
}
.order_list .th04 {
  width: 100px;
}
.list_th .th04 {
  position: relative;
}
.order_list .th05 {
  width: 150px;
}
.icon-question {
  color: #ccc;
  margin-left: 2px;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.order_type {
  font-size: 12px;
  color: #666;
  width: 290px;
  height: 196px;
  position: absolute;
  top: 28px;
  padding: 30px 30px 0 20px;
  left: -162px;
  display: none;
  z-index: 9;
  border-radius: 3px;
  box-shadow: 0px 2px 5px;
}
.order_list .order_type p {
  margin-bottom: 8px;
  overflow: hidden;
}
em,
i {
  font-style: normal;
}
.order_list .order_type em {
  width: 70px;
  text-align: right;
  float: left;
  color: #333;
  font-weight: bold;
}
.order_list .order_type b {
  width: 210px;
  text-align: left;
  float: right;
}
.icon-question:hover .order_type {
  display: block;
}
.notime {
  font-size: 12px;
  background: #f5f9ff;
  padding: 0px 10px 0px 10px;
  border-bottom: 1px dotted #e2e2e2;
  color: #999;
}
.order_list span {
  text-align: center;
  border-right: 1px solid #f6f6f6;
  float: left;
  line-height: 30px;
}
.notime .time {
  float: right;
}
.list_detail {
  font-size: 14px;
  position: relative;
}
.list_detail tr td {
  text-align: center;
  border-right: 1px dotted #e2e2e2;
  line-height: 25px;
  padding: 10px 0 10px 0;
}
.order_list .th01 {
  width: 380px;
}
.list_detail tr td:first-child {
  text-align: left;
  padding: 10px;
  width: 370px;
}
.list_detail tr td:last-child {
  border: 0;
}
.fl,
.left {
  float: left;
}
.order_list .th01 .title {
  width: 290px;
  line-height: 16px;
  display: block;
  padding-left: 14px;
}
.order_list .th01 .title em {
  min-height: 32px;
  display: block;
  max-height: 52px;
  overflow: hidden;
  line-height: 18px;
}
.list_detail a {
  color: #0099d9;
  margin: 0 5px 0 5px;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
}
.order_list .th01 .title em a {
  color: #4a4a4a;
}
em,
i {
  font-style: normal;
}
.sendding {
  height: 28px;
  position: relative;
}
.sendding_info {
  font-size: 12px;
  width: 250px;
  position: absolute;
  z-index: 22;
  text-align: left;
  background: #fff;
  padding: 10px;
  top: 20px;
  left: -75px;
  display: none;
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 5px;
  color: #666;
}
.arr {
  width: 0;
  height: 0;
  border-right: 9px dashed transparent;
  border-bottom: 7px solid #e8e8e8;
  border-left: 9px dashed transparent;
  position: absolute;
  top: -7px;
  left: 118px;
}
.arr2 {
  width: 0;
  height: 0;
  border-right: 9px dashed transparent;
  border-bottom: 7px solid #fff;
  border-left: 9px dashed transparent;
  position: absolute;
  top: -6px;
  left: 118px;
}
.sendding_info dd {
  margin: 5px auto 5px auto;
}
.sendding_info dd em {
  display: block;
  float: left;
  width: 160px;
  line-height: 16px;
}
.sendding_info dd .dateYMD {
  width: 80px;
  text-align: center;
}
.hidden,
.hide,
.success .valid_message,
.tip .valid_message {
  display: none;
}
.order_fz {
  border-top: 1px dotted #eaeaea;
  position: relative;
}
.arr3 {
  width: 0;
  height: 0;
  border-right: 9px dashed transparent;
  border-bottom: 7px solid #eaeaea;
  border-left: 9px dashed transparent;
  position: absolute;
  top: -7px;
  left: 91px;
}
.arr4 {
  width: 0;
  height: 0;
  border-right: 9px dashed transparent;
  border-bottom: 7px solid #fff;
  border-left: 9px dashed transparent;
  position: absolute;
  top: -6px;
  left: 91px;
}
.order_fz_table {
  font-size: 12px;
  width: 820px;
  margin: 10px auto 20px auto;
}
.order_fz_table tr th {
  padding: 5px 0 5px 0;
  border-bottom: 1px solid #eee;
  text-align: center;
}
.order_fz_table .t01 {
  width: 180px;
}
.order_fz_table .t02 {
  width: 100px;
}
.order_fz_table .t03 {
  width: 100px;
}
.order_fz_table .t04 {
  width: 100px;
}
.order_fz_table .t05 {
  width: 100px;
}
.order_fz_table .t06 {
  width: 240px;
}
.page {
  margin-top: 30px;
  text-align: right;
}
.page a {
  line-height: 25px;
  font-size: 14px;
  color: #666;
  margin-right: 5px;
  border: 1px solid #ececec;
  padding: 4px 10px;
  cursor: pointer;
}
.page a.active {
  color: #fff;
  background: #ea1a56;
}
</style>