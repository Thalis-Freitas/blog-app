<template>
  <div class="post-card"
       @click="getComments(i)"
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
    <div class="comments-container"
         v-for="(comment, k) in currentPostComments" :key="k">
      <div class="comment"
           v-if="comment.postId === i">
        <span class="comment-user"
              v-show="comment.email">
          {{ comment.email }}:
        </span>
        <span class="comment-body">
          {{ comment.body }}
        </span> 
      </div>
    </div>
  </div>
</template>

<script>
import blogApi from '@/services/blogApi'

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
      blogUsers: [],
      currentPostComments: []
    }
  },
  methods: {
    getComments(post_id) {
      blogApi.get(`posts/${post_id}/comments`)
                .then( response => {
                  this.currentPostComments = response.data
                  if(this.currentPostComments.length === 0){
                    this.currentPostComments.push({
                      postId: post_id,
                      body: 'Este post não possui comentários.'})}
                })
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
  background: rgba( 255, 255, 255, 0 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.post-card, .comment{
  border-radius: 10px;
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

.post-body, .post-title, .comments-container{
  text-align: left;
}

.comments-container{
  word-break: break-word;
}

.comment{
  background-color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
  padding: 10px;
}

.comment-user{
  font-weight: 600;
}

.comment-body{
  text-align: justify;
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