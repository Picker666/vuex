<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
      <router-link v-for="r in routes" :key="r.name" :to="r.path" >{{ r.name }}</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from './routes';

export default {
  name: 'App',
  data: function () {
    return {
      routes
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p a {
  display: inline-block;
  margin: 0 24px;
  text-decoration: none;
  color: #2c3e50;
}

.router-link-active {
  color: red;
}
</style>
