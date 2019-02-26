<template>
  <div>
    <div class="title-container">
      <span class="title">按拼音首字母搜索：</span>
      <span class="letter-container">
        <a
          v-for="(item,index) in cityListObj"
          class="letter-item"
          :href="`#city-${String.fromCharCode(index)}`"
        >{{String.fromCharCode(index)}}</a>
      </span>
    </div>

    <div>
      <div v-for="(item,index) in cityListObj" class="city-list-container">
        <div
          class="city-label"
          :id="`city-${String.fromCharCode(index)}`"
        >{{String.fromCharCode(index)}}</div>
        <div class="city-list">
          <template v-for="item2 in item">
            <router-link
              :to="{name:'home',params: {cityName: item2.name}}"
              :class="{'hot-city':ifHot(item2.id)}"
            >{{item2.name}}</router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cityListObj", "hotCityArr"],
  methods: {
    ifHot(_id) {
      let res = [];
      this.hotCityArr.forEach(item => {
        res.push(item.id);
      });
      return res.includes(_id);
    }
  }
};
</script>
<style lang='scss' scoped>
.title-container {
  display: flex;
  align-items: flex-start;
  padding-bottom: 15px;
}
.title {
  font-size: 16px;
  color: rgb(51, 51, 51);
  font-weight: 500;
  vertical-align: top;
  display: inline-block;
}
.letter-container {
  font-size: 14px;
  a {
    font-size: 15px;
    color: rgb(102, 102, 102);
    display: inline-block;
    margin: 0 10px;
    width: 25px;
    height: 25px;
    padding-top: 2px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border-radius: 50%;
    &:hover {
      border-radius: 50%;
      background-color: rgba(150, 150, 150, 0.1);
    }
  }
}

.city-list-container {
  padding: 13px 30px 13px 10px;
  border-radius: 10px;
  transition: background-color 0.5s;
  &:hover {
    background-color: rgba(150, 150, 150, 0.1);
  }
  .city-label {
    box-sizing: border-box;
    vertical-align: top;
    padding-top: 10px;
    display: inline-block;
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: rgb(255, 255, 255);
    background: rgb(19, 209, 190);
    box-shadow: 0 4px 5px 0 rgba(39, 178, 164, 0.22);
  }
  .city-list {
    display: inline-block;
    max-width: 1065px;
    a {
      margin: 10px 20px;
      color: rgb(102, 102, 102);
      display: inline-block;
      font-size: 14px;
    }
  }
}

.hot-city {
  color: red !important;
}
</style>