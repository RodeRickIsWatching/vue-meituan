<template>
  <div class="container">
    <div class="cmp-content clearfix">
      <cmp-content class="cmp-content-container"/>
    </div>
  </div>
</template>

<script>
import content from "@/components/home/content/index.vue";

export default {
  components: {
    "cmp-content": content
  }
};
</script>

<style lang="scss" scoped>
.cmp-content {
  .cmp-content-container {
    margin: 0 auto;
    width: 1190px;
    position: relative;
  }
}
</style>