<template>
  <main class="main">
    <BlogPost/>
  </main>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'

export default {
    name: "MainContainer",
    components: { BlogPost }
}
</script>

<style scoped>
.main{
  position: fixed;
  top: 8%;
  bottom: 8%;
  overflow-y: scroll;
  padding: 20px;
}

.main::-webkit-scrollbar-track, .main::-webkit-scrollbar-thumb {
  background: var(--elements-color);
}

.main::-webkit-scrollbar {
  width: 6px;
  background: var(--light-color);
}

.main::-webkit-scrollbar-thumb {
  border-radius: 5px;
  outline: 1px solid var(--light-color);
}

</style>
