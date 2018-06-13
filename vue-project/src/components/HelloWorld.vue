<template>
  <div id="app">
    <span v-bind:title="message">
          鼠标悬停几秒钟查看此处动态绑定的提示信息！
        </span>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
    <button class="btn btn-defalut" v-on:click="showMessage('参数')">点我</button>
    <span v-once>双向绑定：{{message}}</span>
    <input type="text" v-model="message">

    输出html：
    <span>{{htmls}}</span>
    <span v-html="htmls"></span>

    <button :class="{ red: isRed }">ssssss</button>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    red:'btn',
    isRed:'btn-info',
    data() {
      return {
        message:'大白兔',
        htmls:'<span style="color:red">我是数据<span>',
        todos: [{
            id: '1',
            text: '学习 JavaScript'
          },
          {
            id: '2',
            text: '学习 Vue'
          },
          {
            id: '3',
            text: '整个牛项目'
          },
          {
            id: '4',
            text: '哈哈哈'
          },
          {
            id: '5',
            text: '啦啦啦'
          }
        ]
      }
    },
    methods:{
      showMessage:function(data){
        alert('信息'+data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
