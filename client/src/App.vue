<template>
  <v-app>
    <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="#6A76AB"
          dark
          shrink-on-scroll
          prominent
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-4"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon>Test</v-app-bar-nav-icon>

          <v-toolbar-title>Enjoy Life App</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                color="yellow"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <template v-slot:extension>
            <v-tabs
              align-with-title
              background-color="transparent"
            >
              <v-tab>My Feed</v-tab>
              <v-tab>My Post</v-tab>
              <v-tab>Reccommened Post</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-4"
          class="overflow-y-auto"
          max-height="225"
        >
          <v-container style="height: 1000px;"></v-container>
        </v-sheet>
      </v-card>
  <div id="app">
    <PostComponent /> 
  </div>
  </v-app>
</template>

<script>
import PostComponent from './components/PostComponent.vue'

export default {
  name: 'app',
  components: {
    PostComponent
  },
  data(){
    return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
