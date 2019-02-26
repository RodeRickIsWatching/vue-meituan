<template>
  <div class="cmp-left-nav">
    <div class="current-city">
      <i class="el-icon-location"/>
      <span>{{nowCity}}</span>
    </div>
    <div>
      <router-link to="/changeCity" class="change-city">切换城市</router-link>
    </div>
    <div class="near-citys">
      <template>[</template>
      <template v-if="nearCity[nowCity]">
        <router-link to class="city-guess" v-for="item in nearCity[nowCity]">{{item}}</router-link>
      </template>
      <router-link to class="city-guess" v-else v-for="item in others">{{item}}</router-link>
      <template>]</template>
    </div>
    <div class="user-entry">
      <cmp-status/>
    </div>
  </div>
</template>

<script>
import userStatus from "./userStatus.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("home", ["nowCity"])
  },
  data() {
    return {
      nearCity: {
        上海: ["彰化", "宜兰", "太仓"],
        北京: ["大厂回族自治县", "廊坊", "固安县"],
        广州: ["佛山", "顺德", "南沙"],
        深圳: ["东方", "基隆", "嘉义市"]
      },
      others: ["城市A", "城市B", "城市C"]
    };
  },
  components: {
    "cmp-status": userStatus
  }
};
</script>

<style lang="scss" scoped>
.cmp-left-nav {
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
a:hover {
  color: rgb(49, 187, 172);
}
</style>
