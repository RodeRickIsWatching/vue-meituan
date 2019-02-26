<template>
  <div>
    <div class="carousel floatLeft">
      <el-carousel height="240px">
        <el-carousel-item v-for="item in bgArr">
          <img :src="item" class="bg">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="banner1-link floatLeft">
      <router-link to>
        <img :src="banner1Link[0]">
      </router-link>
    </div>
    <div class="login-card-container floatLeft">
      <div class="login-card">
        <div class="head-img-container">
          <img src="@/assets/menuRight/avatar.jpg">
        </div>
        <span class="user-name">Hi! 你好</span>
        <router-link to>
          <button type="button" class="register">注册</button>
        </router-link>
        <router-link to>
          <button type="button" class="login">登录</button>
        </router-link>
      </div>
      <div class="login-card" style="display:none">
        <div class="settings">
          <router-link to>
            <i class="el-icon-setting icon"></i>
          </router-link>
        </div>
        <div class="head-img-container">
          <img src="@/assets/menuRight/avatar.jpg">
        </div>
        <span class="nick-name">你好</span>
        <div class="fn-btn clearfix" v-for="item in fn">
          <div class="fn-item" v-for="item1 in item">
            <router-link to>
              <i class="el-icon-tickets icon"></i>
              <p>{{item1}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{

  },
  data() {
    return {
      banner1Link: ["http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"],
      fn: { fn1: ["我的订单", "我的收藏", "抵用券"], fn2: ["余额", "更多"] },
      bgArr: [
        require("@assets/menuRight/carousel/bg0.jpg"),
        require("@assets/menuRight/carousel/bg1.jpg"),
        require("@assets/menuRight/carousel/bg2.jpg"),
        require("@assets/menuRight/carousel/bg3.jpg"),
        require("@assets/menuRight/carousel/bg4.png")
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.floatLeft {
  float: left;
}

.carousel {
  width: 550px;
  height: 240px;
  img {
    width: 100%;
  }
}

.banner1-link {
  width: 150px;
  height: 240px;
  margin: 0 10px;
  background-size: 150px;
  img {
    width: 100%;
  }
}

.login-card-container {
  width: 228px;
  height: 238px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 229, 229);
  text-align: center;
  .login-card {
    .settings {
      position: absolute;
      top: 5px;
      right: 5px;
      .icon {
        float: left;
        margin-right: 5px;
        font-size: 20px;
        color: rgb(102, 102, 102);
      }
    }
    padding-top: 30px;
    position: relative;
    .head-img-container {
      border-radius: 30px;
      margin: 0 auto 4px;
      img {
        width: 47px;
        height: 47px;
        border-radius: 50%;
        border: 4px solid rgb(229, 229, 229);
      }
    }
    .user-name {
      font-size: 16px;
      color: rgb(34, 34, 34);
      text-align: center;
      font-weight: 500;
      white-space: nowrap;
      width: 6em;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0 auto;
      height: 21px;
      line-height: 21px;
      display: block;
    }
    .nick-name {
      display: block;
      position: relative;
      height: 30px;
    }
    .fn-btn {
      padding: 0 15px;
      .fn-item {
        width: 33.3%;
        float: left;
        .icon {
          color: rgb(150, 228, 218);
          font-size: 20px;
        }
        p {
          font-size: 12px;
          color: rgb(34, 34, 34);
          margin: 9px 0;
        }
      }
    }

    button {
      width: 118px;
      text-align: center;
      margin: 10px auto 15px;
      background: rgb(255, 255, 255);
      border: 1px solid rgb(229, 229, 229);
      border-radius: 40px;
      font-size: 14px;
      color: rgb(51, 51, 51);
      transition: background-color 0.5s;
      display: block;
      line-height: 38px;
      cursor: pointer;
      &:hover {
        background: rgba(151, 151, 151, 0.1);
      }
    }
  }
}
</style>
