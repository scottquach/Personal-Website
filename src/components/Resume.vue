<template>
  <div class="resume">
    <a href="/Scott_Quach_Resume_v3.pdf" target="_blank" class="resume__title">View my resume</a>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.resume {
  padding-left: 7.5rem;
}

.resume__title {
  text-decoration: none;
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: 700;

  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
  padding-left: 0px;
}

.resume__title::after {
  content: "";
  display: inline-block;
  background: url("../assets/arrow-point-to-right.png") no-repeat;
  width: 25px;
  height: 16px;
  margin-left: 5px;
}

.resume__title:hover {
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
  padding-left: 15px;
}

@media only screen and (max-width: 992px) {
  .resume {
    padding-left: 1rem;
  }

  .resume__title {
    font-size: 2em;
  }

  .resume__title::after {
    background-size: cover;
    width: 15px;
    height: 15px;
  }
}
</style>

