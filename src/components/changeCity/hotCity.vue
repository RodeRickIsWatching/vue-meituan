<template>
  <div>
    <span>热门城市：</span>
    <div v-for="item in hotCityArr" class="hot-city-container">
      <router-link :to="{name:'home',params: {cityName: item.name}}" class="hot-city-item">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hotCityArr"]
};
</script>
<style lang='scss' scoped>
.hot-city-container {
  max-width: 900px;
  font-size: 14px;
  vertical-align: top;
  display: inline-block;
  margin-top: 2px;
  a {
    margin: 0 20px;
    color: rgb(102, 102, 102);
    display: inline-block;
    &:hover {
      color: rgb(49, 187, 172);
    }
  }
}
</style>