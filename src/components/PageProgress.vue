<template>
<div v-scroll="onScroll" class="page-progress">
    <v-progress-circular v-on:click="scrollTop" class="progress" color="#3233cc" :width="width" :size="size" :value="scroll"></v-progress-circular>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      scroll: 0,
      size: 50,
      width: 5,
      windowWidth: 0
    };
  },

  methods: {
    onScroll(e) {
      this.scroll =
        100 /
        ((document.body.scrollHeight - window.innerHeight) /
          document.documentElement.scrollTop);
    },
    windowWidthResized(event) {
      console.log("window resized " + document.documentElement.clientWidth);
      if (document.documentElement.clientWidth < 992) {
        this.size = 23;
        this.width = 4;
      } else {
        this.size = 50;
        this.width = 5;
      }
    },
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  },

  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.windowWidthResized);
      this.windowWidthResized(undefined);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.windowWidthResized);
  }
};
</script>

<style scoepd>
.page-progress {
  position: fixed;
  bottom: 25px;
  right: 25px;
}

@media only screen and (max-width: 992px) {
  .page-progress {
    bottom: 0.5rem;
    right: 0.5rem;
  }
}
</style>


