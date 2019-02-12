<template>
  <div>
    <router-link class="login-status" to="/login">立即登录</router-link>
    <router-link class="register" to="/register">注册</router-link>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.login-status {
  color: rgb(49, 187, 172);
  margin-left: 10px;
}
.register {
  color: rgb(153, 153, 153);
  margin-left: 10px;
}
.register:hover {
  color: rgb(49, 187, 172);
}
</style>
