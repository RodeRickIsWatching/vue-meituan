<template>
  <div class="cmp-right-nav">
    <ul class="header-nav-first">
      <li v-for="(item,index) in msg" :class="{'has-child': item.length>1}">
        <router-link to>{{item[0]}}</router-link>
        <ul
          class="header-nav-secondary"
          :class="{'header-nav-my':index==0,'header-nav-merchant':index==2,'header-nav-site':index==3}"
        >
          <li v-for="(item2,index2) in item" v-if="index2!=0">
            <template v-if="typeof(item2)!='object'">
              <router-link to>{{item2}}</router-link>
            </template>
            <dl
              v-else
              v-for="(item3,index3) in item2"
              class="header-nav-third"
              :class="{'header-jiulv':index3=='酒店旅游','header-food':index3=='吃美食','header-movie':index3=='看电影'}"
            >
              <dt>{{index3}}</dt>
              <dd v-for="(item4) in item3">
                <router-link to>{{item4}}</router-link>
              </dd>
            </dl>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: [
        ["我的美团", "我的订单", "我的收藏", "抵用券"],
        ["手机APP"],
        ["商家中心", "登录商家中心", "美团智能收银"],
        [
          "网站导航",
          {
            酒店旅游: [
              "国际机票",
              "公寓",
              "国际机票",
              "公寓",
              "国际机票",
              "公寓"
            ]
          },
          { 吃美食: ["烤鱼", "烧烤", "烤鱼", "烧烤"] },
          { 看电影: ["热映电影", "热门影院"] }
        ]
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.cmp-right-nav {
  float: right;
  a {
    color: rgb(153, 153, 153);
    &:hover {
      color: rgb(49, 187, 172);
    }
  }
}

.header-nav-first > li {
  float: left;
  padding: 0px 14px;
  box-sizing: border-box;
  border-left: 1px solid rgba(0, 0, 0, 0);
  border-right: 1px solid rgba(0, 0, 0, 0);
  position: relative;
}

.header-nav-secondary {
  display: none;
  width: 100%;
  position: absolute;
  border: 1px solid rgb(229, 229, 229);
  background: rgb(255, 255, 255);
  text-align: center;
  right: -1px;
  z-index: 1000;
  top: 95%;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: content-box;
  a {
    line-height: 35px;
  }
  &::after {
    content: "";
    background: rgb(255, 255, 255);
    width: 76px;
    height: 3px;
    position: absolute;
    top: -2px;
    right: 0;
  }
}

.header-nav-my {
  width: 100%;
}
.header-nav-merchant {
  width: 140%;
  border-top-left-radius: 4px;
}
.header-nav-site {
  width: 1200px;
  box-sizing: border-box;
  border-top-left-radius: 4px;
  padding: 30px 36px 36px 47px;
}

.header-nav-third {
  float: left;
  margin-right: 47px;
  dt {
    margin-bottom: 20px;
    font-size: 14px;
    color: rgb(49, 187, 172);
  }
  a {
    display: inline;
    padding: 5px 0;
  }
}

.header-jiulv {
  width: 234px;
  dd {
    font-size: 12px;
    width: 33%;
    text-align: center;
    float: left;
  }
}
.header-food {
  width: 156px;
  dd {
    font-size: 12px;
    width: 50%;
    text-align: center;
    float: left;
  }
}
.header-movie {
  width: 90px;
}

.header-nav-first > li > a:hover {
  color: rgb(49, 187, 172);
}

.has-child:hover {
  background-color: rgb(255, 255, 255);
  border-color: rgb(229, 229, 229);
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
}

.has-child:hover .header-nav-secondary {
  display: block;
}
</style>

