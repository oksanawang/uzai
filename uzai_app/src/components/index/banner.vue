<template>
  <div class="banner_index">
    <div class="banner_wrap">
      <ul class="content_list" @mouseenter="Ent" @mouseleave="Lea">
        <li :class="i==0?'active':''">
          <a href="javascript:;" 
            style="background-image: url('https://img7.uzaicdn.com/uz/advertisement/ATT0001127278.jpg')"
          ></a>
        </li>
        <li :class="i==1?'active':''">
          <a
            href="javascript:;"
            style="background-image: url('https://img8.uzaicdn.com/uz/advertisement/ATT0001127121.jpg' )"
            
          ></a>
        </li>
        <li :class="i==2?'active':''">
          <a
            href="javascript:;"
            style="background-image: url('https://img6.uzaicdn.com/uz/advertisement/ATT0001127291.jpg')"
            
          ></a>
        </li>
        <li :class="i==3?'active':''">
          <a
            href="javascript:;"
            style="background-image: url('https://img7.uzaicdn.com/uz/advertisement/ATT0001128719.jpg')"
            
          ></a>
        </li>
        <li :class="i==4?'active':''">
          <a
            href="javascript:;"
            style="background-image: url('https://img7.uzaicdn.com/uz/advertisement/ATT0001027999.jpg')"
            
          ></a>
        </li>
        <li :class="i==5?'active':''">
          <a
            href="javascript:;"
            style="background-image: url('https://img8.uzaicdn.com/uz/advertisement/ATT0001085549.jpg')"
          ></a>
        </li>
      </ul>
      <div class="pagination">
        <span v-for="(item,index) of lilist" :key="index" :class="index==i?'active':''" style="width: 146.667px;" v-text="item" @mouseenter="moveTo(index)"></span>
      </div>
    </div>
    <div class="nav_left">
      <div class="nav_left1">
        <div class="left">
          <img
            onerror="nofind()"
            src="../../../public/images/banner_img/ATT0000436388.png"
            style="width:20px;height:27px"
          />
        </div>
        <div class="right">
          <div class="n1">
            <a href="javascript:;" >欧洲</a>
          </div>
          <div class="n2">
            <a href="javascript:;" >北欧</a>
            <a href="javascript:;" >英国</a>
            <a href="javascript:;" >西葡</a>
            <a href="javascript:;" >东欧</a>
          </div>
        </div>
        <div class="right1">
          <i class="iconfont icon-youbian"></i>
        </div>
        <div class="nav_left1_hover">
          <div class="t1">
            <i class="iconfont icon-li"></i>欧洲
          </div>
          <div class="t2">游玩方式</div>
          <div class="t3">
            <a href="javascript:;" >跟团游</a>
            <span>|</span>
            <a href="javascript:;" >一家一团</a>
            <span>|</span>
            <a href="javascript:;" >欧洲邮轮</a>
          </div>
          <div class="line"></div>
          <div class="t2">热门玩法</div>
          <div class="t3">
            <a href="javascript:;"  class="red">北欧四国</a>
            <span>|</span>
            <a href="javascript:;"  class="red">俄罗斯一地</a>
            <span>|</span>
            <a href="javascript:;" >英国+爱尔兰</a>
            <span>|</span>
            <a href="javascript:;" >东欧五国</a>
            <span>|</span>
            <a href="javascript:;" >西班牙+葡萄牙</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >德法瑞意</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >一国深度</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >多国连线</a>
          </div>
          <div class="line"></div>
          <div class="t2">热门目的地</div>
          <div class="t3">
            <a href="javascript:;"  class="red">法国</a>
            <span>|</span>
            <a href="javascript:;" >瑞士</a>
            <span>|</span>
            <a href="javascript:;" >意大利</a>
            <span>|</span>
            <a href="javascript:;"  class="red">俄罗斯</a>
            <span>|</span>
            <a href="javascript:;" >德国</a>
            <span>|</span>
            <a href="javascript:;"  class="red">希腊</a>
            <span>|</span>
            <a href="javascript:;"  class="red">英国</a>
            <span>|</span>
            <a href="javascript:;" >爱尔兰</a>
            <span>|</span>
            <a href="javascript:;" >捷克</a>
            <span>|</span>
            <a href="javascript:;"  class="red">西班牙</a>
            <span>|</span>
            <a href="javascript:;"  class="red">葡萄牙</a>
            <span>|</span>
            <a href="javascript:;" >奥地利</a>
            <span>|</span>
            <a href="javascript:;" >匈牙利</a>
            <span>|</span>
            <a href="javascript:;" >比利时</a>
            <span>|</span>
            <a href="javascript:;"  class="red">荷兰</a>
            <span>|</span>
            <a href="javascript:;"  class="red">冰岛</a>
            <span>|</span>
            <a href="javascript:;" >瑞典</a>
            <span>|</span>
            <a href="javascript:;" >芬兰</a>
            <span>|</span>
            <a href="javascript:;"  class="red">丹麦</a>
            <span>|</span>
            <a href="javascript:;" >斯洛伐克</a>
            <span>|</span>
            <a href="javascript:;" >马耳他</a>
            <span>|</span>
            <a href="javascript:;" >塞尔维亚</a>
            <span>|</span>
            <a href="javascript:;" >阿尔巴尼亚</a>
            <span>|</span>
            <a href="javascript:;" >克罗地亚</a>
            <span>|</span>
            <a href="javascript:;/" >斯洛文尼亚</a>
            <span>|</span>
            <a href="javascript:;" >黑山共和国</a>
            <span>|</span>
            <a href="javascript:;" >波黑共和国</a>
          </div>
          <div class="line"></div>
          <a href="javascript:;" >
            <img
              onerror="nofind()"
              src="../../../public/images/banner_img/ATT0001119153.jpg"
              style="width:472px;height:125px"
            />
          </a>
        </div>
        <div class="right_r">
          <div class="cover_line"></div>
        </div>
      </div>
      <div class="nav_left1">
        <div class="left">
          <img
            onerror="nofind()"
            src="../../../public/images/banner_img/ATT0000236502.png"
            style="width:20px;height:27px"
          />
        </div>
        <div class="right">
          <div class="n1">
            <a href="https://search.uzai.com/riben/" >日本</a>
          </div>
          <div class="n2">
            <a href="javascript:;" >东京</a>
            <a href="javascript:;" >大阪</a>
            <a href="javascript:;" >北海道</a>
          </div>
        </div>
        <div class="right1">
          <i class="iconfont icon-youbian"></i>
        </div>
        <div class="nav_left1_hover">
          <div class="t1">
            <i class="iconfont icon-li"></i>日本
          </div>
          <div class="t2">热门玩法</div>
          <div class="t3">
            <a href="javascript:;" >本州连线</a>
            <span>|</span>
            <a href="javascript:;" >东京+大阪</a>
            <span>|</span>
            <a href="javascript:;" >北海道一地</a>
            <span>|</span>
            <a href="javascript:;" >日本自由行</a>
            <span>|</span>
            <a href="javascript:;" >日本邮轮</a>
          </div>
          <div class="line"></div>
          <div class="t2">热门目的地</div>
          <div class="t3">
            <a href="javascript:;"  class="red">东京</a>
            <span>|</span>
            <a href="javascript:;"  class="red">大阪</a>
            <span>|</span>
            <a href="javascript:;"  class="red">北海道</a>
            <span>|</span>
            <a href="javascript:;" >京都</a>
            <span>|</span>
            <a href="javascript:;" >奈良</a>
            <span>|</span>
            <a href="javascript:;" >名古屋</a>
            <span>|</span>
            <a href="javascript:;" >九州</a>
            <span>|</span>
            <a href="javascript:;" >富士山</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >东京迪士尼乐园</a>
            <span>|</span>
            <a href="javascript:;" >大阪环球影城</a>
            <span>|</span>
            <a href="javascript:;" >长崎</a>
            <span>|</span>
            <a href="javascript:;" >福冈</a>
          </div>
          <div class="line"></div>
          <a href="javascript:;" >
            <img
              onerror="nofind()"
              src="../../../public/images/banner_img/ATT0001129239.jpg"
              style="width:472px;height:125px"
            />
          </a>
        </div>
        <div class="right_r">
          <div class="cover_line"></div>
        </div>
      </div>
      <div class="nav_left1">
        <div class="left">
          <img
            onerror="nofind()"
            src="../../../public/images/banner_img/ATT0000436390.png"
            style="width:20px;height:27px"
          />
        </div>
        <div class="right">
          <div class="n1">
            <a href="javascript:;" >东南亚</a>
            <a href="javascript:;" >海岛</a>
          </div>
          <div class="n2">
            <a href="javascript:;" >泰国</a>
            <a href="javascript:;" >沙巴</a>
            <a href="javascript:;" >普吉岛</a>
            <a href="javascript:;" >巴厘岛</a>
          </div>
        </div>
        <div class="right1">
          <i class="iconfont icon-youbian"></i>
        </div>
        <div class="nav_left1_hover">
          <div class="t1">
            <i class="iconfont icon-li"></i>东南亚
          </div>
          <div class="t2">热门玩法</div>
          <div class="t3">
            <a href="javascript:;" >泰国一地</a>
            <span>|</span>
            <a href="javascript:;" >清迈+清莱</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >新加坡+民丹岛</a>
            <span>|</span>
            <a href="javascript:;" >越南+柬埔寨</a>
          </div>
          <div class="line"></div>
          <div class="t2">热门目的地</div>
          <div class="t3">
            <a href="javascript:;"  class="red">泰国</a>
            <span>|</span>
            <a href="javascript:;"  class="red">新加坡</a>
            <span>|</span>
            <a href="javascript:;" >印度</a>
            <span>|</span>
            <a href="javascript:;" >马来西亚</a>
            <span>|</span>
            <a href="javascript:;" >斯里兰卡</a>
            <span>|</span>
            <a href="javascript:;" >柬埔寨</a>
            <span>|</span>
            <a href="javascript:;" >越南</a>
            <span>|</span>
            <a href="javascript:;" >菲律宾</a>
          </div>
          <div class="line"></div>
          <div class="t1">
            <i class="iconfont icon-li"></i>海岛
          </div>
          <div class="t2">热门玩法</div>
          <div class="t3">
            <a href="javascript:;" >普吉岛一地</a>
            <span>|</span>
            <a href="javascript:;" >曼谷+芭提雅</a>
            <span>|</span>
            <a href="javascript:;" >巴厘岛一地</a>
            <span>|</span>
            <a href="javascript:;" >Club Med度假村</a>
          </div>
          <div class="line"></div>
          <div class="t2">热门目的地</div>
          <div class="t3">
            <a href="javascript:;" >普吉岛</a>
            <span>|</span>
            <a href="javascript:;"  class="red">巴厘岛</a>
            <span>|</span>
            <a href="javascript:;" >沙巴</a>
            <span>|</span>
            <a href="javascript:;"  class="red">民丹岛</a>
            <span>|</span>
            <a href="javascript:;" >塞班岛</a>
            <span>|</span>
            <a href="javascript:;" >珍拉丁湾</a>
            <span>|</span>
            <a href="javascript:;" >斐济</a>
            <span>|</span>
            <a href="javascript:;" >仙本那</a>
            <span>|</span>
            <a href="javascript:;" >长滩岛</a>
          </div>
          <div class="line"></div>
          <a
            href="javascript:;"
            
          >
            <img
              onerror="nofind()"
              src="../../../public/images/banner_img/ATT0001049889.jpg"
              style="width:472px;height:125px"
            />
          </a>
        </div>
        <div class="right_r">
          <div class="cover_line"></div>
        </div>
      </div>
      <div class="nav_left1">
        <div class="left">
          <img
            onerror="nofind()"
            src="../../../public/images/banner_img/ATT0000436393.png"
            style="width:20px;height:27px"
          />
        </div>
        <div class="right">
          <div class="n1">
            <a href="javascript:;" >美洲</a>
          </div>
          <div class="n2">
            <a href="javascript:;" >美国</a>
            <a href="javascript:;" >南美</a>
            <a
              href="javascript:;"
              
            >国家公园</a>
          </div>
        </div>
        <div class="right1">
          <i class="iconfont icon-youbian"></i>
        </div>
        <div class="nav_left1_hover">
          <div class="t1">
            <i class="iconfont icon-li"></i>美洲
          </div>
          <div class="t2">游玩方式</div>
          <div class="t3">
            <a href="javascript:;" >跟团游</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >一家一团</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >高端旅行</a>
            <span>|</span>
            <a href="javascript:;" >美洲邮轮</a>
          </div>
          <div class="line"></div>
          <div class="t2">热门玩法</div>
          <div class="t3">
            <a
              href="javascript:;"
              
              class="red"
            >美国东西海岸</a>
            <span>|</span>
            <a href="javascript:;" >加拿大东西海岸</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >国家公园</a>
            <span>|</span>
            <a href="javascript:;" >南美连线</a>
          </div>
          <div class="line"></div>
          <div class="t2">热门目的地</div>
          <div class="t3">
            <a href="javascript:;"  class="red">美国</a>
            <span>|</span>
            <a href="javascript:;" >加拿大</a>
            <span>|</span>
            <a href="javascript:;" >巴西</a>
            <span>|</span>
            <a href="javascript:;" >阿根廷</a>
            <span>|</span>
            <a href="javascript:;/"  class="red">墨西哥</a>
            <span>|</span>
            <a href="javascript:;" >古巴</a>
            <span>|</span>
            <a href="javascript:;" >秘鲁</a>
            <span>|</span>
            <a href="javascript:;" >乌拉圭</a>
            <span>|</span>
            <a href="javascript:;" >巴拿马</a>
            <span>|</span>
            <a href="javascript:;" >牙买加</a>
            <span>|</span>
            <a href="javascript:;" >阿拉斯加</a>
            <span>|</span>
            <a href="javascript:;" >哥斯达黎加</a>
            <span>|</span>
            <a href="javascript:;" >里约热内卢</a>
          </div>
          <div class="line"></div>
          <a href="javascript:;" >
            <img
              onerror="nofind()"
              src="../../../public/images/banner_img/ATT0001129237.jpg"
              style="width:472px;height:125px"
            />
          </a>
        </div>
        <div class="right_r">
          <div class="cover_line"></div>
        </div>
      </div>
      <div class="nav_left1">
        <div class="left">
          <img
            onerror="nofind()"
            src="../../../public/images/banner_img/ATT0000236512.png"
            style="width:20px;height:27px"
          />
        </div>
        <div class="right">
          <div class="n1">
            <a href="javascript:;" >大洋洲</a>
            <a href="javascript:;" >中东非</a>
          </div>
          <div class="n2">
            <a href="javascript:;" >澳大利亚</a>
            <a href="javascript:;" >新西兰</a>
            <a href="javascript:;" >埃及</a>
            <a href="javascript:;" >土耳其</a>
          </div>
        </div>
        <div class="right1">
          <i class="iconfont icon-youbian"></i>
        </div>
        <div class="nav_left1_hover">
          <div class="t1">
            <i class="iconfont icon-li"></i>大洋洲
          </div>
          <div class="t2">热门玩法</div>
          <div class="t3">
            <a href="javascript:;" >澳大利亚一地</a>
            <span>|</span>
            <a href="javascript:;"  class="red">新西兰南北岛</a>
            <span>|</span>
            <a href="javascript:;" >澳大利亚+凯恩斯+新西兰</a>
            <span>|</span>
            <a href="javascript:;" >澳大利亚+凯恩斯+墨尔本</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >大堡礁</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >澳新邮轮</a>
          </div>
          <div class="line"></div>
          <div class="t2">热门目的地</div>
          <div class="t3">
            <a href="javascript:;"  class="red">澳大利亚</a>
            <span>|</span>
            <a href="javascript:;" >凯恩斯</a>
            <span>|</span>
            <a href="javascript:;"  class="red">新西兰</a>
            <span>|</span>
            <a href="javascript:;"  class="red">墨尔本</a>
            <span>|</span>
            <a href="javascript:;" >悉尼</a>
            <span>|</span>
            <a href="javascript:;" >布里斯班</a>
            <span>|</span>
            <a href="javascript:;" >罗托鲁瓦</a>
            <span>|</span>
            <a href="javascript:;" >奥克兰</a>
            <span>|</span>
            <a href="javascript:;" >斐济</a>
          </div>
          <div class="line"></div>
          <div class="t1">
            <i class="iconfont icon-li"></i>中东非
          </div>
          <div class="t2">热门玩法</div>
          <div class="t3">
            <a
              href="javascript:;"
              
            >埃及+1国</a>
            <span>|</span>
            <a href="javascript:;" >土耳其+1国</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >南非+1国</a>
            <span>|</span>
            <a href="javascript:;" >突尼斯+摩洛哥</a>
            <span>|</span>
            <a href="javascript:;" >阿联酋一地</a>
            <span>|</span>
            <a href="javascript:;" >津巴布韦+博茨瓦纳+赞比亚</a>
          </div>
          <div class="line"></div>
          <div class="t2">热门目的地</div>
          <div class="t3">
            <a href="javascript:;" >南非</a>
            <span>|</span>
            <a href="javascript:;"  class="red">土耳其</a>
            <span>|</span>
            <a href="javascript:;"  class="red">埃及</a>
            <span>|</span>
            <a href="javascript:;" >迪拜</a>
            <span>|</span>
            <a href="javascript:;"  class="red">肯尼亚</a>
            <span>|</span>
            <a href="javascript:;" >以色列</a>
            <span>|</span>
            <a href="javascript:;" >约旦</a>
            <span>|</span>
            <a href="javascript:;"  class="red">摩洛哥</a>
            <span>|</span>
            <a href="javascript:;" >突尼斯</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >马达加斯加</a>
            <span>|</span>
            <a href="javascript:;" >纳米比亚</a>
          </div>
          <div class="line"></div>
          <a href="javascript:;" >
            <img
              onerror="nofind()"
              src="../../../public/images/banner_img/ATT0001049901.jpg"
              style="width:472px;height:125px"
            />
          </a>
        </div>
        <div class="right_r">
          <div class="cover_line"></div>
        </div>
      </div>
      <div class="nav_left1">
        <div class="left">
          <img
            onerror="nofind()"
            src="../../../public/images/banner_img/ATT0000455254.png"
            style="width:20px;height:27px"
          />
        </div>
        <div class="right">
          <div class="n1">
            <a href="javascript:;" >国内游</a>
          </div>
          <div class="n2">
            <a href="javascript:;" >西藏</a>
            <a href="javascript:;" >新疆</a>
            <a
              href="javascript:;"
              
            >长白山</a>
            <a href="javascript:;" >青海</a>
          </div>
        </div>
        <div class="right1">
          <i class="iconfont icon-youbian"></i>
        </div>
        <div class="nav_left1_hover">
          <div class="t1">
            <i class="iconfont icon-li"></i>国内游
          </div>
          <div class="t2">热门目的地</div>
          <div class="t3">
            <a
              href="javascript:;"
              
              class="red"
            >新疆</a>
            <span>|</span>
            <a href="javascript:;" >四川</a>
            <span>|</span>
            <a href="javascript:;" >云南</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >西藏林芝</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >甘肃青海宁夏</a>
          </div>
          <div class="line"></div>
          <div class="t2">热门景点</div>
          <div class="t3">
            <a
              href="javascript:;"
              
              class="red"
            >新疆喀纳斯</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >西藏布达拉宫</a>
            <span>|</span>
            <a href="javascript:;" >云南洱海</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >玉龙雪山</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >四川峨眉山</a>
          </div>
          <div class="line"></div>
          <div class="t2">华北/华东地区</div>
          <div class="t3">
            <a
              href="javascript:;"
              
              class="red"
            >北京</a>
            <span>|</span>
            <a href="javascript:;" >天津</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >河北</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >山西</a>
            <span>|</span>
            <a href="javascript:;" >山东</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >福建</a>
            <span>|</span>
            <a href="javascript:;" >华东五市</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >内蒙古</a>
          </div>
          <div class="line"></div>
          <div class="t2">华南/华中地区</div>
          <div class="t3">
            <a href="javascript:;" >广西</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >海南</a>
            <span>|</span>
            <a href="javascript:;" >湖北</a>
            <span>|</span>
            <a href="javascript:;" >湖南</a>
            <span>|</span>
            <a href="javascript:;" >桂林</a>
            <span>|</span>
            <a href="javascript:;" >三亚</a>
            <span>|</span>
            <a href="javascript:;" >恩施</a>
            <span>|</span>
            <a href="javascript:;" >长沙</a>
          </div>
          <div class="line"></div>
          <div class="t2">西南/西北地区</div>
          <div class="t3">
            <a href="javascript:;" >四川</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >新疆</a>
            <span>|</span>
            <a href="javascript:;" >云南</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >宁夏</a>
            <span>|</span>
            <a href="javascript:;" >贵州</a>
            <span>|</span>
            <a href="javascript:;" >甘肃</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >青海</a>
            <span>|</span>
            <a href="javascript:;" >西藏</a>
            <span>|</span>
            <a href="javascript:;" >陕西</a>
          </div>
          <div class="line"></div>
          <div class="t2">东北地区</div>
          <div class="t3">
            <a href="javascript:;" >辽宁</a>
            <span>|</span>
            <a href="javascript:;" >吉林</a>
            <span>|</span>
            <a
              href="javascript:;"
              class="red"
            >哈尔滨</a>
            <span>|</span>
            <a href="javascript:;" >大连</a>
            <span>|</span>
            <a href="javascript:;" >旅顺</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >长白山</a>
          </div>
          <div class="line"></div>
          <div class="t2">港澳地区</div>
          <div class="t3">
            <a href="javascript:;" >香港一地</a>
            <span>|</span>
            <a href="javascript:;" >港澳连线</a>
          </div>
          <div class="line"></div>
          <a href="javascript:;" >
            <img
              onerror="nofind()"
              src="../../../public/images/banner_img/ATT0001049904.jpg"
              style="width:472px;height:125px"
            />
          </a>
        </div>
        <div class="right_r">
          <div class="cover_line"></div>
        </div>
      </div>
      <div class="nav_left1">
        <div class="left">
          <img
            onerror="nofind()"
            src="../../../public/images/banner_img/ATT0000236518.png"
            style="width:20px;height:27px"
          />
        </div>
        <div class="right">
          <div class="n1">
            <a href="javascript:;" >金秋放价 满额立减</a>
          </div>
          <div class="n2">
            <a href="javascript:;" >立减￥300-￥1000/人</a>
          </div>
        </div>
        <div class="right1">
          <i class="iconfont icon-youbian"></i>
        </div>
        <div class="nav_left1_hover">
          <div class="t1">
            <i class="iconfont icon-li"></i>金秋放价 满额立减
          </div>
          <div class="t2">当季美景</div>
          <div class="t3">
            <a href="javascript:;" >风情俄罗斯</a>
            <span>|</span>
            <a href="javascript:;" >清凉北欧</a>
            <span>|</span>
            <a href="javascript:;" >阳光海岛</a>
            <span>|</span>
            <a href="javascript:;" >世界遗产</a>
          </div>
          <div class="line"></div>
          <div class="t2">小小旅行家</div>
          <div class="t3">
            <a href="javascript:;"  class="red">日本亲子</a>
            <span>|</span>
            <a href="javascript:;"  class="red">新加坡亲子</a>
            <span>|</span>
            <a href="javascript:;" >美洲亲子</a>
            <span>|</span>
            <a href="javascript:;"  class="red">主题乐园</a>
            <span>|</span>
            <a href="javascript:;" >亲近动物</a>
          </div>
          <div class="line"></div>
          <div class="t2">蜜月影像</div>
          <div class="t3">
            <a href="javascript:;"  class="red">巴厘岛</a>
            <span>|</span>
            <a href="javascript:;"  class="red">普吉岛</a>
            <span>|</span>
            <a href="javascript:;" >夏威夷</a>
            <span>|</span>
            <a href="javascript:;"  class="red">希腊</a>
          </div>
          <div class="line"></div>
          <div class="t2">小众目的地</div>
          <div class="t3">
            <a
              href="javascript:;"
              
            >哈萨克斯坦</a>
            <span>|</span>
            <a href="javascript:;" >阿塞拜疆</a>
            <span>|</span>
            <a href="javascript:;" >津巴布韦</a>
            <span>|</span>
            <a href="javascript:;" >哥斯达黎加</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >马达加斯加</a>
            <span>|</span>
            <a
              href="javascript:;"
              
            >南极/北极</a>
          </div>
          <div class="line"></div>
          <div class="t2">众信制造</div>
          <div class="t3">
            <a href="javascript:;" >一家一团</a>
            <span>|</span>
            <a
              href="javascript:;"
              
              class="red"
            >惠选智选</a>
            <span>|</span>
            <a href="javascript:;" >众信游学</a>
            <span>|</span>
            <a href="javascript:;" >奇迹旅行</a>
            <span>|</span>
            <a href="javascript:;"  class="red">优严选</a>
            <span>|</span>
            <a href="javascript:;" >定制旅行</a>
          </div>
          <div class="line"></div>
          <a href="javascript:;" >
            <img
              onerror="nofind()"
              src="../../../public/images/banner_img/ATT0001098102.jpg"
              style="width:472px;height:125px"
            />
          </a>
        </div>
        <div class="right_r">
          <div class="cover_line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      i: 0,
      time: "",
      lilist:["金秋放价 满减优惠","日本 立减￥300/人","欧洲 立减￥800/人","澳新 立减￥1000/人","大客户老友记","移民置业"]
    }
  },
  methods: {
    move(i) {
      this.i += i;
      if (this.i == 0 && i == -1) {
        this.i = this.lilist.length - 1;
      } else if (this.i == this.lilist.length && i == 1) {
        this.i = 0;
      }
    },
    moveTo(idx) {
      this.i = 0;
      this.move(idx);
    },
    Lea() {
      this.time = setInterval(() => {
        this.move(1);
      }, 3000);
    },
    Ent() {
      clearInterval(this.time);
    }
  }
}
</script>