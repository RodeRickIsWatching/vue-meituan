<template>
  <div>
    <div class="banner2-link">
      <router-link to v-for="item in banner2Link">
        <img :src="item" class="floatLeft">
      </router-link>
    </div>
    <div class="download-app floatLeft">
      <div class="erweima">
        <img src="@/assets/menuRight/download-qr.png">
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
        require("@assets/menuRight/banner2Link0.png"),
        require("@assets/menuRight/banner2Link1.jpg"),
        require("@assets/menuRight/banner2Link2.jpg")
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
