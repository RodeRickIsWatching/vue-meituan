<template>
  <div class="footer-container">
    <cmp-link></cmp-link>
    <cmp-copyright></cmp-copyright>
  </div>
</template>


<script>
import link from "./link.vue";
import copyright from "./copyright.vue";
export default {
  components: {
    "cmp-link": link,
    "cmp-copyright": copyright
  }
};
</script>

<style lang="scss" scoped>
</style>
