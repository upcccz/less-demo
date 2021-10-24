<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
/* 需要在这里引入才能使用变量 */
// @import '/src/styles/vars.less';

// @c1: red;

div {
  color: @c1;
}
</style>
