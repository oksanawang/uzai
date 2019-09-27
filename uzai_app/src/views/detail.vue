<template>
  <div style="margin-top:10px;">
    <d-header></d-header>
    <div class="main">
      <a href="#">
        <h2 class="title">
          {{gtitle}}
          <span
            class="word_icon"
          >二次确认</span>
        </h2>
      </a>
      <div class="main_left">
        <div class="main_left_rotate">
          <div class="main_left_rotater">
                <div :class="[item.ac==true?'main_left_rotater1 active':'main_left_rotater1']" v-for="(item,index) in items" :key="index"  @click="changeImg(index)">
                <img class="img lazy active"
                    :src="item.img"
                    style="display: inline; z-index:888;"
                />
                <img
                    src="//r03.uzaicdn.com/content/store/images/detail/1.png?imageView2/2/w/91/h/62"
                    class="active1"
                />
                </div>
            
          </div>

          <div class="main_left_rotatel">
            <img
              class="lazy"
              data-original="https://img0.uzaicdn.com/ba/sightGallery/ATT0000806749.jpg?imageView2/2/w/550/h/413/format/jpg/interlace/1"
              :src="img"
              style="display: block;"
            />
          </div>
        </div>
        <div class="calendar_m">
          <div class="calendar_t">
            <i class="iconfont icon-zuobian"></i>
            <div class="calendar_t_m swiper-container1">
              <div class="swiper-wrapper" style="width: 82px; height: 40px;">
                <div
                  class="li active swiper-slide swiper-slide-visible swiper-slide-active"
                  data-index="0"
                  data-date="2019-09"
                  style="width: 82px; height: 40px;"
                >
                  <p>2019-09</p>
                  <span>¥{{man_price}}起</span>
                </div>
              </div>
            </div>
            <i class="iconfont icon-youbian"></i>
          </div>
          <div class="calendar">
            <div class="box-center">
              <div class="cal-head" data-yearmonth="2019-9">
                <span>2019年9月</span>
              </div>
              <ul class="week-list">
                <li>周日</li>
                <li>周一</li>
                <li>周二</li>
                <li>周三</li>
                <li>周四</li>
                <li>周五</li>
                <li>周六</li>
              </ul>
              <div class="calendar-box">
                <ul class="day-list">
                  <li rel="targetBox" data-time="2019-9-1">
                    <p class="text">
                      1
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-2">
                    <p class="text">
                      2
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-3">
                    <p class="text">
                      3
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-4">
                    <p class="text">
                      4
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-5">
                    <p class="text">
                      5
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-6">
                    <p class="text">
                      6
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-7">
                    <p class="text">
                      7
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-8">
                    <p class="text">
                      8
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-9">
                    <p class="text">
                      9
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-10">
                    <p class="text">
                      10
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-11">
                    <p class="text">
                      11
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-12">
                    <p class="text">
                      12
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-13">
                    <p class="text">
                      13
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-14">
                    <p class="text">
                      14
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-15">
                    <p class="text">
                      15
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-16">
                    <p class="text">
                      16
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-17">
                    <p class="text">
                      17
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-18">
                    <p class="text">
                      18
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-19">
                    <p class="text">
                      19
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-20">
                    <p class="text">
                      20
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-21">
                    <p class="text">
                      21
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-22">
                    <p class="text">
                      22
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-23">
                    <p class="text">
                      23
                      <span class="style">A行程</span>
                    </p>
                    <p class="price">¥{{man_price}}起</p>
                    <p class="spare">余位:充足</p>
                    <div
                      style="display:none"
                      data-date="2019-09-23"
                      class="tuanno"
                      id="TS1900727406"
                    >TS1900727406</div>
                    <div class="targetBox">
                      <div class="targetBox2" date-tuan="TS1900727406" data-route="A">
                        <div class="clear" style="display:none;">
                          <div class="tripstyle fl">A行程</div>
                          <p class="tripId fl" style="display:none;">(727406)</p>
                        </div>
                        <p class="jiage" style="display:none;">
                          <span>成人价{{man_price}}</span>
                        </p>
                        <div class="data" style="display:none;">2019-09-23 出发</div>
                      </div>
                      <div class="clear"></div>
                    </div>
                  </li>
                  <li rel="targetBox" data-time="2019-9-24">
                    <p class="text">
                      24
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-25">
                    <p class="text">
                      25
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-26">
                    <p class="text">
                      26
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-27">
                    <p class="text">
                      27
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-28">
                    <p class="text">
                      28
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-29">
                    <p class="text">
                      29
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li rel="targetBox" data-time="2019-9-30">
                    <p class="text">
                      30
                      <span class="style"></span>
                    </p>
                    <p class="price"></p>
                    <p class="spare"></p>
                  </li>
                  <li class="old"></li>
                  <li class="old"></li>

                  <li class="old"></li>
                  <li class="old"></li>
                  <li class="old"></li>
                  <li class="old"></li>
                  <li class="old"></li>
                  <li class="old"></li>
                  <li class="old"></li>
                  <li class="old"></li>
                  <li class="old"></li>
                  <li class="old"></li>
                  <div class="clear"></div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mart10">
          <div class="remarks">*预定此路线，部分班期可以使用抵用券抵扣</div>
          <div class="remarks">*不同的出发班期，可以享受的优惠略有不同，请以实际选择的班期为准</div>
          <div class="remarks">*因数据更新时滞，具体以实际销售金额为准</div>
        </div>
      </div>
      <div class="main_right">
        <div class="main_right_l">
          <p>产品编码：00016451</p>
          <div class="main_right_l1">
            <i class="iconfont icon-zuobiao"></i>
            <span>出发地：{{gmap}}</span>
          </div>
        </div>
        <div class="clear"></div>
        <div class="main_right1">
          <div class="n1">
            <span>¥</span>
            <label id="price">{{man_price}}</label>
            <em>起/人</em>
            <div class="n2"></div>
          </div>
          <div class="n3">
            <span class="shuimin">起价说明</span>
            <i class="iconfont icon-question"></i>
            <div class="main_right1_m">
              <div class="main_right1_m1"></div>
              <div class="main_right1_m2">
                <p>
                  最低价 09-23 周一出发 ，
                  <span>¥{{man_price}}元</span>/人
                </p>
                <p>本起价是可选出发日期中，按2人同住一间房最低核算价格最低单人价格。产品价格会根据您所选择的出发日期、出行人数、入住酒店房型、航班或交通以及所选附加服务的不同而有所差别。</p>
              </div>
              <div class="main_right1_m3"></div>
            </div>
          </div>
        </div>
        <div class="main_right2"></div>

        <div class="main_right3">
          <div class="select" >
            <span>选择团期：</span>
            <div class="select_left">
              <div class="selected" @click="showtime($event)">
                <div class="li" v-text="def_time"></div>
                <div class="selected_m" style="display: block;" v-show="act_time">
                  <div class="p" v-for="(item,index) in chostime" :key="index" @click="choosetime(index)">>{{item.tit}} </div>
        
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="select choose_route">
            <span>适用行程：</span>
            <div class="select_left">
              <div class="tirp">
                <label class="shortName"></label>
                <b>
                  查看详细行程
                  <i class="iconfont icon-jiagezhengxu"></i>
                </b>
                <a class="word_icon"></a>
              </div>
            </div>
          </div>
          <div class="select">
            <span>选择人数:</span>
            <div class="select_left">
              <div class="num">
                <div class="left">成人：</div>
                <div class="reduce" @click="reduce('m')">
                  <i class="iconfont icon-iconjian">&#xe66e;</i>
                </div>
                <input type="text" id="adultNum" onblur="CheckStock()" v-model="man_num"  />
                <div class="add" @click="add('m')">
                  <i class="iconfont icon-iconjia">&#xe66f;</i>
                </div>
                <div class="left marel1">儿童：</div>
                <div class="reduce" @click="reduce('c')">
                  <i class="iconfont icon-iconjian">&#xe66e;</i>
                </div>
                <input type="text" id="childNum" onblur="CheckStock()" v-model="child_num" />
                <div class="add">
                  <i class="iconfont icon-iconjia" @click="add('c')">&#xe66f;</i>
                </div>
                <div class="children">
                  儿童价
                  <p>儿童价格及标准请来电咨询</p>
                </div>
                <div class="lack">
                  <i class="iconfont icon-tishi"></i>余位不足
                </div>
              </div>
            </div>
          </div>
          <div class="select hau">
            <span>可享优惠：</span>
            <div class="select_left">
              <div class="discount">
                <p>悠哉惠玩季-下单立减500元/人</p>
                <p>在线支付-立减1000元/人</p>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="main_right4">
          <div class="bot submit" @click="reserve">
            立即预订
            <img v-show="msg" src="//r03.uzaicdn.com/content/store/images/detail/9.png?imageView2/2/w/114/h/26" />
          </div>
          <div class="bot dwzx" onclick="_MEIQIA('showPanel')">点我咨询</div>
          <div class="left">
            <div class="left1 collection">
              <i class="iconfont icon-shoucang">&#xe606;</i>
              <span>收藏</span>
              <input id="collectionId" type="hidden" value />
            </div>
            <div class="left2">|</div>
            <div class="left1">
              <i class="iconfont icon-erweima">&#xe607;</i> 手机扫码预订，更便捷！
              <div class="erweim">
                <img src />
                <div class="erweim_left">
                  <h2>轻松一扫，将行程保存到手机中随时查看！</h2>
                  <h3>用手机下单，更多活动和惊喜！</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main_right5">
          <div class="ti">产品经理推荐</div>
          <div class="main_right5_m">
            <div class="more">
              <span>更多</span>
              <i class="iconfont icon-zhankai"></i>
            </div>
            <div class="main_right5_m_m" style="height: 312px;">
              <div id="activityContent">
                <b>活动详情:</b>
                <p>· 活动时间：2019-09-11_2019-10-10</p>
                <p>· 活动内容：活动期间在众信旅游悠哉网线上购买【北京出发国内游】指定产品指定团期（具体产品详询客服）可享立减每人400元优惠【简单3步享优惠】【1 在线预定】【2 联系旅游顾问后台改为优惠价格】【3 按优惠价支付】如有更多疑问详询众信旅游顾问</p>

                <p></p>

                <h4>产品经理推荐</h4>

                <p></p>
                <p></p>
                <p>?&nbsp;品质丨纯玩不进店、进店加点赔付 2000 元</p>
                <p>?&nbsp;赠送丨鼓浪屿耳麦丨手绘地图一份丨定制礼品一份</p>
                <p>?&nbsp;升级丨准四酒店住宿丨一晚鼓浪屿民宿</p>
                <p>?&nbsp;体验丨放地笼抓海蟹丨老院子闽南传奇秀</p>
                <p>?&nbsp;美食丨海景餐厅丨龙虾鲍鱼宴丨叶氏麻糍</p>
                <p>?&nbsp;网红丨网红餐厅—【YEAH 南洋风情街】丨悦蒲鸡尾酒一杯</p>
                <p>?&nbsp;0购物·0自费·0早起</p>
                <p>
                  <br />
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="nav_li">
      <div class="bot">立即预订</div>
      <div class="num">
        <i class="iconfont icon-lianxiwomen"></i> 1010-9898
      </div>
      <div class="nav_left">
        <div class="li active">行程介绍</div>
      </div>
    </div>
    <div class="main2" style="padding-top: 0px;">
      <ul class="u_route">
        <div class="main2_left">
          <div class="main2_left_t">
            <i class="iconfont icon-youhui"></i> 行程介绍
          </div>
        </div>
        <div class="main2_right">
          <div class="main2_right_n2">
            <div class="main2_right_n2_right">
              <i class="iconfont icon-ccgl-dayinliebiao-7"></i>
              <a href="//www.uzai.com/tour/print/00016451/OPL00050088.html" target="_blank">
                <span>打印行程</span>
              </a>
              <span class="pa">|</span>
              <i class="iconfont icon-mailrep"></i>
              <a href="//www.uzai.com/tour/print/00016451/OPL00050088.html" target="_blank">
                <span>E-mail好友</span>
              </a>
            </div>
            <div class="tripStyleWrap">
              <div class="li active" data-linecode="OPL00050088">行程A</div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="main2_right_m2_nav" style="display: none;">
            <div class="trip_nav">
              <div class="li" data-sort="A">
                <span id="OPL00050088" route-data="A">• A 行程</span>
              </div>
            </div>
            <div class="route-A curr route_menu" style>
              <li>行程亮点</li>
              <li>详细行程</li>
              <li>费用说明</li>
              <li>服务标准</li>
              <li>预订须知</li>
            </div>
          </div>

          <div class="main2_right_m2 active">
            <div class="main2_right_m2_title">
              <i class="iconfont icon-li"></i>行程介绍
            </div>
            <div class="main2_right_m2_m">
              <p>
                • 行程名称：【福建】【随遇时光】鼓浪屿+南普陀+环岛路+曾厝垵+沙坡尾+艺术西区+海上明珠塔 双飞4晚5日
                <label style="color:#ffffff">OPL00050088</label>
                <label style="color:#ffffff">LC19080000003249</label>
              </p>
              <p>• 行程天数：5天4晚</p>
              <p style="height:20px;overflow:hidden">• 适用团期：2019-09-23</p>
              <p>
                • 推荐理由：?&nbsp;品质丨纯玩不进店、进店加点赔付 2000 元?&nbsp;赠送丨鼓浪屿耳麦丨手绘地图一份丨定制礼品一份?&nbsp;升级丨准四酒店住宿丨一晚鼓浪屿民宿?&nbsp;体验丨放地笼抓海蟹丨老院子闽南传奇秀?&nbsp;美食丨海景餐厅丨龙虾鲍鱼宴丨叶氏麻糍?&nbsp;网红丨网红餐厅—【YEAH 南洋风情街】丨悦蒲鸡尾酒一杯?&nbsp;0购物·0自费·0早起
                <br />
              </p>
              <span>*由于部分城市无法提供国际航班服务，本次行程需从 北京 出发</span>
            </div>
            <div class="main2_right_m2_title trip_nav_m">
              <i class="iconfont icon-li"></i>行程亮点
            </div>
            <div class="main2_right_m2_m1">
              <p>
                <br />
              </p>
            </div>
            <div class="main2_right_m2_title trip_nav_m">
              <i class="iconfont icon-li"></i>详细行程
            </div>
            <div class="main2_right_m3_m stroke">
              <div class="main2_right_m3_m1">
                <div class="main2_right_m3_m1_l">
                  <p>Day</p>
                  <span>1</span>
                </div>
                <div class="main2_right_m3_m1_r">
                  <h2>
                    北京
                    <i class="iconfont icon-feiji-copy"></i> 厦门
                  </h2>
                  <p>
                    <i class="iconfont icon-canshi"></i>用餐： 早餐(无) 午餐(无) 晚餐(无)
                  </p>
                  <p>
                    <i class="iconfont icon-jiudian"></i>住宿： 当地四*_无
                  </p>
                  <b>
                    <p>乘航班前往国际花园城市—厦门，后由司机师傅接机入住酒店。后自由活动。可自行乘车前往【中山路】，中山路步行街是厦门*老牌的商业街在这里您可以一尝厦门当地的特色美食，感受“舌尖上的厦门”</p>
                    <p>温馨提示：</p>
                    <p>1、请游客持有效身份证于飞机起飞前2小时到达机场办理登机手续，航班时间以出团通知为准。</p>
                    <p>2、酒店押金100—200元不等，入住时请自付前台，*天退房时酒店凭押金条退还。</p>
                    <p>
                      <br />
                    </p>
                  </b>
                </div>
              </div>
              <div class="main2_right_m3_m1">
                <div class="main2_right_m3_m1_l">
                  <p>Day</p>
                  <span>2</span>
                </div>
                <div class="main2_right_m3_m1_r">
                  <h2>
                    厦门
                    <i class="iconfont icon-daba"></i> 鼓浪屿
                  </h2>
                  <p>
                    <i class="iconfont icon-canshi"></i>用餐： 早餐(有) 午餐(有) 晚餐(无)
                  </p>
                  <p>
                    <i class="iconfont icon-jiudian"></i>住宿： 当地四*_无
                  </p>
                  <b>
                    <p>早餐后，乘渡轮*国家*A级风景区【鼓浪屿】，岛上居民非常热爱音乐，有“钢琴之岛”“音乐之乡”的美誉；漫步在岛上可以观赏到二十多个国家不同建筑风格的【万国建筑】，原英国领事馆、德国领事馆、哥特式的天主教堂等；登上岛后，如果喜欢大海*沿着海边一直走，绕着小岛走上一圈，遇上喜欢的海滩*脱掉鞋子去跟海水亲密接触去；如果你只是想简单散散心拍拍照，感受一下安静，*选择走内厝澳的小路，也许你在某个转角能遇见一家咖啡馆，也许你走着走着听到某栋房子里飘散出来的钢琴声，你会发现属于鼓浪屿的舒适其实*是这么简单。【海天堂构】位列鼓浪屿十大别墅之一，是鼓浪屿上*按照中轴对称布局的别墅建筑群，“是宫非宫胜似宫，亦殿非殿赛过殿；不中不洋不寻常，中西结合更耐看”。午餐，在鼓浪屿岛上享用*HOT的网红餐厅—【YEAH南洋风情街】品尝新加坡马来西亚风味餐，咖哩饭.沙爹炒肉片.新加坡肉骨茶汤.抹茶小甜点；它藏匿在商场里白日夜市，黑白颠倒的时光错觉，别具一格的室内造景，炫彩夺目的霓虹灯光，让喜爱猎奇的你拍照咔不停，品尝百年老摊，鼓浪屿上*合法占道经营的【叶氏麻糍】，后前往【港仔后海滨沙滩】，站在沙滩上，面朝大海，背面*是日光岩，可以看到*处光秃秃的岩石，所以这里风景还是很美的。这里又是一个人群聚集区，很多人是来游玩菽庄花园的，正巧这里有个浴场，便下来用海水泡泡脚也不错。港仔后海滨浴场自由活动，吹着海风，脚踩沙滩，放飞风筝，享受悠闲假期~~，行程结束后，返回酒店入住。晚上特别赠送【悦蒲鸡尾酒】，悦蒲拥有鼓浪屿上的*视野，超大的海景露台可眺望厦门岛，夜晚体味酒吧的自我随意，无拘无束，还您您心目中的鼓浪屿！</p>
                    <p>鼓浪屿美食攻略：</p>
                    <p>（1）第七铺是厦门的一家创意伴手礼小食铺，源于鼓浪屿，现有九家直营连锁门店。</p>
                    <p>（2）鼓浪屿的金点世家陷饼是厦门行必买的土特产，中华路48号?</p>
                    <p>（3）龙头路183号的鱼丸摊，10元5个鱼丸</p>
                    <p>（4）叶氏麻糍，2元1个，很香甜</p>
                    <p>（5）黄胜记买好了肉脯和肉松，龙头路95号</p>
                    <p>（6）babycat私家御饼屋 龙头路143号（近鼓浪屿轮渡码头新华书店） 绿豆馅饼（4元/个）、椰子馅饼（2元/个）、绿茶馅饼（2元/个）、林记鱼丸汤（5元/碗）</p>
                    <p>（7）AIR夫妇开的BABYCAT，很想在那里喝杯COFFEE吃块馅饼。Air夫妇的咖啡馆。别名：花时间</p>
                    <p>温馨提示：</p>
                    <p>1、&nbsp;轮渡需实行实名制购票，要求团进团出，儿童也需购轮渡票，请提供准确姓名+身份证号码，*少提前30分钟抵达轮渡码头等候，游览期间请遵循导游安排，所有行程以轮渡时间相应调整顺序，客人入住鼓浪屿客栈，返程过度票费用需自理，旅行社无费用退还</p>
                    <p>2、&nbsp;厦门鼓浪屿土特产一条街为景区商业街及餐厅内特产展示柜，不视为定点购物店！之后前往中山路，品尝厦门特色风味小吃。</p>
                    <p>鼓浪屿客栈属于当地体验，客栈的条件要比市区同等级酒店的服务标准低一些，但是可以体验鼓浪屿独有的夜晚静谧时光，敬请谅解。</p>
                    <p>
                      <br />
                    </p>
                  </b>
                </div>
              </div>
              <div class="main2_right_m3_m1">
                <div class="main2_right_m3_m1_l">
                  <p>Day</p>
                  <span>3</span>
                </div>
                <div class="main2_right_m3_m1_r">
                  <h2>鼓浪屿自由活动</h2>
                  <p>
                    <i class="iconfont icon-canshi"></i>用餐： 早餐(有) 午餐(无) 晚餐(无)
                  </p>
                  <p>
                    <i class="iconfont icon-jiudian"></i>住宿： 当地四*_无
                  </p>
                  <b>
                    <p>今日您可以睡到自然醒（切记在中午12点之前，从鼓浪屿的酒店退房哦，若超时产生的费用自理），早上漫步在宁静的鼓浪屿岛上，漫步幽静小巷、欣赏充满异国风情的南洋老别墅、风格迥异的欧式建筑和旧时的领事馆，也可到老别墅自由摄影、喝咖啡、晒太阳，商业街自由活动。后自行下岛（返程18元船票需客人自理），自行返回市区酒店入住</p>
                    <p>
                      <br />
                    </p>
                  </b>
                </div>
              </div>
              <div class="main2_right_m3_m1">
                <div class="main2_right_m3_m1_l">
                  <p>Day</p>
                  <span>4</span>
                </div>
                <div class="main2_right_m3_m1_r">
                  <h2>
                    南普陀
                    <i class="iconfont icon-daba"></i> 环岛路
                    <i class="iconfont icon-daba"></i> 曾厝垵
                    <i class="iconfont icon-daba"></i> 沙坡尾
                    <i class="iconfont icon-daba"></i> 海上明珠塔
                  </h2>
                  <p>
                    <i class="iconfont icon-canshi"></i>用餐： 早餐(有) 午餐(有) 晚餐(无)
                  </p>
                  <p>
                    <i class="iconfont icon-jiudian"></i>住宿： 当地四*_无
                  </p>
                  <b>
                    <p>早餐后，游览闽南*佛教*、千年古刹-【南普陀】，依山傍海的南普陀寺，位于厦门老市区*，毗邻厦门大学及闽南佛学院。浓郁的佛教氛围，凸显的宗教地位，和南普陀慈善基金会一起构成了深厚的人文气息，更是鹭岛之行的必游之地；【环岛路黄金海岸】沿着环岛路一路向前,对很多人而言都是很好的减压方式，更别说周围还有那么美的环境，你可以吹着海风，看看路边的花花草草，即使不特意去找任何景点，你也会觉得生活很美妙。【曾厝垵】坐落在环岛路旁的一个小渔村，名气远没有鼓浪屿大，但是也正因此才得以保留那份*原始的美好。【沙坡尾】厦门本色——城市里*的守望者：这里没有喧嚣，保存着传统的民宿，在这条浅浅的内海湾岸两侧，保有传统祭*船的习俗，还有两层楼的民居，这里是还有传统的厦门本地美食城【吃堡】在充满闽南文化气息的美食城堡中，我们为您安排【海景餐厅-龙虾鲍鱼宴】在这里您可以享受美食的同时，可以观看海景，给你带来的尊贵体验！再往前走来到【艺术西区】这里也是很多文艺爱好者的好去处，沿着木栈道走一走，来杯果汁，坐在窗台看看夕阳，享受当下。之后导游带您前往指定的海岸【放地笼，抓海蟹】一个小时的时间您可以到沙滩上尽情的游玩！【海上明珠塔】坐落在东渡狐尾山顶的海上明珠塔，集气象灾害监测、科普教育、旅游观光和夜景功能为一体，尤以其观景功能的独到地理优势，成为鸟瞰厦门的*观景点。而后乘车前往老院子，欣赏神游华夏演艺——【闽南传奇秀】作为老院子景区的灵魂之作，是大型室内实景演艺秀，整场演艺共分为六幕，《天造鹭岛》、《岛城大战》、《南洋历险》、《渔村人家》、《龙的传人》、《福佑华夏》以“好看、好听、好玩”为宗旨，打造出一部面向大众、雅俗共赏、喜闻乐见、大快人心的演艺。乘坐在会“跑”的看台，随着体现闽南文化精髓的剧情的变幻而变化，使观众时而置身于战场中，时而置身于梦幻般的美景中沉醉不已。整场演出使用发明多达47项，更有超越人体极限的10层楼高空跳水、激越惊险的水上摩托艇竞技运动、恢宏壮阔的2000吨水从天而降、17米巨龙从水中腾起、18米的妈祖相继登上舞台，给大家带来悬念、震撼、刺激、欢快的超级文化娱乐体验。【此秀赠送项目，不去不退，若遇不可抗力因素造成停航，则不退不换】</p>
                    <p>
                      <br />
                    </p>
                  </b>
                </div>
              </div>
              <div class="main2_right_m3_m1">
                <div class="main2_right_m3_m1_l">
                  <p>Day</p>
                  <span>5</span>
                </div>
                <div class="main2_right_m3_m1_r">
                  <h2>
                    厦门
                    <i class="iconfont icon-feiji-copy"></i> 北京
                  </h2>
                  <p>
                    <i class="iconfont icon-canshi"></i>用餐： 早餐(有) 午餐(无) 晚餐(无)
                  </p>
                  <p>
                    <i class="iconfont icon-jiudian"></i>住宿： 无_无
                  </p>
                  <b>
                    <p>早餐后可根据自身情况，自行游览厦门市区特色景点，根据航班时间，适时前往机场，结束愉快的旅程。</p>
                    <p>温馨提示：</p>
                    <p>1、&nbsp;当日请自行办理退房手续，根据酒店行业惯例应在中午12点前退房，未退房者产生费用由游客自行承担。</p>
                    <p>根据航班时间适时前往机场乘机，以免造成误机，客人需自行办理登机手续。</p>
                    <p>
                      <br />
                    </p>
                  </b>
                </div>
              </div>
            </div>
            <div class="main2_right_m2_title trip_nav_m">
              <i class="iconfont icon-li"></i>费用说明
            </div>
            <div class="main2_right_m4_m">
              <p class="r_left">• 费用包含：</p>
              <div class="r_right">
                <p>【费用包含】</p>
                <p>1、&nbsp;住宿：全程指定酒店标准间安排，不提供自然单间，产生单房差客人自理，我社有权安排三人间（或加床）、拼住或由客人补单房差（福建省的酒店均要求：14:00办理入住手续，12:00办理退房手续，请大家谨记！由于个人原因，需要提前办理入住或推迟退房，而产生的费用自行承担）</p>
                <p>参考酒店：枫和源豪华房、泉季酒店、舒悦酒店、金玖酒店、和悦酒店、长城宾馆、爱丁堡酒店、家和春天豪华房、禾正酒店、宜尚酒店、金日银海蓝戴斯、威尼斯、维也纳酒店或*</p>
                <p>2、&nbsp;用餐：4早2正餐，正餐八菜一汤、十人一桌，根据客人人数情况酌情安排。房费中所含早餐，若客人不用，费用不退；客人在旅游期间因自身原因不用正餐，费用不退。</p>
                <p>3、&nbsp;门票：景点首道大门票，（注：导游有权在不减少景点的情况下调整游览先后顺序！）</p>
                <p>4、&nbsp;导游：福建当地*国语导游服务</p>
                <p>5、&nbsp;用车：福建当地空调旅游调度用车，车型根据游客人数而定，保证每人一正座</p>
                <p>6、&nbsp;交通：出发地—厦门往返民航飞机，含机场建设费和燃油附加费。</p>
                <p>7、&nbsp;儿童：含当地车位、儿童餐费（不占床不含早餐）、其余当地自理。</p>
                <p>保险：含旅行社责任险，不含旅游人身意外险和航空意外险</p>
                <p>
                  <br />
                </p>
              </div>
              <p class="r_left">• 费用不含：</p>
              <div class="r_right">
                <p>【费用不含】</p>
                <p>1、&nbsp;单房差：全程入住酒店产生的单房差及加床费用</p>
                <p>2、&nbsp;旅游意外保险及航空保险（建议旅游者购买）；</p>
                <p>3、&nbsp;因交通延误等不可抗力原因导致的额外费用；</p>
                <p>4、&nbsp;因自身违约、自身过错、自身疾病等自身原因导致的人身财产损失而额外支付的费用；</p>
                <p>5、&nbsp;不占床位游客不含早餐。</p>
                <p>6、&nbsp;“旅游费用包含”内容以外的所有费用；</p>
                <p>因厦门鼓浪屿船票需要预约，为保障游客利益，使游览更加顺畅，不减少景点前提情况下，游览顺序可前后调整。</p>
                <p>
                  <br />
                </p>
              </div>
              <p class="r_left">• 自费说明：</p>
              <div class="r_right">
                <p>景区小交通及娱乐项目设施自理。</p>
              </div>
              <p class="r_left">• 购物说明：</p>
              <div class="r_right">
                <p>全程0购物0自费</p>
              </div>
            </div>
            <div class="main2_right_m2_title trip_nav_m">
              <i class="iconfont icon-li"></i>服务标准
            </div>
            <div class="main2_right_m4_m">
              <p class="r_left">• 服务标准：</p>
              <div class="r_right"></div>
              <p class="r_left">• 附加条款：</p>
              <div class="r_right"></div>
            </div>
            <div class="main2_right_m2_title trip_nav_m">
              <i class="iconfont icon-li"></i>预订须知
            </div>
            <div class="main2_right_m4_m">
              <p class="r_left">• 温馨提示：</p>
              <div class="r_right">
                <p>1.因不可抗拒的客观原因和非旅行社原因（如天灾、战争、罢工、政府行为等）旅行社有权取消或变更行程。</p>
                <p>2.由于团队行程中所有住宿、用车、景点门票等均为旅行社打包整体销售，因此若您因自身原因未能游览参观的则视为自 动放弃，旅行社将无法退费用。</p>
                <p>3.出于安全考虑，福建省的酒店入住手续非常严格，儿童务必带上户口本随监护人一同办理入住手续</p>
                <p>4.在保证景点不减少的情况下，旅行社根据实际情况有权更改行程顺序</p>
                <p>5.行程中赠送项目如因景区、天气或客人自身原因等导致无法参观的，费用不退</p>
                <p>6.自费项目均为当地客人认可价格、自愿消费、费用现付，价格包含门票、车费、导服费</p>
                <p>7.我社以团友当地自填意见书为处理投诉依据，恕不受理团友因虚填或不填意见书而产生的后续争议！</p>
                <p>8.以上赠送的景点及物品，自愿放弃者一律不退任何费用。</p>
                <p>9.根据《厦门轮渡公司旅游客运航线游客管理相关规定》，所有乘坐厦鼓渡轮的乘客（身高1.2米以下的儿童除外），必须提供身份证等有效证件原件配合本人船票通过轮渡检票口</p>
                <p>
                  <br />
                </p>
                <p style="color: #f02e4c!important;">【风险提示】</p>
                <div
                  class="li"
                >1) 游泳、漂流、潜水、滑雪、溜冰、戏雪、冲浪、探险、热气球、高山索道等活动项目，均存在危险。参与前请根据自身条件，并充分参考当地相关部门及其它专业机构的相关公告和建议后量力而行。</div>
                <div class="li">2) 禁忌提示：请尊重当地的饮食习惯、习俗禁忌、宗教礼仪等，入乡随俗，融入当地的民风民情。</div>
                <div
                  class="li"
                >3) 根据中国海关总署颁布的2010年第54号、2016年第19号、2016年第25号令，进境公民旅客携带在境外获取5000元以内（含5000元）个人自用进境物品的基础上，允许其在口岸进境免税店增加一定数量的免税购物额，连同境外免税购物额总计不超过8000元人民币的，海关予以免税放行，但烟草制品、酒精制品等国家规定应当征税的商品不在免税范围内，敬请知晓。</div>
                <div
                  class="li"
                >4) 根据发布的《中华人民共和国禁止携带、邮寄进境的动植物及其产品和其他检疫物名录》，将燕窝、新鲜水果、蔬菜、动物源性中药材、转基因生物材料等列入严禁携带或邮寄进境项目，敬请知晓。</div>
                <div class="li">5) 请您严格遵守境外旅游目的地有关国家法律法规，切勿从事象牙等濒危野生动植物及其制品交易或携带相关物品，避免因触犯法律损害自身利益。</div>
              </div>
            </div>
            <div class="trip_m">
              <div class="li active">
                <span>第1天</span>
              </div>
              <div class="li">
                <span>第2天</span>
              </div>
              <div class="li">
                <span>第3天</span>
              </div>
              <div class="li">
                <span>第4天</span>
              </div>
              <div class="li">
                <span>第5天</span>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </ul>
    </div>
    <input id="startcity" type="hidden" value="北京" />
    <input id="lineSource" type="hidden" value="1" />
    <input id="producttype" type="hidden" value="跟团游" />
    <input id="productprice" type="hidden" value="3280" />
    <input
      id="productimgurl"
      type="hidden"
      value="https://img0.uzaicdn.com/ba/sightGallery/ATT0000806749.jpg"
    />
    <d-cbl></d-cbl>
    <d-footer></d-footer>

    
  </div>
