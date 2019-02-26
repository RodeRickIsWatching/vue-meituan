<template>
  <div>
    <ul ref="menuContainer">
      <li class="title" @mouseover="onmouseover">
        全部分类
        <i class="el-icon-arrow-down" :class="{hovered:ifHovered}"></i>
      </li>
      <div class="menu-box" v-show="ifHovered">
        <li v-for="item in menuList" class="item">
          <a href>{{item.name}}</a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    onmouseover(e) {
      this.ifHovered = true;
      let target = this.$refs.menuContainer;
      document.onmousemove = e => {
        let pathArr = e.path;
        if (!pathArr.includes(target)) {
          this.ifHovered = false;
        }
      };
    }
  },
  data() {
    return {
      ifHovered: false,
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
<style lang='scss' scoped>
i {
  transition: all 0.2s linear;
}

.hovered {
  transform: rotateZ(-180deg);
}

ul {
  background: rgb(255, 255, 255);
  position: relative;
  bottom: 15px;
  display: inline-block;
  color: rgb(153, 153, 153);
  font-size: 12px;
  margin-left: 14px;
  border: 1px solid rgb(229, 229, 229);
  border-radius: 4px;
  .title {
    padding: 5px 4px 5px 4px;
    cursor: pointer;
  }
  .menu-box {
    position: absolute;
    z-index: 1000;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(229, 229, 229);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    left: -1px;
    padding: 15px 40px 12px 10px;
    li {
      line-height: 2.4;
      white-space: nowrap;
      a {
        color: rgb(102, 102, 102);
        padding: 0 6px;
        position: relative;
        &:hover {
          color: rgb(49, 187, 172);
        }
      }
    }
    &::after {
      content: "";
      background: rgb(255, 255, 255);
      width: 72px;
      height: 3px;
      position: absolute;
      top: -2px;
      left: 0;
    }
  }
}
</style>