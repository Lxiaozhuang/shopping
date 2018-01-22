<template>
  <div id="app">
    <mainHeader/>
    <mainContent/>
    <mainFooter/>
  </div>
</template>

<script>
import mainHeader from './components/mainHeader'
import mainContent from './components/content/mainContent'
import mainFooter from './components/mainFooter'

export default {
  name: 'App',
  components:{
    mainHeader,
    mainContent,
    mainFooter
  }
}
</script>

<style>
body{
  margin:0
}
ul{
  padding:0;
  margin:0;
  list-style: none
}
a{
  outline: none;
  text-decoration: none;
  color: inherit
}
h1,h2,h3,h4,h5,h6{
  margin: 0
}
</style>
