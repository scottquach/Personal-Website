<template>
  <div class="welcome">
    <div class="container__content">
      <vue-typer
        class="text__title"
        :text="entryText"
        :repeat="0"
        erase-style="select-all"
        erase-delay="40"
        caret-animation="smooth"
      ></vue-typer>

      <div class="container__details">
        <div class="text__summary">A Software Engineer trying to turn ideas into reality.</div>
        <div class="text__contact">
          Care to chat?
          <a
            href="mailto:scottqglobal@gmail.com"
            target="_blank"
          >📧scottqglobal@gmail.com</a>
        </div>
      </div>
    </div>

    <div class="container__center">
      <img class="scroll-icon" src="../assets/arrow-down.svg" />
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  data: () => {
    return {
      entryText: ["Hello there 👋", "I'm Scott Quach"]
    };
  },
  components: {
    VueTyper
  }
};
</script>

<style scoped>
.welcome {
  padding: 7.5rem 7.5rem;
  /* padding-bottom: 0px; */
  /* margin: 0px; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  font-size: 1.75rem;
}

.container__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}

.container__details {
  position: relative;
  opacity: 0;
  animation: reveal 3s;
  animation-delay: 4.25s;
  animation-fill-mode: forwards;
}

.container__center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: end;
}

.text__title {
  font-size: 3.5rem;
  font-weight: 50;
}

.text__summary {
  max-width: 60%;
  font-weight: 50;
  line-height: 1.25;
}

.text__contact {
  margin-top: 5rem;
  font-weight: 50;
}

.scroll-icon {
  width: 3rem;
  height: 3rem;
  animation: blink 3s infinite;
  color: gray;
}

#name {
  /* font-weight: 700; */
  background-color: #dbe2e7;
}

a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  visibility: hidden;
  background-color: #3233cc;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

a:hover::before {
  color: black;
  visibility: visible;
  transform: scaleX(1);
}

a {
  color: #3233cc;
  text-decoration: none;
  font-family: "Inconsolata", monospace;
  position: relative;
}

@keyframes reveal {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}

@keyframes slide-in {
  from {
    left: -10px;
  }
  to {
    left: 0px;
  }
}

@keyframes blink {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.25;
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 992px) {
  .welcome {
    padding: 0rem 1rem;
    font-size: 1.25 rem;
  }

  .text__title {
    font-size: 2rem;
    font-weight: 50;
  }

  .text__summary {
    max-width: 100%;
    font-weight: 50;
    line-height: 1.25;
  }

  .welcome__contact {
    font-size: 1em;
  }
}
</style>

