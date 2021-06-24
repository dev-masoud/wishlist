<template>
  <div id="app">
    
   <MenuBar/>
    <router-view/>
    
       

  </div>
</template>

<script>
import MenuBar from './components/MenuBar/index.vue'

export default {
  name: 'App',
  components: {
    MenuBar
  
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
*{
  box-sizing: border-box;
}
#app {
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
   
}

</style>
