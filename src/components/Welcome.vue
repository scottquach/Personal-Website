<template>
    <div class="welcome">
        <h2 class="welcome__title">Hey there. <span class="hand-wave">👋</span></h2>

        <h2 class="welcome__summary">
            I'm
            <span id="name">Scott Quach</span>,
             a Software Engineer with a passion for 
            Android development focused on gaining a full stack skillset. 
        </h2>

        <h3 class="welcome__contact">
            Care to chat?
            <a href="mailto:scottqglobal@gmail.com" target="_blank">scottqglobal@gmail.com</a>
        </h3>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome {
  padding: 100px 150px;
  margin: 0px;
  height: 100vh;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.75rem;
}

.welcome__title {
  font-size: 3.5rem;
  font-weight: 50;
}

.welcome__summary {
  max-width: 60%;
  font-weight: 50;
  line-height: 1.25;
}

.welcome__contact {
  font-weight: 250;
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

@media screen and (max-width: 992px) {
  .welcome {
    padding: 100px 100px;
  }

  .welcome__title {
    font-size: 7rem;
  }

  .welcome__summary {
    max-width: 100%;
    font-size: 4.5rem;
    line-height: 1.25;
  }

  .welcome__contact {
    font-size: 4.5rem;
  }
}
</style>

