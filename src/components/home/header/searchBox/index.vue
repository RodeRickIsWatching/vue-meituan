<template>
  <div class="search-box-container">
    <div class="logo-container">
      <img :src="imgSrc" alt>
    </div>
    <div class="search-box">
      <div class="input-container">
        <input
          class="input"
          v-model="input"
          placeholder="搜索商家或地点"
          @input="oninput($event.target.value)"
          @click="onclick($event)"
        >
        <el-button class="button" icon="el-icon-search"/>
      </div>
      <div class="hot-word-search" v-show="ifShowHotWord">
        <div class="no-input">
          <div class="title">热门搜索</div>
          <div class="hot-word">
            <router-link to v-for="(item) in hotWord">{{item}}</router-link>
          </div>
        </div>
      </div>
      <div class="hot-word-suggested">
        <router-link to v-for="(item) in hotWord">{{item}}</router-link>
      </div>
    </div>
  </div>
</template>


<script>
// import img from "@/assets/logo.png";
export default {
  data() {
    return {
      ifShowHotWord: false,
      input: "",
      imgSrc: require("@/assets/logo.png"),
      hotWord: [
        "上海迪士尼度假区",
        "上海海昌海洋公园",
        "上海野生动物园",
        "上海科技馆"
      ]
    };
  },
  methods: {
    onclick(e) {
      this.ifShowHotWord = true;
      let target = e.currentTarget;
      let self = this;
      document.onclick = e2 => {
        if (e2.target != target) {
          this.ifShowHotWord = false;
          console.log(this.ifShowHotWord);
        }
      };
    },
    oninput(val) {
      this.input = val;
      if (val) {
        this.ifShowHotWord = false;
      } else {
        this.ifShowHotWord = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search-box {
  float: left;
  padding-top: 28px;
  position: relative;

  .input-container {
    width: 550px;
    height: 40px;
    border: 1px solid rgb(19, 209, 190);
    background: rgb(255, 255, 255);
    border-radius: 4px;

    .input {
      border: none;
      line-height: 100%;
      box-sizing: border-box;
      display: inline-block !important;
      padding: 10px;
      font-size: 15px;
      height: 100%;
      background: 0 0;
      width: 84%;

      &::placeholder {
        color: rgb(139, 139, 139);
      }
    }

    .button {
      width: 16%;
      box-sizing: border-box;
      line-height: 100%;
      height: 100%;
      background: rgb(19, 209, 190);
      border: none;
      float: right;
      color: rgb(255, 255, 255);
      cursor: pointer;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
}

.logo-container {
  float: left;
  padding-top: 28px;
  padding-right: 60px;
  padding-bottom: 40px;
  font-size: 16px;
  min-width: 220px;
  height: 54px;
  box-sizing: content-box;

  img {
    width: 126px;
    height: 46px;
    border: 0;
    vertical-align: initial;
  }
}

.hot-word-search {
  width: 84%;
  box-sizing: border-box;
  position: absolute;
  border: 1px solid #e5e5e5;
  border-top: none;
  background: #fff;
  z-index: 999;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #999;
  font-size: 12px;
  text-align: left;

  .no-input {
    display: block;
    padding: 10px;

    .title {
      margin: 0;
      padding-bottom: 8px;
    }

    .hot-word {
      padding-top: 8px;
      font-size: 12px;
      width: 550px;
      overflow: hidden;
      height: 25px;
      box-sizing: border-box;
      text-align: left;
      padding-left: 12px;

      width: auto;
      padding-top: 5px;
      margin-bottom: 5px;
      padding-left: 0;

      a {
        color: #666;
        margin-right: 10px;
        margin-bottom: 3px;
        display: inline-block;
        &:hover {
          color: rgb(49, 187, 172);
        }
      }
    }
  }
}

.hot-word-suggested {
  padding-top: 8px;
  font-size: 12px;
  width: 550px;
  overflow: hidden;
  height: 25px;
  box-sizing: border-box;
  text-align: left;
  padding-left: 12px;

  a {
    color: #999;
    margin-right: 10px;
    margin-bottom: 3px;
    display: inline-block;
    &:hover {
      color: rgb(49, 187, 172);
    }
  }
}
</style>