<template>
  <div class="container">
    <div class="cmp-header">
      <div class="bg">
        <cmp-navbar class="nav-container" />
      </div>
      <cmp-searchbox class="search-box-container" />
    </div>
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
  }

  .cmp-header {
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 27px 0 rgba(0, 0, 0, .1);
  }

  .bg {
    width: 100%;
    background: #f8f8f8;
  }

  .nav-container {
    margin: 0 auto;
    width: 1205px;
    height: 40px;
    box-sizing: border-box;
    font-size: 12px;
    color: rgb(153, 153, 153);
  }

  .search-box-container {
    width: 1205px;
    padding-bottom: 35px;
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