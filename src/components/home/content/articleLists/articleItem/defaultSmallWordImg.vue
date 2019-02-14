<template>
  <div>
    <div to v-for="(item,index) in des" v-show="index==nowKey">
      <template v-for="(item2) in item">
        <router-link to class="item-card clearfix">
          <div class="head-img">
            <img :src="item2.image" class="image">
          </div>
          <div class="des">
            <div class="title">{{item2.title}}</div>
            <div class="score-container" v-if="item2.score">
              <cmp-star :score="item2.score"/>
            </div>
            <div class="sub-title" v-if="item2.subTitle">{{item2.subTitle}}</div>
            <div class="bottom-info">
              <cmp-bottom
                :address="item2.address"
                :price="{currentPrice: item2.price,average: item2.average,oldPrice: item2.oldPrice,more: item2.more}"
              />
            </div>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import bottom from "./bottom.vue";
import star from "./star.vue";
export default {
  components: {
    "cmp-bottom": bottom,
    "cmp-star": star
  },
  props: ["des", "nowKey"]
};
</script>
<style lang='scss' scoped>
.item-card {
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: middle;
  background: rgb(255, 255, 255);
  transition: background-color 0.5s;
  padding: 10px;
  &:hover {
    background: rgba(100, 100, 100, 0.1);
  }
  .head-img {
    height: 56.25%;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    .image {
      width: 100%;
      font-size: 0;
    }
  }
  .des {
    position: relative;
    margin-top: 5px;
    .title {
      font-size: 16px;
      line-height: 22px;
      width: 100%;
      height: 22px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .score-container {
      margin-top: 3px;
      height: 24px;
      line-height: 24px;
    }
    .sub-title {
      font-size: 12px;
      color: rgb(153, 153, 153);
      width: 100%;
      height: 18px;
      line-height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 4px;
    }
    .bottom-info {
      height: 28px;
      overflow: hidden;
      cursor: pointer;
      line-height: 28px;
    }
  }
}
</style>