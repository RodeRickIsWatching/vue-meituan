<template>
  <div class="container">
    <div class="current-city">
      <i class="el-icon-location"/>
      <span>上海</span>
    </div>
    <div>
      <router-link to class="change-city">切换城市</router-link>
    </div>
    <div class="near-citys">
      [<router-link to class="city-guess">彰化</router-link>
      <router-link to class="city-guess">宜兰</router-link>
      <router-link to class="city-guess">太仓</router-link>]
    </div>
    <div class="user-entry">
      <!-- <router-link class="login-status" to="/login">立即登录</router-link>
      <router-link class="register" to="/register">注册</router-link>-->
      <cmp-status/>
    </div>
  </div>
</template>

<script>
import userStatus from "./userStatus.vue";
export default {
  components: {
    "cmp-status": userStatus
  }
};
</script>

<style lang="scss" scoped>
.container {
  float: left;
}
div {
  display: inline-block;
}
.change-city {
  background: rgb(244, 244, 244);
  border: 1px solid rgb(229, 229, 229);
  border-radius: 2px;
  color: rgb(102, 102, 102);
  margin: 0 4px;
  padding: 0 2px;
}
.city-guess {
  margin: 0 4px;
  color: rgb(153, 153, 153);
}
.user-entry {
  margin-left: 15px;
}
</style>
