<template>
  <div class="post-card"
       v-for="(post, i) in postsBlog" :key="i">
    <div v-for="(user, j) in blogUsers" :key="j">
      <p class="post-user"
         v-if="post.userId === user.id">
        {{ user.email }}
      </p>
    </div>
    <h2 class="post-title">
      {{ post.title }}
    </h2>
    <p class="post-body">
      {{ post.body }}
    </p>
  </div>
</template>

<script>
import blogApi from '@/services/blogApi';

export default {
  name: 'BlogPost',
  beforeCreate(){
    blogApi.get('/posts').then( response => {
      this.postsBlog = response.data
    }),
    blogApi.get('/users').then(response => {
      this.blogUsers = response.data
    })
  },
  data(){
    return {
      postsBlog: [],
      blogUsers: []
    }
  }
}
</script>

<style scoped>
.post-card{
  margin: 20px auto;
  width: 90vw;
  padding: 40px 30px;
  color: var(--font-color);
  border-radius: 10px;
  background: rgba( 255, 255, 255, 0 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.post-user, .post-title{
  position: relative;
}

.post-user{
  text-align: right;
  bottom: 30px;
}

.post-title{
  bottom: 20px;
}

.post-body, .post-title{
  text-align: left;
}

@media screen and (min-width: 750px){
  .post-card{
    width: 70%;
  }
}

@media screen and (min-width: 1000px){
  .post-card{
    width: 55%;
  }
}
</style>