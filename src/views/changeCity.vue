<template>
  <div class="container">
    <cmp-change-city/>
  </div>
</template>

<script>
import changeCity from "@/components/changeCity/index.vue";
export default {
  components: {
    "cmp-change-city": changeCity
  },
  methods: {
  }
};
</script>
<style lang='scss' scoped>
.container {
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 229, 229);
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
}
</style>