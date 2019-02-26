<template>
  <div>{{nowCity}}美团/{{nowCity}}{{inputVal}}</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("home", ["nowCity", "inputVal"])
  }
};
</script>
<style lang='scss' scoped>
</style>