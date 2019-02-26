<template>
  <div class="wrapper">
    <div class="cmp-header">
      <cmp-header class="cmp-header-container" :class="{ifHome:$route.path=='/'}"/>
    </div>

    <router-view></router-view>

    <div class="cmp-footer">
      <cmp-footer class="cmp-footer-container"/>
    </div>
  </div>
</template>

<script>
import header from "@/components/header/index.vue";
import footer from "@/components/footer/index.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    "cmp-footer": footer,
    "cmp-header": header
  },
  methods: {
    ...mapMutations("home", ["updateNowCity"])
  },
  updated() {
    if (this.$route.path == "/") {
      if (!this.$route.params.cityName) {
        this.updateNowCity("上海");
      } else {
        this.updateNowCity(this.$route.params.cityName);
      }
    }
  }
};
</script>

<style src="@/assets/css/init.css" />
<style src="@/assets/css/element-ui.css"/>


<style lang="scss" scoped>
.ifHome {
  padding-bottom: 35px;
}
.cmp-header {
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
.cmp-footer {
  display: block;
  margin-top: 40px;
  .cmp-footer-container {
    width: 1190px;
    margin: 0 auto;
    color: rgb(51, 51, 51);
    font-size: 12px;
    line-height: 2;
    box-sizing: border-box;
    text-align: left;
  }
}
</style>


<style>
:root,
body,
.wrapper {
  height: 100%;
  width: 100%;
  background: rgb(248, 248, 248);
}

.clearfix::before,
.clearfix::after {
  content: " ";
  overflow: hidden;
  display: block;
  height: 0;
  clear: both;
}
</style>
