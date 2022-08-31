<template>
  <servicesPage/>
</template>

<script>

import servicesPage from './components/servicesPage.vue'


export default {
  name: 'App', 
  components: {
    servicesPage,
},
}
</script>

<style>
  @font-face {
  font-family: "Cairo-Bold";
  src: local("Cairo-Bold"),
   url(./assets/Fonts/Cairo-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Cairo-Regular";
  src: local("Cairo-Regular"),
   url(./assets/Fonts/Cairo-Regular.ttf) format("truetype");
}
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
 display: flex;
 flex-direction: column;
 justify-content: center;
  min-height: 100vh;
  background-color: #f3f6f6;
  font-size: 20px;
  

}

</style>
