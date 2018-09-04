<template>
    <div class="project-highlights">
        <h3 class="project-highlights__title">Project Highlights</h3>
            <div class="project-highlights-list">
                <div class="project">
                    <a href="https://github.com/scottquach/Personal-Website" target="_blank" class="project__title">Personal Website V2</a>
                    <div class="project__description">That's the site your scrolling through now!</div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white"  >Vue.js</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >HTML</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >CSS</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >NPM</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Firebase Hosting</v-chip>
                    </div>
                </div>

                <div class="project">
                    <a href="https://play.google.com/store/apps/details?id=com.nobislink.nobislink" target="_blank" class="project__title">NobisLink</a>
                    <div class="project__description">A social app designed to encourage friends to meet together in person more often.</div>
                    <div class="project__award">🏆 Major League Hackathon Most Creative Project</div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white"  >Java</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Kotlin</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Node.js</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Firebase Platform</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Android</v-chip>
                    </div>
                </div>

                <div class="project" >
                    <a href="https://play.google.com/store/apps/details?id=com.scottquach.homeworkchatbotassistant" target="_blank" class="project__title">PlannerBot</a>
                    <div class="project__description">Chatbot that helps students organize their homework using a texting interface as opposed to a traditional planner</div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white"  >Kotlin</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Node.js</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Dialogflow</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Firebase Platform</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Android</v-chip>
                    </div>
                </div>

                 <div class="project" >
                    <a href="https://github.com/scottquach/Canvas-Assignments-Transfer-For-Todoist" target="_blank" class="project__title">Canvas Assignments Transfer to Todoist</a>
                    <div class="project__description">
                        Python script capable of transfering a students assignments into the popular Todoist app. All assignments are properly tagged
                        based on class with due dates set. 
                    </div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white"  >Python</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Instructure API</v-chip>
                    </div>
                </div>

                 <div class="project" >
                    <a href="https://github.com/scottquach/scottquach.github.io" target="_blank" class="project__title">Personal Website V1</a>
                    <div class="project__description">Orignal personal website built using the foundational web languages</div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white"  >HTML</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >CSS</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >GitHub Pages</v-chip>
                    </div>
                </div>

                 <div class="project" >
                    <a href="https://play.google.com/store/apps/details?id=com.awesome.scottquach.proximitypush_upcounter" target="_blank" class="project__title">Proximity Push-Up Counter</a>
                    <div class="project__description">
                        With over 3,000 downloads, this app uses the phones proximity sensor in order to track the users push-ups. Statistics are presented and an assistant helps
                        to encourage a consistent pace.
                    </div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white"  >Java</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >SQLite</v-chip>
                        <v-chip color="#3233CC" text-color="white"  >Android</v-chip>
                    </div>
                </div>
            </div>

            <!-- <div class="project__title">Want to see more?</div>
            <a href="https://github.com/scottquach">GitHub</a>
            <a href="https://play.google.com/store/apps/dev?id=8413458930040454334">Google Play Developer Page</a> -->
    </div>    
</template>

<script>
export default {};
</script>

<style scoped>
.project-highlights {
  padding: 100px 150px;
  font-size: 1.5rem;
}

.project-highlights__title {
  margin-bottom: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #3233cc;
}

.project-highlights-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
}

.project {
  margin-bottom: 50px;
}

.project__title {
  letter-spacing: 0.75px;
  font-weight: 700;
  margin-bottom: 5px;
  text-decoration: none;
  color: #2c3e50;

  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
  padding-left: 0px;
}

.project__title::after {
  content: "";
  display: inline-block;
  background: url("../assets/arrow-point-to-right.png") no-repeat;
  width: 25px;
  height: 16px;
  margin-left: 5px;
}

.project__title:hover {
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
  padding-left: 15px;
}

.project__award {
  font-family: "Inconsolata", monospace;
}

.project-skills {
  margin-top: 5px;
}

@media only screen and (max-width: 992px) {
  .project-highlights {
    padding: 3rem 2rem;
  }

  .project-highlights__title {
    font-size: 2em;
  }

  .project-highlights-list {
    width: 100%;
    font-size: 1em;
  }

  .project__title::after {
    width: 15px;
    height: 15px;
    background-size: cover;
  }
}
</style>
