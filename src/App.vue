<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import logIn from './components/logIn.vue'


export default {
  name: 'app',
  components: {
    logIn

  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

#app {

  margin: 0px;
  padding: 0px;

}

@media screen and (max-width: 600px) {
  
}
</style>
