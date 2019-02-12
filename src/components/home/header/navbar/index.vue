<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col :span="7" class="left-nav">
        <cmp-left/>
      </el-col>
      <el-col :span="7" class="right-nav">
        <cmp-right/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import leftNav from "./leftNav.vue";
import rightNav from "./rightNav.vue";
export default {
  components: {
    "cmp-left": leftNav,
    "cmp-right": rightNav
  }
};
</script>

<style lang="scss" scoped>
.container{
  height: 40px;
}
.left-nav{
  line-height: 40px;
}
.right-nav{
  line-height: 40px;
  padding-right: 13px;
}
</style>

