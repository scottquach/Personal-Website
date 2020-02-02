<template>
  <div class="education">
    <h3 class="education__title">Education</h3>
    <div class="container__school-name">
      <div class="school__name">University of Washington Bothell</div>
      <div class="text__graduation">Graduating March 2020</div>
    </div>
    <div class="school__degree">Bachelors of Science in Computer Science and Software Engineering</div>
    <v-chip
      v-for="subject in subjects"
      v-bind:key="subject"
      class="subject__chip"
      color="#3233CC"
      text-color="#FFFFFF"
    >{{ subject }}</v-chip>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      subjects: [
        "Database Systems",
        "Cloud Computing",
        "Hardware and Computer Organization",
        "Data Structures and Algorithms",
        "Cyber Security",
        "Software Project Management"
      ]
    };
  }
};
</script>

<style scoped>
.education {
  padding: 7.5rem 7.5rem;
  font-size: 1.5rem;
  font-weight: 150;
  width: 60%;
}

.education__title {
  margin-bottom: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #3233cc;
}

.container__school-name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.school__name {
  letter-spacing: 0.75px;
  margin-bottom: 5px;
  font-weight: 700;
}

.school__degree {
  font-family: "Inconsolata", monospace;
}

.subject__chip {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 5px;
  margin-right: 0.25rem;
}

.text__graduation {
  font-size: 1.25rem;
  font-family: "Inconsolata", monospace;
}

@media only screen and (max-width: 992px) {
  .education {
    padding: 1rem 1rem;
    width: 100%;
  }

  .education__title {
    font-size: 1.75rem;
  }

  .container__school-name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.5rem;
  }

  .school__name {
    font-size: 1.5rem;
  }
  .school__degree {
    font-size: 1.25rem;
  }

  .school__graduation-date {
    font-size: 0.65em;
    margin-top: 0.5rem;
    /* padding: 0.75rem; */
  }
}
</style>
