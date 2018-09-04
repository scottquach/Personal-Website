<template>
    <div class="experience">
        <h3 class="experience__title">Experience</h3> 

        <div class="experience-jobs-list">
            <div class="job"> 
                <div class="job-company-time">
                    <div class="job__company">Novo Nordisk</div>
                    <div class="job__time">June - August 2018</div>
                </div>
                <div class="job__position">Device Connectivity Intern</div>
                <div class="job__skills-chip">
                    <v-chip class="skill" color="#3233CC" text-color="white">AWS IoT</v-chip>
                    <v-chip class="skill" color="#3233CC" text-color="white">DynamoDB</v-chip>
                    <v-chip class="skill" color="#3233CC" text-color="white">Sigfox Network</v-chip>
                    <v-chip class="skill" color="#3233CC" text-color="white">Cypress PSoC 4</v-chip>
                    <v-chip class="skill" color="#3233CC" text-color="white">Vue.js</v-chip>
                </div>
            </div>

            <div class="job"> 
                <div class="job-company-time">
                    <div class="job__company">Accolade</div>
                    <div class="job__time">June - August 2017</div>
                </div>
                <div class="job__position">Android Mobile Developer Intern</div>
                <div class="job__skills-chip"> 
                    <v-chip class="skill" color="#3233CC" text-color="white">Java</v-chip>
                    <v-chip class="skill" color="#3233CC" text-color="white">Android Studio</v-chip>
                    <v-chip class="skill" color="#3233CC" text-color="white">Wear OS</v-chip>
                    <v-chip class="skill" color="#3233CC" text-color="white">GitHub</v-chip>
                    <v-chip class="skill" color="#3233CC" text-color="white">JIRA</v-chip>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.experience {
  padding: 100px 150px;
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
  margin-bottom: 50px;
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

.job__description {
}

.job__skills-chip {
  display: flex;
  flex-wrap: wrap;
  width: 45%;
  margin-top: 5px;
}
@media only screen and (max-width: 992px) {
  .experience {
    padding: 3rem 2rem;
  }

  .experience__title {
    font-size: 2em;
  }

  .job {
    font-size: 1em;
  }

  .job-company-time {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .job__time {
    font-size: 1em;
  }

  .job__skills-chip {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    
  }
}
</style>
