<template>
  <div style="background: rgb(247, 247, 247);">
    <div class="top">
      <div class="wrap top_wrap">
        <div class="logo_pic_l">
          <a href="#/">
            <img src="//r.uzaicdn.com/content/store/images/order/logo.png?imageView2/2/w/243/h/43" />
          </a>
        </div>
        <div class="logo_pic_r">
          <em class="p_1 p_one curren_red">
            <span>01</span>填写信息并核对
          </em>
          <em class="p_1 p_two">
            <span>02</span>在线支付
          </em>
          <em class="p_1 p_three">
            <span>03</span>提交成功
          </em>
        </div>
      </div>
    </div>
    <div class="wrap">
      <form id="order_form" class="reserve_l fl">
        <input id="adultPrice" value="3499.00" type="hidden" />
        <input id="childPrice" value="3299.00" type="hidden" />
        <input id="payType" value="二次确认" type="hidden" />
        <input id="isTwPro" value="0" type="hidden" />
        <div class="order_meg">
          <h3>{{gtitle}}</h3>
          <div class="mesg_box">
            <p>
              <i class="iconfont icon-yuandian"></i>
              <span class="col9">行程名称：</span>
              <em>
                {{gtitle}}
                【商品编号：
                <span id="tuanNo">{{gid}}</span>】
              </em>
            </p>
            <p class="inlineblock">
              <i class="iconfont icon-yuandian"></i>
              <span class="col9">出发城市：</span>
              <em>{{gmap}}</em>
            </p>
            <p class="inlineblock">
              <i class="iconfont icon-yuandian"></i>
              <span class="col9">出发日期：</span>
              <em id="goDate">2019-09-25</em>
            </p>
            <p class="inlineblock">
              <i class="iconfont icon-yuandian"></i>
              <span class="col9">出行人数：</span>
              <em id="adultNum" v-text="man_num"></em>成人
              <span id="child" v-show="child_num!=0">
                ,
                <em id="childNum" v-text="child_num"></em>儿童
              </span>
            </p>
          </div>
          <div class="dfc_tit col6">单房差</div>
          <ul class="supplement">
            <li class="supplement_tit">
              <span>名称</span>
              <span>单价</span>
              <span>单位</span>
              <span>数量</span>
              <span>总价</span>
            </li>
            <li class="supplement_text">
              <span>单房间差</span>
              <span>¥{{rooms_difference}}</span>
              <span>元/人</span>
              <span>
                <em id="num_reduce" class="unsed" @click="rcountchange(-1)">-</em>
                <strong id="num" v-text="room_count">0</strong>
                <em id="num_plus" @click="rcountchange(1)">+</em>
              </span>
              <span class="col48" id="singleTotalPrice">
                <span style="margin-left:28px;">¥</span>
                <span v-text="room_allprice">0.00</span>
              </span>
            </li>
          </ul>
          <input type="hidden" id="SingleHousePrice" value="700.00" />
        </div>
        <div class="order_nav">
          <h1>
            联系人信息
            <input id="hdUsePoint" value="0.0" type="hidden" />
            <span class="default_user select_user" style="display: none;">
              <i class="iconfont icon-fangkuang"></i> 使用默认联系人
            </span>
          </h1>
          <div class="order_pay_nav" id="auto_login">
            <div class="meg-person">
              <b class="letter3">
                <span></span>姓名
              </b>
              <input
                type="text"
                id="contactName"
                placeholder="请输入姓名"
                class="required"
                maxlength="11"
                data-valid="isNonEmpty"
                data-error="姓名不能为空"
                avalon-events="input:_6,compositionstart:_4,compositionend:_5,focus:_2,blur:_3"
                v-model="main_name"
              />
            </div>

            <div class="meg-person tel">
              <b class="letter2">
                <span></span>手机号码
              </b>
              <input type="hidden" id="hdPhone" value="17634931725" />
              <input type="hidden" id="hdName" value="17634931725" />
              <input type="hidden" id="hdEmail" value />
              <input
                id="phone"
                placeholder="请输入手机号码"
                maxlength="11"
                type="text"
                class="required"
                data-valid="isNonEmpty||isMobile"
                data-error="手机号码不能为空||手机号码不正确"
                avalon-events="input:_6,compositionstart:_4,compositionend:_5,focus:_2,blur:_3"
                v-model="main_phone"
              />
            </div>
            <div class="meg-person">
              <b class="letter3">邮箱</b>
              <input
                placeholder="请输入邮箱"
                type="text"
                id="contactEmail"
                maxlength="50"
                class="add_required"
                data-valid="isEmail"
                data-error="邮箱格式错误"
                avalon-events="input:_6,compositionstart:_4,compositionend:_5,focus:_2,blur:_3"
                v-model="main_email"
              />
              <span class="valid_message hide">邮箱格式不正确</span>
            </div>
            <div class="meg-person">
              <b class="letter3">备注</b>
              <textarea
                name
                placeholder="请备注您对产品的其他要求"
                id="remark"
                cols="30"
                rows="10"
                maxlength="200"
                v-model="main_remark"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="order_nav">
          <h1>
            出游人信息
            <span>为了更好的帮您完成行程预订，建议您可以填写出游人或稍后在“我的悠哉-我的订单”中补充出游人信息</span>
          </h1>
          <div class="order_pay_nav">
            <div class="man" v-for="(item,index) in man_info" :key="index">
              <ul class="linkman" style="display: block;">
                <!--ms-for:($index, el) in travelerList-->
                <li
                  class="list"
                  id="12728"
                  avalon-events="click:eclick_0_chooseTraveler40$event44el46ctId41"
                >
                  <i class="iconfont icon-fangkuang"></i>
                  <div class="hide_tips">出游人已满</div>
                </li>
              </ul>

              <div class="people_list">
                <div class="people_masg" data-type="adult" data-sort="0" tid="0">
                  <h2 class="visitor">
                    <b>
                      <span class="span1">出游人</span>
                      <span class="span2">成人:{{index+1}}</span>
                    </b>
                    <em class="clearall" cid="0">
                      <i class="iconfont icon-qingkong"></i>清空
                    </em>
                    <span class="travel_user fr">
                      <i class="iconfont icon-checkbank"></i> 存为常用联系人
                    </span>
                  </h2>
                  <div class="meg-person">
                    <b class="letter3">
                      <span></span>姓名
                    </b>
                    <input
                      placeholder="请输入姓名"
                      name="tname"
                      type="text"
                      class="required"
                      maxlength="11"
                      v-model="item.m_name"
                    />
                  </div>
                  <div class="meg-person tel">
                    <b class="letter2">手机号码</b>
                    <input
                      placeholder="请输入11位手机号码"
                      name="tphone"
                      maxlength="11"
                      type="text"
                      class="add_required"
                      v-model="item.m_phone"
                    />
                  </div>
                  <div class="meg-person" data-sort="0">
                    <b class="letter2">证件类型</b>
                    <select
                      name
                      id
                      class="selection"
                      avalon-events="change:echange_0_change40$event444841"
                    >
                      <option value="0">请选择</option>
                      <option value="1">身份证</option>
                    </select>
                    <input
                      class="user_num"
                      placeholder="请输入证件号码"
                      type="text"
                      name="tcard"
                      maxlength="20"
                      v-model="item.m_certificates"
                    />
                  </div>
                  <div class="meg-person">
                    <b class="letter3">
                      <span></span>性别
                    </b>
                    <div class="select_sex" data-sort="0">
                      <i
                        id="m_g_male"
                        :class="{'iconfont icon-radio':item.m_gender==0,'iconfont icon-check':item.m_gender==1,'iconfont icon-radio':item.m_gender==-1}"
                        @click="mc_gender($event,index)"
                      >&#xe612;</i>
                      男
                      <i
                        style="margin-left:30px;"
                        id="m_g_female"
                        :class="{'iconfont icon-radio':item.m_gender==1,'iconfont icon-check':item.m_gender==0,'iconfont icon-radio':item.m_gender==-1}"
                        @click="mc_gender($event,index)"
                      >&#xe612;</i>
                      女
                    </div>
                  </div>
                  <div class="meg-person">
                    <b class="letter2">
                      <span></span>出生日期
                    </b>
                    <input
                      type="text"
                      class="date_select required"
                      name="tbirthday"
                      data-valid="isNonEmpty"
                      data-error="请选择出生日期"
                      onclick="WdatePicker({'qsEnabled':false})"
                      placeholder="请选择"
                      readonly="readonly"
                      avalon-events="input:_6,compositionstart:_4,compositionend:_5,focus:_2,blur:_3"
                      v-model="item.m_birth"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- //////////////////                   -->
            <div
              class="fg"
              style="width:100%; height:1px; background-color:red;"
              v-show="child_num!=0"
            ></div>
            <div
              class="children"
              v-for="(item,index2) in child_info"
              :key="'info2-'+index2"
              v-show="child_num!=0"
            >
              <ul class="linkman" style="display: block;" v-show="child_num!=0">
                <li class="list">
                  <i class="iconfont icon-fangkuang"></i>
                  <div class="hide_tips">出游人已满</div>
                </li>
              </ul>
              <div class="people_list">
                <div class="people_masg">
                  <h2 class="visitor">
                    <b>
                      <span class="span1">出游人</span>
                      <span class="span2">儿童:{{index2+1}}</span>
                    </b>

                    <em class="clearall" cid="0">
                      <i class="iconfont icon-qingkong"></i>清空
                    </em>
                  </h2>
                  <div class="meg-person">
                    <b class="letter3">
                      <span></span>姓名
                    </b>
                    <input
                      placeholder="请输入姓名"
                      name="tname"
                      type="text"
                      class="required"
                      maxlength="11"
                      v-model="item.c_name"
                    />
                  </div>
                  <div class="meg-person">
                    <b class="letter3">
                      <span></span>性别
                    </b>
                    <div class="select_sex" data-sort="0">
                      <i
                        id="c_g_male"
                        :class="{'iconfont icon-radio':item.c_gender==0,'iconfont icon-check':item.c_gender==1,'iconfont icon-radio':item.c_gender==-1}"
                        @click="cc_gender($event,index2)"
                      >&#xe612;</i>
                      男
                      <i
                        id="c_g_female"
                        style="margin-left:30px;"
                        :class="{'iconfont icon-radio':item.c_gender==1,'iconfont icon-check':item.c_gender==0,'iconfont icon-radio':item.c_gender==-1}"
                        @click="cc_gender($event,index2)"
                      >&#xe612;</i>
                      女
                    </div>
                  </div>
                  <div class="meg-person">
                    <b class="letter2">
                      <span></span>出生日期
                    </b>
                    <input
                      type="text"
                      class="date_select required"
                      name="tbirthday"
                      data-valid="isNonEmpty"
                      data-error="请选择出生日期"
                      onclick="WdatePicker({'qsEnabled':false})"
                      placeholder="请选择"
                      readonly="readonly"
                      avalon-events="input:_6,compositionstart:_4,compositionend:_5,focus:_2,blur:_3"
                      v-model="item.c_birth"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order_nav">
          <h1>
            服务门店
            <span>请选择离您最近的服务门店提交旅客资料。如您附近无门店，请选择我们的客服中心。</span>
          </h1>
          <div class="order_pay_nav">
            <div class="adress">
              <p id="dStoreName">北京呼叫中心</p>
              <a onclick="openTank('.store_ad')">
                <i class="iconfont icon-zuobiao"></i>
                <span>选择门店</span>
              </a>
              <div class>
                <b>
                  地址：
                  <span id="dAddrss">北京市朝阳区朝阳公园路8号（朝阳公园西二门）</span>
                </b>
                <b>
                  电话：
                  <span id="dPhone">1010 9898</span>
                </b>
                <b>
                  服务时间：
                  <span id="dHour">9:00-19:00</span>
                </b>
              </div>
            </div>
          </div>
          <input type="hidden" id="hdStoreId" value="5" />
        </div>
        <div class="back_wrap">
          <a href="javascript:history.go(-1)" class="pay_tips pay_co">&lt; 返回上一步</a>
        </div>
        <div class="order_submit_nav clear">
          <div class="pay_tips">
            <i
              :class="{'iconfont icon-xuanzhong':if_agree==true,'iconfont agree':if_agree==false}"
              @click="ifagree"
            >&#xe613;</i>
            我已阅读并知悉以下旅游合同、费用包含、预定须知、温馨提示、自费项目等所有相关内容,同意签署下列旅游合同。
          </div>
          <div class="go_pay" id="order_submit_go_pay" @click="go_pay">提交订单</div>
        </div>
        <div class="order_nav order_nav_ht">
          <h2 id="text_nav">
            <a class="light">旅游合同</a>
            <a>费用说明</a>
            <a>服务标准</a>
            <a>预定须知</a>
          </h2>
          <div class="text_content">
            <div class="text_list">
              <h4 class="main_tit">
                <i class="iconfont icon-yuan-middle"></i>旅游合同
              </h4>
              <div class="text_cont">
                <p class="MsoNormal" align="left">
                  <img src="../../../public/images/order_img/logo.jpg" alt />
                </p>
                <p class="MsoNormal" align="left">
                  合同编号
                  <span>:</span>
                </p>
                <p class="MsoNormal" align="center" style="text-align:center;">&nbsp;</p>
                <p class="MsoNormal" align="center" style="text-align:center;">&nbsp;</p>
                <p class="MsoNormal" align="center" style="text-align:center;font-size:48px">
                  团队出境旅游合同
                  <span></span>
                </p>
                <p class="MsoNormal" align="center" style="text-align:center;">&nbsp;</p>
                <p class="MsoNormal" align="center" style="text-align:center;">&nbsp;</p>
                <p class="MsoNormal" align="center" style="text-align:center;">&nbsp;</p>
                <p class="MsoNormal" align="center" style="text-align:center;">&nbsp;</p>
                <p class="MsoList2" style="margin-left:21.0pt;text-indent:44.4pt;">
                  旅游者：
                  <span></span>
                </p>
                <p class="MsoList2" style="margin-left:21.0pt;text-indent:44.4pt;">
                  出境社：天津众信悠哉网国际旅行社有限公司
                  <span></span>
                </p>
                <p class="MsoList2" style="margin-left:21.0pt;text-indent:44.4pt;">
                  旅行社业务经营许可证编号：
                  <span>L-TJ-CJ00059</span>
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="text-align:center;text-indent:30.0pt;"
                >&nbsp;</p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="text-align:center;text-indent:30.0pt;"
                >&nbsp;</p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="text-align:center;text-indent:30.0pt;"
                >&nbsp;</p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="text-align:center;text-indent:30.0pt;"
                >&nbsp;</p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="text-align:center;text-indent:30.0pt;"
                >&nbsp;</p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="text-align:center;text-indent:30.0pt;"
                >&nbsp;</p>
                <p
                  class="MsoNormal"
                  align="left"
                  style="text-indent:24pt;"
                >1.本合同供天津众信悠哉网国际旅行社有限公司（以下简称“出境社”）与出境旅游者（以下简称“旅游者”）之间签订团队出境包价旅游合同时使用。</p>
              </div>
            </div>
            <div class="text_list">
              <h4 class="main_tit">
                <i class="iconfont icon-yuan-middle"></i>费用说明
              </h4>
              <h6 class="main_sm_title">自费项目补充说明：</h6>
              <div class="text_cont">
                <p>全程无自费（景区内自费非旅行社推荐）</p>
              </div>
              <h6 class="main_sm_title">购物补充说明：</h6>
              <div class="text_cont">
                <p>全程无购物（景区内购物小摊非旅行社推荐）</p>
              </div>
            </div>
            <div class="text_list">
              <h4 class="main_tit">
                <i class="iconfont icon-yuan-middle"></i>服务标准
              </h4>
              <h6 class="main_sm_title">附加条款：</h6>
              <div class="text_cont">
                <p>
                  1、出团通知：出团通知于出团前1天发送，若能提前确定，我们将会尽快通知您。
                  <br />
                </p>
                <p>2、意见反馈：请配合导游如实填写当地的意见单，不填或虚填者归来后投诉将无法受理。</p>
              </div>
            </div>
            <div class="text_list">
              <h4 class="main_tit">
                <i class="iconfont icon-yuan-middle"></i>预定须知
              </h4>
              <h6 class="main_sm_title">温馨提示：</h6>
              <div class="text_cont">
                <p>1、乘机时请将液态物品，刀具（包括指甲刀）等随行李托运，避免安检无法过关浪费宝贵时间；</p>
                <p>2、乘机时请携带有效期内身份证件，12岁以下儿童携带户口本；</p>
                <p>3、酒店一般提供双标间供团队使用，如出现自然单人，旅行社将与游客协商加床或三人间解决入住问题；</p>
                <p>4、入住酒店时需提供有效身份证件，请随身携带，否则可能无法入住，将给您带来不必要的麻烦；</p>
                <p>5、随身携带的大量现金或贵重物品请尽量存于酒店总台，避免丢失带来的损失和不便；</p>
                <p>6、酒店一般中午退房，下午两点后方可办理入住手续，请游客理解；</p>
                <p>7、抵达酒店时，请携带酒店地址卡，以免无法找到酒店时知道酒店地址和电话；</p>
                <p>8、在入厕或洗浴时请格外小心，以避免因有水渍、洗漱液体类导致滑倒摔伤。</p>
                <p>9、酒店房间内如有食品、日用品、收费电视、收费电话，均属于游客自由自主消费物品，不包含在团费中，如果自由享用后，请离店时到前台付费。</p>
                <p>10、厦门海鲜品种众多，请尽量不要点贝壳类的海鲜食用，以免过敏，吃海鲜时尽量不要饮用啤酒；</p>
                <p>11、茶叶是福建特产，武夷山大红袍和厦门铁观音闻名，如有需要购买茶叶请先品尝，选择适合自己口味的茶叶；</p>
                <p>12、厦门为海滨城市，但海滨救生措施不齐备，因此旅行社为保证游客安全不建议游客下海游泳；</p>
                <p>13、南方城市多潮湿，请客人自备雨伞遮阳伞，上下楼梯和爬山的时候注意脚下，走路不观景，观景不走路。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="store_ad tank" style="display: none; margin-top: -246px; margin-left: -376px;">
          <h1>
            <i class="iconfont icon-mendian"></i>选择提交资料门店
          </h1>
          <div class="border">
            <b>
              <span>1</span>选择门店并线下支付
            </b>
            <b style="padding-left:20px;">
              <span>2</span>到线下门店提供资料
            </b>
            <b style="padding-left:30px;">
              <span>3</span>资料通过后准备出游
            </b>
          </div>
          <div class="adress_opt clearfix">
            <div class="mendian_select fl">
              <select
                name
                id
                class="selection"
                avalon-events="change:echange_0_cityChange40$event41,change:_6"
              >
                <!--ms-for:($index,el) in cityList-->
                <option selected="true" value="北京市">北京市</option>
                <!--for15713962701-->
                <option selected="true" value="杭州市">杭州市</option>
                <!--for15713962701-->
                <option selected="true" value="昆明市">昆明市</option>
                <!--for15713962701-->
                <option selected="true" value="廊坊市">廊坊市</option>
                <!--for15713962701-->
                <option selected="true" value="南京市">南京市</option>
                <!--for15713962701-->
                <option selected="true" value="秦皇岛市">秦皇岛市</option>
                <!--for15713962701-->
                <option selected="true" value="上海市">上海市</option>
                <!--for15713962701-->
                <option selected="true" value="苏州市">苏州市</option>
                <!--for15713962701-->
                <option selected="true" value="唐山市">唐山市</option>
                <!--for15713962701-->
                <option selected="true" value="天津市">天津市</option>
                <!--for15713962701-->
                <option selected="true" value="武汉市">武汉市</option>
                <!--for15713962701-->
                <option selected="true" value="西安市">西安市</option>
                <!--for15713962701-->
                <!--ms-for-end:-->
              </select>
              <select
                name
                id
                class="selection"
                avalon-events="change:echange_0_districtChange40$event41,change:_6"
              >
                <!--ms-for:($index,el) in districtList-->
                <!--ms-for-end:-->
              </select>
              <input class="sfdq_num" type="hidden" value="0" />
              <input class="csdq_num" type="hidden" value="0" />
              <input type="hidden" class="shenfen_input" value />
              <input type="hidden" class="chengshi_input" value />
            </div>
            <div class="input_seach_wrap">
              <input
                placeholder="请输入店名"
                type="text"
                avalon-events="change:echange_0_storeSearch4041,input:_6,compositionstart:_4,compositionend:_5,focus:_2,blur:_3"
              />
              <a class="search">
                <i class="iconfont icon-sousuo1"></i>
              </a>
            </div>
          </div>
          <div class="adress_store">
            <ul class="shop_address_list"></ul>
            <div class="map_store" id="map_content"></div>
            <i class="iconfont icon-shanchu closeTank"></i>
          </div>
          <a class="sure_btn">确定</a>
        </div>
        <input id="guid" type="hidden" value="137621" />
      </form>
      <div class="reserve_r" style="position: fixed;">
        <h1>
          <i class="iconfont icon-icon"></i>费用明细
        </h1>
        <div>
          <h2>
            <span class="title">旅游团费</span>
            <span class="price">
              ¥
              <span v-text="total_price"></span>
            </span>
          </h2>
          <p>
            <span>
              <span v-text="man_num"></span>:成人&nbsp;x&nbsp;¥
              <span v-text="man_price">3499.00</span>
            </span>
            <span class="fr">
              ¥
              <span>3499</span>
            </span>
          </p>
          <p v-show="child_num!=0">
            <span>
              <span v-text="child_num"></span>:儿童&nbsp;x&nbsp;¥
              <span v-text="child_price">3099.00</span>
            </span>
            <span class="fr">
              ¥
              <span>3499</span>
            </span>
          </p>
        </div>
        <div v-show="room_count!=0">
          <h2>
            <span class="title">单房差</span>
            <span class="price">
              ¥
              <span v-text="room_allprice"></span>
            </span>
          </h2>
          <p>
            <span>
              <span v-text="room_count"></span>:份&nbsp;x&nbsp;¥
              <span v-text="rooms_difference"></span>
            </span>
            <span class="fr">
              ¥
              <span v-text="room_allprice">3499</span>
            </span>
          </p>
        </div>

        <div>
          <h2>
            <span class="title">优惠信息</span>
            <span class="price">
              -¥
              <span v-text="cut_price"></span>
            </span>
          </h2>
          <p>
            <span>金秋放价 乐享满减 &nbsp;&nbsp;</span>
            <span class="fr">
              -¥
              <span>300</span>
            </span>
          </p>
        </div>

        <div>
          总计
          <em>¥</em>
          <span id="sum_price" v-text="all_price">3499</span>
        </div>
      </div>
    </div>
    <div class="mask"></div>
    <div class="footer">
      <p>
        <a href="//www.uzai.com/aboutus/companyprofile" target="_blank">众信旅游</a>
        <a href="//www.uzai.com/aboutus/companycourse" target="_blank">众信历程</a>
        <a href="//www.uzai.com/aboutus/family" target="_blank">众信品牌</a>
        <a href="//www.uzai.com/aboutus/salesnetwork" target="_blank">营业网点</a>
        <a href="//www.uzai.com/aboutus/joinus" target="_blank">诚聘英才</a>
        <a href="//www.uzai.com/aboutus/businesscooperation" target="_blank">商务合作</a>
      </p>
      <p>
        <span>Copyright&nbsp;&nbsp;2015-2018&nbsp;&nbsp;Uzai.com</span>
        <span>许可证编号:L-TJ-CJ00059</span>
        <span>津ICP备18003064号</span>
        <span>悠哉呼叫中心来电显示号码为：10109898</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res_obj: {},
      // 商品编号：
      gid: "",
      // 景点名称
      gtitle: "",
      gimg: "",
      // 地点
      gmap: "",
      // 景点图片保存
      gimg: "",
      // 景点价格
      // 出发日期
      go_data: 0,
      gdata: "",
      // 房间差价
      rooms_difference: 700,
      room_count: 0,
      room_allprice: 0,
      // 人数
      // 成人数量
      man_num: 0,
      man_info: [],
      man_price: 0,
      // 孩子数量
      child_num: 0,
      child_info: [],
      child_price: 0,
      //打折费用
      cut_price: 300,
      //旅游团费总价钱
      total_price: 0,
      //总价格
      all_price: 0,

      //////////////////////////////////////
      main_name: "",
      main_phone: "",
      main_email: "",
      main_remark: "",
      oid: "",
      if_agree: false,
      //////////////////////
      payinfo: {}
    };
  },
  beforecreate() {
    this.comedata();
  },
  created() {
    this.comedata();
  },
  beforeMount() {
    this.allprice();
  },
  beforeDestroy() {
    this.bus.$off("getpinfo");
    this.bus.$emit("pay_info", this.payinfo);
  },
  methods: {
    comedata() {
      //console.log("comein");

      this.bus.$on("getpinfo", obj => {
        for (let i = 1; i <= obj.man_count; i++) {
          let m_init = {
            m_name: "",
            m_phone: "",
            m_gender: -1,
            m_certificates: "",
            m_birth: ""
          };
          this.man_info.push(m_init);
        }

        for (let j = 1; j <= obj.child_count; j++) {
          let c_init = {
            c_name: "",
            c_gender: -1,
            c_birth: ""
          };
          this.child_info.push(c_init);
        }
        //this.uid = obj.uid
        this.res_obj = obj;
        // 商品编号：
        this.gid = obj.oid;
        // 成人数量
        this.man_num = obj.man_count;
        // 孩子数量
        this.child_num = obj.child_count;
        // 景点价格
        this.man_price = obj.man_price;
        this.child_price = obj.child_price;
        // 景点名称
        this.gtitle = obj.gtitle;
        this.gimg = obj.gimg;
        // 地点
        this.gmap = obj.local;
        // 景点图片保存
        this.oid = obj.oid;
        // 出发日期
        this.go_data = obj.choosetime;
        this.gdata = obj.gdata;
        // 房间差价

        this.total_price =
          this.man_price * this.man_num + this.child_num * this.child_price;
        this.allprice();
      });
    },
    allprice() {
      this.room_allprice = this.room_count * this.rooms_difference;

      this.all_price = this.total_price + this.room_allprice - this.cut_price;
    },
    rcountchange(num) {
      if (num == 1) {
        this.room_count++;
        this.allprice();
      }
      if (num == -1) {
        this.room_count--;
        if (this.room_count < 0) {
          this.room_count = 0;
          this.allprice();
        }
        this.allprice();
      }
    },
    mc_gender(e, index) {
      //console.log(e.currentTarget.nodeName)
      if (e.currentTarget.nodeName == "I") {
        if (e.currentTarget.id == "m_g_male") {
          console.log(e.currentTarget.id);
          this.man_info[index].m_gender = 1;
        }
        if (e.currentTarget.id == "m_g_female") {
          console.log(e.currentTarget.id);
          this.man_info[index].m_gender = 0;
          console.log(this.man_info[index].m_gender);
        }
      }
    },
    cc_gender(e, index) {
      if (e.currentTarget.id == "c_g_male") {
        this.child_info[index].c_gender = 1;
        console.log("c1");
      }
      if (e.currentTarget.id == "c_g_female") {
        console.log("c0");
        this.child_info[index].c_gender = 0;
      }
    },
    ifagree() {
      console.log(this.if_agree);
      if (this.if_agree == true) {
        this.if_agree = false;
        return;
      }
      if (this.if_agree == false) {
        this.if_agree = true;
        return;
      }
    },
    go_pay() {
      if (this.main_name == "" || this.main_phone == "") {
        window.alert(
          "‘主要联系人’信息中,您有未填写完成的重要选项,请您去完成填写"
        );
        return;
      }
      for (let i = 0; i < this.man_num; i++) {
        if (
          this.man_info[i].m_name == "" ||
          this.man_info[i].m_certificates == "" ||
          this.man_info[i].m_gender == -1
        ) {
          console.log(
            this.man_info[i].m_name,
            this.man_info[i].m_gender,
            this.man_info[i].m_certificates
          );
          window.alert(
            "‘成人游客’信息中,您有未填写完成的重要选项,请您去完成填写"
          );
          return;
        }
      }
      for (let j = 0; j < this.child_num; j++) {
        if (
          this.child_info[j].c_name == "" ||
          this.child_info[j].c_gender == -1
        ) {
          window.alert(
            "‘儿童游客’信息中,您有未填写完成的重要选项，请您去填写完成"
          );
          return;
        }
      }
      let payinfo = {
        gid: this.gid,
        // 景点名称
        gtitle: this.gtitle,
        // 地点
        gmap: this.gmap,

        // 景点价格
        // 出发日期
        go_data: this.go_data,
        // 房间差价
        rooms_difference: this.rooms_difference,
        room_count: this.room_count,
        room_allprice: this.room_allprice,
        // 人数
        // 成人数量
        man_num: this.man_num,

        man_price: this.man_price,
        // 孩子数量
        child_num: this.child_num,

        child_price: this.child_price,
        //打折费用
        cut_price: this.cut_price,
        //旅游团费总价钱
        total_price: this.total_price,
        //总价格
        all_price: this.all_price,

        //////////////////////////////////////
        main_name: this.main_name,
        main_email: this.main_email,
        main_phone: this.main_phone,
        main_remark: this.main_remark,
        man_info: this.man_info,
        child_info: this.child_info
      };
      if (this.if_agree == false) {
        window.alert("阅读合同内容并点击同意");
        return;
      } else {
        this.payinfo = payinfo;
        let objr = {
          oid: this.oid,
          gimg: this.gimg,
          gtitle: this.gtitle,
          gdata: this.go_data,
          totalmoney: this.all_price
        };
        this.axios.get("order/reserve", { params: objr }).then(res => {
          if (res.data == 1) {
            this.$router.push("/order");
          } else {
            alert("未知错误，请重新尝试");
          }
        });

        // console.log(objr);
        
      }
      // console.log(this.payinfo);

      //
    }
  },
  goreserve() {
    let obj = {
      oid: this.oid,
      gimg: this.img,
      gtitle: this.gtitle,
      gdata: this.go_data,
      total_pric: this.all_price
    };
    console.log(obj);
  }
};
</script>

