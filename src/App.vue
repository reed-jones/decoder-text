<template>
  <div id="app">
    <input v-model='text'>
    <input v-model='nextWord'>
    <button @click='text = nextWord' >Button</button>
  <decoder-text class='sidebar-title'
    v-model='model'
    :target='text'
    :fps='24'
    :resetWord='false'
    :steps='4'
  />
  </div>
</template>

<script>

export default {
  name: 'app',
  data: _ => ({
    model: '',
    text: '',
    nextWord: ''
  })
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
