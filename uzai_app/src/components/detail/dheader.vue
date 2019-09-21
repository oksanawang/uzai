<template>
    <div>
        <div class="publicTopW">
        <div class="common_top">
            <div class="top_m">
                <div class="top_m_r">
                    <a href="//userclub.uzai.com" target="_blank"><i class="iconfont icon-vip"></i> 会员俱乐部</a>
                    <a href="//u.uzai.com/personal/myorder" target="_blank" class="paddl26">我的订单</a>
                    <a href="//www.uzai.com/aboutus/salesnetwork" target="_blank" class="paddl26 red">营业网点</a>
                    <div class="top_server">
                        <a href="#">服务中心 
                            <i class="iconfont icon-zhankai"></i>
                            <i class="iconfont icon-shouqi"></i>
                        </a>
                        <div class="clear"></div>
                        <div class="ul">
                            <a href="//www.uzai.com/aboutus/companyprofile" target="_blank">关于我们</a>
                            <a href="//www.uzai.com/aboutus/businesscooperation" target="_blank">商务合作</a>
                            <a href="//www.uzai.com/aboutus/contactus" target="_blank">联系我们</a>
                            <a href="//www.uzai.com/aboutus/joinus" target="_blank">诚聘英才</a>
                        </div>
                    </div>
                </div>
                <div class="top_m_l">
                    <a href="//u.uzai.com/reg/login"><i class="iconfont icon-yonghu"></i>登录</a>
                    <a class="paddl0">|</a>
                    <a href="//u.uzai.com/reg/register_one"><i class="iconfont icon-zhuce"></i>注册</a>
                    <span class="red">新用户送5800元抵用券</span>
                </div>
            </div>
        </div>
        <div class="common_head">
            <div class="phone_r">
                <h2><i class="iconfont icon-lianxiwomen"></i> 1010-9898</h2>
                <h3>09:00~21:00</h3>
            </div>
            <a href="//www.uzai.com"><img src="//r.uzaicdn.com/content/store/images/common/logo.png" class="logo"></a>
            <div class="address" id="address">
                <div class="maskLine"></div>
                <i class="iconfont icon-zuobiao">&#xe611;</i>
                <span class="land" id="_site_name">北京</span>
                <i class="iconfont icon-zhankai" onclick="javascript:$('#cityBoard').show()"></i>
                <div class="address_m" id="cityBoard">
                    <div class="hot_address">
                        <a href="javascript:void();" onclick="city_change(this,25,'bj')">北京</a>
                        <a href="javascript:void();" onclick="city_change(this,347,'sh')">上海</a>
                        <a href="javascript:void();" onclick="city_change(this,375,'tj')">天津</a>
                        <a href="javascript:void();" onclick="city_change(this,355,'xa')">西安</a>
                        <a href="javascript:void();" onclick="city_change(this,338,'nj')">南京</a>
                        <a href="javascript:void();" onclick="city_change(this,389,'wh')">武汉</a>
                        <a href="javascript:void();" onclick="city_change(this,260,'hz')">杭州</a>
                    </div>
                    <div class="hot_address_er">
                        <div class="left">华北：</div>
                        <div class="right">
                            <a href="javascript:void();" onclick="city_change(this,25,'bj')">北京</a>
                            <a href="javascript:void();" onclick="city_change(this,375,'tj')">天津</a>
                            <a href="javascript:void();" onclick="city_change(this,356,'sjz')">石家庄</a>
                            <a href="javascript:void();" onclick="city_change(this,377,'ts')">唐山</a>
                            <a href="javascript:void();" onclick="city_change(this,365,'qd')">青岛</a>
                            <a href="javascript:void();" onclick="city_change(this,371,'jn')">济南</a>
                            <a href="javascript:void();" onclick="city_change(this,379,'ty')">太原</a>
                            <a href="javascript:void();" onclick="city_change(this,5423,'lf')">廊坊</a>
                        </div>
                    </div>
                    <div class="hot_address_er">
                        <div class="left">东北：</div>
                        <div class="right">
                            <a href="javascript:void();" onclick="city_change(this,351,'sy')">沈阳</a>
                            <a href="javascript:void();" onclick="city_change(this,235,'dl')">大连</a>
                            <a href="javascript:void();" onclick="city_change(this,218,'cc')">长春</a>
                            <a href="javascript:void();" onclick="city_change(this,268,'heb')">哈尔滨</a>
                        </div>
                    </div>
                    <div class="hot_address_er">
                        <div class="left">华东：</div>
                        <div class="right">
                                <a href="javascript:void();" onclick="city_change(this,347,'sh')">上海</a>
                                <a href="javascript:void();" onclick="city_change(this,338,'nj')">南京</a>
                                <a href="javascript:void();" onclick="city_change(this,363,'sz')">苏州</a>
                                <a href="javascript:void();" onclick="city_change(this,260,'hz')">杭州</a>
                                <a href="javascript:void();" onclick="city_change(this,336,'nb')">宁波</a>
                                <a href="javascript:void();" onclick="city_change(this,391,'wx')">无锡</a>
                                <a href="javascript:void();" onclick="city_change(this,298,'nc')">南昌</a>
                                <a href="javascript:void();" onclick="city_change(this,259,'hf')">合肥</a>
                                <a href="javascript:void();" onclick="city_change(this,229,'cz')">常州</a>
                        </div>
                    </div>
                    <div class="hot_address_er">
                        <div class="left">华中：</div>
                        <div class="right">
                            <a href="javascript:void();" onclick="city_change(this,217,'zz')">郑州</a>
                            <a href="javascript:void();" onclick="city_change(this,226,'cs')">长沙</a>
                            <a href="javascript:void();" onclick="city_change(this,389,'wh')">武汉</a>
                        </div>
                    </div>
                    <div class="hot_address_er">
                        <div class="left">华南：</div>
                        <div class="right">
                            <a href="javascript:void();" onclick="city_change(this,399,'xm')">厦门</a>
                        </div>
                    </div>
                    <div class="hot_address_er">
                        <div class="left">西南：</div>
                        <div class="right">
                            <a href="javascript:void();" onclick="city_change(this,227,'cd')">成都</a>
                            <a href="javascript:void();" onclick="city_change(this,223,'cq')">重庆</a>
                        </div>
                    </div>
                    <div class="hot_address_er">
                        <div class="left">西北：</div>
                        <div class="right">
                            <a href="javascript:void();" onclick="city_change(this,355,'xa')">西安</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="search">
                <div class="search_bot" onclick="IndexSearch.search()">
                    <i class="iconfont icon-sousuo">&#xe605;</i>
                </div>
                <input type="text" class="search_input" id="index_search_input" attr-href="https://search.uzai.com/国内游立减/1/0/0/s1/" placeholder="国内游 满额立减￥400/人">
                <input type="hidden" id="index_search_input_last_value">
                <div id="searchQuickInput" style="display: none;"></div>
                <div class="search_more" id="search_board" style="display: none;">
                    <div class="search_more_m" id="search_more_m">
                        <div class="hot">
                            <a href="javascript:;" onclick="IndexSearch.target_link('北欧','https://search.uzai.com/北欧/',1)">北欧</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('东欧','https://search.uzai.com/东欧/',1)">东欧</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('俄罗斯','https://search.uzai.com/eluosi/1/0/0/s3-pCOTT000048_COTT000264_COTT000234/',1)">俄罗斯</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('东京','https://search.uzai.com/dongjing/',1)">东京</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('北海道','https://search.uzai.com/北海道/',1)">北海道</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('普吉岛','https://search.uzai.com/pujidao/',1)">普吉岛</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('土耳其','https://search.uzai.com/tuerqi/',1)">土耳其</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('加拿大','http://search.uzai.com/jianada/',1)">加拿大</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('澳大利亚','http://search.uzai.com/aodaliya/',1)">澳大利亚</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('新西兰','http://search.uzai.com/新西兰/',1)">新西兰</a>
                        </div>
                        <div class="more">
                            <b>跟团游：</b>
                            <a href="javascript:;" onclick="IndexSearch.target_link('欧洲一国','https://search.uzai.com/%E6%AC%A7%E6%B4%B2/1/0/0/s0-t8_9_10/',1)">欧洲一国</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('美国东西岸','https://search.uzai.com/meiguo/',1)">美国东西岸</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('东京大阪','https://search.uzai.com/daban',1)">东京大阪</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('迪拜','https://search.uzai.com/dibai/1/0/0/s3/',1)">迪拜</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('肯尼亚','https://search.uzai.com/kenniya',1)">肯尼亚</a>
                        </div>
                        <div class="more">
                            <b>海岛游：</b>
                            <a href="javascript:;" onclick="IndexSearch.target_link('巴厘岛','https://search.uzai.com/balidao',1)">巴厘岛</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('长滩岛','https://search.uzai.com/changtandao',1)">长滩岛</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('民丹岛','https://search.uzai.com/民丹',1)">民丹岛</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('沙巴','https://search.uzai.com/shaba',1)">沙巴</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('仙本那','https://search.uzai.com/仙本那',1)">仙本那</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('塞班','https://search.uzai.com/saiban',1)">塞班</a>
                        </div>
                        <div class="more">
                            <b>国内游：</b>
                            <a href="javascript:;" onclick="IndexSearch.target_link('亲子年票','https://www.uzai.com/tours/00014327.html',1)">亲子年票</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('川滇藏之旅','https://search.uzai.com/chengdu/1/0/0/s0-c227/',1)">川滇藏之旅</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('江西','https://search.uzai.com/%E6%B1%9F%E8%A5%BF/1/0/0/s3/',1)">江西</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('西藏','https://search.uzai.com/%E8%A5%BF%E8%97%8F/1/0/0/s3/',1)">西藏</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('海南','https://search.uzai.com/%E6%B5%B7%E5%8D%97/1/0/0/s3/',1)">海南</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('云南','https://search.uzai.com/%E4%BA%91%E5%8D%97/1/0/0/s3/',1)">云南</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('广西','https://search.uzai.com/%E6%A1%82%E6%9E%97/1/0/0/s3/',1)">广西</a>
                        </div>
                        <div class="more">
                            <b>邮轮游：</b>
                            <a href="javascript:;" onclick="IndexSearch.target_link('欧洲航线','https://search.uzai.com/ouzhou/1/5/2/s0/',1)">欧洲航线</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('日本航线','https://search.uzai.com/riben/1/5/2/s0/',1)">日本航线</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('美洲航线','https://search.uzai.com/%E7%BE%8E%E6%B4%B2/1/5/2/s0/',1)">美洲航线</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('极地航线','https://search.uzai.com/%E6%9E%81%E5%9C%B0/1/0/0/s4/',1)">极地航线</a>
                        </div>
                        <div class="more">
                            <b>热门游：</b>
                            <a href="javascript:;" onclick="IndexSearch.target_link('UYOUNG系列','https://search.uzai.com/UYOUNG/1/0/0/s3/',1)">UYOUNG系列</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('一家一团','https://search.uzai.com/一家',1)">一家一团</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('暑期亲子','https://search.uzai.com/乐园',1)">暑期亲子</a>
                        </div>
                        <div class="more"><b>办签证：</b>
                            <a href="javascript:;" onclick="IndexSearch.target_link('美国签证','https://visa.uzai.com/ChannelList/GetChannelList?prodCounName=美国',1)">美国签证</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('日本签证','https://visa.uzai.com/ChannelList/GetChannelList?prodCounName=日本',1)">日本签证</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('马来西亚签证','https://visa.uzai.com/ChannelList/GetChannelList?prodCounName=马来西亚',1)">马来西亚签证</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('越南签证','https://visa.uzai.com/ChannelList/GetChannelList?prodCounName=越南',1)">越南签证</a>
                            <a href="javascript:;" onclick="IndexSearch.target_link('英国签证','https://visa.uzai.com/ChannelList/GetChannelList?prodCounName=英国',1)">英国签证</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="senior_search">
                <div class="line"></div>
                <span class="ti">高级搜索</span> 
                <i class="iconfont icon-jiagezhengxu">&#xe601;</i>
                <i class="iconfont icon-jiagezhengxu1"></i>
                <div class="senior_search_m">
                    <div class="senior_search_m_input">
                        <div class="left">关键字:</div>
                        <input type="text" placeholder="请输入目的地、关键词" id="input_adv_search">
                        <div id="adv_search_error_tip"></div>
                    </div>
                    <div class="senior_search_m_input1" style="display: none;">
                        <div class="left">类型：</div>
                        <div class="left1">
                            <span><i class="iconfont icon-fangkuang"></i> 跟团游</span>
                            <span><i class="iconfont icon-fangkuang"></i> 自由行</span>
                            <span><i class="iconfont icon-fangkuang"></i> 邮轮</span>
                            <span><i class="iconfont icon-fangkuang"></i> 境外参团</span>
                        </div>
                    </div>
                    <div class="senior_search_m_input1">
                        <div class="left">行程天数：</div>
                        <div class="left1">
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>1天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>2天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>3天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>4天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>5天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>6天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>7天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>8天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>9天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>10天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>11天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>12天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>13天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>14天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>15天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>16天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>17天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>18天</span>
                            <span><i name="index_trip_days" class="iconfont icon-fangkuang"></i>18天以上</span>
                        </div>
                        <div class="more">更多 <i class="iconfont icon-zhankai"></i></div>
                    </div>
                    <div class="senior_search_m_input1">
                        <div class="left">价格区间：</div>
                        <div class="left1 section">
                            <input type="text" id="index_price_low" maxlength="6"> - <input type="text" id="index_price_high" maxlength="6">
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
                    <a href="http://www.uzai.com/bj"><i class="iconfont icon-yuandian">&#xe66b;</i>首页</a>
                </li>
                <li id="channel_8" class="nav_more">
                    <a href="https://www.uzai.com/outbound/bj/" target="_blank"><i class="iconfont icon-yuandian">&#xe66b;</i>出境游<img src="//r.uzaicdn.com/content/store/images/common/top_nav_bg8.png"><i class="iconfont icon-zhankai"></i></a>
                    <div class="nav_a">
                        <div class="nav_item">
                            <a href="https://search.uzai.com/all/1/0/0/s1-f1/" target="_blank"><span>金秋放价 满额立减￥300-￥1000/人</span></a>
                            <a href="https://search.uzai.com/优严选/1/0/0/s0/" target="_blank"><span>优严选 一价全含</span></a>
                            <a href="//search.uzai.com/ouzhou/"><span>欧洲</span></a>
                            <a href="//search.uzai.com/riben/"><span>日本</span></a>
                            <a href="//search.uzai.com/东南亚/"><span>东南亚</span></a>
                            <a href="//search.uzai.com/海岛/"><span>海岛</span></a>
                            <a href="//search.uzai.com/美洲/"><span>美洲</span></a>
                            <a href="//search.uzai.com/澳新/"><span>澳新</span></a>
                            <a href="//search.uzai.com/中东非/"><span>中东非</span></a>
                        </div>
                    </div>
                </li>
                <li id="channel_17" class="nav_more">
                    <a href="//www.uzai.com/lvyoucn/bj/" target="_blank"><i class="iconfont icon-yuandian">&#xe66b;</i>国内游<img src="//r.uzaicdn.com/content/store/images/common/top_nav_bg3.png">
                        <i class="iconfont icon-zhankai"></i>
                    </a>
                    <div class="nav_a">
                        <div class="nav_item">
                            <a href="https://search.uzai.com/国内游立减/1/0/0/s1/" target="_blank"><span>国内游 满额立减￥400/人</span></a>
                            <a href="https://search.uzai.com/秋游国内/1/0/0/s0/" target="_blank"><span>国内游 送充电好礼</span></a>
                            <a href="https://search.uzai.com/西藏/1/0/0/s0/"><span>西藏</span></a>
                            <a href="https://search.uzai.com/福建/1/0/0/s0/" target="_blank"><span>福建</span></a>
                            <a href="https://search.uzai.com/海南/1/0/0/s0/" target="_blank"><span>海南</span></a>
                            <a href="https://search.uzai.com/云南/1/0/0/s0/" target="_blank"><span>云南</span></a>
                            <a href="https://search.uzai.com/天山/1/0/0/s0/" target="_blank"><span>新疆</span></a>
                            <a href="https://search.uzai.com/青海/1/0/0/s0/" target="_blank"><span>青海</span></a>
                            <a href="https://search.uzai.com/长白山/1/0/0/s0/" target="_blank"><span>长白山</span></a>
                        </div>
                    </div>
                        
                </li>
                <li id="channel_3058" class="nav_more">
                    <a href="https://event.uzai.com/subject/bjfxbxb/fxb.htm" target="_blank"><i class="iconfont icon-yuandian">&#xe66b;</i>主题游<i class="iconfont icon-zhankai"></i></a><div class="nav_a">
                        <div class="nav_item">
                            <a href="https://www.uzai.com/qijilvxing"><span>奇迹旅行</span></a>
                            <a href="http://event.uzai.com/subject/bjtuan/tuan.htm" target="_blank"><span>一家一团</span></a>
                            <a href="https://event.uzai.com/subject/bjzxyx/zxyx.htm" target="_blank"><span>众信游学</span></a>
                            </div>
                            </div>
                </li>
                <li id="channel_3060" class="nav_more">
                    <a href="https://search.uzai.com/邮轮/1/0/0/s0/" target="_blank"><i class="iconfont icon-yuandian">&#xe66b;</i>邮轮游<i class="iconfont icon-zhankai"></i></a>
                    <div class="nav_a">
                        <div class="nav_item"><a href="https://search.uzai.com/riben/1/5/2/s3-c375/"><span>日本航线</span></a>
                            <a href="https://search.uzai.com/ouzhou/1/5/2/s0/"><span>欧洲航线</span></a>
                            <a href="https://search.uzai.com/%E7%BE%8E%E6%B4%B2/1/5/2/s0/"><span>美洲航线</span></a>
                            <a href="https://search.uzai.com/%E6%9E%81%E5%9C%B0/1/0/0/s4/"><span>极地航线</span></a>
                        </div>
                    </div>
                </li>
                <li id="channel_3072" class="nav_more">
                    <a href="https://search.uzai.com/自由行/1/0/0/s3-c25/" target="_blank">
                    <i class="iconfont icon-yuandian">&#xe66b;</i>自由行<i class="iconfont icon-zhankai"></i></a>
                    <div class="nav_a">
                        <div class="nav_item">
                            <a href="https://search.uzai.com/自由行/1/0/0/s3-c25/">
                            <span>机酒自由行</span></a>
                            <a href="https://search.uzai.com/自由行/1/4/2/s0-c25/"><span>省心半自助</span></a>
                            <a href="https://search.uzai.com/riben/1/2/2/s3/"><span>日本自由行</span></a>
                        </div>
                    </div>
                </li>
                <li id="channel_3049" class="nav_more">
                    <a href="https://www.uzai.com/visa/index" target="_blank">
                    <i class="iconfont icon-yuandian">&#xe66b;</i>全球签证<img src="//r.uzaicdn.com/content/store/images/common/top_nav_bg4.png"><i class="iconfont icon-zhankai"></i></a>
                    <div class="nav_a">
                        <div class="nav_item">
                            <a href="https://visa.uzai.com/ChannelList/GetChannelList?prodCounName=美国"><span>美国十年多次签</span></a>
                            <a href="https://visa.uzai.com/ChannelList/GetChannelList?prodCounName=日本"><span>日本三年多次签</span></a>
                            <a href="https://visa.uzai.com/ChannelList/GetChannelList?prodCounName=新加坡"><span>新加坡个人旅游签</span></a>
                        </div>
                    </div>
                </li>
                <li id="channel_3066" class="nav_more">
                    <a href="https://event.uzai.com/subject/bjydz/ydz.htm" target="_blank"><i class="iconfont icon-yuandian">&#xe66b;</i>定制旅行<i class="iconfont icon-zhankai"></i></a>
                    <div class="nav_a">
                        <div class="nav_item">
                            <a href="https://dingzhi.uzai.com/product/custom/personal" target="_blank"><span>私人订制</span></a>
                            <a href="https://dingzhi.uzai.com/product/custom/enterprise" target="_blank"><span>企业定制</span></a>
                        </div>
                    </div>
                </li>
                <li id="channel_3070" class="nav_more">
                    <a href="https://hd.uzai.com/bjlx/lx.html?DH" target="_blank"><i class="iconfont icon-yuandian">&#xe66b;</i>会员福利<i class="iconfont icon-zhankai"></i></a>
                    <div class="nav_a">
                        <div class="nav_item">
                            <a href="https://hd.uzai.com/bjlx/lx.html#3" target="_blank"><span> 免费抽奖</span></a>
                            <a href="https://hd.uzai.com/bjlx/lx.html#2" target="_blank"><span>邀请好友领好礼</span></a>
                            <a href="https://hd.uzai.com/bjlx/lx.html#1" target="_blank"><span>注册送￥5800优惠券</span></a>
                            <a href="https://userclub.uzai.com/pointmall/index" target="_blank"><span>积分兑换</span></a>
                            <a href="https://userclub.uzai.com/activity/list?key=&amp;status=&amp;city=北京&amp;type=&amp;pi=1&amp;tp=54" target="_blank"><span>会员俱乐部</span></a>
                        </div>
                    </div>
                </li>
                <li id="channel_2048" class="nav_more">
                    <a href="http://event.uzai.com/subject/bjdkh/dkh.htm" target="_blank">
                    <i class="iconfont icon-yuandian">&#xe66b;</i>大客户专区<i class="iconfont icon-zhankai"></i></a>
                    <div class="nav_a">
                        <div class="nav_item">
                            <a href="https://event.uzai.com/subject/unionpaya/index.html" target="_blank"><span>银联优惠</span></a>
                            <a href="https://www.uzai.com/dkh/lyj.html#BJDH" target="_blank"><span>浦发老友记专区</span></a>
                            <a href="https://event.uzai.com/subject/bjjh/jianh.htm" target="_blank"><span>建行龙卡visa刷卡优惠</span></a>
                            <a href="https://www.uzai.com/JointWork/Login" target="_blank"><span>中信银行贵宾</span></a>
                            <a href="https://www.uzai.com/JointWork/MinshengLogin" target="_blank"><span>民生银行贵宾</span></a>
                        </div>
                    </div>
                </li>
                <li id="channel_1056" class="nav_more">
                    <a href="https://www.uzai.com/strategy/index.html" target="_blank"><i class="iconfont icon-yuandian">&#xe66b;</i>全球景点攻略<i class="iconfont icon-zhankai"></i></a>
                    <div class="nav_a">
                        <div class="nav_item">
                            <a href="https://www.uzai.com/sight/list.html" target="_blank"><span>全球景点</span></a>
                            <a href="https://www.uzai.com/strategy/index.html" target="_blank"><span>旅游攻略</span></a>
                            <a href="https://www.uzai.com/gotour" target="_blank"><span>全球旅讯</span></a>
                        </div>
                    </div>
                </li>
                <div class="clear"></div>
            </ul>
            <div class="ul" style="display: none;"></div>
        </div>
    </div>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    method:{
        changeshow(){
           
            if(this.show ==true){
                this.show =false;
                 console.log(this.show);
                 return;
            }
            if(this.show ==false ){
                this.show =true;
                console.log(this.show);
                return;
            }
          
        }
    }
}
</script>
<style lang="css"  scoped>
.publicFootW, .publicTopW {
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
.top_m_r .paddl26 {
    padding-left: 26px;
}
.top_m_r .red {
    color: #ea1a56;
}

.top_m_r .paddl26 {
    padding-left: 26px;
}
.top_server {
    margin-left: 14px;
    padding: 0 12px;
    width: 65px;
    position: relative;
    float: left;
    z-index: 2;
}
.top_m_r a {
    color: gray;
    font-size: 12px;
    float: left;
    line-height: 30px;
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
.top_m_l1 .grade1 {
    background-position: 0 0;
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

.top_m_l1 {
    float: left;
    line-height: 30px;
}

/**header */
.common_head {
    width: 1142px;
    margin: auto;
    padding-top: 30px;
}
.common_head img.logo {
    float: left;
}
.common_head .phone_r {
    float: right;
}
.common_head .phone_r h2 {
    padding-top: 2px;
    color: #ea1a56;
    font-size: 20px;
}
.common_head .phone_r h3 {
    text-align: right;
    font-size: 14px;
    color: #999;
    margin-top: 4px;
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
.common_head .address:hover .address_m, .common_head .address:hover .maskLine {
    display: block;
}
.common_head .address_m {
    display: none;
    position: absolute;
    top: 27px;
    left: -1px;
    width: 382px;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    -webkit-box-shadow: 2px 4px 10px rgba(0,0,0,.15);
    -moz-box-shadow: 2px 4px 10px rgba(0,0,0,.15);
    -o-box-shadow: 2px 4px 10px rgba(0,0,0,.15);
    box-shadow: 2px 4px 10px rgba(0,0,0,.15);
    padding: 20px;
    border-radius: 12px;
    z-index: 9;
    border-top-left-radius: 0;
    cursor: default;
}
.common_head .address_m .hot_address {
    text-align: justify;
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
.common_head .address i.icon-shouqi, .common_head .address i.icon-zhankai {
    font-size: 14px;
    color: #cfcfcf;
}

.address .icon-zhankai {
    margin-left: 2px;
}
.common_head .address_m {
    display: none;
    position: absolute;
    top: 27px;
    left: -1px;
    width: 382px;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    -webkit-box-shadow: 2px 4px 10px rgba(0,0,0,.15);
    -moz-box-shadow: 2px 4px 10px rgba(0,0,0,.15);
    -o-box-shadow: 2px 4px 10px rgba(0,0,0,.15);
    box-shadow: 2px 4px 10px rgba(0,0,0,.15);
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

a {
    text-decoration: none;
    color: #000;
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
.common_head .search .search_input {
    float: left;
    height: 36px;
    line-height: 36px;
    margin-left: 20px;
    width: 330px;
    font-size: 14px;
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
.search_more .search_more_m {
    padding-top: 10px;
}
.search_more .search_more_m .hot {
    overflow: hidden;
    height: 16px;
}
.search_more .search_more_m .hot a {
    color: #ea1a56;
    font-size: 12px;
    padding-right: 10px;
    margin-bottom: 10px;
    display: block;
    float: left;
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
.senior_search span.ti {
    color: #a6a6a6;
    font-size: 14px;
    line-height: 38px;
}
.senior_search .icon-jiagezhengxu, .senior_search .icon-jiagezhengxu1 {
    font-size: 14px;
    color: #a6a6a6;
}
.senior_search .icon-jiagezhengxu1 {
    display: none;
}

.senior_search .icon-jiagezhengxu, .senior_search .icon-jiagezhengxu1 {
    font-size: 14px;
    color: #a6a6a6;
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
.senior_search:hover .senior_search_m {
    display: block;
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
#adv_search_error_tip {
    color: #ea1a56;
    font-size: 12px;
    float: left;
    display: block;
    word-spacing: -1px;
    line-height: 26px;
    padding-left: 10px;
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
.senior_search .senior_search_m_input1 .left1 span {
    padding-right: 10px;
    color: #333;
    font-size: 12px;
    float: left;
    line-height: 26px;
}
.senior_search .senior_search_m_input1 .left1 span i {
    color: #d9d9d9;
    font-size: 12px;
    margin-right: 2px;
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
/*                          */
.senior_search .senior_search_m_input input {
    padding: 3px 0;
    float: left;
    padding-left: 10px;
    border: 1px solid #e5e5e5;
    margin-left: 0;
    border-radius: 3px;
    width: 250px;
}
input {
    outline: 0;
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
.senior_search .senior_search_m_input1 .left1 span {
    padding-right: 10px;
    color: #333;
    font-size: 12px;
    float: left;
    line-height: 26px;
}
.senior_search .senior_search_m_input1 .left1 span i {
    color: #d9d9d9;
    font-size: 12px;
    margin-right: 2px;
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
.clear, .clearfix {
    clear: both;
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
.common_nav ul li {
    float: left;
}

li {
    list-style: none;
}
.common_nav ul li a {
    display: inline-block;
    position: relative;
    padding: 0 19px;
    line-height: 32px;
    font-size: 16px;
}
.common_nav ul li img {
    position: absolute;
    right: -4px;
    top: -5px;
    height: 12px;
    width: 39px;
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
.common_nav ul li .nav_a {
    position: absolute;
    top: 30px;
    padding-top: 4px;
    z-index: 11;
    text-align: center;
    display: none;
}
.common_nav ul li .nav_item {
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
}
.common_nav ul li .nav_a a {
    color: #333;
    font-size: 14px;
    line-height: 34px;
    padding: 0;
}
.common_nav ul li .nav_a span {
    color: #333;
    font-size: 14px;
    line-height: 38px;
    padding: 0 12px;
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
    opacity: .92;
    filter: alpha(opacity=92);
}
.publicFootW, .publicTopW {
    background-color: #fff;
}
.common_nav {
    padding-top: 30px;
    padding-bottom: 2px;
    position: relative;
    border-bottom: 3px solid #ea1a56;
}
    
</style>