<template>
  <div id="app">
    <Welcome />
    <Story />
    <Experience />
    <ProjectHighlight />
    <Education />
    <Resume />
    <Footer />
    <PageProgress />
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Story from "./components/Story.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import ProjectHighlight from "./components/ProjectHighlight.vue";
import Resume from "./components/Resume.vue";
import Footer from "./components/Footer.vue";

import PageProgress from "./components/PageProgress.vue";

export default {
  name: "app",
  components: {
    Welcome,
    Story,
    Education,
    Experience,
    ProjectHighlight,
    Resume,
    Footer,
    PageProgress
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata|Lato|Noto+Sans|PT+Sans|Source+Sans+Pro");

#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  display: inline-block;
  /* width: 100vw; */
}

@media only screen and (max-width: 600px) {
}
</style>
