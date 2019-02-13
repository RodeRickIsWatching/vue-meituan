<template>
  <div class="menu-left-container">
    <div class="menu-title">
      <span>全部分类</span>
    </div>
    <div class="menu-item" ref="menuItem">
      <ul>
        <li
          v-for="(item, index) in menuList"
          class="menu-item-title"
          @mouseover="onMouseOver(index)"
        >
          <i class="el-icon-star-on"></i>
          <span>
            <router-link to>{{item.name}}</router-link>
          </span>
          <i class="more-icon"></i>
        </li>
      </ul>
    </div>
    <template v-for="(item, index) in menuList">
      <div class="menu-item-2" v-show="index==nowIndex" ref="menuItem2">
        <div class="menu-detail" v-if="item.items" v-for="(item2) in item.items">
          <div class="detail-title">
            <router-link to>{{item2.title}}</router-link>
            <router-link to>
              更多
              <i class="more-icon"></i>
            </router-link>
          </div>
          <div class="detail-item">
            <router-link to v-if="item2.items" v-for="(item3) in item2.items">{{item3}}</router-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  methods: {
    onMouseOver(index) {
      this.nowIndex = index;
      let touchArea = this.$refs.menuItem;
      let touchArea2 = this.$refs.menuItem2;
      document.onmousemove = e => {
        let target = e.target;
        let pathArr = e.path;
        if (
          !pathArr.includes(touchArea2[index]) &&
          !pathArr.includes(touchArea)
        ) {
          this.nowIndex = undefined;
        }
      };
    }
  },
  data() {
    return {
      nowIndex: undefined,
      menuList: [
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "takeout",

          name: "外卖",

          items: [
            {
              title: "外卖",

              items: ["美团外卖"]
            }
          ]
        },
        {
          type: "movie",

          name: "猫眼电影",

          items: [
            {
              title: "热映电影",

              items: ["流浪地球"]
            },
            {
              title: "热门影院",

              items: [
                "SFC上影影城",
                "万达影城",
                "大地影院",
                "百丽宫影城",
                "星美国际影城",
                "橙天嘉禾影城",
                "横店电影城",
                "CGV影城",
                "大光明电影院",
                "金逸影城"
              ]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "food",

          name: "美食",

          items: [
            {
              title: "美食",

              items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.more-icon {
  width: 4px;
  height: 4px;
  border-bottom: 1px solid rgb(255, 255, 255);
  border-right: 1px solid rgb(255, 255, 255);
  transform: rotate(-45deg);
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
.menu-left-container {
  width: 230px;
  height: 475px;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  float: left;
  margin-top: -50px;
  color: rgb(255, 255, 255);
  //   background: rgba(2, 181, 157, 0.85);
  background: linear-gradient(
    -180deg,
    rgba(2, 181, 157, 0.85) 2%,
    rgba(22, 146, 183, 0.85) 100%
  );
  .menu-title {
    height: 50px;
    padding-top: 15px;
    box-sizing: border-box;
    span {
      font-size: 16px;
      font-weight: 400;
      margin-left: 15px;
    }
  }
  .menu-item {
    ul {
      padding: 10px 0 8px;
      height: 425px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .menu-item-title {
        position: relative;
        box-sizing: border-box;
        padding: 2px 12px;
        // height: 26px;
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          i:nth-of-type(1) {
            color: rgba(255, 255, 255, 0.8);
          }
        }
        i:nth-of-type(1) {
          color: rgba(255, 255, 255, 0.2);
        }
        .more-icon {
          color: rbg(255, 255, 255);
          right: 13px;
        }
        span {
          display: inline-block;
          margin-left: 11px;
          a {
            font-size: 13px;
            line-height: 20px;
            height: 20px;
            color: rgb(255, 255, 255);
            cursor: pointer;
          }
        }
      }
    }
  }
}

.menu-item-2 {
  // display:none;
  position: absolute;
  top: 60px;
  left: 230px;
  width: 400px;
  height: 416px;
  background-color: rgb(255, 255, 255);
  z-index: 199;
  color: rgb(102, 102, 102);
  overflow: hidden;
  .menu-detail {
    padding: 0 30px;
    .detail-title {
      margin-top: 24px;
      height: 22px;
      line-height: 22px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgb(229, 229, 229);
      a:nth-of-type(1) {
        font-size: 16px;
        font-weight: 500;
        color: rgb(34, 34, 34);
        cursor: pointer;
        float: left;
      }
      a:nth-of-type(2) {
        font-size: 12px;
        color: rgb(153, 153, 153);
        font-weight: 400;
        float: right;
        margin-right: 6px;
        position: relative;
        cursor: pointer;
        .more-icon {
          right: -6px;
          border-color: rgb(153, 153, 153);
        }
      }
    }
    .detail-item {
      a {
        color: rgb(153, 153, 153);
        font-size: 12px;
        line-height: 15px;
        display: inline-block;
        margin-right: 16px;
        margin-top: 10px;
        cursor: pointer;
        &:hover {
          color: rgb(49, 187, 172);
        }
      }
    }
  }
}
</style>
