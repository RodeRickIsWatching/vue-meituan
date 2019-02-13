<template>
  <div class="menu-right-container">
    <div class="header-links">
      <router-link to v-for="(item) in linkArr">{{item}}</router-link>
    </div>
    <div class="banner1 clearfix">
      <cmp-banner1></cmp-banner1>
    </div>
    <div class="banner2 clearfix">
      <cmp-banner2></cmp-banner2>
    </div>
  </div>
</template>

<script>
import banner1 from "./banner1.vue";
import banner2 from "./banner2.vue";

export default {
  components: {
    "cmp-banner1": banner1,
    "cmp-banner2": banner2
  },
  data() {
    return {
      linkArr: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿／公寓",
        "商家入驻",
        "美团公益"
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.menu-right-container {
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
  .header-links {
    position: absolute;
    top: -45px;
    left: 20px;
    a {
      color: rgb(34, 34, 34);
      font-weight: 700;
      font-size: 16px;
      margin: 0 20px;
      cursor: pointer;
      position: relative;
    }
  }
}


</style>
