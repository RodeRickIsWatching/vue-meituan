<template>
  <div>
    <div class="head-line" :style="headLine.bgColor">
      <ul class="clearfix">
        <template v-for="(item,index) in headLine">
          <li v-if="index=='title'">{{item}}</li>
          <li
            v-else-if="index=='items'"
            v-for="(item2,index2) in item"
            :class="{'active':nowIndex==index2}"
            @mouseover="onMouseOver(index2)"
          >{{item2}}</li>
        </template>
      </ul>
    </div>
    <div class="content-container clearfix">
      <!-- <template v-for="(item, index) in headLineDes"> -->
      <cmp-imgs v-if="headLineDes.type==1" :des="headLineDes.items" :nowKey="nowIndex"/>
      <cmp-word-img v-else-if="headLineDes.type==0" :des="headLineDes.items" :nowKey="nowIndex"/>
      <cmp-small-word-img
        v-else-if="headLineDes.type==2"
        :des="headLineDes.items"
        :nowKey="nowIndex"
      ></cmp-small-word-img>
      <!-- </template> -->
    </div>
  </div>
</template>

<script>
import imgs from "./articleItem/defaultImgs.vue";
import wordImg from "./articleItem/defaultWordImg.vue";
import smallWordImg from "./articleItem/defaultSmallWordImg.vue";

export default {
  components: {
    "cmp-imgs": imgs,
    "cmp-word-img": wordImg,
    "cmp-small-word-img": smallWordImg
  },
  props: ["headLine", "headLineDes"],
  methods: {
    onMouseOver(index) {
      this.nowIndex = index;
    }
  },
  data() {
    return {
      nowIndex: Object.keys(this.headLineDes.items)[0]
    };
  }
};
</script>
<style lang='scss' scoped>
.head-line {
  width: 100%;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  font-size: 14px;
  color: rgb(255, 255, 255);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  ul {
    li {
      float: left;
      padding: 0 5px;
      position: relative;
      cursor: pointer;
      &:first-of-type {
        font-size: 18px;
        margin-left: 13px;
        margin-right: 10px;
      }
      &.active:after {
        content: " ";
        display: block;
        position: absolute;
        border-left: 5px solid rgba(0, 0, 0, 0);
        border-right: 5px solid rgba(0, 0, 0, 0);
        border-bottom: 7px solid rgb(255, 255, 255);
        width: 2px;
        height: 0;
        top: 37px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
}

.content-container {
  width: 100%;
  padding: 11px 10px 10px;
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
  border-left: 1px solid rgb(229, 229, 229);
  border-right: 1px solid rgb(229, 229, 229);
  border-bottom: 1px solid rgb(229, 229, 229);
}
</style>