</template>
<script>
import dHeader from "../components/index/header";
import dFooter from "../components/index/footer";
import dCbl from "../components/detail/cbl";

export default {
  data() {
    return {
      titleImg: "img/product01.png",
      img:"https://img0.uzaicdn.com/ba/sightGallery/ATT0000806749.jpg?imageView2/2/w/550/h/413/format/jpg/interlace/1",
      ac:true,
      msg:false,
      items: [
        {
          img:"https://img4.uzaicdn.com/ba/sightGallery/ATT0000806749.jpg?imageView2/2/w/182/h/137/format/jpg/interlace/1",
            ac:true
        },
        {
          img:"https://img0.uzaicdn.com/ba/sightGallery/鼓浪环岛447鼓浪环岛路446+视觉中国+RF+VCG21gic19991303.jpg?imageView2/2/w/182/h/137/format/jpg/interlace/1",
            ac:false
        },
        {
          img:"https://img4.uzaicdn.com/ba/sightGallery/曾厝垵22919曾厝垵30598+视觉中国+RF+VCG21gic20062182.jpg?imageView2/2/w/182/h/137/format/jpg/interlace/1",
            ac:false
        },
        {
          img:"https://img1.uzaicdn.com/ba/sightGallery/万国建筑博览423万国建筑博览422+视觉中国+RF+VCG2120d318f4b.jpg?imageView2/2/w/182/h/137/format/jpg/interlace/1",
            ac:false
        }
      ],
      act_time:false,
      // 成人数量
      man_num:1,
      // 孩子数量
      child_num:0,
      // 景点名称 
      gtitle:"sss",
      gimg:"https://img0.uzaicdn.com/ba/sightGallery/ATT0000806749.jpg?imageView2/2/w/550/h/413/format/jpg/interlace/1",
      // 地点
      gmap:"",

      def_time:"请选择出团日期",
      godata:"",
      // 景点价格
      man_price:0,
      local:"北京",
      chostime:[{
        tit:"09-26(周四)出发 - 3660/人 - A行程",
        godata:"2019-09-26",
        ptime:false
      },{
        tit:"10-01(周二)出发 - 4460/人 - A行程",
        godata:"2019-10-01",
        ptime:false
      },
      {
        tit:"10-02(周三)出发 - 4460/人 - A行程",
        godata:"2019-10-02",
        ptime:false
      },
      {
        tit:"10-08(周二)出发 - 4060/人 - A行程",
        godata:"2019-10-08",
        ptime:false
      },
      {
        tit:"10-10(周四)出发 - 4060/人 - A行程",
        godata:"2019-10-10",
        ptime:false
      },
      {
        tit:"10-12(周六)出发 - 4060/人 - A行程",
        godata:"2019-10-12",
        ptime:false
      },
      {
        tit:"10-30(周三)出发 - 4460/人 - A行程" ,
        godata:"2019-10-30",
        ptime:false
      }],
      res_obj:{} 
    };
  },
  // 获取数据库信息放到页面中
  created (){
    // 获取数据库信息
    var get_url = "order/getload";
    this.axios.get(get_url).then(res=>{
      var goods = res.data[0];
      this.gtitle = goods.gtitle;
      this.man_price=goods.g_m_price;
      this.gmap = goods.gmap;
    
    })
  },
  beforeDestroy(){
      this.bus.$emit('getpinfo',this.res_obj);
  },
  watch:{
    def_time:{
      handler(newval){
          if(newval!="请选择出团日期"){
            this.msg = false;
          }
        }
      } 
  },
  methods: {
    changeImg(index) {
        this.img=this.items[index].img
        for(let i=0;i<this.items.length;i++){
            if(i==index){
                this.items[index].ac=true
                this.gimg=this.items[index].img;
                console.log(this.gimg)
            }
            else{
                this.items[i].ac=false
            }
        }
    },
    showtime(e){
      //console.log(e.currentTarget);
        //e.currentTarget.getElementById("string") 
      if(e.currentTarget.firstChild.className=="li"){
        if(this.act_time==false){
          this.act_time=true;
          return;
        }
        if(this.act_time==true){
          this.act_time=false;
          return;
        }
      }
    },
    choosetime(index){
      this.def_time = this.chostime[index].tit;
      this.gdata=this.chostime[index].godata;
      console.log(this.gdata)
      
    },
    // 提交订单
    order(){
      
    }
    ,
    // 人的加减
    reduce(e){
      if(e=="m"&&this.man_num>1){
        this.man_num--
      }else if(e=="c"&&this.child_num>0){
        this.child_num--
      }
    },
    add(e){
      if(e=="m"){
        this.man_num++
      }else if(e=="c"){
        this.child_num++
      }
    },
    reserve(){
      if(this.def_time==="请选择出团日期"){

        this.msg = true;
        return;
      }
      else{
        this.msg = false;
      }

      let oid ='PD'+ new Date().getTime();
      let gimg=this.gimg;
      let gtitle=this.gtitle;
      let gdata = this.gdata;
      //console.log(oid)
      let man_count = this.man_num ;
      let child_count = this.child_num;
      let man_price = this.man_price;
      let child_price = this.man_price-200;
      let mans_count = this.man_num + this.child_num;
      // let godata=this.godata;
      let local = this.gmap;
      let choosetime = this.gdata;
      let obj2 ={
        oid,
         man_count ,
         child_count,
         man_price,
         child_price,
         mans_count,
         gtitle,
         local,
         gimg,
         choosetime,
         gdata
      }
      this.res_obj = obj2;
     
      this.$router.push('/booking');
      
      // this.$router.push('/booking');
    }
   
  },
  components: {
    dHeader,
    dFooter,
    dCbl
  }
};
</script>
<style scoped>
@import url("../assets/css/detail.scss");
@import url("detaill.scss");

.xr {
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
  width: 150px;
  height: 180px;
  overflow-x: visible;
  overflow-y: visible;
  overflow-wrap: normal;

  position: fixed;
  top: 200px;
  right: 30px;
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
  background: url(https://s3-qcloud.meiqia.com/pics.meiqia.bucket/654b669bb145ac60)
    0% 0% / cover no-repeat;
}
</style>