<template>
  <div class="home">
    <h1 class="title">BlogApp</h1>
    <MainContainer/>
    <BlogFooter/>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue'
import BlogFooter from '@/components/BlogFooter.vue'

export default {
  name: 'HomeView',
  components: {
    MainContainer,
    BlogFooter
  }
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

.title{
  color: var(--light-color);
  text-align: center;
  text-shadow: 2px 2px 5px var(--font-color);
  position: relative;
  top: 8px;
}

a{
  text-decoration: none;
}

</style>
