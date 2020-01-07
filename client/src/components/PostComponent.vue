<template>
  <v-container fluid class="grey lighten-5">
    <v-row>
      <v-col cols="12" sm="3">
   
    <v-list shaped>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="container">
          <h1>Latest Posts</h1>
          <div class="create-post">
            <label for = "create-post">Make a Post</label>
            <v-text-field  id="create-post" v-model="text" placeholder="Create A Post"></v-text-field>
            <v-btn color="primary" v-on:click="createPost">Post!</v-btn>
          </div>    
          <hr>
          <p class="error" v-if="error">{{ error }}</p>
          <div class="posts-container">
            <div class="post"
              v-for="(post, index) in posts"
              v-bind:item="post"
              v-bind:index="index"
              v-bind:key="post._id"
              v-on:dblclick="deletePost(post._id)"
              >
                {{ post.createdAt.getDate() }} {{ post.createdAt.getMonth() }} {{ post.createdAt.getFullYear() }} 
                <p class="text">{{ post.text }}</p>
            </div>
          </div>
        </div>
      </v-col>
 
      <v-col cols="12" sm="3">
        <h1>Trending</h1>
        <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Single-line item</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Two-line item</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Three-line item</v-list-item-title>
        <v-list-item-subtitle>
          Secondary line text Lorem ipsum dolor sit amet,
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          consectetur adipiscing elit.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import PostService from '../PostService'
export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
      item: 1,
      items: [
        { text: 'Notification', icon: 'mdi-clock' },
        { text: 'Messages', icon: 'mdi-account' },
        { text: 'Bookmarks', icon: 'mdi-flag' },
        { text: 'Lists', icon: 'mdi-flag' },
      ],
    }
  },
  async created() {
    try{
      this.posts = await PostService.getPosts()
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPosts(this.text);
      this.posts = await PostService.getPosts()
    },
    async deletePost(id) {
      await PostService.deletePost(id)
      this.posts = await PostService.getPosts()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 1000px;
  margin: 0 auto;
}
p.error {
  border : 1px solid red;
  background-color: pink;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid green;
  background-color: lightblue;
  padding: 10p 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
