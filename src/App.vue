<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style src="@/assets/css/init.css" />

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
