<template>
  <div class="container">
    <cmp-navbar class="nav"/>
    <cmp-searchbox class="search-box"/>
  </div>
</template>

<script>
import navbar from "@/components/home/header/navbar/index.vue";
import searchBox from "@/components/home/header/searchBox/index.vue";

export default {
  components: {
    "cmp-navbar": navbar,
    "cmp-searchbox": searchBox
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: rgb(248, 248, 248);
  margin: 0 auto;
}
.nav {
  width: 1205px;
  height: 40px;
  box-sizing: border-box;
  font-size: 12px;
  color: rgb(153, 153, 153);
}

</style>

