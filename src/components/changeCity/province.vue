<template>
  <div>
    <div class="choose-by-province">
      <span class="head-title">按省份选择:</span>
      <div class="choose-container">
        <div class="by-province" @click.capture="onclickProvince" ref="provinceContainer">
          <span class="default">{{nowProvince}}</span>
          <i class="el-icon-caret-bottom"></i>
          <div class="menu clearfix" v-show="ifShowProvince">
            <span class="default-title">省份</span>
            <div class="list clearfix">
              <div class="item" v-for="item in provinceObj">
                <div
                  v-for="item2 in item"
                  class="choice"
                  @click="onclickProvinceItem(item2)"
                  :class="{active:item2==nowProvince}"
                >{{item2}}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="by-city"
          ref="cityContainer"
          :class="{ allow: ifChoosedProvince }"
          @click.capture="onclickCity"
        >
          <span class="default">{{nowCity}}</span>
          <i class="el-icon-caret-bottom"></i>
          <div class="city-menu clearfix" v-show="ifShowCity">
            <span class="default-title">城市</span>
            <div class="city-list clearfix">
              <div class="city-item" v-for="item in relatedCityObj">
                <router-link
                 :to="{name:'home',params: {cityName: item2.name}}"
                  v-for="item2 in item"
                  class="city-choice"
                  @click="onclickCityItem(item2.name)"
                  :class="{active:item2.name==nowCity}"
                >{{item2.name}}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <cmp-search-bar :getSearchObj="getSearchObj" class="cmp-search-bar"/>
  </div>
</template>

<script>
import searchBar from "./searchBar.vue";

export default {
  components: {
    "cmp-search-bar": searchBar
  },
  props: {
    provinceObj: Object,
    relatedCityObj: Object,
    getSearchObj: Object
  },
  data() {
    return {
      ifShowCity: false,
      ifShowProvince: false,
      ifChoosedProvince: false,
      nowProvince: "省份",
      nowCity: "城市"
    };
  },
  methods: {
    onclickProvince() {
      this.ifShowProvince = true;
      this.ifShowCity = false;
      document.onclick = e => {
        let pathArr = e.path;
        let target = this.$refs.provinceContainer;
        let flag = pathArr.includes(target);
        if (!flag) {
          this.ifShowProvince = false;
        }
      };
    },
    onclickProvinceItem(_name) {
      this.nowProvince = _name;
      console.log(this._data);
      this.ifShowProvince = false;
      this.ifChoosedProvince = true;
      this.ifShowCity = true;
      this.$emit("getRelatedCity", _name);
    },
    onclickCity(e) {
      let _classArr = Array.from(e.currentTarget.classList);
      // 判断是否允许按下，有类名allow表示允许
      if (_classArr.includes("allow")) {
        this.ifShowCity = true;
        this.ifShowProvince = false;
        document.onclick = e => {
          let pathArr = e.path;
          let target = this.$refs.cityContainer;
          let flag = pathArr.includes(target);
          if (!flag) {
            this.ifShowCity = false;
          }
        };
      }
    },
    onclickCityItem(_name) {
      this.nowCity = _name;
      this.ifShowCity = false;
    }
  }
};
</script>
<style lang='scss' scoped>
.choose-by-province {
  display: inline-block;
  vertical-align: middle;
  .head-title {
    font-size: 16px;
    color: rgb(51, 51, 51);
    font-weight: 500;
    vertical-align: top;
    display: inline-block;
    vertical-align: middle;
  }
  .choose-container {
    display: inline-block;
    .by-province {
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid rgb(229, 229, 229);
      margin: 0 10px 0 20px;
      padding: 0 10px;
      vertical-align: middle;
      display: inline-flex;
      width: 150px;
      height: 40px;
      position: relative;
      font-size: 14px;
      color: rgb(102, 102, 102);
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
    }
    .by-city {
      cursor: not-allowed;
      border-radius: 4px;
      border: 1px solid rgb(229, 229, 229);
      margin: 0 10px 0 20px;
      padding: 0 10px;
      vertical-align: middle;
      display: inline-flex;
      width: 150px;
      height: 40px;
      position: relative;
      font-size: 14px;
      color: rgb(102, 102, 102);
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
    }
    i {
      display: inline-block;
      font-size: 12px;
      color: rgb(102, 102, 102);
      height: 10px;
    }
    .default-title {
      display: inline-block;
      font-size: 16px;
      color: rgb(204, 204, 204);
      margin-bottom: 11px;
    }
    .menu {
      // display: none;
      position: absolute;
      cursor: default;
      top: 45px;
      left: 0;
      width: 264px;
      height: 375px;
      padding: 20px 0 20px 15px;
      box-sizing: border-box;
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(229, 229, 229);
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      .list {
        .item {
          float: left;
          .choice {
            display: inline-block;
            cursor: pointer;
            font-size: 12px;
            color: rgb(102, 102, 102);
            display: table;
            box-sizing: border-box;
            min-width: 40px;
            height: 20px;
            padding: 1px 8px;
            margin: 4px 38px 0px 0;
            line-height: 20px;
          }
        }
      }
    }
    .city-menu {
      // display: none;
      position: absolute;
      cursor: default;
      top: 45px;
      left: 0;
      height: 375px;
      padding: 20px 0 20px 15px;
      box-sizing: border-box;
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(229, 229, 229);
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      .city-list {
        display: table-row;
        .city-item {
          display: table-cell;
          .city-choice {
            cursor: pointer;
            font-size: 12px;
            color: rgb(102, 102, 102);
            display: inline-block;
            box-sizing: border-box;
            min-width: 40px;
            height: 20px;
            padding: 1px 8px;
            margin: 4px 38px 0px 0;
            line-height: 20px;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
.cmp-search-bar {
  margin-left: 40px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.allow {
  cursor: pointer !important;
}
.active {
  background: rgb(19, 209, 190) !important;
  border-radius: 10px !important;
  color: rgb(255, 255, 255) !important;
}
.cmp-search-bar {
  margin-left: 40px;
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
}
</style>