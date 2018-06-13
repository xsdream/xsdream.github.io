<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <ul class="list-group">
            <li class="list-group-item"><router-link to="/">主页</router-link></li>
            <li class="list-group-item"><router-link to="/HelloWorld">代码试验</router-link></li>
            <li class="list-group-item"><router-link to="/node">学习笔记</router-link></li>
            <li class="list-group-item">其他</li>
            <li class="list-group-item">其他</li>
          </ul>
        </div>
        <div class="col-sm-9">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
