<template>
  <div class="node">
    <h3>v-bind:指令带前缀-v</h3>
    <h3>v-if 显示/隐藏</h3>
    <h3>v-for :key="" 循环</h3>
    <h3>v-on:click="showMessage('参数')" 单击事件</h3>
    <h3>v-model 双向绑定</h3>
    <h3>v-once 双大括号中数据只会被绑定一次，即使后台数据更新，dom不会更新</h3>
    <h3>v-html="" 将后台html数据绑定到dom上</h3>
  </div>
</template>

<script>

  export default {
    name: "HelloWorld",
    data() {
      return {};
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