<style scoped>
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
footerform,
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
menunav,
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
.top {
  height: 100px;
  background: #fff;
  position: relative;
  -webkit-box-shadow: 5px 5px 5px #eee;
  box-shadow: 5px 5px 5px #eee;
}
.wrap {
  width: 1140px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.top_wrap {
  position: relative;
  height: 100%;
}
.logo_pic_l {
  width: 250px;
  display: inline-block;
  margin-top: 30px;
}
a {
  text-decoration: none;
  color: #000;
}
.logo_pic_l img {
  width: 243px;
  height: 43px;
}
.logo_pic_r {
  height: 26px;
  position: absolute;
  top: 50%;
  margin-top: -13px;
  display: inline-block;
  background: url(//r.uzaicdn.com/content/store/images/order/top_bg.jpg) center
    center repeat-x;
  right: 0;
}
.logo_pic_l img {
  width: 243px;
  height: 43px;
}
em,
i {
  font-style: normal;
}
.p_one {
  background: url(//r.uzaicdn.com/content/store/images/order/step1.png) left
    no-repeat;
  text-align: left;
  text-indent: 10px;
  width: 31.3%;
}
.p_two {
  background: url(//r.uzaicdn.com/content/store/images/order/step2.png) center
    no-repeat;
  text-align: center;
  width: 33.3%;
}
.p_three {
  background: url(//r.uzaicdn.com/content/store/images/order/step3.png) right
    no-repeat;
  text-align: right;
  width: 31.3%;
  padding-right: 20px;
}
.curren_red {
  color: #ea1a56 !important;
}
.logo_pic_r em {
  width: 210px;
  font-size: 12px;
  color: #9d9d9d;
  display: block;
  float: left;
  line-height: 24px;
}
.logo_pic_r span {
  font-size: 16px;
  margin-right: 10px;
  line-height: 24px;
  font-weight: 500;
  vertical-align: -2px;
}

.reserve_l {
  width: 830px;
}
.fl,
.left {
  float: left;
}
input {
  outline: 0;
}
.order_meg {
  background: #fff;
  border-radius: 3px;
  border-radius: 3px;
  padding: 26px;
  margin-top: 26px;
}
.order_meg h3 {
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 15px;
}
.order_meg p {
  font-size: 14px;
  margin: 0 50px 10px -7px;
}
em,
i {
  font-style: normal;
}
.icon-yuandian {
  color: #ffa6b1;
  font-size: 22px !important;
  vertical-align: middle;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.col9 {
  color: #999;
}
.inlineblock {
  display: inline-block;
}
.col6 {
  color: #666;
}
.dfc_tit {
  margin-top: 15px;
  font-size: 14px;
}
.supplement {
  width: 100%;
  display: block;
  margin-top: 10px;
}
li {
  list-style: none;
}
.supplement .supplement_tit {
  background: #f9f9f9;
  height: 40px;
}
.supplement_tit span {
  line-height: 40px;
  color: #666;
  font-size: 12px;
}
.supplement li span {
  width: 20%;
  float: left;
  text-align: center;
}
.supplement_text em {
  border-radius: 50%;
  border: 1px solid #eee;
  margin: 0 10px;
  display: inline-block;
  font-size: 18px;
  text-align: center;
  height: 22px;
  width: 22px;
  line-height: 20px;
  cursor: pointer;
  color: #ea1a56;
}
.supplement .supplement_text .unsed {
  color: #b8b8b8;
}
.col48 {
  color: #ea1a56;
}
.order_nav {
  background: #fff;
  border-radius: 5px;
  margin: 15px 0;
  padding: 30px 0;
  overflow: visible;
}
.order_nav h1 {
  font-size: 16px;
  border-left: 3px solid #ff4d63;
  padding-left: 20px;
  overflow: hidden;
}
.select_user {
  /* float: right; */
  display: inline-block;
}
.order_nav h1 .back,
.order_nav h1 span {
  font-size: 12px;
  color: #999;
  padding-left: 20px;
  margin-right: 40px;
}
.icon-checkbank,
.icon-fangkuang {
  vertical-align: middle;
  cursor: pointer;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.select_user .iconfont {
  margin-right: 2px;
}
.order_pay_nav {
  margin: 30px auto auto 50px;
  font-size: 12px;
}
.meg-person {
  color: #666;
  margin-bottom: 14px;
}
.tel {
  line-height: 36px;
  color: #666;
}
.letter3 {
  letter-spacing: 33px;
}
.meg-person b {
  display: inline-block;
  width: 95px;
  margin-right: 30px;
  color: #666;
  position: relative;
}
.meg-person b span {
  color: #ea1a56;
  position: absolute;
  left: -7px;
}
.meg-person input {
  background-color: #fff;
  color: #333;
  border-radius: 5px;
  border: 1px solid #eee;
  width: 240px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  vertical-align: middle;
  margin-left: -28px;
}
.letter2 {
  letter-spacing: 3px;
}
.hidden,
.hide,
.success .valid_message,
.tip .valid_message {
  display: none;
}
.valid_message {
  margin-left: 10px;
}
textarea {
  resize: none;
  outline: 0;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
}
.meg-person textarea {
  height: 35px;
  display: inline-block;
  vertical-align: middle;
  margin-left: -30px;
  border: 1px solid #eee;
  width: 300px;
  padding: 10px;
  outline: 0;
}
.linkman {
  border: 1px #ccc dashed;
  color: #666;
  font-size: 12px;
  width: 95%;
  margin: 20px 0;
  border-radius: 80px;
  display: none;
}
.linkman li {
  display: inline-block;
  margin: 6px 20px;
  cursor: pointer;
  position: relative;
  padding-top: 1px;
}
.linkman .icon-checkbank,
.linkman .icon-fangkuang {
  margin-right: 8px;
  color: #d9d9d9;
  cursor: pointer;
}
.linkman .iconfont {
  font-size: 15px;
}
.list .hide_tips {
  display: none;
  cursor: default;
  width: 80px;
  text-align: center;
  padding: 10px 0;
  border-radius: 4px;
  color: #fff;
  position: absolute;
  left: -6px;
  background: rgba(0, 0, 0, 0.6);
  top: -40px;
}
.visitor b {
  display: inline-block;
}
.visitor .span1 {
  display: inline-block;
  color: #fff;
  background: #ea1a56;
  border-radius: 4px 0 0 4px;
  font-size: 12px;
  line-height: 18px;
  height: 18px;
  padding: 1px 7px;
  border: 1px solid #ea1a56;
}
.visitor .span2 {
  display: inline-block;
  color: #ea1a56;
  background: #fff;
  border-radius: 0 4px 4px 0;
  font-size: 12px;
  line-height: 18px;
  height: 18px;
  padding: 1px 7px;
  margin-left: -6px;
  border: 1px solid #ea1a56;
}
.clearall {
  color: #3e91e5;
  margin-left: 20px;
  font-size: 12px;
  cursor: pointer;
}
.order_nav h2 span {
  font-size: 12px;
  color: #999;
  cursor: pointer;
}
.fr,
.right {
  float: right;
}
.meg-person .selection {
  width: 104px;
  margin-left: -28px;
  border: 1px solid #eee;
  background-color: #fff;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
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
.meg-person .selection {
  width: 104px;
  margin-left: -28px;
  border: 1px solid #eee;
  background-color: #fff;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
}
.meg-person .user_num {
  margin-left: 0;
  width: 132px;
}
.select_sex {
  display: inline-block;
  color: #999;
  cursor: pointer;
}
.select_sex {
  margin-left: -20px;
}
.icon-check {
  color: #f25a5a;
  line-height: 30px;
  font-size: 18px !important;
}
.icon-radio {
  color: #999;
  line-height: 30px;
  font-size: 18px !important;
}
.select_sex i {
  padding: 10px;
  z-index: 20;
}
.date_select {
  background: #f7f7f7;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  border-radius: 4px;
}
.valid_message {
  margin-left: 10px;
}
.error .valid_message {
  padding-left: 20px;
  color: #ea1a56;
  font-size: 12px;
  background: url(//r.uzaicdn.com/content/store/images/common/yztishi.png)
    no-repeat left center;
  background-size: 16px;
}
.adress {
  font-size: 14px;
  margin: 35px 0 10px;
}
.adress p {
  color: #000;
  display: inline-block;
}
.adress a {
  color: #3e91e5;
  background: #f3fbff;
  padding: 9px 24px;
  border-radius: 8px;
  margin: 0 20px;
  cursor: pointer;
  display: inline-block;
  -webkit-box-shadow: 3px 3px 6px #d7e8fa;
  -moz-box-shadow: 3px 3px 6px #d7e8fa;
  box-shadow: 3px 3px 6px #d7e8fa;
}
.icon-zuobiao {
  margin-right: 5px;
  font-size: 20px !important;
  vertical-align: -3px;
}
.adress b {
  font-size: 12px;
  color: #666;
  margin-top: 16px;
  margin-right: 10px;
  display: inline-block;
}
.back_wrap {
  margin-top: 10px;
}
.pay_co {
  color: #999;
}
.pay_tips {
  display: inline-block;
  font-size: 12px;
  line-height: 34px;
}
.order_submit_nav {
  background: #fff8fa;
  border: 1px solid #ff6ea0;
  border-radius: 5px;
  position: relative;
  padding: 20px 15px;
}
.clear:after,
.clear:before {
  display: table;
  line-height: 0;
  content: "";
}
.agree {
  cursor: pointer;
}
.pay_tips .iconfont {
  margin-right: 4px;
}
.pay_tips .icon-xuanzhong {
  color: #ea1a56;
  margin-right: 4px;
  cursor: pointer;
}
.pay_tips .agree {
  margin-right: 4px;
  color: rgba(0, 0, 0, 0.1);
}

.order_submit_nav .go_pay {
  background: #ea1a56;
  color: #fff;
  font-size: 14px;
  padding: 10px 30px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  /* float: right; */
}
.order_nav_ht {
  padding: 20px 30px;
  margin-bottom: 50px;
}
.order_nav h2 {
  padding-right: 40px;
  font-size: 14px;
  color: #666;
}
.order_nav_ht h2 {
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.order_nav_ht a {
  color: #666;
  padding: 8px 20px;
  margin-right: 25px;
  cursor: pointer;
}
.order_nav_ht .light {
  display: inline-block;
  padding: 8px 20px;
  background: #ea1a56;
  color: #fff;
  cursor: pointer;
  text-align: center;
  border-radius: 40px;
  font-size: 14px;
}
.text_content {
  margin: 10px 0;
  max-height: 600px;
  min-width: 100px;
  overflow: auto;
}
.text_list {
  padding-top: 10px;
}
.main_tit {
  color: #ea1a56 !important;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
}
.icon-yuan-middle {
  font-size: 10px !important;
}
.main_sm_title {
  font-size: 14px;
  line-height: 20px;
}
.text_content p {
  font-size: 12px;
  color: #666;
  line-height: 24px;
}
#loader {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -90px;
  background: #fff;
  z-index: 999;
  border-radius: 6px;
  padding: 20px;
}
#loader div {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  margin: 0 6px;
}
#loader img {
  height: 100%;
}
.bg_000,
.mask {
  background-color: #000;
  opacity: 0.6;
  filter: alpha(opacity=60);
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: none;
}
.footer {
  background: #484848;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #ccc;
  text-align: center;
  margin-top: 50px;
}
.footer a {
  color: #ccc;
  font-size: 12px;
  margin: 10px;
}
.footer p span {
  margin: 10px 10px 0;
  font-size: 12px;
  display: inline-block;
}
.reserve_r {
  width: 250px;
  background: #fff url(//r.uzaicdn.com/content/store/images/order/x_x.jpg)
    center top no-repeat;
  margin-top: 26px;
  position: absolute;
  position: fixed\9;
  padding: 20px;
  margin-left: 850px;
}
.reserve_r h1 {
  font-size: 16px;
  margin-bottom: 20px;
}
.reserve_r h2 .price {
  float: right;
  color: #ea1a56;
}
.reserve_r p {
  color: #999;
  font-size: 12px;
  height: 25px;
  background: url(//r.uzaicdn.com/content/store/images/liner/liner_order_line.jpg)
    repeat-x 0 -1px;
}
.reserve_r p span {
  background: #fff;
  padding-right: 7px;
}
.reserve_r p .fr {
  padding-right: 0;
  padding-left: 7px;
}
.reserve_r div em {
  color: #ea1a56;
  font-size: 12px;
  margin: auto 0 auto 5px;
}
#sum_price {
  color: #ea1a56;
}
.store_ad {
  clear: left;
  width: 700px;
  height: 440px;
  padding: 25px;
  background: #f7f7f7;
  box-shadow: 0 0 10px #999;
  margin: 10px;
  border-radius: 12px;
  border: 1px solid #e4e4e4;
  position: fixed;
}
.tank {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  -ms-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  -o-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  display: none;
}
.store_ad h1 {
  color: #000;
  font-size: 18px;
  font-weight: 700;
}
.icon-mendian {
  margin-right: 5px;
  font-size: 18px!Important;
}
.store_ad .border {
  font-size: 12px;
  line-height: 30px;
  margin: 20px 0;
  border: 1px #e2e2e2 dashed;
  background: #fbfbfb;
}
.store_ad b {
  text-align: center;
  display: inline-block;
  width: 30%;
  color: #999;
}
.store_ad b span {
  font-size: 18px;
  display: inline-block;
  margin-right: 10px;
  vertical-align: -1px;
}
.store_ad .adress_opt {
  width: 100%;
  margin-bottom: 10px;
}
.input_seach_wrap {
  float: left;
}
.adress_opt select {
  border: 0;
  background-color: #fff;
  line-height: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 120px;
  margin-right: 15px;
  text-align: center;
  outline: 0;
  font-size: 13px;
}
.input_seach_wrap {
  float: left;
}
.adress_opt .search {
  width: 60px;
  height: 34px;
  line-height: 34px;
  background: #ea1a56;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border-radius: 4px;
}
.adress_store {
  overflow: hidden;
}
.adress_store ul {
  padding: 5px;
  height: 250px;
  overflow: auto;
  display: block;
  width: 32%;
  background: #fff;
  float: left;
}
.map_store {
  float: right;
  width: 65.5%;
  height: 260px;
  background: #ffe6e6;
}
.sure_btn {
  margin: 0 auto;
  width: 80px;
  height: 30px;
  background: #ea1a56;
  color: #fff;
  cursor: pointer;
  text-align: center;
  border-radius: 40px;
  display: block;
  margin-top: 15px;
  line-height: 30px;
  font-size: 14px;
}
.reserve_r h2 {
  font-size: 14px;
  margin: 25px auto 8px;
  height: 20px;
}
</style>