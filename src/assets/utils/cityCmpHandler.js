 import {
     PinYinObj
 } from './pinyin.js'

 let _py = new PinYinObj()

 class CityHandler {
     constructor(_list) {
         this._list = _list;
         // this.getProvince();
         // this.getRelatedCuty();
         // this.getAllCity();
         this.getSearch();
     }
     // 获取省份
     getProvince(_count = 12) {
         let res = {};
         let provinceArr = [];
         this._list.forEach((item) => {
             provinceArr.push(item.provinceName)
         })
         //获取循环次数，或者说是最终的组数
         let k = provinceArr.length / _count;
         for (let i = 0; i < k; i++) {
             res[i] = []
         }
         provinceArr.forEach((item, index) => {
             let _r = parseInt(index / _count)
             res[_r].push(item)
         })
         return res
     }
     // 获取省份对应的城市
     getRelatedCity(_city = "上海", _count = 12) {
         let res = {};
         let cityArr = [];
         this._list.forEach(item => {
             if (item.provinceName == _city) {
                cityArr = [...item.cityInfoList]
             }
         })
         //获取循环次数，或者说是最终的组数
         let k = cityArr.length / _count;
         for (let i = 0; i < k; i++) {
             res[i] = []
         }
         cityArr.forEach((item, index) => {
            let _r = parseInt(index / _count)
            res[_r].push(item)
        })
         return res
     }
     // 获取所有城市
     getAllCity() {
         // 通过charCodeAt()转换成ascall码
         let res = {};
         this._list.forEach(item => {
             item.cityInfoList.forEach(item2 => {
                 let _fir = item2.firstChar;
                 if (!res[_fir.charCodeAt()]) {
                     res[_fir.charCodeAt()] = [];
                 }
                 res[_fir.charCodeAt()].push(item2)
             })
         })
         return res
     }

     //  获取搜索框的城市
     getSearch() {
         let res = {
             py: {},
             str: []
         };
         this._list.forEach(item => {
             for (let i in item.cityInfoList) {
                 let firstChar = item.cityInfoList[i].pinyin[0];
                 let _i = item.cityInfoList[i].name;
                 //  按拼音和文字区分
                 if (!res["py"][firstChar]) {
                     res["py"][firstChar] = {}
                 }
                 //  eg:[北京, beijing]，利用正则/^bei/即可匹配出bei开头的
                 res["py"][firstChar][item.cityInfoList[i].pinyin] = _i
                 res["str"].push(_i)
             }
         })
         return res
     }
 }

 export {
     CityHandler
 }