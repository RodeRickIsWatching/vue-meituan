<template>
  <div class="copyright-container clearfix">
    <div
      v-for="(item,index) in copyrightMsg"
      :class="index=='left'?'copyright-left':'copyright-right'"
    >
      <template v-if="index=='left'">
        <p v-for="(item2, index2) in item">
          <router-link to v-for="(item3, index3) in item2">{{item3}}</router-link>
        </p>
      </template>
      <template v-else>
        <router-link to v-for="(item2, index2) in item">{{item2}}</router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyrightMsg: {
        left: [
          ["©美团网团购 meituan.com", "京ICP证070791号", "京ICP备10211739号"],
          ["广播电视节目制作经营许可证（京）字第03889号"],
          ["食品经营许可证", "互联网药品信息服务资格证"],
          [
            "医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号"
          ]
        ],
        right: ["京公网安备11010502025545号"]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.copyright-container {
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 30px;
  line-height: 1.6;
  a {
    color: rgb(153, 153, 153);
    margin-right: 20px;
    &:hover {
      color: rgb(14, 202, 199);
    }
  }
  .copyright-left {
    float: left;
  }
  .copyright-right {
    float: right;
  }
}
</style>
