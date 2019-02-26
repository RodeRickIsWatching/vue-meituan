<template>
  <div>
    <span>直接搜索：</span>
    <input type="text" @input="oninput($event.target.value)" placeholder="请输入城市中文或拼音">
    <div class="result-container" v-show="res.length>0">
      <div class="result-box">
        <router-link :to="{name:'home',params: {cityName: item}}" v-for="item in res">{{item}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    getSearchObj: Object
  },
  data() {
    return {
      res: []
    };
  },
  methods: {
    oninput(_val) {
      let arr = [];
      if (_val) {
        if (_val.charCodeAt() > 122) {
          // 汉字
          this.getSearchObj["str"].forEach((item, index) => {
            let reg = new RegExp(`^${_val}`, `g`);
            if (reg.test(item) && arr.length < 30) {
              arr.push(item);
            }
          });
        } else {
          // 拼音
          for (let i in this.getSearchObj["py"][_val[0]]) {
            let reg = new RegExp(`^${_val}`, `g`);
            if (reg.test(i) && arr.length < 30) {
              let str = this.getSearchObj["py"][_val[0]][i];
              arr.push(str);
            }
          }
        }
      }
      this.res = [...arr];
    }
  }
};
</script>
<style lang='scss' scoped>
input {
  padding-left: 10px;
  width: 220px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid rgb(229, 229, 229);
  margin-left: 10px;
  font-size: 14px;
  color: rgb(102, 102, 102);
  box-sizing: border-box;
}
.result-container {
  position: absolute;
  cursor: default;
  top: 47px;
  left: 90px;
  border-radius: 4px;
  .result-box {
    overflow-y: scroll;
    min-width: 150px;
    max-height: 375px;
    padding: 0 20px 0 15px;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(229, 229, 229);
    border-radius: 4px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    a {
      cursor: pointer;
      font-size: 12px;
      color: rgb(102, 102, 102);
      display: block;
      box-sizing: border-box;
      min-width: 40px;
      height: 20px;
      padding: 1px 8px;
      margin: 6px 38px 6px 0;
      white-space: nowrap;
    }
  }
}
</style>