<template>
    <div class="education">
        <h3 class="education__title">Education</h3>
        <div class="school">
            <div class="school__name">University of Washington Bothell</div>
            <div class="school__degree">Bachelors of Science in Computer Science and Software Engineering</div>
            <v-chip class="school__graduation-date" color="#3233CC" text-color="white">Graduating 2020</v-chip>
            <!-- <div class="school__graduation-date">Graduating 2020</div> -->
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.education {
  padding: 100px 150px;
  font-size: 1.5rem;
  font-weight: 150;
}

.education__title {
  margin-bottom: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #3233cc;
}

.school {
}

.school__name {
  letter-spacing: 0.75px;
  margin-bottom: 5px;
  font-weight: 700;
}

.school__degree {
  font-family: "Inconsolata", monospace;
}

.school__graduation-date {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 5px;
}

@media screen and (max-width: 992px) {
    .education {
        padding: 100px 100px;
    }

  .education__title {
    font-size: 7rem;
  }
  .school__name {
    font-size: 3.25rem;
  }
  .school__degree {
    font-size: 3.25rem;
  }

  .school__graduation-date {
    font-size: 2.5rem;
    margin-top: 1rem;
    padding: 0.75rem;
  }
}
</style>
