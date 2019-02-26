<template>
  <div>
    <cmp-province
      :provinceObj="provinceObj"
      :relatedCityObj="relatedCityObj"
      :getSearchObj="getSearchObj"
      @getRelatedCity="onGetRelatedCity"
      class="cmp-province"
    />
    <cmp-hot-city :hotCityArr="hotCityArr" class="cmp-hot-city"/>
    <cmp-recent-visit-city :recentCityArr="recentCityArr" class="cmp-recent-visit-city"/>
    <cmp-all-city-list
      :cityListObj="cityListObj"
      :hotCityArr="hotCityArr"
      class="cmp-all-city-list"
    />
  </div>
</template>

<script>
import province from "./province.vue";
import hotCity from "./hotCity.vue";
import allCityList from "./allCityList.vue";
import recentVisitCity from "./recentVisitCity.vue";
import { _Ajax } from "@assets/utils/ajax.js";
import { CityHandler } from "@assets/utils/cityCmpHandler.js";

export default {
  created() {
    let _ajax = new _Ajax();
    _ajax.get("province").then(res => {
      let _r = JSON.parse(res);
      if (_r.status == "success") {
        //   成功获取
        this.allLists = [..._r.data];
        let cityHandler = new CityHandler(this.allLists);
        this.provinceObj = Object.assign({}, cityHandler.getProvince());
        this.cityListObj = Object.assign({}, cityHandler.getAllCity());
        this.getSearchObj = Object.assign({}, cityHandler.getSearch());
      } else {
        throw new Error("信息请求失败");
      }
    });
    _ajax.get("hot").then(res => {
      let _r = JSON.parse(res);
      if (_r.status == "success") {
        //   成功获取
        this.hotCityArr = [..._r.data];
      }
    });
    _ajax.get("recent").then(res => {
      let _r = JSON.parse(res);
      if (_r.status == "success") {
        //   成功获取
        this.recentCityArr = [..._r.data];
      }
    });
  },
  data() {
    return {
      allLists: [],
      provinceObj: {},
      relatedCityObj: {},
      cityListObj: {},
      getSearchObj: {},
      recentCityArr: [],
      hotCityArr: []
    };
  },
  methods: {
    onGetRelatedCity(res) {
      let cityHandler = new CityHandler(this.allLists);
      this.relatedCityObj = Object.assign({}, cityHandler.getRelatedCity(res));
    }
  },
  components: {
    "cmp-province": province,
    "cmp-hot-city": hotCity,
    "cmp-all-city-list": allCityList,
    "cmp-recent-visit-city": recentVisitCity
  }
};
</script>
<style lang='scss' scoped>
span {
  vertical-align: middle;
  font-size: 16px;
  color: rgb(51, 51, 51);
  font-weight: 500;
  vertical-align: top;
  display: inline-block;
}
.cmp-province {
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(229, 229, 229);
  display: flex;
  align-items: center;
}
.cmp-hot-city {
  border-bottom: 1px solid rgb(229, 229, 229);
  padding: 30px 0;
  display: flex;
  align-items: center;
}
.cmp-recent-visit-city {
  border-bottom: 1px solid rgb(229, 229, 229);
  padding: 30px 0;
  display: flex;
  align-items: center;
}
.cmp-all-city-list {
  padding: 30px 0;
}
</style>    