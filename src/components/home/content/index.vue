<template>
  <div class="content-container">
    <cmp-menu-left></cmp-menu-left>
    <cmp-menu-right></cmp-menu-right>
  </div>
</template>

<script>
import menuLeft from "./menuLeft/index.vue";
import menuRight from "./menuRight/index.vue";

export default {
  components: {
    "cmp-menu-left": menuLeft,
    "cmp-menu-right": menuRight
  }
};
</script>

<style lang="scss" scoped>
</style>
