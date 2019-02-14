<template>
  <div>
    <div v-for="(item,index) in subTag">
      <div class="tag-item">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["subTag"]
};
</script>
<style lang='scss' scoped>
.tag-item {
  height: 18px;
  line-height: 18px;
  text-align: center;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 2px;
  float: left;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 0 3px;
}
</style>