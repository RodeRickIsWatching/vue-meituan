<template>
  <div class="container">
    <div class="logo-container">
      <img :src="imgSrc" alt>
    </div>
    <div class="search-box">
      <div class="input-container">
        <input class="input" v-model="input" placeholder="搜索商家或地点">
        <el-button class="button" icon="el-icon-search"/>
      </div>
      <div class="hot-word-search">
        <router-link to v-for="(item) in hotWord">{{item}}</router-link>
      </div>
      <div class="hot-word-suggested">
        <router-link to v-for="(item) in hotWord">{{item}}</router-link>
      </div>
    </div>
  </div>
</template>


<script>
// import img from "@/assets/logo.png";
export default {
  data() {
    return {
      input: "",
      imgSrc: require("@/assets/logo.png"),
      hotWord: [
        "上海迪士尼度假区",
        "上海海昌海洋公园",
        "上海野生动物园",
        "上海科技馆"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: rgb(255, 255, 255);
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
.search-box {
  float: left;
  padding-top: 28px;
  position: relative;
  .input-container {
    width: 550px;
    height: 40px;
    border: 1px solid rgb(19, 209, 190);
    background: rgb(255, 255, 255);
    border-radius: 4px;
    .input {
      border: none;
      line-height: 100%;
      box-sizing: border-box;
      display: inline-block !important;
      padding: 10px;
      font-size: 15px;
      height: 100%;
      background: 0 0;
      width: 84%;
      &::placeholder {
        color: rgb(139, 139, 139);
      }
    }
    .button {
      width: 16%;
      box-sizing: border-box;
      line-height: 100%;
      height: 100%;
      background: rgb(19, 209, 190);
      border: none;
      float: right;
      color: rgb(255, 255, 255);
      cursor: pointer;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
}
.logo-container {
  float: left;
  padding-top: 28px;
  padding-right: 60px;
  padding-bottom: 40px;
  font-size: 16px;
  min-width: 220px;
  height: 54px;
  box-sizing: content-box;
  img {
    width: 126px;
    height: 46px;
    border: 0;
    vertical-align: initial;
  }
}
</style>
