<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <CounterComponent/> -->
  <router-view>
    <CounterComponent/>
  </router-view>
</template>

<script>
import CounterComponent from './components/CounterComponent.vue'

export default {
  name: 'App',
  components: {
    CounterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
