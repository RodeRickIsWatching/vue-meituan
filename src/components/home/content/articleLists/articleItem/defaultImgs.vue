<template>
  <div>
    <template v-for="(item,index) in des" v-if="index==nowKey">
      <el-carousel
        v-if="item.length>0"
        trigger="click"
        height="297px"
        indicator-position="outside"
        :autoplay="false"
      >
        <el-carousel-item v-for="(item2,index2) in carouselArr" class="movie-card-container">
          <div class="movie-card-box" v-for="(item3, index3) in item2">
            <router-link to>
              <img :src="item3.image">
              <img :src="item3.movieType" v-if="item3.movieType">
              <div class="movie-info">
                <div class="movie-score">
                  <span v-if="item3.status=='onShow'">观众评</span>
                  <span class="info">{{item3.otherInfo}}</span>
                  <span v-if="item3.status=='toBeShow'">人想看</span>
                </div>
                <div class="movie-name">{{item3.title}}</div>
                <div class="buy-btn">购票</div>
              </div>
            </router-link>
          </div>
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    carouselArr() {
      let tempArr = this.des[this.nowKey];
      let res = [
        tempArr.filter((item, index) => index < 5),
        tempArr.filter((item, index) => index > 4)
      ];
      return res;
    }
  },
  props: ["des", "nowKey"],
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.movie-card-container {
  margin: 0px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: inherit;
}
.movie-card-box {
  position: relative;
  margin-right: 19px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  img:first-child {
    border-radius: 4px;
    width: 100%;
    border: 0;
  }
  img:nth-of-type(2) {
    position: absolute;
    top: 10px;
    z-index: 99;
    left: -6px;
    height: 20px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    width: auto;
    border: 0;
    display: inline-block;
  }
}

.movie-info {
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0) 0,
    rgba(29, 45, 55, 0.8) 99%
  );
  .movie-score {
    font-size: 12px;
    color: rgb(255, 255, 255);
    text-align: left;
    margin-top: 48px;
    padding-left: 10px;
    font-weight: bold;
    .info {
      font-size: 16px;
      color: rgb(253, 152, 39);
      font-weight: bold;
    }
  }
  .movie-name {
    text-align: left;
    color: rgb(255, 255, 255);
    padding-left: 10px;
    font-size: 16px;
    white-space: nowrap;
    width: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
  }
  .buy-btn {
    background: rgb(255, 73, 73);
    border-radius: 100px;
    color: rgb(255, 255, 255);
    padding: 2px 12px 3px;
    font-size: 14px;
    position: relative;
    top: -24px;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
    float: right;
    right: 10px;
  }
}
</style>
