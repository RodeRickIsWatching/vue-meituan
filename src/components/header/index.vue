<template>
  <div>
    <div class="bg">
      <cmp-navbar class="cmp-nav"/>
    </div>
    <cmp-searchbox class="cmp-search-box"/>
  </div>
</template>

<script>
import navbar from "./navbar/index.vue";
import searchBox from "./searchBox/index.vue";

export default {
  components: {
    "cmp-navbar": navbar,
    "cmp-searchbox": searchBox
  }
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  background: #f8f8f8;
}

.cmp-nav {
  margin: 0 auto;
  width: 1205px;
  height: 40px;
  box-sizing: border-box;
  font-size: 12px;
  color: rgb(153, 153, 153);
}

.cmp-search-box {
  width: 1205px;
  // padding-bottom: 35px;
  margin: 0 auto;

  &::after {
    content: " ";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
}
</style>
