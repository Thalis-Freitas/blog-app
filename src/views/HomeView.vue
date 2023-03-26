<template>
  <div class="home">
    <MainContainer/>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue'

export default {
  name: 'HomeView',
  components: { MainContainer }
}
</script>

<style>
:root{
  --font-color: #3b3c29;
  --elements-color: #e5d5c5;
  --light-color: #f4f4f4;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  height: 100vh;
  background: transparent url(@/assets/background-image.png) no-repeat center;
  background-size: cover;
}
</style>
