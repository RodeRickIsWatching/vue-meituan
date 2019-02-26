<template>
  <div class="link-container clearfix">
    <div class="footer-column" v-for="(item) in linkMsg">
      <dl v-for="(item2,index2) in item">
        <template v-for="(item3,index3) in item2">
          <dt v-if="index3 == 'title'">{{item3}}</dt>
          <dd v-else v-for="(item4,index4) in item3">
            <template v-if="typeof(index4)!=='number'">{{index4}}</template>
            <router-link to>{{item4}}</router-link>
          </dd>
        </template>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkMsg: [
        [
          {
            title: "用户帮助",
            item: [
              "申请退款",
              "查看美团券密码",
              "常见问题",
              "用户协议",
              "隐私政策",
              "反诈骗公告"
            ]
          },
          {
            title: "美团服务",
            item: [
              "美团外卖",
              "美团酒店",
              "猫眼电影",
              "美团配送",
              "美团云",
              "大众点评",
              "榛果民宿",
              "无人配送"
            ]
          }
        ],
        [
          {
            title: "商家合作",
            item: [
              "美食商家入驻(非外卖)",
              "外团外卖开店申请",
              "美团收银官网",
              "外卖配送加盟申请",
              "美团点评餐饮学院",
              "酒店商家入驻",
              "境内独家商家入驻",
              "综合商家入驻",
              "外团外卖开店申请",
              "美团收银官网",
              "外卖配送加盟申请",
              "美团点评餐饮学院",
              "酒店商家入驻",
              "境内独家商家入驻",
              "综合商家入驻"
            ]
          }
        ],
        [
          {
            title: "代理商加盟",
            item: [
              "智能支付渠道加盟商招募",
              "到店餐饮代理商招募",
              "非餐饮代理商招募",
              "美团联盟",
              "美团收银招募线上分销商",
              "美团点评5S服务商招募"
            ]
          },
          {
            title: "行业规范",
            item: ["美团点评餐饮安全管理办法"]
          },
          {
            title: "廉正举报",
            item: ["廉政邮箱"]
          }
        ],
        [
          {
            title: "关注美团",
            item: ["美团新浪微博"]
          },
          {
            title: "公司信息",
            item: [
              "关于我们",
              "投资者关系",
              "加入我们",
              "法律声明",
              "价格说明",
              "美团网平台点评规则",
              "美团点评团购用户服务条款",
              "商户诚信公约及管理办法"
            ]
          }
        ],
        [
          {
            title: "消费者服务热线",
            item: {
              "外卖消费者：": "10109777",
              "猫眼消费者：": "10105335",
              "其他消费者：": "10107888"
            }
          },
          {
            title: "商家服务热线",
            item: {
              "外卖&餐饮商家：": "10105557",
              "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：": "10100107"
            }
          },
          {
            title: "投诉举报热线",
            item: {
              "违法和不良信息举报电话：": "4006018900",
              "举报邮箱：": "tousujubao@meituan.com"
            }
          },
          {
            title: "",
            item: ["商家自助入驻美团入口"]
          }
        ]
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.link-container {
  padding: 40px 45px;
  border-top: 1px solid rgb(229, 229, 229);
  border-bottom: 1px solid rgb(229, 229, 229);
  font-size: 12px;
  line-height: 2;
  text-align: left;
  .footer-column {
    width: 20%;
    float: left;
    dl {
      padding-bottom: 20px;
      color: rgb(102, 102, 102);
      dt {
        font-size: 14px;
        font-weight: 500;
      }
      dd {
        a {
          color: rgb(102, 102, 102);
          &:hover {
            color: rgb(14, 202, 199);
          }
        }
      }
    }
  }
}
</style>
