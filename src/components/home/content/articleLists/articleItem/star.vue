<template>
  <div class="star-container">
    <ul class="empty-star-icon">
      <li v-for="item in 5" class="empty-star">
        <i class="el-icon-star-on"></i>
      </li>
    </ul>
    <ul class="filled-star-icon" :style="{width:renderScore}">
      <li v-for="item in 5" class="filled-star">
        <i class="el-icon-star-on"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["score"],
  computed: {
    renderScore() {
      return `${(this.score / 5) * 100}%`;
    }
  }
};
</script>
<style lang='scss' scoped>
.star-container {
  position: relative;
  width: 100px;
  display: inline-block;
}
.empty-star-icon {
  color: rgb(195, 195, 195);
}
.filled-star-icon {
  position: absolute;
  top: 0;
  //   float: left;
  color: rgb(255, 153, 0);
  overflow: hidden;
  white-space: nowrap;
}
li {
  //   float: left;
  display: inline-block;
  padding: 0 2px;
}
</style>