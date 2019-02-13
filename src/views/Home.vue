<template>
  <div class="container">
    <div class="cmp-header">
      <cmp-header class="cmp-header-container"/>
    </div>
    <div class="cmp-content clearfix">
      <cmp-content class="cmp-content-container"/>
    </div>
    <div class="cmp-footer">
      <cmp-footer class="cmp-footer-container"/>
    </div>
  </div>
</template>

<script>
import header from "@/components/home/header/index.vue";
import footer from "@/components/home/footer/index.vue";
import content from "@/components/home/content/index.vue";

export default {
  components: {
    "cmp-footer": footer,
    "cmp-header": header,
    "cmp-content": content
  }
};
</script>

<style lang="scss" scoped>
.clearfix::before,
.clearfix::after {
  content: " ";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}

.cmp-header {
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
.cmp-content {
  .cmp-content-container {
    margin: 0 auto;
    width: 1190px;
    position: relative;
  }
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