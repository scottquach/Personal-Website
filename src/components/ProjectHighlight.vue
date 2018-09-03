<template>
    <div class="project-highlights">
        <h3 class="project-highlights__title">Project Highlights</h3>
            <div class="project-highlights-list">
                <div class="project">
                    <div class="project__title">Personal Website V2</div>
                    <div class="project__description">That's the site your scrolling through now!</div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white" small>Vue.js</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>HTML</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>CSS</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>NPM</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Firebase Hosting</v-chip>
                    </div>
                </div>

                <div class="project">
                    <div class="project__title">NobisLink</div>
                    <div class="project__description">A social app designed to encourage friends to meet together in person more often.</div>
                    <div class="project__award">🏆 Major League Hackathon Most Creative Project</div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white" small>Java</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Kotlin</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Node.js</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Firebase Platform</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Android</v-chip>
                    </div>
                </div>

                <div class="project" >
                    <div class="project__title">PlannerBot</div>
                    <div class="project__description">Chatbot that helps students organize their homework using a texting interface as opposed to a traditional planner</div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white" small>Kotlin</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Node.js</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Dialogflow</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Firebase Platform</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Android</v-chip>
                    </div>
                </div>

                 <div class="project" >
                    <div class="project__title">Canvas Assignments Transfer to Todoist</div>
                    <div class="project__description">
                        Python script capable of transfering a students assignments into the popular Todoist applications. All assignments are properly tagged
                        based on class with due dates set. 
                    </div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white" small>Python</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Instructure API</v-chip>
                    </div>
                </div>

                 <div class="project" >
                    <div class="project__title">Personal Website V1</div>
                    <div class="project__description">Orignal personal website built using the foundational web languages</div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white" small>HTML</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>CSS</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>GitHub Pages</v-chip>
                    </div>
                </div>

                 <div class="project" >
                    <div class="project__title underline--animation">Proximity Push-Up Counter</div>
                    <div class="project__description">
                        With over 3,000 downloads, this app uses the phones proximity sensor in order to track the users push-ups. Statistics are presented and an assistant helps
                        to encourage a consistent pace.
                    </div>
                    <div class="project-skills">
                        <v-chip color="#3233CC" text-color="white" small>Java</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>SQLite</v-chip>
                        <v-chip color="#3233CC" text-color="white" small>Android</v-chip>
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
  margin-bottom: 10px;
}

.project__award {
  font-family: "Inconsolata", monospace;
}
</style>
