<template>
  <div class="content-container">
    <div class="catalog clearfix">
      <cmp-menu-left></cmp-menu-left>
      <cmp-menu-right></cmp-menu-right>
    </div>
    <template v-for="(item, index) in headLineArr">
      <div class="article-list clearfix">
        <cmp-article-list :headLine="item" :headLineDes="headLineDesArr[index]"></cmp-article-list>
      </div>
    </template>
  </div>
</template>

<script>
import menuLeft from "./menuLeft/index.vue";
import menuRight from "./menuRight/index.vue";
import articleList from "./articleLists/index.vue";

export default {
  // props:["nowCity"],
  components: {
    "cmp-menu-left": menuLeft,
    "cmp-menu-right": menuRight,
    "cmp-article-list": articleList
  },
  data() {
    return {
      headLineArr: [
        {
          title: "有格调",
          items: {
            all: "全部",
            food: "约会聚餐",
            spa: "丽人SPA",
            movie: "电影演出",
            travel: "品质出游"
          },
          bgColor: {
            background:
              "linear-gradient(to right, rgb(190, 164, 116) 3%, rgb(194, 176, 142) 100%) rgb(190, 164, 116) "
          }
        },
        {
          title: "猫眼电影",
          items: {
            now: "正在热映",
            soon: "即将上映"
          },
          bgColor: {
            background:
              "linear-gradient(to right, rgb(250, 60, 104) 3%, rgb(254, 70, 77) 97%) rgb(250, 60, 104)"
          }
        },
        {
          title: "推荐民宿",
          items: {
            city1: "苏州",
            city2: "杭州"
          },
          bgColor: {
            background:
              "linear-gradient(to right, rgb(243, 182, 74) 3%, rgb(242, 197, 69) 97%) rgb(243, 182, 74)"
          }
        },
        {
          title: "猜你喜欢",
          items: {
            all: "为你甄选最合适的"
          },
          bgColor: {
            background:
              "linear-gradient(to right, rgb(18, 210, 198) 3%, rgb(14, 190, 212) 97%) rgb(18, 210, 198)"
          }
        }
      ],
      headLineDesArr: [
        {
          type: 0,
          items: {
            all: [
              {
                image:
                  "https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
                title: "木北造型",
                address: "崇文门新世界店",
                subTitle: "木北造型（崇文门新世界店）",
                price: 398
              },
              {
                image:
                  "http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@460w_260h_1e_1c",
                title: "COSTA COFFEE（东方新天地店）",
                address: "东方新天地",
                subTitle: "玫瑰黑巧茶拿铁1份",
                price: 11,
                average: true
              },
              {
                image:
                  "http://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@460w_260h_1e_1c",
                title: "祈年八号中餐厅",
                address: "崇文门新世界",
                subTitle: "单人点心自助午餐",
                price: 98,
                oldPrice: 158
              },
              {
                image:
                  "https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
                title: "木北造型",
                address: "崇文门新世界店",
                subTitle: "木北造型（崇文门新世界店）",
                price: 398,
                more: true
              },
              {
                image:
                  "https://p0.meituan.net/tdchotel/da614ece14793e0309ca4aa5920b57591648858.jpg@368w_208h_1e_1c",
                title: "上海外滩中南海滨酒店",
                subTag: ["酒店套餐", "亲子场景酒店", "亲子酒店", "含早"],
                price: 578,
                more: true
              }
            ],
            food: [
              {
                image:
                  "http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@460w_260h_1e_1c",
                title: "COSTA COFFEE（东方新天地店）",
                address: "东方新天地",
                subTitle: "玫瑰黑巧茶拿铁1份",
                price: 11
              },
              {
                image:
                  "http://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@460w_260h_1e_1c",
                title: "祈年八号中餐厅",
                address: "崇文门新世界",
                subTitle: "单人点心自助午餐",
                price: 98
              }
            ],
            spa: [
              {
                image:
                  "https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
                title: "木北造型",
                address: "崇文门新世界店",
                subTitle: "木北造型（崇文门新世界店）",
                price: 398
              }
            ],
            movie: [],
            travel: []
          }
        },
        {
          type: 1,
          items: {
            now: [
              {
                image:
                  "https://p1.meituan.net/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg@214w_297h_1e_1c",
                movieType:
                  "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
                title: "流浪地球",
                status: "onShow",
                otherInfo: "9.3"
              },
              {
                image:
                  "//p0.meituan.net/movie/caa49433185fd62b4384e3ad195ec1541309089.jpg@214w_297h_1e_1c",
                title: "一吻定情",
                status: "toBeShow",
                otherInfo: "81946"
              },
              {
                image:
                  "https://p0.meituan.net/movie/6a21e35ad7106c60967954b165c09b92915222.jpg@214w_297h_1e_1c",
                movieType:
                  "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
                title: "疯狂的外星人",
                status: "onShow",
                otherInfo: "8.3"
              },
              {
                image:
                  "https://p1.meituan.net/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg@214w_297h_1e_1c",
                movieType:
                  "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
                title: "流浪地球",
                status: "onShow",
                otherInfo: "9.3"
              },
              {
                image:
                  "//p0.meituan.net/movie/caa49433185fd62b4384e3ad195ec1541309089.jpg@214w_297h_1e_1c",
                title: "一吻定情",
                status: "toBeShow",
                otherInfo: "81946"
              },
              {
                image:
                  "https://p0.meituan.net/movie/6a21e35ad7106c60967954b165c09b92915222.jpg@214w_297h_1e_1c",
                movieType:
                  "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
                title: "疯狂的外星人",
                status: "onShow",
                otherInfo: "8.3"
              },
              {
                image:
                  "https://p1.meituan.net/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg@214w_297h_1e_1c",
                movieType:
                  "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
                title: "流浪地球",
                status: "onShow",
                otherInfo: "9.3"
              },
              {
                image:
                  "//p0.meituan.net/movie/caa49433185fd62b4384e3ad195ec1541309089.jpg@214w_297h_1e_1c",
                title: "一吻定情",
                status: "toBeShow",
                otherInfo: "81946"
              },
              {
                image:
                  "https://p0.meituan.net/movie/6a21e35ad7106c60967954b165c09b92915222.jpg@214w_297h_1e_1c",
                movieType:
                  "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
                title: "疯狂的外星人",
                status: "onShow",
                otherInfo: "8.3"
              },
              {
                image:
                  "https://p1.meituan.net/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg@214w_297h_1e_1c",
                movieType:
                  "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
                title: "流浪地球",
                status: "onShow",
                otherInfo: "9.3"
              }
            ],
            soon: []
          }
        },
        {
          type: 0,
          items: {
            city1: [
              {
                image:
                  "https://img.meituan.net/phoenix/5c188a3d575b224aec12fac208cc0ab9473156.jpg@740w_416h_1e_1c",
                image2:
                  "https://img.meituan.net/avatar/670c090d4de65effc504de114ed1741427515.jpg@200w_200h_1e_1c",
                title:
                  "火车站旁边精简一居室万达广场4公里内山塘街拙政园平江路苏州博物馆 体育场 近地铁",
                subInfo: ["居室·", "可住2人 | ", "万达广场"],
                price: 239
              },
              {
                image:
                  "http://p0.meituan.net/iphoenix/8c4f96304521bfc89126569d144adb10318460.jpg@740w_416h_1e_1c",
                image2:
                  "http://p0.meituan.net/phoenix/ef43005d01f53abb0f6263efea5b732b190622.jpg@200w_200h_1e_1c",
                title: "普通大床房-苏州苏舍平江路观前街店",
                subInfo: ["整套1居室·", "可住2人 | ", "观前街地区（市中心）"],
                price: 109
              },
              {
                image:
                  "https://img.meituan.net/phoenix/fc923d437134352375cb6d17863363c9498341.jpg@740w_416h_1e_1c",
                image2:
                  "https://img.meituan.net/avatar/6de0f77741c959d98e3c29fa71c03d3513599.jpg@200w_200h_1e_1c",
                title:
                  "观前街一号整套两室阳光大床房，平江路，拙政园，博物馆步行。楼下观前街。地铁300米。可做饭",
                subInfo: ["整套2居室·", "可住5人 | ", "观前街地区（市中心）"],
                price: 397
              }
            ],
            city2: []
          }
        },
        {
          type: 2,
          items: {
            all: [
              {
                image:
                  "https://p1.meituan.net/bbia/01fa8981759bf069e150bee05c43fe3159913.jpg@214w_120h_1e_1c",
                title: "华莱士",
                score: 4.6,
                commets: 606,
                subTitle: "华莱士（朱家角店）",
                price: 3.5,
                more: true
              },
              {
                image:
                  "https://p1.meituan.net/msmerchant/b7690a5163c9844763da0cf2028e5057354262.jpg@214w_120h_1e_1c",
                title: "九鼎轩脆毛肚火锅（虹梅路店）",
                score: 5,
                commets: 130,
                subTitle: "虹梅路",
                price: 85.0,
                more: true
              },
              {
                image:
                  "https://p0.meituan.net/joymerchant/-9216000489115943161-1220821-1541946423971.jpg@214w_120h_1e_1c",
                title: "绿岛汗蒸洗浴",
                score: 4,
                commets: 7509,
                subTitle: "大宁国际",
                price: 29.0,
                more: true
              },
              {
                image:
                  "https://p1.meituan.net/msmerchant/f159d4bef544c516a48043eed389e1e8391710.jpg@214w_120h_1e_1c",
                title: "蜀公馆成都老火锅（金山万达店）",
                score: 3.3,
                commets: 1322,
                subTitle: "万达广场",
                price: 62.0,
                more: true
              },
              {
                image:
                  "https://p1.meituan.net/bbia/01fa8981759bf069e150bee05c43fe3159913.jpg@214w_120h_1e_1c",
                title: "华莱士",
                score: 4.6,
                commets: 606,
                subTitle: "华莱士（朱家角店）",
                price: 3.5,
                more: true
              }
            ]
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.article-list {
  margin: 40px auto;
}
</style>
