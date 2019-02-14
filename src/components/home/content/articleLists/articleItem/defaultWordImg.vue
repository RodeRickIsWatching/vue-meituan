<template>
  <div>
    <div v-for="(item,index) in des" v-show="index==nowKey">
      <template v-for="(item2,index2) in item">
        <router-link to class="item-card clearfix">
          <div class="head-img">
            <img :src="item2.image" class="image">
            <img :src="item2.image2" v-if="item2.image2" class="image2">
          </div>
          <div class="des">
            <div class="title">{{item2.title}}</div>
            <div class="score-container" v-if="item2.score">
              <cmp-star :score="item2.score"/>
            </div>
            <div class="sub-title" v-if="item2.subTitle">{{item2.subTitle}}</div>
            <div class="sub-tag clearfix" v-if="item2.subTag">
              <cmp-tag :subTag="item2.subTag"/>
            </div>
            <div class="sub-info" v-if="item2.subInfo">
              <span v-for="item in item2.subInfo">{{item}}</span>
            </div>
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
import tag from "./tag.vue";

export default {
  components: {
    "cmp-bottom": bottom,
    "cmp-star": star,
    "cmp-tag": tag
  },
  props: ["des", "nowKey"],
  methods: {},
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.item-card {
  width: 33.3%;
  height: 314px;
  padding: 10px;
  box-sizing: border-box;
  float: left;
  background: rgb(255, 255, 255);
  transition: background-color 0.5s;
  &:hover {
    background: rgba(100, 100, 100, 0.1);
  }
  .head-img {
    position: relative;
    max-width: 100%;
    height: 208px;
    margin-bottom: 11px;
    cursor: pointer;
    .image {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
    .image2 {
      border: 2px solid rgb(255, 255, 255);
      height: 48px;
      width: 48px;
      position: absolute;
      bottom: -12px;
      right: 15px;
      z-index: 9;
      border-radius: 40px;
    }
  }
  .des {
    text-align: left;
    .title {
      font-size: 16px;
      color: rgb(34, 34, 34);
      height: 22px;
      line-height: 22px;
      margin-bottom: 8px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    .score-container {
    }
    .sub-title {
      font-size: 12px;
      color: rgb(153, 153, 153);
      line-height: 18px;
      height: 18px;
      margin-bottom: 7px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sub-tag {
      font-size: 12px;
      color: rgb(153, 153, 153);
      height: 20px;
      overflow: hidden;
      margin-bottom: 5px;
    }
    .sub-info {
      font-size: 12px;
      color: rgb(153, 153, 153);
      text-align: left;
      margin-bottom: 5px;
    }
    .bottom-info {
      height: 27px;
      overflow: hidden;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
}
</style>