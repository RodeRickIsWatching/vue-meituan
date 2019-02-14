<template>
  <div>
    <div class="price-info" :style="fontColor">
      <span class="unit">￥</span>
      <span class="current-price">{{price.currentPrice}}</span>
      <span class="old-price" v-if="price.oldPrice">门市价￥{{price.oldPrice}}</span>
      <span class="average-price" v-if="price.average">/人均</span>
      <span class="more-price" v-if="price.more">起</span>
    </div>
    <div class="address-info">{{address}}</div>
  </div>
</template>

<script>
export default {
  props: {
    address: String,
    price: Object,
    fontColor: {
      type: String,
      default: "color: rgb(255, 102, 0);"
    }
  }
};
</script>
<style lang='scss' scoped>
.unit {
  font-size: 14px;
  font-weight: 500;
}
.current-price {
  font-size: 22px;
  letter-spacing: -0.8px;
}
.old-price {
  color: rgb(153, 153, 153);
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 4px;
}
.average-price {
  font-size: 12px;
  letter-spacing: -0.6px;
}
.more-price {
  font-size: 12px;
  margin-left: 4px;
  font-weight: 700;
}
.address-info {
  font-size: 12px;
  color: rgb(153, 153, 153);
  float: right;
  margin-top: 10px;
}
</style>