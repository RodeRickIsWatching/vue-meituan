<template>
  <div>
    <div class="banner2-link">
      <router-link to v-for="item in banner2Link">
        <img :src="item" class="floatLeft">
      </router-link>
    </div>
    <div class="download-app floatLeft">
      <div class="erweima">
        <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png">
      </div>
      <div class="app-name">美团APP手机版</div>
      <div class="des">
        <span class="red">1元起</span>
        <span class="gray">吃喝玩乐</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner2Link: [
        "http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png",
        "http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg",
        "http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.floatLeft {
  float: left;
}
.banner2-link {
  a {
    img {
      width: 270px;
      height: 165px;
      margin-top: 10px;
      margin-right: 10px;
    }
    &:last-child {
      img {
        width: 150px;
        height: 165px;
        margin-top: 10px;
        background-size: 150px;
      }
    }
  }
}
.download-app {
  width: 228px;
  height: 165px;
  margin-top: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 229, 229);
  text-align: center;
  .erweima {
    margin: 10px auto 0;
    img {
      width: 95px;
      height: 95px;
    }
  }
  .app-name {
    font-size: 16px;
    color: rgb(34, 34, 34);
    font-weight: 500;
  }
  .des {
    font-size: 12px;
    font-weight: 500;
    margin-top: 2px;
    .red {
      color: rgb(236, 83, 48);
      margin-right: 5px;
    }
    .gray {
      color: rgb(63, 63, 63);
    }
  }
}
</style>
