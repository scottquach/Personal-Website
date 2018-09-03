<template>
  <div id="app">
    <Welcome/>
    <Story/>
    <Experience/>
    <ProjectHighlight/>
    <Footer/>

    <PageProgress/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Welcome from './components/Welcome.vue'
import Story from './components/Story.vue'
import Experience from './components/Experience.vue'
import ProjectHighlight from './components/ProjectHighlight.vue'
import Footer from './components/Footer.vue'

import PageProgress from './components/PageProgress.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Welcome,
    Story,
    Experience,
    ProjectHighlight,
    Footer,
    PageProgress
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata|Lato|Noto+Sans|PT+Sans|Source+Sans+Pro");

#app {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  display: block;
}
</style>
