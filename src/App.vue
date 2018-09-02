<template>
  <div id="app">
    <Welcome/>
    <Story/>
    <Experience/>
    <ProjectHighlight/>

    <PageProgress/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Welcome from './components/Welcome.vue'
import Story from './components/Story.vue'
import Experience from './components/Experience.vue'
import ProjectHighlight from './components/ProjectHighlight.vue'

import PageProgress from './components/PageProgress.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Welcome,
    Story,
    Experience,
    ProjectHighlight,
    PageProgress
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  display: block;
}
</style>
