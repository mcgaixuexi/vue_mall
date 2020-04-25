<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
import jsonp from 'jsonp'
export default {
  data () {
    return {
      age: 30
    }
  },
  mounted () {
    const url = 'https://www.easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list'
    axios.get(url).then(() => {

    })
    jsonp(url, () => {

    })
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
