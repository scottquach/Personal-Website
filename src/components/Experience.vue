<template>
  <div class="experience">
    <h3 class="experience__title">Experience</h3>

    <div class="experience-jobs-list">
      <div class="job">
        <div class="job-company-time">
          <div class="job__company">T-Mobile</div>
          <div class="job__time">October 2018 - Present</div>
        </div>
        <div class="job__position">Software Engineer Intern</div>
        <div class="job__skills-chip">
          <v-chip
            class="skill-chip"
            v-for="skill of tmobileSkills"
            :key="skill"
            color="#3233CC"
            text-color="#FFFFFF"
          >{{ skill }}</v-chip>
        </div>
      </div>

      <div class="job">
        <div class="job-company-time">
          <div class="job__company">Novo Nordisk</div>
          <div class="job__time">June - August 2018</div>
        </div>
        <div class="job__position">Device Connectivity Intern</div>
        <div class="job__skills-chip">
          <v-chip
            class="skill-chip"
            v-for="skill of accoladeSkills"
            :key="skill"
            color="#3233CC"
            text-color="#FFFFFF"
          >{{ skill }}</v-chip>
        </div>
      </div>
    </div>

    <div class="job">
      <div class="job-company-time">
        <div class="job__company">Accolade</div>
        <div class="job__time">June - August 2017</div>
      </div>
      <div class="job__position">Android Mobile Developer Intern</div>
      <div class="job__skills-chip">
        <v-chip
          class="skill-chip"
          v-for="skill of accoladeSkills"
          :key="skill"
          color="#3233CC"
          text-color="#FFFFFF"
        >{{ skill }}</v-chip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tmobileSkills: [
        "Angular 2+",
        "PostgreSQL",
        "AWS Lambda",
        "Kubernetes",
        "Node.js"
      ],
      novoNordiskSkills: [
        "AWS IoT",
        "DynamoDB",
        "Sigfox Network",
        "Cypress PSoC 4",
        "Vue.js"
      ],
      accoladeSkills: ["Java", "Android Studio", "Wear OS", "GitHub", "JIRA"]
    };
  }
};
</script>

<style>
.experience {
  padding: 7.5rem 7.5rem;
  font-size: 1.5rem;
  font-weight: 150;
}

.experience__title {
  margin-bottom: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #3233cc;
}

.experience-jobs-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.job {
  margin-bottom: 5rem;
  font-size: 1.5rem;
}

.job-company-time {
  width: 60%;
  display: flex;
  justify-content: space-between;
}

.job__company {
  letter-spacing: 0.75px;
  font-weight: 700;
}

.job__time {
  font-size: 1.25rem;
  font-family: "Inconsolata", monospace;
}

.job__position {
  font-weight: 100;
}

.skill-chip {
  margin-right: 0.25rem;
}

.job__skills-chip {
  display: flex;
  flex-wrap: wrap;
  width: 45%;
  margin-top: 5px;
}
@media only screen and (max-width: 992px) {
  .experience {
    padding: 1rem 1rem;
  }

  .experience__title {
    font-size: 1.75rem;
  }

  .job {
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  .job-company-time {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .job__company {
    letter-spacing: 0.75px;
    font-weight: 700;
  }

  .job__time {
    font-size: 1.25rem;
    font-family: "Inconsolata", monospace;
  }

  .job__position {
    font-weight: 100;
  }

  .job__skills-chip {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 5px;
  }

  .skill-chip {
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }
}
</style>
