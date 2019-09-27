<template>
  <div class="publicTopW">
    <div class="common_top">
      <div class="top_m">
        <div class="top_m_r">
          <a href="javascript:;" >
            <i class="iconfont icon-vip"></i> 会员俱乐部
          </a>
          <a href="#/order"  class="paddl26">我的订单</a>
          <a href="javascript:;"  class="paddl26 red">营业网点</a>
          <div class="top_server">
            <a href="#">
              服务中心
              <i class="iconfont icon-zhankai"></i>
              <i class="iconfont icon-shouqi"></i>
            </a>
            <div class="clear"></div>
            <div class="ul">
              <a href="javascript:;" >关于我们</a>
              <a href="javascript:;" >商务合作</a>
              <a href="javascript:;" >联系我们</a>
              <a href="javascript:;" >诚聘英才</a>
            </div>
          </div>
        </div>
        <div v-if="uid==''" class="top_m_l">
          <a href="#/login">
            <i class="iconfont icon-yonghu"></i>登录
          </a>
          <a class="paddl0">|</a>
          <a href="#/reg">
            <i class="iconfont icon-zhuce"></i>注册
          </a>
          <span class="red">新用户送5800元抵用券</span>
        </div>
        <div v-if="uid!=''" class="top_m_l1">
          <a href="javascript:;" >
            <span>HI，{{uname}}</span>
          </a>
          <a  class="grade grade1"></a>
          <a class="sign" @click="quit" href="javascript:;">
            <i class="iconfont icon-tuichu-copy"></i>退出
          </a>
        </div>
      </div>
    </div>
    <div class="common_head">
      <div class="phone_r">
        <h2>
          <i class="iconfont icon-lianxiwomen"></i> 1010-9898
        </h2>
        <h3>09:00~21:00</h3>
      </div>
      <a href="/">
        <img src="//r.uzaicdn.com/content/store/images/common/logo.png" class="logo" />
      </a>
      <div class="address" id="address">
        <div class="maskLine"></div>
        <i class="iconfont icon-zuobiao"></i>
        <span class="land" id="_site_name">{{addr}}</span>
        <i class="iconfont icon-zhankai" onclick="javascript:$('#cityBoard').show()"></i>
        <div class="address_m" id="cityBoard">
          <div class="hot_address">
            <a href="javascript:void();" @click="addr='北京'">北京</a>
            <a href="javascript:void();" @click="addr='上海'">上海</a>
            <a href="javascript:void();" @click="addr='天津'">天津</a>
            <a href="javascript:void();" @click="addr='西安'">西安</a>
            <a href="javascript:void();" @click="addr='南京'">南京</a>
            <a href="javascript:void();" @click="addr='武汉'">武汉</a>
            <a href="javascript:void();" @click="addr='杭州'">杭州</a>
          </div>
          <div class="hot_address_er">
            <div class="left">华北：</div>
            <div class="right">
              <a href="javascript:void();" @click="addr='北京'">北京</a>
              <a href="javascript:void();" @click="addr='天津'">天津</a>
              <a href="javascript:void();" @click="addr='石家'">石家庄</a>
              <a href="javascript:void();" @click="addr='唐山'">唐山</a>
              <a href="javascript:void();" @click="addr='青岛'">青岛</a>
              <a href="javascript:void();" @click="addr='济南'">济南</a>
              <a href="javascript:void();" @click="addr='太原'">太原</a>
              <a href="javascript:void();" @click="addr='廊坊'">廊坊</a>
            </div>
          </div>
          <div class="hot_address_er">
            <div class="left">东北：</div>
            <div class="right">
              <a href="javascript:void();" @click="addr='沈阳'">沈阳</a>
              <a href="javascript:void();" @click="addr='大连'">大连</a>
              <a href="javascript:void();" @click="addr='长春'">长春</a>
              <a href="javascript:void();" @click="addr='哈尔滨'">哈尔滨</a>
            </div>
          </div>
          <div class="hot_address_er">
            <div class="left">华东：</div>
            <div class="right">
              <a href="javascript:void();" @click="addr='上海'">上海</a>
              <a href="javascript:void();" @click="addr='南京'">南京</a>
              <a href="javascript:void();" @click="addr='苏州'">苏州</a>
              <a href="javascript:void();" @click="addr='杭州'">杭州</a>
              <a href="javascript:void();" @click="addr='宁波'">宁波</a>
              <a href="javascript:void();" @click="addr='无锡'">无锡</a>
              <a href="javascript:void();" @click="addr='南昌'">南昌</a>
              <a href="javascript:void();" @click="addr='合肥'">合肥</a>
              <a href="javascript:void();" @click="addr='常州'">常州</a>
            </div>
          </div>
          <div class="hot_address_er">
            <div class="left">华中：</div>
            <div class="right">
              <a href="javascript:void();" @click="addr='郑州'">郑州</a>
              <a href="javascript:void();" @click="addr='长沙'">长沙</a>
              <a href="javascript:void();" @click="addr='武汉'">武汉</a>
            </div>
          </div>
          <div class="hot_address_er">
            <div class="left">华南：</div>
            <div class="right">
              <a href="javascript:void();" @click="addr='厦门'">厦门</a>
            </div>
          </div>
          <div class="hot_address_er">
            <div class="left">西南：</div>
            <div class="right">
              <a href="javascript:void();" @click="addr='成都'">成都</a>
              <a href="javascript:void();" @click="addr='重庆'">重庆</a>
            </div>
          </div>
          <div class="hot_address_er">
            <div class="left">西北：</div>
            <div class="right">
              <a href="javascript:void();" @click="addr='西安'">西安</a>
            </div>
          </div>
        </div>
      </div>
      <div class="search">
        <div class="search_bot" onclick="IndexSearch.search()">
          <i class="iconfont icon-sousuo"></i>
        </div>
        <input
          type="text"
          class="search_input"
          id="index_search_input"
          attr-href="javascript:;"
          placeholder="国内游 满额立减￥400/人"
        />
        <input type="hidden" id="index_search_input_last_value" />
        <div id="searchQuickInput" style="display: none;"></div>
        
      </div>
      <div class="senior_search">
        <div class="line"></div>
        <span class="ti">高级搜索</span>
        <i class="iconfont icon-jiagezhengxu"></i>
        <i class="iconfont icon-jiagezhengxu1"></i>
        <div class="senior_search_m">
          <div class="senior_search_m_input">
            <div class="left">关键字:</div>
            <input type="text" placeholder="请输入目的地、关键词" id="input_adv_search" />
            <div id="adv_search_error_tip"></div>
          </div>
          <div class="senior_search_m_input1" style="display: none;">
            <div class="left">类型：</div>
            <div class="left1">
              <span>
                <i class="iconfont icon-fangkuang"></i> 跟团游
              </span>
              <span>
                <i class="iconfont icon-fangkuang"></i> 自由行
              </span>
              <span>
                <i class="iconfont icon-fangkuang"></i> 邮轮
              </span>
              <span>
                <i class="iconfont icon-fangkuang"></i> 境外参团
              </span>
            </div>
          </div>
          <div class="senior_search_m_input1">
            <div class="left">行程天数：</div>
            <div class="left1">
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>1天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>2天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>3天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>4天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>5天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>6天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>7天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>8天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>9天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>10天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>11天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>12天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>13天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>14天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>15天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>16天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>17天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>18天
              </span>
              <span>
                <i name="index_trip_days" class="iconfont icon-fangkuang"></i>18天以上
              </span>
            </div>
            <div class="more">
              更多
              <i class="iconfont icon-zhankai"></i>
            </div>
          </div>
          <div class="senior_search_m_input1">
            <div class="left">价格区间：</div>
            <div class="left1 section">
              <input type="text" id="index_price_low" maxlength="6" /> -
              <input type="text" id="index_price_high" maxlength="6" />
            </div>
          </div>
          <div class="senior_search_m_bot">
            <div class="bot" onclick="IndexSearch.index_adv_search_click()">搜索</div>
            <div class="qingchu" onclick="IndexSearch.clear_index_adv_condis()">清除</div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="common_nav">
      <ul>
        <li id="channel_1">
          <a href="javascript:;">
            <i class="iconfont icon-yuandian"></i>首页
          </a>
        </li>
        <li id="channel_8" class="nav_more">
          <a href="javascript:;" >
            <i class="iconfont icon-yuandian"></i>出境游
            <img src="//r.uzaicdn.com/content/store/images/common/top_nav_bg8.png" />
            <i class="iconfont icon-zhankai"></i>
          </a>
          <div class="nav_a" style="width: 1142px; left: 0px;">
            <div class="nav_item" style>
              <a href="javascript:;" >
                <span>金秋放价 满额立减￥300-￥1000/人</span>
              </a>
              <a href="javascript:;" >
                <span>优严选 一价全含</span>
              </a>
              <a href="javascript:;">
                <span>欧洲</span>
              </a>
              <a href="javascript:;">
                <span>日本</span>
              </a>
              <a href="javascript:;">
                <span>东南亚</span>
              </a>
              <a href="javascript:;">
                <span>海岛</span>
              </a>
              <a href="javascript:;">
                <span>美洲</span>
              </a>
              <a href="javascript:;">
                <span>澳新</span>
              </a>
              <a href="javascript:;">
                <span>中东非</span>
              </a>
            </div>
          </div>
        </li>
        <li id="channel_17" class="nav_more">
          <a href="javascript:;" >
            <i class="iconfont icon-yuandian"></i>国内游
            <img src="//r.uzaicdn.com/content/store/images/common/top_nav_bg3.png" />
            <i class="iconfont icon-zhankai"></i>
          </a>
          <div class="nav_a" style="width: 1142px; left: 0px;">
            <div class="nav_item" style>
              <a href="javascript:;" >
                <span>国内游 满额立减￥400/人</span>
              </a>
              <a href="javascript:;" >
                <span>国内游 送充电好礼</span>
              </a>
              <a href="javascript:;">
                <span>西藏</span>
              </a>
              <a href="javascript:;" >
                <span>福建</span>
              </a>
              <a href="javascript:;" >
                <span>海南</span>
              </a>
              <a href="javascript:;" >
                <span>云南</span>
              </a>
              <a href="javascript:;" >
                <span>新疆</span>
              </a>
              <a href="javascript:;" >
                <span>青海</span>
              </a>
              <a href="javascript:;" >
                <span>长白山</span>
              </a>
            </div>
          </div>
        </li>
        <li id="channel_3058" class="nav_more">
          <a href="javascript:;" >
            <i class="iconfont icon-yuandian"></i>主题游
            <i class="iconfont icon-zhankai"></i>
          </a>
          <div class="nav_a">
            <div class="nav_item">
              <a href="javascript:;">
                <span>奇迹旅行</span>
              </a>
              <a href="javascript:;" >
                <span>一家一团</span>
              </a>
              <a href="javascript:;" >
                <span>众信游学</span>
              </a>
            </div>
          </div>
        </li>
        <li id="channel_3060" class="nav_more">
          <a href="javascript:;" >
            <i class="iconfont icon-yuandian"></i>邮轮游
            <i class="iconfont icon-zhankai"></i>
          </a>
          <div class="nav_a">
            <div class="nav_item">
              <a href="javascript:;">
                <span>日本航线</span>
              </a>
              <a href="javascript:;">
                <span>欧洲航线</span>
              </a>
              <a href="javascript:;">
                <span>美洲航线</span>
              </a>
              <a href="javascript:;">
                <span>极地航线</span>
              </a>
            </div>
          </div>
        </li>
        <li id="channel_3072" class="nav_more">
          <a href="javascript:;" >
            <i class="iconfont icon-yuandian"></i>自由行
            <i class="iconfont icon-zhankai"></i>
          </a>
          <div class="nav_a">
            <div class="nav_item">
              <a href="javascript:;">
                <span>机酒自由行</span>
              </a>
              <a href="javascript:;">
                <span>省心半自助</span>
              </a>
              <a href="javascript:;">
                <span>日本自由行</span>
              </a>
            </div>
          </div>
        </li>
        <li id="channel_3049" class="nav_more">
          <a href="javascript:;" >
            <i class="iconfont icon-yuandian"></i>全球签证
            <img src="//r.uzaicdn.com/content/store/images/common/top_nav_bg4.png" />
            <i class="iconfont icon-zhankai"></i>
          </a>
          <div class="nav_a">
            <div class="nav_item">
              <a href="javascript:;">
                <span>美国十年多次签</span>
              </a>
              <a href="javascript:;">
                <span>日本三年多次签</span>
              </a>
              <a href="javascript:;">
                <span>新加坡个人旅游签</span>
              </a>
            </div>
          </div>
        </li>
        <li id="channel_3066" class="nav_more">
          <a href="javascript:;" >
            <i class="iconfont icon-yuandian"></i>定制旅行
            <i class="iconfont icon-zhankai"></i>
          </a>
          <div class="nav_a">
            <div class="nav_item">
              <a href="javascript:;" >
                <span>私人订制</span>
              </a>
              <a href="javascript:;" >
                <span>企业定制</span>
              </a>
            </div>
          </div>
        </li>
        <li id="channel_3070" class="nav_more">
          <a href="javascript:;" >
            <i class="iconfont icon-yuandian"></i>会员福利
            <i class="iconfont icon-zhankai"></i>
          </a>
          <div class="nav_a">
            <div class="nav_item">
              <a href="javascript:;" >
                <span>免费抽奖</span>
              </a>
              <a href="javascript:;" >
                <span>邀请好友领好礼</span>
              </a>
              <a href="javascript:;" >
                <span>注册送￥5800优惠券</span>
              </a>
              <a href="javascript:;" >
                <span>积分兑换</span>
              </a>
              <a href="javascript:;" >
                <span>会员俱乐部</span>
              </a>
            </div>
          </div>
        </li>
        <li id="channel_2048" class="nav_more">
          <a href="javascript:;" >
            <i class="iconfont icon-yuandian"></i>大客户专区
            <i class="iconfont icon-zhankai"></i>
          </a>
          <div class="nav_a">
            <div class="nav_item">
              <a href="javascript:;" >
                <span>银联优惠</span>
              </a>
              <a href="javascript:;" >
                <span>浦发老友记专区</span>
              </a>
              <a href="javascript:;" >
                <span>建行龙卡visa刷卡优惠</span>
              </a>
              <a href="javascript:;" >
                <span>中信银行贵宾</span>
              </a>
              <a href="javascript:;" >
                <span>民生银行贵宾</span>
              </a>
            </div>
          </div>
        </li>
        <li id="channel_1056" class="nav_more">
          <a href="javascript:;" >
            <i class="iconfont icon-yuandian"></i>全球景点攻略
            <i class="iconfont icon-zhankai"></i>
          </a>
          <div class="nav_a">
            <div class="nav_item">
              <a href="javascript:;" >
                <span>全球景点</span>
              </a>
              <a href="javascript:;" >
                <span>旅游攻略</span>
              </a>
              <a href="javascript:;" >
                <span>全球旅讯</span>
              </a>
            </div>
          </div>
        </li>
        <div class="clear"></div>
      </ul>
      <div class="ul" style="display: none;"></div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      uid: "",
      uname: "",
      addr:"北京"
        
    }
  },
  methods: {
    quit(){
      this.axios.get("user/quit").then(res=>{
        if(res.data==222){
          this.$router.go(0)
        }
      })
    }
  },
  mounted() {
    this.axios.get("user/load").then(res => {
      this.uid = res.data.uid;
      this.uname = res.data.uname;
      console.log(res.data);
      
    });
    
  },
  beforeUpdate() {
     
  },
};
</script>
<style scoped>
/* @charset "UTF-8"; */
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
input {
  outline: 0;
}
.common_wrap {
  width: 1140px;
  margin: 0 auto;
}
:-moz-placeholder {
  color: #b2b2b2;
  opacity: 1;
}
::-moz-placeholder {
  color: #b2b2b2;
  opacity: 1;
}
input:-ms-input-placeholder {
  color: #b2b2b2;
  opacity: 1;
}
input::-webkit-input-placeholder {
  color: #b2b2b2;
  opacity: 1;
}
textarea:-ms-input-placeholder {
  color: #b2b2b2;
  opacity: 1;
}
textarea::-webkit-input-placeholder {
  color: #b2b2b2;
  opacity: 1;
}
textarea {
  resize: none;
  outline: 0;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
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
  background: #fafafa
    url(//r.uzaicdn.com/content/store/images/mycenter/select_sj.png) no-repeat
    94% center;
  padding-right: 0\9;
}
select::-ms-expand {
  display: none;
}
li {
  list-style: none;
}
em,
i {
  font-style: normal;
}
.hidden,
.hide,
.success .valid_message,
.tip .valid_message {
  display: none;
}
a {
  text-decoration: none;
  color: #000;
}
.fl,
.left {
  float: left;
}
.fr,
.right {
  float: right;
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
.local {
  line-height: 34px;
  font-size: 12px;
  color: #666;
}
.local a {
  color: #000;
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
.page a.off {
  background: #ccc;
  color: #fff;
}
.like {
  margin: 30px 0;
}
.like_top {
  height: 30px;
}
.like_top_t {
  float: left;
  line-height: 30px;
  font-size: 20px;
}
.like_top_t i {
  font-size: 24px;
  margin-right: 5px;
  color: #c53a23;
  float: left;
  margin-top: 3px;
}
.like_top_r {
  float: right;
  line-height: 30px;
  color: gray;
  font-size: 14px;
  cursor: pointer;
}
.like_top_r i {
  color: gray;
  font-size: 14px;
  margin-left: 5px;
}
.like_m {
  border: 2px solid #f6f6f6;
  padding: 17px;
  padding-left: 0;
  margin-top: 10px;
  overflow: hidden;
}
.like_m1 {
  float: left;
  width: 200px;
  cursor: pointer;
  margin-left: 20px;
  position: relative;
}
.like_m1 img {
  width: 200px;
  height: 140px;
  display: block;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.like_m1 .img {
  width: 200px;
  height: 140px;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.like_m1 img:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.like_m1 p {
  color: #fff;
  line-height: 17px;
  font-size: 14px;
  height: 34px;
  position: absolute;
  left: 5px;
  right: 5px;
  top: 104px;
}
.like_m1 .ceng {
  background: #000;
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  height: 40px;
  filter: alpha(opacity=60);
  opacity: 0.6;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.like_m1_b {
  overflow: hidden;
  margin-top: 10px;
}
.like_m1_b span {
  font-size: 14px;
  color: #666;
}
.like_m1_b .right {
  float: right;
  color: #ea1a56;
  font-size: 12px;
}
.like_m1_b .right b {
  font-size: 18px;
}
.like_m1_b .right i {
  font-size: 12px;
  font-style: normal;
  color: #000;
}
.publicFootW,
.publicTopW {
  background-color: #fff;
}
.common_top {
  height: 30px;
  background: #f7f7f7;
}
.top_m {
  width: 1142px;
  margin: auto;
  line-height: 30px;
  overflow: hidden;
}
.top_m_l {
  float: left;
  line-height: 30px;
}
.top_m_l a {
  font-size: 12px;
  padding: 0 7px;
}
.top_m_l a:hover,
.top_m_l a:hover i {
  color: #ea1a56;
}
.top_m_l i {
  font-size: 14px;
  color: #666;
  margin-right: 3px;
}
.top_m_l a.paddl0 {
  padding-left: 0;
  padding-right: 0;
}
.top_m_l span.red {
  color: #fff;
  background: linear-gradient( #ea1a56, #ff8700);
  font-size: 12px;
  padding: 0 7px;
  position: relative;
  vertical-align: 2px;
  margin-left: 12px;
}
.top_m_l .icon_down {
  border: 5px solid #f9f9f9;
  border-right-color: #ea1a56;
  border-left: 0;
  font-size: 0;
  height: 0;
  line-height: 0;
  width: 0;
  overflow: hidden;
  margin-top: -5px;
  position: absolute;
  left: -5px;
  top: 50%;
}
.top_m_r {
  float: right;
  line-height: 30px;
  margin-right: 1px;
}
.top_m_r a {
  color: gray;
  font-size: 12px;
  float: left;
  line-height: 30px;
}
.top_m_r a:hover {
  color: #ea1a56;
}
.top_m_r a i.icon-vip {
  margin-left: -2px;
  font-size: 0;
}
.top_m_r a:hover i {
  color: #ea1a56;
}
.top_m_r .paddl26 {
  padding-left: 26px;
}
.top_m_r .red {
  color: #ea1a56;
}
.top_server {
  margin-left: 14px;
  padding: 0 12px;
  width: 65px;
  position: relative;
  float: left;
  z-index: 2;
}
.top_server i {
  font-size: 12px;
}
.top_server .icon-shouqi {
  display: none;
}
.top_server .ul {
  overflow: hidden;
  display: none;
  padding-bottom: 5px;
}
.top_server .ul a {
  float: none;
  display: block;
  text-align: center;
}
.top_server:hover {
  border: 1px solid #e1e1e1;
  background: #fff;
  margin-left: 13px;
  margin-right: -1px;
  margin-top: -1px;
}
.top_server:hover .icon-shouqi {
  display: inline;
}
.top_server:hover .icon-zhankai {
  display: none;
}
.top_server:hover .ul {
  display: block;
}
.myuzai {
  margin-right: -20px;
}
.myuzai:hover {
  margin-right: -21px;
}
.top_m_l1 {
  float: left;
  line-height: 30px;
}
.top_m_l1 a {
  color: gray;
  font-size: 12px;
  float: left;
  line-height: 30px;
}
.top_m_l1 a span {
  display: block;
  line-height: 30px;
}
.top_m_l1 a:hover,
.top_m_l1 a:hover i,
.top_m_l1 a:hover span {
  color: #ea1a56;
}
.top_m_l1 .grade {
  float: left;
  width: 65px;
  height: 17px;
  background: url(//r.uzaicdn.com/content/store/images/common/grade-ico-top.png);
  margin-top: 6px;
  margin-left: 7px;
  cursor: pointer;
}
.top_m_l1 .grade1 {
  background-position: 0 0;
}
.top_m_l1 .grade2 {
  background-position: 0 -17px;
}
.top_m_l1 .grade3 {
  background-position: 0 -34px;
}
.top_m_l1 .grade4 {
  background-position: 0 -51px;
}
.top_m_l1 .grade5 {
  background-position: 0 -68px;
}
.top_m_l1 .sign {
  float: left;
  margin-left: 20px;
  cursor: pointer;
  color: gray;
  font-size: 12px;
  line-height: 30px;
}
.top_m_l1 .sign i {
  font-size: 14px;
  color: #666;
  float: left;
  margin-top: 9px;
  margin-right: 2px;
}
.common_head {
  width: 1142px;
  margin: auto;
  padding-top: 30px;
}
.common_head img.logo {
  float: left;
}
.common_head .address {
  float: left;
  margin-left: 24px;
  padding: 0 10px;
  padding-top: 4px;
  height: 22px;
  background: #f5f5f5;
  border-radius: 12px;
  margin-top: 8px;
  position: relative;
  cursor: pointer;
  border: 1px solid #f5f5f5;
}
.address .icon-zhankai {
  margin-left: 2px;
}
.common_head .address:hover .address_m,
.common_head .address:hover .maskLine {
  display: block;
}
.maskLine {
  display: none;
  height: 6px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  z-index: 10;
  top: 23px;
  left: 0;
}
.common_head .address:hover {
  border-color: #f1f1f1;
  background-color: #fff;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.common_head .address:hover i.icon-zhankai {
  color: #ea1a56;
}
.common_head .address i.icon-zuobiao {
  font-size: 14px;
  color: #ea1a56;
  margin-right: 2px;
}
.common_head .address .land {
  color: #999;
  font-size: 12px;
  cursor: pointer;
}
.common_head .address i.icon-shouqi,
.common_head .address i.icon-zhankai {
  font-size: 14px;
  color: #cfcfcf;
}
.common_head .address_m {
  display: none;
  position: absolute;
  top: 27px;
  left: -1px;
  width: 382px;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  -webkit-box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  -o-box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  border-radius: 12px;
  z-index: 9;
  border-top-left-radius: 0;
  cursor: default;
}
.common_head .address_m .hot_address {
  border-bottom: 1px solid #ececec;
  padding: 0 5px 6px;
}
.common_head .address_m .hot_address a {
  color: #ea1a56;
  font-size: 12px;
  padding-right: 11px;
}
.common_head .address_m .hot_address_er {
  padding: 7px 5px 5px;
  overflow: hidden;
}
.common_head .address_m .hot_address_er .left {
  float: left;
  width: 40px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 700;
  cursor: default;
}
.common_head .address_m .hot_address_er .right {
  overflow: hidden;
  float: left;
  width: 332px;
}
.common_head .address_m .hot_address_er .right a {
  float: left;
  margin-right: 16px;
  line-height: 22px;
  font-size: 12px;
}
.common_head .address_m .hot_address_er .right a:hover {
  color: #ea1a56;
}
.common_head .search {
  float: left;
  margin-left: 70px;
  height: 36px;
  width: 390px;
  border: 2px solid #ea1a56;
  border-radius: 20px;
  position: relative;
}
.common_head .search .search_input {
  float: left;
  height: 36px;
  line-height: 36px;
  margin-left: 20px;
  width: 330px;
  font-size: 14px;
}
.common_head .search .search_input::-webkit-input-placeholder {
  color: #999;
}
.common_head .search .search_input::-moz-placeholder {
  color: #999;
}
.common_head .search .search_input::-ms-input-placeholder {
  color: #999;
}
.common_head .search #searchQuickInput {
  position: absolute;
  left: 0;
  right: 0;
  top: 38px;
  border: 1px solid #efefef;
  border-radius: 7px;
  padding: 10px 20px;
  z-index: 10;
  background: #fff;
  display: none;
}
.searchQuickList {
  display: block;
  height: 30px;
}
.searchQuickList:hover em {
  color: #ea1a56;
}
.searchQuickList em {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.searchQuickList span {
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
  color: #a6a6a6;
  font-size: 12px;
}
.common_head .search .search_more {
  position: absolute;
  left: 0;
  right: 0;
  top: 38px;
  border: 1px solid #efefef;
  border-radius: 7px;
  padding: 20px;
  padding-top: 10px;
  z-index: 12;
  background: #fff;
  display: none;
}
.common_head .search .search_more .search_more_top {
  margin-bottom: 2px;
  height: 20px;
  overflow: hidden;
}
.common_head .search .search_more .split_line {
  border-bottom: 1px solid #ececec;
}
.common_head .search .search_more .search_more_top span,
.common_head .search .search_more .search_more_top span a {
  font-size: 12px;
  color: gray;
  padding-right: 8px;
  line-height: 20px;
  float: left;
  max-width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.common_head .search .search_more .search_more_top span a:hover {
  color: #ea1a56;
}
.common_head .search .search_more .search_more_top span.empty {
  cursor: pointer;
  color: #bfbfbf;
  float: right;
}
.common_head .search .search_more .search_more_m {
  padding-top: 10px;
}
.common_head .search .search_more .search_more_m .hot a {
  color: #ea1a56;
  font-size: 12px;
  padding-right: 10px;
  margin-bottom: 10px;
  display: block;
  float: left;
}
.common_head .search .search_more .search_more_m .hot {
  overflow: hidden;
  height: 16px;
}
.common_head .search .search_more .search_more_m .more {
  margin-top: 14px;
  overflow: hidden;
  height: 16px;
}
.common_head .search .search_more .search_more_m .more a {
  font-size: 12px;
  color: #333;
  padding-right: 7px;
  float: left;
  height: 16px;
  line-height: 16px;
}
.common_head .search .search_more .search_more_m .more a:hover {
  color: #ea1a56;
}
.common_head .search .search_more .search_more_m .more b {
  font-weight: 700;
  color: #333;
  font-size: 12px;
  padding-right: 4px;
  float: left;
  height: 16px;
  line-height: 16px;
  width: 50px;
}
.search_bot {
  float: right;
  width: 37px;
  height: 28px;
  background: #ea1a56;
  cursor: pointer;
  color: #fff;
  line-height: 0;
  border-radius: 18px;
  text-align: center;
  padding-top: 8px;
  margin-right: -1px;
}
.search_bot i {
  font-size: 20px;
  font-weight: 700;
}
.senior_search {
  float: left;
  margin-left: 0;
  padding-left: 10px;
  padding-right: 5px;
  line-height: 40px;
  cursor: pointer;
  position: relative;
  border: 1px solid #fff;
  border-bottom: 0;
  z-index: 99;
}
.senior_search:hover {
  border: 1px solid #efefef;
  border-radius: 7px 7px 0 0;
  border-bottom: 0;
}
.senior_search:hover .line {
  display: block;
}
.senior_search:hover .icon-jiagezhengxu1 {
  display: inline;
}
.senior_search:hover .icon-jiagezhengxu {
  display: none;
}
.senior_search:hover .senior_search_m {
  display: block;
}
.senior_search .line {
  display: none;
  position: absolute;
  right: 0;
  left: 0;
  bottom: -3px;
  height: 10px;
  background: #fff;
  z-index: 3;
}
.senior_search .senior_search_m_input {
  overflow: hidden;
  margin-bottom: 10px;
}
.senior_search .senior_search_m_input .left {
  color: #333;
  font-size: 12px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 5px;
  cursor: default;
  padding-right: 6px;
}
.senior_search .senior_search_m_input input {
  padding: 3px 0;
  float: left;
  padding-left: 10px;
  border: 1px solid #e5e5e5;
  margin-left: 0;
  border-radius: 3px;
  width: 250px;
}
#adv_search_error_tip {
  color: #ea1a56;
  font-size: 12px;
  float: left;
  display: block;
  word-spacing: -1px;
  line-height: 26px;
  padding-left: 10px;
}
.senior_search .senior_search_m_input .prompt {
  float: left;
  line-height: 24px;
  font-size: 12px;
  color: #ea1a56;
  margin-left: 8px;
}
.senior_search .senior_search_m_input .prompt i {
  float: left;
  margin-top: 4px;
  margin-right: 4px;
}
.senior_search .senior_search_m_input1 {
  overflow: hidden;
  margin-top: 10px;
}
.senior_search .senior_search_m_input1 .left {
  float: left;
  width: 60px;
  color: #333;
  font-size: 12px;
  font-weight: 700;
  line-height: 26px;
  cursor: default;
  padding-right: 6px;
}
.senior_search .senior_search_m_input1 .left1 {
  float: left;
  width: 330px;
  height: 26px;
  overflow: hidden;
}
.senior_search .senior_search_m_input1 .error {
  float: left;
  color: #ea1a56;
  font-size: 12px;
  line-height: 22px;
}
.senior_search .senior_search_m_input1 .left1 span {
  padding-right: 10px;
  color: #333;
  font-size: 12px;
  float: left;
  line-height: 26px;
}
.senior_search .senior_search_m_input1 .left1 span.red {
  color: #ea1a56;
}
.senior_search .senior_search_m_input1 .left1 span i {
  color: #d9d9d9;
  font-size: 12px;
  margin-right: 2px;
}
.senior_search .senior_search_m_input1 .left1 span i.icon-checkbank {
  color: #ea1a56;
}
.senior_search .senior_search_m_input1 .more {
  float: left;
  font-size: 12px;
  color: #999;
  line-height: 26px;
}
.senior_search .senior_search_m_input1 .more i {
  font-size: 14px;
}
.senior_search .senior_search_m_input1 .section {
  font-size: 14px;
  color: #777;
  width: 170px;
}
.senior_search .senior_search_m_input1 .section input {
  padding: 3px 0;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  width: 60px;
  padding-left: 10px;
  line-height: 16px;
}
.senior_search .senior_search_m_bot {
  margin-top: 20px;
  overflow: hidden;
  text-align: center;
}
.senior_search .senior_search_m_bot .bot {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  border-radius: 15px;
  background: #ea1a56;
  display: inline-block;
}
.senior_search .senior_search_m_bot .qingchu {
  line-height: 30px;
  font-size: 12px;
  text-decoration: underline;
  color: #999;
  padding-left: 15px;
  display: inline;
  cursor: pointer;
}
.senior_search span.ti {
  color: #a6a6a6;
  font-size: 14px;
  line-height: 38px;
}
.senior_search .icon-jiagezhengxu,
.senior_search .icon-jiagezhengxu1 {
  font-size: 14px;
  color: #a6a6a6;
}
.senior_search .icon-jiagezhengxu1 {
  display: none;
}
.senior_search_m {
  position: absolute;
  left: -395px;
  right: -1px;
  top: 39px;
  border: 1px solid #efefef;
  padding: 16px;
  border-radius: 7px 0 7px 7px;
  background: #fff;
  z-index: 2;
  display: none;
}
.common_head .phone_r {
  float: right;
}
.common_head .phone_r h2 {
  padding-top: 2px;
  color: #ea1a56;
  font-size: 20px;
}
.common_head .phone_r h2 i {
  font-size: 20px;
}
.common_head .phone_r h3 {
  text-align: right;
  font-size: 14px;
  color: #999;
  margin-top: 4px;
}
.common_nav {
  padding-top: 30px;
  padding-bottom: 2px;
  position: relative;
  border-bottom: 3px solid #ea1a56;
}

.common_nav ul {
  width: 1142px;
  margin: auto;
  position: relative;
}
.common_nav .ul {
  position: absolute;
  height: 34px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  left: 0;
  z-index: 10;
  right: 0;
  top: 67px;
  background: #fff;
  display: none;
  opacity: 0.92;
  filter: alpha(opacity=92);
}
.common_nav ul li {
  float: left;
}
.common_nav ul:hover~.ul{
  display: block !important;
}
/* 这里是导航栏需要用js写的地方，现在先用css代写，并没有实现期望的样式，有需要再改 */
.common_nav ul li .nav_a {
  position: absolute;
  top: 30px;
  padding-top: 4px;
  z-index: 11;
  text-align: center;
  display: none;
}
.common_nav ul li:hover .nav_a {
  display: block;
  background: #fff;
}
/* 到这里是css代写需要修改的部分 */
.common_nav ul li .nav_item {
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
}
.common_nav ul li.cui_nav_o .nav_a {
  display: block;
}
.common_nav ul li .nav_a a {
  color: #333;
  font-size: 14px;
  line-height: 34px;
  padding: 0;
}
.common_nav ul li .nav_a a:hover span {
  color: #ea1a56;
}
.common_nav ul li .nav_a span {
  color: #333;
  font-size: 14px;
  line-height: 38px;
  padding: 0 12px;
}
.common_nav ul li a {
  display: inline-block;
  position: relative;
  padding: 0 19px;
  line-height: 32px;
  font-size: 16px;
}
.common_nav ul li i.icon-yuandian {
  color: #ea1a56;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  margin-top: -8px;
  left: 2px;
  display: none;
}
.common_nav ul li i.icon-zhankai {
  color: #b7b7b7;
  font-size: 10px;
  font-weight: 700;
  position: absolute;
  right: 3px;
  top: 50%;
  margin-top: -4px;
}
.common_nav ul li i.icon-shouqi {
  color: #ccc;
  font-size: 10px;
  font-weight: 700;
  position: absolute;
  right: 3px;
  top: 50%;
  margin-top: -6px;
  display: none;
}
.common_nav ul li.active i {
  display: block;
  color: #ea1a56;
}
.common_nav ul li img {
  position: absolute;
  right: -4px;
  top: -5px;
  height: 12px;
  width: 39px;
}
.common_nav ul li.active a {
  color: #ea1a56;
}
.common_nav ul li:hover i {
  display: block;
  color: #ea1a56;
}
.common_nav ul li:hover i.icon-shouqi,
.common_nav ul li:hover i.icon-zhankai {
  display: block;
}
.common_nav ul li:hover a {
  color: #ea1a56;
}
</style>
