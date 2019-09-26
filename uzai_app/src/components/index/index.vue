<template>
  <div class="yzly">
    <head01></head01>
      <banner></banner>
    <div class="main">
      <main1></main1>
      <main2></main2>
      <clear></clear>
      <banner1></banner1>
      <main2></main2>
      <clear></clear>
      <banner1></banner1>
      <main2></main2>
      <clear></clear>
      <main2></main2>
      <clear></clear>
    </div>
    <foot01></foot01>
    <d-cbl></d-cbl>
  </div>
</template>
<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
import Banner from "./banner.vue"
import Main1 from "./main1.vue";
import Main2 from "./main2.vue";
import Clear from "./clear.vue";
import Banner_slide from "./banner_slide.vue";
import dCbl from "../detail/cbl";
export default {
  data() {
    return {
      uid:"",
      uname:"",
    };
  },
  methods: {
   
    
    
  },
  mounted() {
    
  },
  
  components: {
    head01: Header,
    foot01: Footer,
    main1: Main1,
    banner:Banner,
    main2: Main2,
    clear: Clear,
    banner1: Banner_slide,
    dCbl
  }
};
</script>
<style>
.yzly {
  overflow: hidden;
}
.clear,
.clearfix {
  clear: both;
}
.main {
  width: 1142px;
  margin: auto;
  margin-top: 30px;
}
li {
  list-style: none;
}
body {
  overflow-x: hidden;
}
.banner_index {
  height: 450px;
  margin: auto;
  max-width: 1920px;
  position: relative;
}
.banner_wrap .content_list {
  position: relative;
  height: 450px;
}
.banner_wrap .content_list li {
  opacity:0;
  position: absolute;
  left: 0;
  top: 0;
  height: 450px;
  width: 100%;
  transition:opacity .5s linear;
}
.banner_wrap .content_list li a {
  display: block;
  height: 450px;
  background-repeat: no-repeat;
  background-position: center top;
}
.banner_wrap .content_list li.active {
  opacity:1;
  z-index:2;
}
.banner_wrap .pagination {
  position: absolute;
  left: 50%;
  margin-left: -320px;
  bottom: 5px;
  min-width: 890px;
  text-align: center;
  font-size: 0;
  z-index:10;
}
.banner_wrap .pagination span {
  display: inline-block;
  width: 88px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  line-height: 23px;
  margin-right: 2px;
  background: url(//r.uzaicdn.com/content/store/images/index/hei.png);
  cursor: pointer;
  height: 23px;
  overflow: hidden;
}
.banner_wrap .pagination span.active {
  background: url(//r.uzaicdn.com/content/store/images/index/hong.png);
}
.banner_index .nav_left {
  position: absolute;
  width: 250px;
  left: 50%;
  top: 0;
  margin-left: -571px;
  height: 450px;
  background: #fff;
  box-shadow: 2px 7px 10px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  z-index:10;
}
.banner_index .nav_left1 {
  height: 37px;
  border-top: 1px dotted #d9d9d9;
  border-left: 4px solid #fff;
  padding: 13px;
  padding-left: 9px;
}
.banner_index .nav_left1:first-child {
  border-top: 0;
}
.banner_index .nav_left1 .left {
  float: left;
  width: 32px;
  margin-top: 5px;
}
.banner_index .nav_left1 .right {
  width: 175px;
  float: left;
}
.banner_index .nav_left1 .right .n1 a {
  font-size: 14px;
  color: #ea1a56;
  padding-right: 6px;
}
.banner_index .nav_left1 .right .n2 {
  margin-top: 5px;
  overflow: hidden;
  height: 16px;
}
.banner_index .nav_left1 .right .n1 {
  white-space: nowrap;
  overflow: hidden;
}
.banner_index .nav_left1 .right .n2 a {
  color: #333;
  font-size: 12px;
  padding-right: 6px;
  float: left;
  line-height: 16px;
}
.banner_index .nav_left1 .right .n2 a:hover {
  color: #ea1a56;
}
.banner_index .nav_left1 .right1 {
  float: left;
  margin-top: 11px;
}
.banner_index .nav_left1 .right1 i {
  color: #e3e3e3;
}
.banner_index .nav_left1 .nav_left1_hover {
  position: absolute;
  left: 250px;
  width: 472px;
  background: #fff;
  border-left: 1px dotted #e84c81;
  top: 0;
  min-height: 410px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 2;
  display: none;
}
.banner_index .nav_left1 .nav_left1_hover .t1 {
  font-size: 14px;
  color: #ea1a56;
}
.banner_index .nav_left1 .nav_left1_hover .t1 i {
  color: #ea1a56;
  font-size: 13px;
}
.banner_index .nav_left1 .nav_left1_hover .t2 {
  font-size: 14px;
  margin-top: 16px;
}
.banner_index .nav_left1 .nav_left1_hover .t3 {
  font-size: 14px;
  margin-top: 5px;
  overflow: hidden;
}
.banner_index .nav_left1 .nav_left1_hover .t3 a {
  line-height: 22px;
  padding-right: 10px;
  float: left;
  font-size: 12px;
  color: #333;
}
.banner_index .nav_left1 .nav_left1_hover .t3 a.red,
.banner_index .nav_left1 .nav_left1_hover .t3 a:hover {
  color: #ea1a56;
}
.banner_index .nav_left1 .nav_left1_hover .t3 span {
  float: left;
  line-height: 22px;
  padding-right: 10px;
  color: #dedede;
  font-size: 10px;
  vertical-align: middle;
}
.banner_index .nav_left1 .nav_left1_hover .line {
  border-bottom: 1px dotted #d9d9d9;
  height: 0;
  margin: 10px 0;
}
.banner_index .nav_left1 .right_r {
  float: right;
  position: relative;
  display: none;
}
.banner_index .nav_left1 .cover_line {
  background: #fff;
  right: -14px;
  width: 10px;
  top: -13px;
  height: 63px;
  position: absolute;
  z-index: 2;
}
.banner_index .nav_left1:hover {
  border-top: 1px dotted #e84c81;
  border-left: 4px solid #ea1a56;
}
.banner_index .nav_left1:hover .nav_left1_hover,
.banner_index .nav_left1:hover .right_r {
  display: block;
}
.banner_index .nav_left1:hover .right1 i {
  color: #ea1a56;
}
.banner_index .nav_left1:hover + .nav_left1 {
  border-top: 1px dotted #e84c81;
}
.banner_index .nav_left1:first-child:hover {
  border-top: 0;
}
.notice {
  width: 1142px;
  margin: auto;
  margin-top: 15px;
}
.notice_left {
  float: left;
  width: 20px;
  margin-left: 15px;
  font-size: 12px;
  color: #333;
  line-height: 17px;
}
.notice_left i {
  color: #bfbfbf;
  font-size: 12px;
}
.notice_right_ul {
  padding-top: 2px;
  width: 1094px;
  overflow: hidden;
}
.notice_right_li {
  height: 16px;
  overflow: hidden;
}
.notice_right a {
  color: #666;
  font-size: 12px;
  float: left;
  padding: 0 18px;
}
.notice_right a:hover {
  color: #ea1a56;
}
.notice_right a i {
  padding-right: 0;
  color: #fc9191;
  font-weight: 700;
  vertical-align: middle;
}
.main {
  width: 1142px;
  margin: auto;
  margin-top: 30px;
}
.main1_top {
  height: 28px;
  border-bottom: 2px solid #ea1a56;
}
.main1_top li {
  margin: 0 8px;
  float: left;
  font-size: 16px;
  color: #565656;
  cursor: pointer;
}
.main1_top span {
  float: left;
  font-size: 18px;
  color: #c1c1c1;
}
.main1_top li.active {
  color: #ea1a56;
  background: url(//r.uzaicdn.com/content/store/images/index/3.jpg) no-repeat
    center bottom;
  padding-bottom: 12px;
  height: 18px;
}
.main1_m {
  margin-right: -20px;
}
.template0 .li {
  float: left;
  width: 210px;
  height: 252px;
  margin-right: 20px;
  margin-top: 12px;
  border: 1px solid #f0f0f0;
  position: relative;
}
.template0 .li:hover {
  -webkit-box-shadow: 0 0 10px #ccc;
  box-shadow: 0 0 10px #ccc;
}
.template0 .li img {
  width: 100%;
  height: 155px;
}
.template0 .li .development {
  position: absolute;
  left: 12px;
  top: 8px;
  color: #fff;
  padding: 4px;
  border-radius: 2px;
  background: #ea1a56;
  font-size: 12px;
}
.template0 .li .padd10 {
  padding: 10px 0;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.template0 .li .padd10 p {
  font-size: 14px;
  color: #333;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
  padding: 3px 10px;
  background: #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.template0 .li:hover p {
  height: 60px;
  -webkit-line-clamp: 3;
}
.template0 .li .padd10 b {
  color: #ea1a56;
  font-size: 20px;
  margin-left: 10px;
}
.template0 .li .padd10 b em {
  font-size: 14px;
  font-style: normal;
}
.template0 .li .padd10 span {
  float: right;
  font-size: 12px;
  color: #fff;
  background: #ea1a56;
  padding: 6px 10px;
  border-radius: 12px;
  margin-right: 10px;
}
.template0 .img1 {
  float: left;
  width: 212px;
  margin-right: 20px;
  margin-top: 12px;
  height: 253px;
}
.template0 .img1 img {
  width: 100%;
  height: 100%;
  display: block;
}
.main2 {
  padding-top: 20px;
  margin-top: 10px;
}
.main2_top {
  line-height: 30px;
  height: 30px;
  border-bottom: 3px solid #f3f3f3;
}
.main2_top .icon-youbian {
  font-size: 12px;
  font-weight: 700;
  float: left;
  line-height: 30px;
}
.main2_top .more {
  float: right;
  margin-left: 20px;
  margin-top: 7px;
}
.main2_top .more i {
  font-size: 18px;
  color: #dbdbdb;
  vertical-align: middle;
}
.main2_top b {
  color: #565656;
  font-size: 18px;
  margin-left: 6px;
  float: left;
  line-height: 30px;
}
.main2_top span {
  color: #aaa;
  font-size: 12px;
  margin-left: 12px;
  float: left;
  line-height: 30px;
}
.main2_top_nav {
  float: right;
  margin-top: 5px;
}
.main2_top_li {
  float: left;
  margin-left: 40px;
  line-height: 25px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  border-bottom: 3px solid #f3f3f3;
}
.main2_top_li i {
  position: absolute;
  font-size: 10px;
  bottom: -5px;
  margin-left: -6px;
  left: 50%;
  display: none;
}
.main2_top_li.active i {
  display: block;
}
.green .main2_top .icon-youbian {
  color: #4eae3c;
}
.green .main2_top_li.active {
  color: #4eae3c;
  border-bottom: 3px solid #4eae3c;
}
.green .main2_top_li.active i {
  color: #4eae3c;
}
.green .main2_m_left span:hover {
  background: #4eae3c;
  color: #fff;
}
.yellow .main2_top .icon-youbian {
  color: #f8bd28;
}
.yellow .main2_top_li.active {
  color: #f8bd28;
  border-bottom: 3px solid #f8bd28;
}
.yellow .main2_top_li.active i {
  color: #f8bd28;
}
.yellow .main2_m_left span:hover {
  background: #f8bd28;
  color: #fff;
}
.violet .main2_top .icon-youbian {
  color: #a64a97;
}
.violet .main2_top_li.active {
  color: #a64a97;
  border-bottom: 3px solid #a64a97;
}
.violet .main2_top_li.active i {
  color: #a64a97;
}
.violet .main2_m_left span:hover {
  background: #a64a97;
  color: #fff;
}
.blue .main2_top .icon-youbian {
  color: #0099d9;
}
.blue .main2_top_li.active {
  color: #0099d9;
  border-bottom: 3px solid #0099d9;
}
.blue .main2_top_li1.active i {
  color: #0099d9;
}
.blue .main2_m_left1 span:hover {
  background: #0099d9;
  color: #fff;
}
.main2_m_left {
  float: left;
  width: 275px;
  height: 558px;
  margin-right: 20px;
  background: url(//r.uzaicdn.com/content/store/images/index/5.jpg) no-repeat
    center bottom;
  padding-left: 10px;
}
.swiper-slide {
  text-align: center;
}
.route dt {
  color: #333;
  font-size: 14px;
  padding-top: 20px;
  padding-left: 5px;
  font-weight: 700;
}
.route dd {
  float: left;
  margin-top: 15px;
  margin-right: 10px;
  background: #fff;
  font-size: 12px;
  color: #555;
  padding: 0 10px;
  line-height: 22px;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  cursor: pointer;
}
.main2_m_left1 {
  float: left;
  width: 275px;
  height: 255px;
  margin-right: 20px;
  background: url(//r.uzaicdn.com/content/store/images/index/5.jpg) no-repeat
    center bottom;
  padding-left: 10px;
  display: none;
}
.main2_m_left1 p {
  color: #333;
  font-size: 14px;
  padding-top: 20px;
  padding-left: 5px;
}
.main2_m_left1 span {
  float: left;
  margin-top: 10px;
  margin-right: 10px;
  background: #fff;
  font-size: 12px;
  color: #000;
  padding: 0 10px;
  line-height: 22px;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  cursor: pointer;
}
.main2_m_right .li {
  float: left;
  height: 265px;
  width: 263px;
  margin-right: 23px;
  margin-top: 15px;
  position: relative;
  overflow: hidden;
}
.main2_m_right .li:hover {
  -webkit-box-shadow: 0 0 10px #ccc;
  box-shadow: 0 0 10px #ccc;
}
.main2_m_right .li img {
  width: 100%;
  height: auto;
}
.main2_m_right .li p {
  font-size: 14px;
  color: #333;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  padding: 3px 10px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 35px;
  background: #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.main2_m_right .li .price {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #ea1a56;
  font-size: 20px;
  width: 95%;
  text-align: right;
  padding-top: 5px;
  height: 30px;
  padding-right: 5%;
}
.main2_m_right .li .price em {
  font-size: 14px;
  font-style: normal;
}
.template1 {
  margin-right: -30px;
}
.template1 .main2_m_right {
  width: 865px;
  float: left;
}
.main2_m_right .li .departure {
  padding-top: 38px;
  padding-left: 10px;
  font-size: 14px;
  color: #666;
}
.banner_slide {
  margin-top: 30px;
  height: 100px;
  overflow: hidden;
  position: relative;
}
.banner_slide img {
  width: 100%;
  height: 100px;
}
.pagination2,
.pagination3 {
  position: absolute;
  z-index: 20;
  bottom: 10px;
  width: 100%;
  text-align: right;
  right: 20px;
}
.swiper-pagination-switch {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #555;
  margin: 0 5px;
  opacity: 0.8;
  border: 1px solid #fff;
  cursor: pointer;
}
.swiper-pagination-switch.active {
  background-color: #fff;
}
.template2 {
  margin-right: 20px;
}
.template2 .main2_m_left {
  display: none;
}
.template2 .main2_m_right {
  width: 1162px;
}
.template2 .main2_m_right .li {
  width: 212px;
  margin-right: 20px;
  height: 240px;
}
.template2 .main2_m_right .li img {
  height: 160px;
}
.template3 .main2_m_left {
  display: none;
}
.template3 .main2_m_left1 {
  display: block;
  width: 202px;
}
.template3 .main2_m_right {
  margin-right: -40px;
  float: left;
}
.template3 .main2_m_right .li {
  width: 212px;
  margin-right: 20px;
  height: 240px;
  cursor: pointer;
}
.fiexd_nav {
  position: fixed;
  top: 50px;
  left: 50%;
  margin-left: -650px;
  width: 30px;
  padding: 0 8px;
  border-right: 1px solid #eee;
  display: none;
}
.fiexd_nav .li {
  position: relative;
  border-bottom: 1px solid #f5f5f5;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
  padding: 9px 0;
  color: #b5b5b5;
  cursor: pointer;
}
.fiexd_nav .li i {
  position: absolute;
  right: -24px;
  top: 50%;
  margin-top: -6px;
  font-size: 12px;
  display: none;
}
.fiexd_nav .li.active i {
  display: block;
}
.fiexd_nav .li.active.green {
  color: #4eae3c;
}
.fiexd_nav .li.active.yellow {
  color: #f8bd28;
}
.fiexd_nav .li.active.violet {
  color: #a64a97;
}
.fiexd_nav .li.active.blur {
  color: #0099d9;
}
.fiexd_nav .li:last-child {
  border-bottom: 0;
}
.common_foot {
  margin-top: 50px;
}
.position {
  width: 455px;
  height: 335px;
  padding: 30px;
  position: fixed;
  background: #f8f8f8;
  border-radius: 10px;
  -webkit-box-shadow: 0 4px 10px #ccc;
  box-shadow: 0 4px 10px #ccc;
  left: 50%;
  top: 50%;
  margin-left: -227px;
  margin-top: -167px;
  z-index: 999;
}
.position .icon-guanbi {
  color: #fc6c94;
  right: 30px;
  top: 20px;
  cursor: pointer;
  position: absolute;
}
.position img {
  display: block;
  margin: auto;
}
.recommend_position {
  text-align: center;
  font-size: 12px;
  color: #949494;
  margin-top: 10px;
}
.recommend_position a {
  font-size: 14px;
  color: #ea1a56;
  padding: 0 3px;
}
.more_position {
  margin-top: 18px;
  text-align: center;
  background: url(//r.uzaicdn.com/content/store/images/index/line.jpg) repeat-x
    center;
}
.more_position span {
  font-size: 12px;
  color: #666;
  background: #f8f8f8;
  padding: 0 30px;
}
.li_position {
  overflow: hidden;
  margin-top: 13px;
}
.li_position .left {
  float: left;
  font-size: 12px;
  color: #333;
  font-weight: 700;
  line-height: 18px;
}
.li_position .right {
  float: left;
  line-height: 16px;
  font-size: 12px;
  color: #333;
  padding: 0 7px;
  border: 1px solid #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
}
.li_position .right:hover {
  border: 1px solid #ea1a56;
  color: #ea1a56;
}
.swiper-container2 .swiper-slide,
.swiper-container3 .swiper-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 1140px;
}
.swiper-wrapper {
  height: 100px;
}
.friendship_link_r {
  float: left;
  width: 1046px;
  height: 14px;
}
.friendship_link_r.auto {
  height: auto;
  overflow: visible;
  width: 1070px;
}
.friendship_link_r a.a {
  font-size: 12px;
  color: #666;
  float: left;
  line-height: 12px;
  padding: 0 4px;
  border-right: 1px solid #ccc;
  margin-bottom: 8px;
}
.friendship_link_r a.a:hover {
  color: #ea1a56;
}
.friendship_link_r a.more {
  font-size: 12px;
  color: #666;
  float: left;
  line-height: 12px;
  padding: 0 4px;
  padding-left: 18px;
  margin-bottom: 8px;
}
.friendship_link_r a.more:hover {
  color: #ea1a56;
}
</style>
