<template>
  <div id="app">
    <label> Live Updating
      <input v-model='text'>
    </label>
    <br>
    <label>Manual Update
      <input v-model='nextWord'>
    </label>
    <button @click='text = nextWord' >Update</button>
    <decoder-text
      class='decoder-text'
      v-model='model'
      :target='text'
      :fps='24'
      :resetWord='false'
      :steps='4'
      @start='wordStarted'
      @end='wordFinished'
      @abort='wordAbortedEarly'
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
  }),
  methods: {
    wordStarted(word) {
      console.log(`Started ${word}`)
    },
    wordFinished(word) {
      console.log(`Finished ${word}`)
    },
    wordAbortedEarly(oldWord, newWord) {
      console.log(`${oldWord} has been replace by ${newWord} as the target`)
    }
  }
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
.decoder-text {
  font-size: 3rem;
}
</style>
